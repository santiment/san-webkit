function getSocketUrl() {
    const backendUrl = process.env.BACKEND_URL || 'https://api-stage.santiment.net';
    const socketUrl = new URL('/socket', backendUrl);
    socketUrl.protocol = socketUrl.protocol === 'https:' ? 'wss:' : 'ws:';
    return socketUrl.toString();
}
export class Socket {
    #socket;
    #channels = new Map();
    #joiningChannels = new Map();
    #subscriptionRefs = new Map();
    constructor(phoenixLib, params = {}) {
        this.#socket = new phoenixLib.Socket(getSocketUrl(), { params });
        this.#socket.connect();
    }
    async query(topic, event, payload) {
        const chan = await this.#join(topic);
        return {
            result: await this.#send(chan, event, payload),
            leave: () => this.#leave(chan),
        };
    }
    subscribe(topic, event, clb) {
        let isCancelled = false;
        let channel;
        let listenerRef;
        this.#join(topic)
            .then((chan) => {
            if (isCancelled)
                return;
            channel = chan;
            listenerRef = chan.on(event, clb);
            const topicRefs = this.#subscriptionRefs.get(topic) ?? new Set();
            topicRefs.add(listenerRef);
            this.#subscriptionRefs.set(topic, topicRefs);
        })
            .catch((err) => {
            if (isCancelled)
                return;
            console.error(`Failed to subscribe to topic ${topic}`, err);
        });
        return () => {
            isCancelled = true;
            const topicRefs = this.#subscriptionRefs.get(topic);
            if (channel && listenerRef !== undefined) {
                channel.off(event, listenerRef);
                topicRefs?.delete(listenerRef);
            }
            if (!topicRefs?.size) {
                this.#leave(topic);
            }
        };
    }
    disconnect() {
        this.#socket.disconnect();
        this.#channels.clear();
        this.#joiningChannels.clear();
        this.#subscriptionRefs.clear();
    }
    leave(topic) {
        this.#leave(topic);
    }
    #send(chan, event, payload) {
        return new Promise((resolve, reject) => {
            chan
                .push(event, payload)
                .receive('ok', (result) => resolve(result))
                .receive('error', (err) => reject(err))
                .receive('timeout', () => reject(`${event} timeout`));
        });
    }
    async #join(topic) {
        const savedChan = this.#channels.get(topic);
        if (savedChan)
            return savedChan;
        const pendingJoin = this.#joiningChannels.get(topic);
        if (pendingJoin)
            return pendingJoin;
        const channel = this.#socket.channel(topic);
        const joinPromise = new Promise((resolve, reject) => {
            channel
                .join()
                .receive('ok', () => {
                this.#joiningChannels.delete(topic);
                this.#channels.set(topic, channel);
                return resolve(channel);
            })
                .receive('error', (err) => {
                this.#joiningChannels.delete(topic);
                reject(err);
            })
                .receive('timeout', () => {
                this.#joiningChannels.delete(topic);
                reject(`${topic} timeout`);
            });
        });
        this.#joiningChannels.set(topic, joinPromise);
        return joinPromise;
    }
    #leave(chan) {
        const topic = typeof chan === 'string' ? chan : chan.topic;
        const savedChan = this.#channels.get(topic);
        if (savedChan) {
            this.#channels.delete(topic);
        }
        savedChan?.leave();
    }
}
