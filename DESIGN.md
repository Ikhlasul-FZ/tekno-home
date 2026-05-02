---
name: Pristine Home Services
colors:
  surface: '#f8f9ff'
  surface-dim: '#d4dae7'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e8eefb'
  surface-container-high: '#e2e8f5'
  surface-container-highest: '#dce3ef'
  on-surface: '#151c25'
  on-surface-variant: '#3e484e'
  inverse-surface: '#2a313a'
  inverse-on-surface: '#eaf1fe'
  outline: '#6e797f'
  outline-variant: '#bdc8cf'
  surface-tint: '#006684'
  primary: '#006684'
  on-primary: '#ffffff'
  primary-container: '#3bafda'
  on-primary-container: '#003f52'
  inverse-primary: '#68d3ff'
  secondary: '#914c00'
  on-secondary: '#ffffff'
  secondary-container: '#ff8a00'
  on-secondary-container: '#613100'
  tertiary: '#5b5f61'
  on-tertiary: '#ffffff'
  tertiary-container: '#a0a3a6'
  on-tertiary-container: '#363a3c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bee9ff'
  primary-fixed-dim: '#68d3ff'
  on-primary-fixed: '#001f2a'
  on-primary-fixed-variant: '#004d64'
  secondary-fixed: '#ffdcc4'
  secondary-fixed-dim: '#ffb77f'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6f3900'
  tertiary-fixed: '#e0e3e6'
  tertiary-fixed-dim: '#c4c7ca'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#44474a'
  background: '#f8f9ff'
  on-background: '#151c25'
  surface-variant: '#dce3ef'
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-padding: 120px
---

## Brand & Style

The design system is engineered to evoke feelings of trust, professional precision, and domestic serenity. It targets homeowners seeking high-end, reliable home maintenance and renovation services. The aesthetic is rooted in **Minimalism** and **Glassmorphism**, creating an interface that feels as clean and refreshed as the homes the business services.

Key visual pillars include:
- **Clarity:** Generous whitespace to reduce cognitive load and emphasize premium service quality.
- **Transparency:** Extensive use of frosted glass surfaces to signify honesty and openness.
- **Luminosity:** Subtle glows and light-filled imagery that mirror a well-lit, clean kitchen or bathroom.
- **Professionalism:** High-fidelity photography of technicians in crisp uniforms, integrated seamlessly into the UI.

## Colors

The palette is balanced between professional reliability and warm hospitality. 
- **Primary Soft Blue (#3BAFDA):** Used for primary actions, branding, and trust-building elements. It represents water, cleanliness, and calm.
- **Secondary Warm Orange (#FF8A00):** Reserved for high-impact call-to-actions, notifications, and "human" elements like technician highlights. It provides a warm, energetic contrast.
- **Background & Gradients:** The base is pure White, enhanced with extremely subtle radial gradients of Soft Blue and Warm Orange at low opacities (2-5%) to prevent the layout from feeling "flat."
- **Accent Gray:** Used for subtle borders and secondary text to maintain a soft, high-end feel.

## Typography

This design system utilizes **Inter** for its exceptional legibility and modern, neutral character. 
- **Hierarchy:** Dramatic scale differences between headlines and body text create an editorial feel.
- **Weight:** Headlines use Semi-Bold and Bold weights to anchor the page, while body text stays at Regular weight for maximum breathability.
- **Utility:** Small labels use all-caps with increased letter spacing to provide a technical, "blueprint" aesthetic to service details.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to maintain a premium, controlled presentation, transitioning to a fluid model for mobile devices.
- **Grid:** A 12-column grid with 24px gutters. 
- **Whitespace:** Emphasized through large vertical gaps (Section Padding) to allow imagery and glassmorphic cards to stand out without visual clutter.
- **Rhythm:** All spacing components are multiples of 8px, ensuring a consistent mathematical harmony across the interface.

## Elevation & Depth

Depth in the design system is achieved through light and transparency rather than heavy shadows.
- **Glassmorphism:** Cards and modals utilize a `backdrop-filter: blur(20px)` with a `rgba(255, 255, 255, 0.7)` background. 
- **Glass Stroke:** Every glass element features a 1px inner border (top and left side) in high-opacity white to simulate the edge of a glass pane catching light.
- **Subtle Glows:** Primary action areas are supported by soft, colored outer glows (Shadow color matching the Primary Blue at 15% opacity) to suggest a source of light behind the UI.
- **Shadows:** Only used for floating elements like modals or dropdowns—long, diffused "ambient" shadows with a 40px blur and very low (5%) opacity.

## Shapes

The shape language is exceptionally soft to communicate approachability and safety within the home.
- **Radius:** A standard "2xl" (1.5rem / 24px) corner radius is applied to all primary cards, containers, and imagery.
- **Buttons:** Fully rounded (pill-shaped) or high-radius (16px) depending on the context, ensuring no "sharp" edges exist within the experience.
- **Icons:** Use a consistent 2pt stroke weight with rounded terminals and corners to match the UI container shapes.

## Components

### Buttons
- **Primary:** Gradient fill (#3BAFDA to a slightly darker shade), white text, soft blue glow on hover.
- **Secondary:** Glassmorphic background with a Soft Blue 1.5px border and Blue text.
- **CTA:** For "Book Now" actions, use the Secondary Warm Orange to break the cool palette and drive conversions.

### Cards
- Service cards feature ultra-realistic photography as the background, overlaid with a glassmorphic bottom-third panel containing the service title and price.
- Cards should have a subtle 1px border in #E6E9ED to define boundaries against white backgrounds.

### Inputs & Fields
- Input fields use a light gray background (#F5F7FA) that turns white with a primary blue border on focus. 
- All fields utilize the 2xl roundedness (16px+).

### Technician Profiles
- Circular or heavily rounded image containers.
- Status indicators (e.g., "Available Now") use the Warm Orange in a soft pulse animation to indicate real-time readiness.

### Imagery
- Visuals must be high-resolution, featuring natural lighting and "immaculate" environments. Technicians should be shown in mid-action, highlighting expertise and cleanliness (e.g., using shoe covers, organized toolkits).