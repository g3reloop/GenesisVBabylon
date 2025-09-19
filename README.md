# Genesis Parallel Civilisation: Genesis V Babylon

A complete civilizational ontology comparing Babylon's Corrupted Recursive Loops (CRLs) with Genesis' Stabilized Recursive Loops (SRLs). This is a Progressive Web App (PWA) built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Progressive Web App (PWA)** - Installable on mobile devices
- **RMW Discography** - Complete music player with real audio files
- **Visual Gallery** - Interactive image gallery with detailed descriptions
- **Civilizational Ontology** - Complete philosophical framework
- **Offline Support** - Works without internet connection
- **Mobile Optimized** - Responsive design for all devices
- **Supabase Integration** - Backend services and analytics

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **PWA**: Service Worker, Web App Manifest
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Deployment**: Netlify
- **Audio**: Real MP3 files with embedded cover art

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/genesis-v-babylon.git
cd genesis-v-babylon
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure Supabase:
   - Create a new Supabase project
   - Copy your project URL and anon key to `.env.local`
   - Set up the database schema (see Database Setup below)

5. Run the development server:
```bash
npm run dev
```

## Database Setup (Supabase)

Create the following tables in your Supabase project:

### Users Table
```sql
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Analytics Table
```sql
CREATE TABLE analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page TEXT NOT NULL,
  visits INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(page)
);
```

### Music Plays Table
```sql
CREATE TABLE music_plays (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  song_name TEXT NOT NULL,
  user_id UUID REFERENCES users(id),
  played_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Deployment

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Add environment variables in Netlify dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `out` directory to your hosting provider

## PWA Features

- **Installable**: Users can install the app on their devices
- **Offline Support**: Core functionality works without internet
- **Push Notifications**: Ready for future notification features
- **App Shortcuts**: Quick access to key sections
- **Responsive**: Optimized for all screen sizes

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   │   ├── music/         # Music player components
│   │   └── gallery/       # Gallery components
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── lib/                   # Utility functions
│   ├── songs-data.ts      # Music data
│   ├── image-registry.ts  # Image metadata
│   └── supabase.ts        # Supabase client
public/
├── audio/                 # Music files
├── icons/                 # PWA icons
├── images/                # Images and assets
├── manifest.json          # PWA manifest
└── sw.js                  # Service worker
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please open an issue on GitHub.

---

**Genesis Parallel Civilisation: Genesis V Babylon** - Building the future through recursive fractal mythic tech.