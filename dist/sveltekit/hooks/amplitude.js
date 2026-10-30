import {} from '@sveltejs/kit';
export const amplitudeTrackHandle = async ({ event, resolve }) => {
    if (event.url.pathname !== '/api/track') {
        return resolve(event);
    }
    return fetch(new Request('https://api2.amplitude.com/2/httpapi', event.request)).catch(() => new Response(null, { status: 204 }));
};
