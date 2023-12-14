const Cache = new Map();
export function querySignals(page = 0, pageSize = 5) {
    const key = `${page},${pageSize}`;
    const cached = Cache.get(key);
    if (cached) {
        return Promise.resolve(cached);
    }
    return window
        .fetch(
    // `https://sanr-l2-api.production.internal.santiment.net/api/v1/leaderboards/forecasts?filter=%22sanbaseInsight%22:%7B%22$ne%22:null%7D&sort=issuerAddress:ASC&groupBySort=true&take=${pageSize}&skip=${
    // page * pageSize
    // }`,
    `https://sanr-l2-api.production.internal.santiment.net/api/v1/leaderboards/forecasts?filter=%22sanbaseInsight%22:%7B%22$ne%22:null%7D&groupBy=issuerAddress&sort=performance:DESC&take=${pageSize}&skip=${page * pageSize}`)
        .then((res) => res.json())
        .then((data) => {
        Cache.set(key, data);
        return data;
    });
}
//# sourceMappingURL=api.js.map