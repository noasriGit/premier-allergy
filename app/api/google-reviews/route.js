import https from 'https';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const placeId = searchParams.get('placeId');
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;

    if (!placeId) {
      return new Response(JSON.stringify({ error: 'Missing placeId' }), { status: 400 });
    }
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Missing Google API key' }), { status: 500 });
    }

    const googleApiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&key=${apiKey}`;

    // ✅ Only use custom agent in development to bypass SSL verification errors
    const isDev = process.env.NODE_ENV === 'development';
    const agent = isDev ? new https.Agent({ rejectUnauthorized: false }) : undefined;

    const fetchOptions = agent ? { agent } : undefined;
    const response = await fetch(googleApiUrl, fetchOptions);

    if (!response.ok) {
      throw new Error(`Google API returned status ${response.status}`);
    }

    const data = await response.json();
    if (data.status !== 'OK') {
      throw new Error(`Google API error: ${data.status}`);
    }

    return new Response(
      JSON.stringify({
        rating: data.result.rating,
        user_ratings_total: data.result.user_ratings_total,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
