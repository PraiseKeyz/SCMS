---
name: Campus Core
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001a42'
  on-tertiary-container: '#3980f4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  status-label:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The design system is engineered for high-utility campus orchestration, balancing the authoritative requirements of administration with the frictionless needs of visitors. The brand personality is **Reliable**, **Secure**, and **Intelligent**. 

The design style follows **Corporate Modern** with a focus on **Tonal Layering**. It utilizes high-contrast typography and structured information density to ensure that critical data—such as gate status or security alerts—is immediately actionable. The aesthetic is clean and professional, prioritizing functional clarity over decorative elements, ensuring the interface remains unobtrusive during high-traffic operations.

## Colors
This design system employs a dual-intent color strategy. 

- **Primary (Deep Navy):** Used for structural navigation and the Admin/Staff dashboard environment to evoke a sense of security and backend authority.
- **Secondary (Vibrant Teal):** Reserved for visitor-facing interactions, wayfinding, and action-oriented navigation.
- **Functional Palette:** A strict traffic-light system is used for real-time status updates (Available, Limited, Full). 
- **Theming:** The default mode is light for high-readability public maps, while a "Deep Mode" (using the Admin BG token) is applied specifically to staff-monitored dashboards to reduce eye strain during long shifts.

## Typography
Inter was selected for its exceptional legibility in data-heavy environments and small-scale mobile mapping. 

The scale is systematic, using **Title-MD** for card headings and **Label-Caps** for metadata and category identifiers. For map labels, use **Body-SM** with a subtle text-shadow or halo to ensure legibility over varying map terrain. On mobile, headlines scale down to prevent layout breakage, while body text remains at 16px to maintain touch-target accessibility and readability.

## Layout & Spacing
The layout follows a **Fluid Grid** model for dashboards and a **Safe Margin** model for mobile map overlays. 

- **Desktop:** Uses a 12-column grid with 24px gutters. Sidebars are fixed at 280px, while the main content area expands.
- **Mobile:** Elements like "Quick Action" buttons and "Gate Info" sheets should have a minimum of 16px horizontal margin from the screen edge. 
- **Information Density:** Spacing between related items in a list uses 8px (XS), while distinct sections or cards use 24px (LG) to ensure clear visual separation.

## Elevation & Depth
Elevation is used functionally to indicate interactivity and hierarchy.

- **Level 0 (Surface):** The base background (White for Visitor, Navy for Admin).
- **Level 1 (Cards):** Subtle 1px border (#E2E8F0) with a soft ambient shadow (Y: 2px, B: 4px, Opacity: 5%) to lift content from the map.
- **Level 2 (Overlays/Modals):** More pronounced shadow (Y: 8px, B: 16px, Opacity: 10%) used for bottom sheets on mobile or dropdown menus.
- **Active State:** Elements like selected map pins use a "glow" effect using a low-opacity version of the Primary or Secondary color rather than a dark shadow.

## Shapes
The shape language uses **Rounded (12px - 16px)** corners to soften the professional aesthetic, making the system feel modern and approachable.

- **Standard Elements (Buttons, Inputs):** 12px (rounded-md).
- **Container Elements (Cards, Bottom Sheets):** 16px (rounded-lg).
- **Search Bars & Badges:** Use the "Pill" (full radius) style to differentiate search and status indicators from structural layout blocks.

## Components

### Buttons & Inputs
- **Primary Action:** Solid Deep Navy for Admin, Solid Teal for Visitor. 12px radius, 48px height for mobile accessibility.
- **Secondary Action:** Ghost style (border only) with 1px thickness.
- **Inputs:** High-contrast 1px border. Focus states must use a 2px Teal ring to ensure visibility for users with visual impairments.

### Status Badges
- **Real-time Indicators:** Use a combination of a colored dot and bold text (e.g., "● 85% Full"). 
- **Backgrounds:** Badges should use a 10% opacity tint of the status color (Green, Amber, Red) for the background to ensure the text remains legible.

### Maps & Markers
- **Pins:** Custom geometric shapes. Use a "Square with rounded top" for Gates, a "Circle" for landmarks, and a "Diamond" for Emergency/Hospital points.
- **Visitor vs. Staff:** Visitor markers are Teal; Staff markers are Deep Navy with a "Lock" or "Key" icon prefix.

### Cards
- **Management Cards:** Include a header area with a Title-MD and a right-aligned status badge. The body should use Body-SM for metadata like "Last Checked" or "Personnel on Site."
- **Interactive States:** Cards should have a subtle background shift (to #F1F5F9) on hover to indicate they are clickable.