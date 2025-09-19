# Deployment Instructions

## GitHub Repository Setup

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `genesis-v-babylon`
   - Description: "Genesis Parallel Civilisation: Genesis V Babylon - A complete civilizational ontology PWA"
   - Make it public
   - Don't initialize with README (we already have one)

2. **Push the code to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/genesis-v-babylon.git
   git branch -M main
   git push -u origin main
   ```

## Netlify Deployment

1. **Connect to Netlify:**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Connect your GitHub account
   - Select the `genesis-v-babylon` repository

2. **Configure Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: `18`

3. **Set Environment Variables:**
   - Go to Site settings > Environment variables
   - Add the following variables:
     - `NEXT_PUBLIC_SUPABASE_URL` = your-supabase-project-url
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your-supabase-anon-key

4. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your PWA

## Supabase Setup

1. **Create Supabase Project:**
   - Go to https://supabase.com
   - Create a new project
   - Note your project URL and anon key

2. **Set up Database Schema:**
   - Go to SQL Editor in Supabase dashboard
   - Run the following SQL commands:

   ```sql
   -- Users table
   CREATE TABLE users (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     email TEXT UNIQUE NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Analytics table
   CREATE TABLE analytics (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     page TEXT NOT NULL,
     visits INTEGER DEFAULT 1,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     UNIQUE(page)
   );

   -- Music plays table
   CREATE TABLE music_plays (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     song_name TEXT NOT NULL,
     user_id UUID REFERENCES users(id),
     played_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Enable Row Level Security
   ALTER TABLE users ENABLE ROW LEVEL SECURITY;
   ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;
   ALTER TABLE music_plays ENABLE ROW LEVEL SECURITY;

   -- Create policies for public access
   CREATE POLICY "Allow public read access to analytics" ON analytics FOR SELECT USING (true);
   CREATE POLICY "Allow public insert access to analytics" ON analytics FOR INSERT WITH CHECK (true);
   CREATE POLICY "Allow public update access to analytics" ON analytics FOR UPDATE USING (true);

   CREATE POLICY "Allow public read access to music_plays" ON music_plays FOR SELECT USING (true);
   CREATE POLICY "Allow public insert access to music_plays" ON music_plays FOR INSERT WITH CHECK (true);
   ```

3. **Update Environment Variables:**
   - Copy your Supabase URL and anon key
   - Add them to Netlify environment variables

## PWA Features

Once deployed, your PWA will have:

- **Installable**: Users can install the app on their devices
- **Offline Support**: Core functionality works without internet
- **Push Notifications**: Ready for future notification features
- **App Shortcuts**: Quick access to key sections
- **Responsive**: Optimized for all screen sizes

## Custom Domain (Optional)

1. **In Netlify:**
   - Go to Domain settings
   - Add your custom domain
   - Configure DNS settings as instructed

2. **Update PWA Manifest:**
   - Update the `start_url` in `public/manifest.json` to match your domain

## Monitoring and Analytics

- **Netlify Analytics**: Built-in analytics in Netlify dashboard
- **Supabase Analytics**: Custom analytics stored in your database
- **PWA Analytics**: Track installs and usage patterns

## Troubleshooting

### Build Issues
- Check Node.js version (should be 18+)
- Verify all environment variables are set
- Check build logs in Netlify dashboard

### PWA Issues
- Verify manifest.json is accessible
- Check service worker registration
- Test on different devices and browsers

### Audio Issues
- Ensure audio files are properly uploaded
- Check file paths and permissions
- Test audio playback on different devices

## Support

For issues or questions:
1. Check the GitHub issues page
2. Review Netlify build logs
3. Check Supabase logs
4. Test locally with `npm run dev`


