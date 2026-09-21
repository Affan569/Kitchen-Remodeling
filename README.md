# Kitchen Remodeling Landing Page

A production-quality landing page for a UK kitchen remodeling company based in Southampton, Hampshire. Built with React 18, Vite, Tailwind CSS, and React Router.

## Features

- **Fully Responsive**: Mobile-first design tested on 360px, 768px, 1024px, and 1440px breakpoints
- **Modern Design System**: Consistent typography, colors, and component styling
- **Interactive Components**:
  - Before/After comparison slider
  - Project gallery with lightbox
  - Video modal
  - Testimonials slider
  - FAQ accordion
  - Contact form with validation
- **SEO Optimized**: Meta tags, Open Graph, and structured data (LocalBusiness schema)
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation, and focus states
- **Performance**: Lazy-loaded images, optimized for Lighthouse 90+ score

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Router** - Client-side routing (structured for future pages)
- **Google Fonts** - Playfair Display (headings) and Inter (body)
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **GSAP** - Animation library
- **Lenis** - Smooth scroll library

## Project Structure

```
kitchen-remodeling/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── Section.jsx
│   │   │   └── Icon.jsx
│   │   ├── layout/          # Layout components
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   └── sections/        # Page sections
│   │       ├── Hero.jsx
│   │       ├── TrustBar.jsx
│   │       ├── Services.jsx
│   │       ├── BeforeAfter.jsx
│   │       ├── Projects.jsx
│   │       ├── Process.jsx
│   │       ├── Video.jsx
│   │       ├── WhyChooseUs.jsx
│   │       ├── Testimonials.jsx
│   │       ├── Finance.jsx
│   │       ├── FAQ.jsx
│   │       └── Contact.jsx
│   ├── data/                # Content data (easy to edit)
│   │   ├── site.js
│   │   ├── hero.js
│   │   ├── trustBar.js
│   │   ├── services.js
│   │   ├── beforeAfter.js
│   │   ├── projects.js
│   │   ├── process.js
│   │   ├── video.js
│   │   ├── whyChooseUs.js
│   │   ├── testimonials.js
│   │   ├── finance.js
│   │   ├── faq.js
│   │   └── contact.js
│   ├── assets/              # Static assets (images, videos)
│   ├── styles/              # Additional styles
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + Tailwind config
├── public/                  # Static files
├── index.html               # HTML template with SEO
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

Note: The project includes 3D animation packages (Three.js, React Three Fiber, GSAP, Lenis) which are installed with `--legacy-peer-deps` due to React 19 compatibility.

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## What to Replace

Before going live, update the following placeholder content:

### 1. Company Information (`src/data/site.js`)
- `company.name` - Your company name
- `company.phone` - Your phone number
- `company.email` - Your email address
- `company.address` - Your physical address
- `company.postcode` - Your postcode
- `company.yearsInBusiness` - Years in business
- `company.rating` - Your customer rating
- `company.projectsCompleted` - Number of projects completed
- `company.warranty` - Warranty information
- `navigation` - Update navigation links if needed
- `socialLinks` - Add your actual social media URLs
- `openingHours` - Your actual opening hours

### 2. Logo
- Currently using a placeholder "SK" logo in `Header.jsx` and `Footer.jsx`
- Replace with your actual logo SVG or image in both components

### 3. Images
All images are currently using Unsplash placeholders. Replace with your actual images:

**Hero Section** (`src/data/hero.js`):
- Trust badge icons (replace with actual badge images or SVGs)

**Services** (`src/data/services.js`):
- Service card images

**Before/After** (`src/data/beforeAfter.js`):
- Before and after comparison images

**Projects** (`src/data/projects.js`):
- Project gallery images

**Testimonials** (`src/data/testimonials.js`):
- Customer profile images

**Video** (`src/data/video.js`):
- Poster image for video thumbnail

### 4. Video URL (`src/data/video.js`)
- Replace `videoUrl` with your actual YouTube or Vimeo video embed URL
- Update `posterImage` with a thumbnail from your video

### 5. Google Map (`src/data/contact.js`)
- Replace `embedUrl` with your actual Google Maps embed URL
- Update `address` to match your location

### 6. SEO Metadata (`index.html`)
- Update `title` and `meta description` with your actual content
- Update Open Graph and Twitter card images
- Update structured data (LocalBusiness schema) with your actual business information
- Update `canonical` URL to your actual domain
- Update all URLs from `southamptonkitchens.co.uk` to your actual domain

### 7. Content Copy
All text content is in the `src/data/` files. Review and update:
- `hero.js` - Headline, subheadline, CTAs
- `services.js` - Service descriptions
- `process.js` - Process step descriptions
- `whyChooseUs.js` - Benefit descriptions
- `testimonials.js` - Customer reviews
- `faq.js` - FAQ questions and answers
- `finance.js` - Finance options text

### 8. 3D Scene (Phase 2)
- The Hero section has a placeholder `<HeroScene />` component
- This is reserved for Phase 2 implementation of an interactive 3D kitchen visualization
- Currently displays a placeholder with instructions

## 3D Scroll Experience

The landing page features a premium scroll-driven 3D animated kitchen scene in the Hero section.

### Features

- **Scroll-Scrubbed Animation**: The 3D scene is controlled by scroll position, not time-based
- **Smooth Scrolling**: Lenis provides buttery smooth scroll with inertia
- **Procedural Kitchen Scene**: Built with Three.js primitives (cabinets, island, pendant lights, decorative items)
- **Scroll Progress Indicator**: Visual progress bar at the top of the page
- **Loading Screen**: Animated loading with progress percentage
- **Fallbacks**: Graceful degradation for mobile, reduced motion preferences, and WebGL unsupported devices
- **Mouse Parallax**: Subtle parallax effect on desktop (mouse movement)
- **Stage Text Overlays**: "Design" → "Build" → "Finish" → "Enjoy" text synced to scroll progress

### Scroll Storyboard

The 3D animation plays through these stages as you scroll (pinned scene, ~1200px height):

1. **0-20%**: Empty room shell, camera slowly pushes in
2. **20-40%**: Base cabinets fly/assemble into place
3. **40-50%**: Wall cabinets appear
4. **50-65%**: Island + worktop slide in
5. **65-80%**: Pendant lights drop in, lighting warms up
6. **80-100%**: Camera orbits to final hero shot of finished kitchen

### Swapping in a Real GLB Model

To replace the procedural kitchen with a real 3D model:

1. **Prepare your GLB file**:
   - Export your kitchen model as GLB format
   - Compress with Draco/meshopt (keep under 5MB total)
   - Ensure proper scale (aim for ~10 units max dimension)
   - Include materials/textures in the GLB

2. **Add the model to your project**:
   - Place your `.glb` file in `src/assets/models/`
   - Update the import in `HeroScene.jsx`:

```jsx
import { useGLTF } from '@react-three/drei';

