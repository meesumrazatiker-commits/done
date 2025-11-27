# TikTok Clone PWA

A progressive web app that replicates the TikTok "For You" page with a 1:1 design match.

## Features

- **Exact TikTok UI**: Replicated design matching the original TikTok interface
- **Video Player**: Full-screen video playback with controls
- **Interactive Elements**: Like, comment, save, and share buttons
- **Random Content**: Dynamically generated usernames, descriptions, and engagement metrics
- **Local Media**: Videos and profile pictures loaded from local folders
- **PWA Ready**: Installable on mobile devices with offline support
- **Responsive Design**: Optimized for mobile and desktop viewing
- **Touch Gestures**: Swipe up/down for navigation, tap to play/pause

## Quick Start

1. **Add your media files**:
   - Place videos in the `videos/` folder (MP4 format)
   - Place profile pictures in the `profile pictures/` folder (JPG/PNG format)

2. **Deploy to a web server** (required for PWA functionality):
   ```bash
   # Using Python (built-in)
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

3. **Open in browser**:
   - Navigate to `http://localhost:8000`
   - On mobile: Open in browser and tap "Add to Home Screen"

## Media Setup

### Videos
Place your video files in the `videos/` folder:
```
videos/
├── placeholder.mp4
├── video1.mp4
├── video2.mp4
├── video3.mp4
└── video4.mp4
```

### Profile Pictures
Place profile images in the `profile pictures/` folder:
```
profile pictures/
├── placeholder.jpg
├── profile1.jpg
├── profile2.jpg
├── profile3.jpg
├── profile4.jpg
└── profile5.jpg
```

The app will randomly select from these files when switching videos or tabs.

## Mobile Installation

### iOS (iPhone/iPad)
1. Open Safari and go to your deployed URL
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add" to install

### Android
1. Open Chrome and go to your deployed URL
2. Tap the menu (three dots) and select "Add to Home Screen"
3. Tap "Add" to install

## File Structure

```
├── index.html          # Main HTML structure
├── style.css           # Styling for TikTok-like appearance
├── script.js           # JavaScript for interactions and random content
├── manifest.json       # PWA manifest for mobile installation
├── sw.js              # Service worker for offline support
├── icons/             # SVG icons (all white)
│   ├── bookmark.svg
│   ├── comment.svg
│   ├── heart.svg
│   ├── home.svg
│   ├── inbox.svg
│   ├── live.svg
│   ├── music.svg
│   ├── plus.svg
│   ├── profie.svg
│   ├── search.svg
│   ├── share.svg
│   └── tiktok-icon.svg
└── README.md          # This file
```

## Customization

### Adding Your Own Videos
Replace the video source in `index.html`:
```html
<video id="main-video" autoplay loop muted playsinline>
    <source src="your-video.mp4" type="video/mp4">
</video>
```

### Modifying Random Content
Edit the arrays in `script.js`:
- `randomUsernames`: Add your own usernames
- `randomDescriptions`: Add custom video descriptions
- `randomMusic`: Add music track names

### Changing Colors
Update the CSS variables in `style.css`:
- `#ff4458`: TikTok red/pink accent color
- `#000`: Black background
- `#fff`: White text
- `#aaa`: Gray secondary text

## Browser Support

- Chrome/Chromium (recommended)
- Safari (iOS support)
- Firefox
- Edge

## PWA Features

- ✅ Offline caching
- ✅ Installable on home screen
- ✅ Full-screen mode
- ✅ Safe area support for notched devices
- ✅ Responsive design

## Keyboard Shortcuts

- `Space`: Play/Pause video
- `Arrow Up`: Next video
- `Arrow Down`: Previous video

## Deployment Options

### Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Deploy automatically

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch

## Notes

- Video autoplay requires user interaction on some browsers
- PWA installation requires HTTPS (except localhost)
- Icons are automatically styled to white using CSS filters
- Profile pictures use random placeholder images from Picsum

Enjoy your TikTok clone! 🎵
