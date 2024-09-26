import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ redirect }) => {

    const html = `<!DOCTYPE html>
    <head>
    <meta http-equiv="refresh" content="0; url=https://pumpkinsforpigs.org/" />
    </head>
    <body>
      <h1>Pumpkins for Pigs</h1>
      <p>Redirecting to pumpkins for pigs website.</p>
      <p>I setup this redirect to understand the reach of the flyers.</p>
      <p>For concerns contact srachit@gmail.com</p>
    </body>`;

    return new Response(html, {
        headers: {
            "content-type": "text/html;charset=UTF-8",
        },
    });
}