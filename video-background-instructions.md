# Self-Hosted Video Background Implementation Guide

## Overview
This document explains how to download, optimize, and implement a self-hosted video background for the IMI Motorsports website hero section. Self-hosted videos offer better performance and control compared to embedded YouTube videos.

## Step 1: Download the YouTube Video

### Option A: Using YouTube Premium (If Available)
If you have YouTube Premium, you can download videos directly from YouTube for offline viewing, but note there are usage restrictions.

### Option B: Using a YouTube Downloader Tool
Several online tools and desktop applications can download YouTube videos. Here are a few reliable options:

1. **4K Video Downloader**: https://www.4kdownload.com/
   - Install the application
   - Copy the YouTube video URL (https://www.youtube.com/watch?v=EMRku0BYqvU)
   - Click "Paste Link" in the application
   - Select your preferred quality (1080p is recommended for web)
   - Choose MP4 format
   - Download the video

2. **ClipGrab**: https://clipgrab.org/
   - Install the application
   - Paste the URL
   - Select the format and quality
   - Download

3. **Online Services** (if desktop applications aren't an option):
   - SaveFrom.net
   - Y2Mate.com
   - Note: Online services may come and go, so their availability might change

## Step 2: Optimize the Video for Web

For optimal web performance, the video should be:

1. **Cropped to the right aspect ratio**: For hero backgrounds, 16:9 aspect ratio works well
2. **Compressed for web streaming**: Aim for a file size under 10MB if possible
3. **Short duration**: 10-30 seconds is ideal (can be looped)
4. **Converted to multiple formats** for browser compatibility:
   - MP4 (H.264) for most browsers
   - WebM for better quality at smaller file sizes

### Video Optimization Tools:

1. **HandBrake** (free, open-source): https://handbrake.fr/
   - Import your downloaded video
   - Select a web optimization preset
   - Adjust resolution to 1920x1080 or lower
   - Reduce the bit rate (try 2500-5000 kbps)
   - Export as MP4

2. **FFmpeg** (command line): If you're comfortable with command line tools
   ```
   # Convert to optimized MP4
   ffmpeg -i input.mp4 -vcodec h264 -acodec aac -strict -2 -vf scale=1920:-1 -b:v 2500k -b:a 128k output.mp4
   
   # Convert to WebM
   ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus output.webm
   ```

3. **Adobe Premiere Pro or After Effects**: If you have access to professional editing software

## Step 3: Preparing the Files

1. Create a video directory in your project:
   ```
   mkdir -p images/videos
   ```

2. Save your optimized videos to this directory:
   - `images/videos/hero-background.mp4` (primary format)
   - `images/videos/hero-background.webm` (alternative format)

3. Extract a poster image (first frame or representative frame) to display while the video loads:
   - Using FFmpeg: `ffmpeg -i hero-background.mp4 -ss 00:00:02 -frames:v 1 hero-background-poster.jpg`
   - Or use a screenshot from the video
   - Save as `images/videos/hero-background-poster.jpg`

## Step 4: Implementation

The HTML and CSS for implementing the video background has been added to your website. The key aspects include:

1. **HTML Structure**: A video element with multiple sources for browser compatibility
2. **CSS Styling**: Making the video cover the entire hero background
3. **Performance Attributes**: Preload, muted, autoplay, and loop for optimal user experience
4. **Fallbacks**: A poster image displayed while loading and for browsers that don't support video

## Additional Considerations

1. **Mobile Optimization**: 
   - Videos can consume significant bandwidth on mobile devices
   - Consider showing a static image on mobile instead of video
   - This can be achieved through CSS media queries

2. **Accessibility**:
   - Ensure the video doesn't contain crucial information not available elsewhere
   - The muted attribute helps ensure the video doesn't interfere with screen readers

3. **Performance**:
   - Monitor page load times after implementing the video background
   - Further optimize if the page load time exceeds 3 seconds

4. **Content**:
   - Loop seamlessly if possible (matching first and last frames)
   - Avoid sudden movements or flashes that might distract from content
   - Ensure good contrast between the video and overlaid text
