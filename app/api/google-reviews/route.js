import https from 'https';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const placeId = searchParams.get('placeId');
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;

    if (!placeId) {
      return new Response(JSON.stringify({ error: 'Missing placeId' }), { status: 400 });
    }

    // If no API key is provided, return mock data for development
    if (!apiKey) {
      console.warn('⚠️ GOOGLE_PLACES_API_KEY not found. Using mock data for development.');
      console.log('📝 To get real Google reviews, please:');
      console.log('1. Go to https://console.cloud.google.com/');
      console.log('2. Create a new project or select existing one');
      console.log('3. Enable the "Places API"');
      console.log('4. Create credentials (API Key)');
      console.log('5. Add GOOGLE_PLACES_API_KEY=your_api_key_here to your .env.local file');
      
      // Return mock data based on placeId
      const mockData = {
        'ChIJk_JrOhUstokRsZ_yFXoEOfk': { rating: 4.8, user_ratings_total: 127 },
        'ChIJ034G_AJdtokRKExjpkLlKC0': { rating: 4.9, user_ratings_total: 89 }
      };
      
      const mockRating = mockData[placeId] || { rating: 4.7, user_ratings_total: 50 };
      
      return new Response(
        JSON.stringify(mockRating),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
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
