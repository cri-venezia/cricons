
interface Env {
    CRICONS_BUCKET: R2Bucket;
}

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        const url = new URL(request.url);
        const key = url.pathname.slice(1);

        if (!key || key === '') {
            return new Response('Cricons CDN', { status: 200 });
        }

        // Try to get object from R2
        const object = await env.CRICONS_BUCKET.get(key);

        if (object === null) {
            return new Response('Object Not Found', { status: 404 });
        }

        const headers = new Headers();
        object.writeHttpMetadata(headers);
        headers.set('etag', object.httpEtag);

        // Cache for 1 year for immutable paths, maybe less for "latest"
        // For now, aggressive caching as outlined in architecture
        headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        headers.set('Access-Control-Allow-Origin', '*');

        return new Response(object.body, { headers });
    },
};
