# Google Places API Setup Guide

## Current Status
The Google Reviews feature is currently using mock data because the Google Places API key is not configured.

## To Enable Real Google Reviews:

### 1. Get a Google Places API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **"Places API"**:
   - Go to "APIs & Services" > "Library"
   - Search for "Places API"
   - Click on it and press "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the generated API key

### 2. Configure Environment Variables
1. Create a `.env.local` file in your project root
2. Add your API key:
   ```
   GOOGLE_PLACES_API_KEY=your_actual_api_key_here
   ```
3. Restart your development server

### 3. Security Best Practices
- **Restrict the API key** to only your domain
- **Set up billing alerts** to avoid unexpected charges
- **Use environment variables** (never commit API keys to git)

## Current Mock Data
The system is currently showing these mock ratings:
- **Germantown, MD**: 4.8 stars (127 reviews)
- **Manassas, VA**: 4.9 stars (89 reviews)

## Troubleshooting
- If you see 500 errors, check that your API key is correct
- If you see "Missing Google API key" errors, ensure your `.env.local` file exists
- The Places API has usage limits and may incur charges

## API Usage
The API is called when the EthosSection component loads and fetches ratings for both locations simultaneously.
