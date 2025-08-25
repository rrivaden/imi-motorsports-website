# Creating an Effective Video Poster Image

## What is a Poster Image?
The poster image appears while your video is loading and on devices where autoplay may not work. It's also used as a fallback for browsers that don't support HTML5 video.

## Guidelines for the Hero Background Poster

### 1. Image Selection
Choose a frame from the video that:
- Represents the essence of the video content
- Works well with overlaid text (your hero heading and CTA buttons)
- Has good contrast and isn't too busy in areas where text will appear
- Ideally captures motion or excitement from the motorsports activities

### 2. Technical Specifications
- **Resolution:** 1920×1080px (16:9 aspect ratio)
- **Format:** JPG (best for photographs) or PNG (if transparency needed)
- **File size:** Aim for under 200KB after optimization
- **Color profile:** sRGB

### 3. Extraction Methods

#### From Downloaded Video:
- **Using VLC Media Player:**
  1. Open the video in VLC
  2. Navigate to the desired frame
  3. Go to Video > Take Snapshot

- **Using FFmpeg (command line):**
  ```bash
  ffmpeg -i hero-background.mp4 -ss 00:00:05 -frames:v 1 hero-background-poster.jpg
  ```
  (This extracts a frame at 5 seconds into the video)

#### Alternative: Create from a Still Photo
If extracting from the video doesn't yield optimal results:
- Use a high-quality photo from the IMI Motorsports facility
- Edit to match the video's color grading and aesthetic
- Ensure it won't create a jarring transition when the video starts playing

### 4. Optimization for Web
After creating your poster image, optimize it:
- **Using Adobe Photoshop:** Export for web, medium-high quality JPG
- **Using GIMP:** Export as JPG with quality around 80-85%
- **Online tools:** Use TinyJPG (https://tinyjpg.com/) or similar services

### 5. Testing
Before finalizing:
- View the image with sample text overlaid to ensure readability
- Test how it looks on different screen sizes
- Verify it loads quickly (under 200ms ideally)

### 6. Placement
Save the final image as `hero-background-poster.jpg` in the `images/videos/` directory.