const KitchenModel = ({ progress }) => {
  const { scene } = useGLTF('/src/assets/models/your-kitchen.glb');
  
  // Animate model appearance based on progress
  const groupRef = useRef();
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.scale.setScalar(Math.min(1, progress * 1.5));
      groupRef.current.position.y = THREE.MathUtils.lerp(-2, 0, progress);
    }
  });
  
  return <primitive ref={groupRef} object={scene} />;
};
```

3. **Replace the procedural components**:
   - In `HeroScene.jsx`, replace the `<KitchenScene />` component with your `<KitchenModel />`
   - Remove or comment out the procedural components (Room, Cabinet, Island, etc.)

4. **Adjust lighting and environment**:
   - Update the `<Environment preset="apartment" />` to match your model
   - Adjust lighting intensity and positions in the Canvas

### Tweaking the Timeline

The scroll timeline is controlled in `HeroScene.jsx`:

**Scroll Container Height**:
```jsx
// Adjust this to change the scroll distance
style={{ height: isMobile ? "600px" : "1200px" }}
```

**Animation Stages**:
Each component has a `delay` prop that controls when it appears:
```jsx
// Example: Cabinets appear at 10-25% scroll progress
<Cabinet delay={0.1} />  // Starts at 10%
<Cabinet delay={0.15} /> // Starts at 15%
```

**Progress Ranges**:
Modify the progress thresholds in the `KitchenScene` component:
```jsx
// Camera movement stages
const cameraProgress = Math.min(1, progress / 0.8); // 0-80% for camera

