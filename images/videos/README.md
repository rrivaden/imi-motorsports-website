# Video Background Implementation Guide

## Video Files Required
Place the following files in this directory after downloading and processing:

1. **hero-background.mp4** - Primary video format for most browsers
2. **hero-background.webm** - Secondary format for better compression
3. **hero-background-poster.jpg** - Still image to show while video loads

## Download and Processing Steps

### Step 1: Download the YouTube Video
Use one of these tools to download the video (https://www.youtube.com/watch?v=EMRku0BYqvU):

- **4K Video Downloader**: https://www.4kdownload.com/
- **ClipGrab**: https://clipgrab.org/
- Or any reliable YouTube downloader

Download at 1080p resolution for good quality.

### Step 2: Edit the Video
For best results:

1. **Trim the video** to 10-30 seconds (short enough to load quickly, long enough to be engaging)
2. **Remove audio** if present (the video will be muted on the website anyway)
3. **Optimize brightness/contrast** to ensure text overlaid on the video remains readable
4. **Ensure smooth looping** by matching start and end frames if possible

### Step 3: Convert to Web Formats
Use a tool like HandBrake (https://handbrake.fr/) to optimize:

1. **MP4 format**:
   - Resolution: 1920×1080 (or width of 1920px with proportional height)
   - Video Codec: H.264
   - Bitrate: 2500-5000 kbps (aim for file under 10MB if possible)
   - Remove audio track

2. **WebM format**:
   - Same resolution as MP4
   - VP9 codec for best compression
   - Target similar file size as MP4 or smaller

3. **Poster image**:
   - Extract a representative frame from the video
   - Save as JPG at 1920×1080
   - Optimize for web to keep file size under 200KB

### Step 4: Test the Implementation
After placing all files in this directory:

1. Open index.html in your browser
2. Verify video plays automatically
3. Check that it loops seamlessly
4. Test on mobile devices to ensure fallback image displays properly

## Notes on Performance
- If the total video size exceeds 10MB, consider further compression
- For extremely large videos, create a shorter teaser version
- Monitor page load performance after implementation

## Reference
The HTML for the video is already implemented in index.html as:
```html
<video class="hero-video" autoplay muted loop playsinline poster="images/videos/hero-background-poster.jpg">
    <source src="images/videos/hero-background.webm" type="video/webm">
    <source src="images/videos/hero-background.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
