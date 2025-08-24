# IMI Motorsports Website

A modern, responsive website for IMI Motorsports, inspired by Atlanta Motorsports Park's design and tailored to showcase IMI's unique offerings.

## Website Structure

### Pages
- `index.html` - Homepage with hero section, track showcase, and company mission
- `about.html` - Company history, team members, and facility information
- `tracks.html` - Detailed information about each track and pricing
- `events.html` - Upcoming events, race series, and group events
- `blog.html` - News, racing tips, and motorsports articles
- `contact.html` - Contact form, map, and business information

### Assets
- `css/` - Contains stylesheet files
  - `style.css` - Main stylesheet with modern design elements
- `js/` - Contains JavaScript files
  - `main.js` - Core functionality for animations and interactivity
- `images/` - Directory for website images
  - `image-placeholders.md` - Guidance on required image sizes and types
  - `logo-guidance.md` - Specifications for logo implementation

## Features Implemented

### Design
- Modern, responsive layout that works on all device sizes
- Dynamic, animated elements for engaging user experience
- Professional color scheme with racing-inspired accents
- Clean typography using Montserrat font family
- Consistent visual hierarchy and spacing

### Technical Features
- CSS custom properties (variables) for easy theme customization
- Responsive navigation with mobile menu support
- Smooth scroll behavior and scroll-triggered animations
- Interactive elements with hover effects
- SEO-friendly markup with proper meta tags

### Sections
- Hero section with video background and call-to-action buttons
- Track showcase with interactive grid layout
- Feature highlights with iconography
- Mission statement with styled quote
- Call-to-action sections for conversion
- Comprehensive footer with business information and social links

## Still Needed

### Content
- **Real Images**: Replace all placeholder images with actual photos of the facility, tracks, and events
- **Hero Video**: Add a high-quality video of the motorsports facility for the hero background
- **Track Details**: Add specific information about each track, including technical specifications
- **Team Information**: Add staff photos and bios for the About page
- **Event Calendar**: Add actual upcoming events with dates and registration information

### Technical Items
- **Favicon**: Create and add a favicon based on the IMI logo
- **Form Functionality**: Implement server-side processing for contact forms
- **Analytics**: Add Google Analytics or other tracking code
- **Real Social Media Links**: Update footer with actual social media profile URLs
- **Map Integration**: Add Google Maps or other map service to the contact page

## Customization Guide

### Colors
The website uses a customizable color scheme defined in CSS variables:
```css
:root {
    --primary: #e81c2e;       /* Red accent color */
    --secondary: #1d3557;     /* Dark blue */
    --accent: #fdc500;        /* Yellow accent */
    /* Additional colors in style.css */
}
```

### Adding New Pages
1. Copy the structure from an existing page
2. Update the meta tags, title, and content
3. Ensure consistent header and footer across all pages

### Image Optimization
- Compress all images before uploading
- Use WebP format when possible with JPG fallbacks
- Follow the size guidelines in `image-placeholders.md`

## Browser Compatibility

Tested and compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Credits

- Fonts: Google Fonts (Montserrat)
- Icons: Font Awesome
- Inspiration: Atlanta Motorsports Park website

## License

All rights reserved. This website template is created exclusively for IMI Motorsports.