// Component appearance
const localProgress = Math.max(0, Math.min(1, (progress - delay) / 0.2));
```

**Text Overlays**:
Adjust the text transition points:
```jsx
progress < 0.2        // "Design" (0-20%)
progress >= 0.2 && progress < 0.5  // "Build" (20-50%)
progress >= 0.5 && progress < 0.8  // "Finish" (50-80%)
progress >= 0.8       // "Enjoy" (80-100%)
```

### Performance Optimization

The 3D scene includes several performance optimizations:

- **DPR Capping**: `dpr={[1, 2]}` limits pixel ratio for performance
- **On-demand Rendering**: Only renders when visible
- **Geometry Disposal**: Cleanup handled by React Three Fiber
- **Mobile Optimization**: Reduced scene height and complexity on mobile
- **Lazy Loading**: Components load as needed

For custom models:
- Use Draco compression for GLB files
- Keep texture sizes reasonable (max 2048x2048)
- Use instanced rendering for repeated elements
- Consider LOD (Level of Detail) for complex models

### Accessibility Fallbacks

The 3D scene automatically falls back in these cases:

1. **WebGL Not Supported**: Shows static fallback image
2. **prefers-reduced-motion**: Disables 3D animation, shows static image
3. **Mobile Devices**: Uses reduced height and simplified effects

To customize the fallback:
```jsx
// In HeroScene.jsx, modify the fallback JSX
if (!webglSupported || prefersReducedMotion) {
  return (
    <div className="static-fallback">
      <img src="/your-fallback-image.jpg" alt="Kitchen design" />
    </div>
  );
}
```

### Troubleshooting

**3D scene not loading**:
- Check browser console for WebGL errors
- Verify Three.js and React Three Fiber versions
- Ensure no conflicts with other scripts

**Animation too fast/slow**:
- Adjust the scroll container height
- Modify the progress calculation in the scroll handler

**Performance issues**:
- Reduce DPR to `[1, 1.5]`
- Simplify the 3D model
- Disable post-processing effects
- Reduce the number of dynamic lights

**Mobile layout issues**:
- Adjust the `isMobile` breakpoint
- Modify mobile-specific height in the style prop
- Consider using a simpler scene for mobile

## Customization

### Design System

The design system is configured in `src/index.css`:

**Colors:**
- Primary: Deep navy (#1a2a3a)
- Secondary: Charcoal (#2c3e50)
- Accent: Gold (#c9a962)
- Backgrounds: White and warm beige (#f8f6f3)

**Fonts:**
- Headings: Playfair Display
- Body: Inter

**Type Scale:**
- H1: 3.5rem
- H2: 2.5rem
- H3: 1.75rem
- Body: 1rem
- Small: 0.875rem

To customize, edit the Tailwind theme variables in `src/index.css`.

## Adding New Pages

The project is structured for multi-page support with React Router:

1. Create a new page component in `src/pages/`
2. Add the route in `src/main.jsx` (after installing react-router-dom)
3. Update navigation links in `src/data/site.js`

## Performance

The site is optimized for performance:
- Lazy-loaded images with `loading="lazy"`
- Efficient component structure
- Tailwind CSS v4 for optimized CSS
- Vite for fast builds and HMR

## Accessibility

The site follows WCAG 2.1 AA guidelines:
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for all interactive elements
- Alt text for all images
- Color contrast meets WCAG standards

## License

This project is proprietary. All rights reserved.

## Support

For questions or issues, please contact the development team.
