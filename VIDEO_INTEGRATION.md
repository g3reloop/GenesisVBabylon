# Background Video Integration System

## Overview
This system provides a comprehensive solution for integrating looping background videos into the Genesis v Babylon website with proper styling, performance optimization, and error handling.

## Folder Structure
```
public/videos/
├── backgrounds/          # Organized background videos
├── fallbacks/           # Fallback video files
├── AIinGenesis.mp4
├── civilisational history.mp4
├── civilisational ontology.mp4
├── Collapseprotocol.mp4
├── esoteric systems.mp4
├── fractalgrowth.mp4
├── gallery.mp4
├── GenesisSRLProtocol.mp4
├── homepage.mp4
├── memetic.mp4
├── operatorplatform.mp4
├── RMWDiscography.mp4
├── surgical analysis.mp4
└── whygenesiswins.mp4
```

## Components

### 1. BackgroundVideo Component
**Location:** `src/app/components/BackgroundVideo.tsx`

A reusable React component that handles:
- Video playback with autoplay, loop, and mute
- Fallback image display when video fails
- Performance optimization with lazy loading
- Error handling and graceful degradation
- Dark mode support
- Mobile optimization

**Props:**
- `videoSrc`: Path to the video file
- `fallbackImage`: Path to fallback image
- `sectionId`: Unique identifier for the section
- `className`: Additional CSS classes
- `priority`: Whether to preload the video

### 2. PageWithBackground Component
**Location:** `src/app/components/PageWithBackground.tsx`

A higher-order component that wraps page content with background video:
- Automatically loads the correct video for each section
- Provides consistent styling and layout
- Handles video configuration lookup

**Props:**
- `children`: Page content to wrap
- `sectionId`: Section identifier for video lookup
- `className`: Additional CSS classes

### 3. Video Configuration
**Location:** `src/lib/video-config.ts`

Centralized configuration for all background videos:
- Maps section IDs to video files
- Defines fallback images
- Sets priority levels for performance
- Provides helper functions for video lookup

### 4. Background Video Hook
**Location:** `src/hooks/useBackgroundVideo.ts`

Custom React hook for advanced video management:
- Lazy loading based on scroll position
- Performance optimization
- Video readiness detection
- Error state management

## Styling

### CSS Classes
The system includes comprehensive CSS styling in `src/app/globals.css`:

- `.video-container`: Main container for video backgrounds
- `.video-loading`: Loading state styling
- `.video-error`: Error state styling
- `.video-overlay`: Overlay for better text contrast
- `.glass-card`: Glass morphism effects
- `.text-over-video`: Text shadows for readability

### Dark Mode Support
- Automatic dark mode detection
- Adjusted video filters for better contrast
- Responsive design for mobile devices

### Performance Optimizations
- Hardware acceleration with `transform: translateZ(0)`
- Backface visibility optimization
- Reduced motion support
- High DPI display optimizations

## Usage

### Basic Implementation
```tsx
import PageWithBackground from '../components/PageWithBackground';

export default function MyPage() {
  return (
    <PageWithBackground sectionId="my-section">
      {/* Your page content */}
    </PageWithBackground>
  );
}
```

### Advanced Implementation
```tsx
import BackgroundVideo from '../components/BackgroundVideo';
import { useBackgroundVideo } from '../hooks/useBackgroundVideo';

export default function MyPage() {
  const { videoConfig, isVideoReady, shouldLoadVideo } = useBackgroundVideo({
    sectionId: 'my-section',
    enableLazyLoading: true,
    preloadDistance: 1000
  });

  return (
    <div className="min-h-screen relative">
      {videoConfig && shouldLoadVideo && (
        <BackgroundVideo
          videoSrc={videoConfig.videoSrc}
          fallbackImage={videoConfig.fallbackImage}
          sectionId="my-section"
          priority={videoConfig.priority}
        />
      )}
      {/* Your content */}
    </div>
  );
}
```

## Video File Requirements

### Format
- **Container:** MP4
- **Codec:** H.264
- **Resolution:** 1920x1080 (Full HD)
- **Frame Rate:** 24-30 fps
- **Duration:** 10-30 seconds (for seamless looping)

### Optimization
- Compress videos for web delivery
- Use appropriate bitrates (2-5 Mbps for 1080p)
- Consider creating multiple resolutions for responsive design

### Naming Convention
- Use descriptive names that match section IDs
- Avoid spaces and special characters
- Use lowercase with hyphens for consistency

## Performance Considerations

### Lazy Loading
- Videos load only when sections come into view
- Configurable preload distance
- Priority loading for above-the-fold content

### Error Handling
- Graceful fallback to static images
- Console logging for debugging
- User-friendly error states

### Mobile Optimization
- Reduced video quality on mobile devices
- Touch-friendly controls
- Battery usage optimization

## Browser Support

### Supported Browsers
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

### Fallback Strategy
- Static images for unsupported browsers
- Progressive enhancement approach
- Graceful degradation

## Accessibility

### Features
- Reduced motion support
- High contrast mode compatibility
- Keyboard navigation support
- Screen reader friendly

### Best Practices
- Provide alternative content for video
- Use descriptive alt text for fallback images
- Ensure sufficient color contrast

## Troubleshooting

### Common Issues
1. **Video not playing:** Check browser autoplay policies
2. **Poor performance:** Verify video compression and optimization
3. **Layout issues:** Ensure proper z-index stacking
4. **Mobile problems:** Test on actual devices, not just browser dev tools

### Debug Mode
Enable debug logging by setting `NODE_ENV=development` to see detailed console output about video loading and errors.

## Future Enhancements

### Planned Features
- WebP video support for better compression
- Adaptive bitrate streaming
- Video analytics and performance monitoring
- A/B testing for different video styles
- Dynamic video selection based on user preferences

### Performance Improvements
- Service worker caching for videos
- Intersection Observer API for better lazy loading
- WebAssembly video processing
- CDN integration for global delivery

## Maintenance

### Regular Tasks
- Monitor video file sizes and performance
- Update fallback images as needed
- Test across different browsers and devices
- Optimize videos for new content

### Monitoring
- Track video load times
- Monitor error rates
- Analyze user engagement with video content
- Performance metrics collection

## Contributing

When adding new videos or sections:
1. Add video configuration to `video-config.ts`
2. Place video files in appropriate directories
3. Create fallback images
4. Test across different devices and browsers
5. Update documentation as needed

## License

This video integration system is part of the Genesis v Babylon project and follows the same licensing terms.
