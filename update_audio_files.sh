#!/bin/bash

# Update audio files for each song
sed -i 's|audioFile: "/audio/G3 Saturn Step - EM - SoundLoadMate.com.mp3"|audioFile: "/audio/G3PP - EM - SoundLoadMate.com.mp3"|' src/lib/songs-data.ts
sed -i 's|audioFile: "/audio/G3PP - EM - SoundLoadMate.com.mp3"|audioFile: "/audio/Protocol_ LoopTheLoop - EM - SoundLoadMate.com.mp3"|' src/lib/songs-data.ts
sed -i 's|audioFile: "/audio/Protocol_ LoopTheLoop - EM - SoundLoadMate.com.mp3"|audioFile: "/audio/Protocol_ HXH - EM - SoundLoadMate.com.mp3"|' src/lib/songs-data.ts
sed -i 's|audioFile: "/audio/Protocol_ HXH - EM - SoundLoadMate.com.mp3"|audioFile: "/audio/Cry'\''s & Crosses - EM - SoundLoadMate.com.mp3"|' src/lib/songs-data.ts
sed -i 's|audioFile: "/audio/Cry'\''s & Crosses - EM - SoundLoadMate.com.mp3"|audioFile: "/audio/Protocol_ LoopMind_小恐怖 - EM - SoundLoadMate.com.mp3"|' src/lib/songs-data.ts
sed -i 's|audioFile: "/audio/Protocol_ LoopMind_小恐怖 - EM - SoundLoadMate.com.mp3"|audioFile: "/audio/Memetic Archive_ Aimless Routes Meet G3 Bout - EM - SoundLoadMate.com.mp3"|' src/lib/songs-data.ts
sed -i 's|audioFile: "/audio/Memetic Archive_ Aimless Routes Meet G3 Bout - EM - SoundLoadMate.com.mp3"|audioFile: "/audio/The Beacon - EM - SoundLoadMate.com.mp3"|' src/lib/songs-data.ts
sed -i 's|audioFile: "/audio/The Beacon - EM - SoundLoadMate.com.mp3"|audioFile: "/audio/Reloop Red Leash - EM - SoundLoadMate.com.mp3"|' src/lib/songs-data.ts
sed -i 's|audioFile: "/audio/Reloop Red Leash - EM - SoundLoadMate.com.mp3"|audioFile: "/audio/Unclenching The White Grasp - EM - SoundLoadMate.com.mp3"|' src/lib/songs-data.ts

# Set the first song back to PCG3
sed -i '0,/audioFile: "/audio\/Unclenching The White Grasp - EM - SoundLoadMate.com.mp3"/s//audioFile: "\/audio\/PCG3 - EM - SoundLoadMate.com.mp3"/' src/lib/songs-data.ts

echo "Audio files updated successfully!"


