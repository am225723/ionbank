# IonBank Design System & Style Guide

## Overview

This comprehensive style guide defines the visual identity, components, and design principles for the IonBank website. It ensures consistency across all touchpoints and provides clear guidelines for future development and maintenance.

## Brand Identity

### Logo Usage
- **Primary Logo**: Use the full IonBank logo with both icon and text
- **Icon Only**: Use for small spaces or when brand recognition is established
- **Minimum Size**: 24px height for digital, 0.5 inches for print
- **Clear Space**: Maintain clear space equal to the height of the "I" in IonBank around the logo
- **Placement**: Prefer top-left positioning in headers, centered in hero sections

### Brand Colors

#### Primary Palette
```css
/* Primary Blue - Main brand color */
--ion-blue-600: #2563EB
/* Use for: Primary buttons, links, key UI elements */

/* Primary Green - Secondary brand color */
--ion-green-500: #10B981
/* Use for: Success states, accent elements, secondary CTAs */
```

#### Extended Blue Scale
```css
--ion-blue-50: #EFF6FF    /* Backgrounds, subtle highlights */
--ion-blue-100: #DBEAFE   /* Light backgrounds */
--ion-blue-200: #BFDBFE   /* Borders, dividers */
--ion-blue-300: #93C5FD   /* Disabled states */
--ion-blue-400: #60A5FA   /* Hover states */
--ion-blue-500: #3B82F6   /* Interactive elements */
--ion-blue-600: #2563EB   /* Primary brand color */
--ion-blue-700: #1D4ED8   /* Hover states for primary */
--ion-blue-800: #1E40AF   /* Active states */
--ion-blue-900: #1E3A8A   /* High contrast text */
```

#### Extended Green Scale
```css
--ion-green-50: #ECFDF5   /* Success backgrounds */
--ion-green-100: #D1FAE5  /* Light success states */
--ion-green-200: #A7F3D0  /* Success borders */
--ion-green-300: #6EE7B7  /* Success icons */
--ion-green-400: #34D399  /* Success interactive */
--ion-green-500: #10B981  /* Primary green */
--ion-green-600: #059669  /* Success buttons */
--ion-green-700: #047857  /* Success hover */
--ion-green-800: #065F46  /* Success active */
--ion-green-900: #064E3B  /* Success text */
```

#### Neutral Palette
```css
--ion-gray-50: #F9FAFB    /* Page backgrounds */
--ion-gray-100: #F3F4F6   /* Card backgrounds */
--ion-gray-200: #E5E7EB   /* Borders, dividers */
--ion-gray-300: #D1D5DB   /* Input borders */
--ion-gray-400: #9CA3AF   /* Placeholder text */
--ion-gray-500: #6B7280   /* Secondary text */
--ion-gray-600: #4B5563   /* Body text */
--ion-gray-700: #374151   /* Headings */
--ion-gray-800: #1F2937   /* Primary text */
--ion-gray-900: #111827   /* High contrast text */
```

#### Semantic Colors
```css
--ion-success: #059669    /* Success messages, confirmations */
--ion-warning: #F59E0B    /* Warnings, cautions */
--ion-error: #EF4444      /* Errors, destructive actions */
--ion-info: #2563EB       /* Information, neutral alerts */
```

### Color Usage Guidelines

#### Do's
- Use primary blue for main CTAs and key interactive elements
- Use green for success states and positive actions
- Maintain sufficient contrast ratios (4.5:1 minimum for normal text)
- Use neutral grays for text hierarchy and backgrounds
- Apply semantic colors consistently for their intended purposes

#### Don'ts
- Don't use brand colors for decorative purposes only
- Don't mix warm and cool grays in the same interface
- Don't use red and green together without additional indicators
- Don't use low contrast color combinations

## Typography

### Font Family
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

**Inter** is chosen for its:
- Excellent readability at all sizes
- Professional, modern appearance
- Comprehensive character set
- Optimized for digital screens

### Font Weights
```css
--font-weight-light: 300      /* Subtle text, large headings */
--font-weight-regular: 400    /* Body text, default */
--font-weight-medium: 500     /* Emphasis, labels */
--font-weight-semibold: 600   /* Subheadings, important text */
--font-weight-bold: 700       /* Headings, strong emphasis */
--font-weight-extrabold: 800  /* Hero titles, major headings */
```

### Typography Scale

#### Headings
```css
/* Hero Title */
.hero-title {
  font-size: 3.5rem;        /* 56px */
  font-weight: 800;
  line-height: 1.1;
}

/* Section Title */
.section-title {
  font-size: 2.5rem;        /* 40px */
  font-weight: 700;
  line-height: 1.2;
}

/* Subsection Title */
.subsection-title {
  font-size: 1.75rem;       /* 28px */
  font-weight: 700;
  line-height: 1.3;
}

/* Card Title */
.card-title {
  font-size: 1.25rem;       /* 20px */
  font-weight: 600;
  line-height: 1.4;
}
```

#### Body Text
```css
/* Large Body */
.text-large {
  font-size: 1.25rem;       /* 20px */
  font-weight: 400;
  line-height: 1.6;
}

/* Regular Body */
.text-body {
  font-size: 1rem;          /* 16px */
  font-weight: 400;
  line-height: 1.6;
}

/* Small Text */
.text-small {
  font-size: 0.875rem;      /* 14px */
  font-weight: 400;
  line-height: 1.5;
}

/* Caption */
.text-caption {
  font-size: 0.75rem;       /* 12px */
  font-weight: 400;
  line-height: 1.4;
}
```

### Typography Guidelines

#### Hierarchy
1. Use consistent heading levels (H1 → H2 → H3)
2. Maintain clear visual hierarchy through size and weight
3. Limit to 3-4 font sizes per page
4. Use color and spacing to enhance hierarchy

#### Readability
- Maintain 45-75 characters per line for optimal readability
- Use sufficient line spacing (1.4-1.6 line-height)
- Ensure adequate contrast ratios
- Left-align body text, center-align headings when appropriate

## Spacing System

### Base Unit: 4px
All spacing follows a 4px grid system for consistency and visual rhythm.

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Spacing Guidelines

#### Component Spacing
- **Buttons**: 12px vertical, 24px horizontal padding
- **Cards**: 32px internal padding
- **Sections**: 96px vertical spacing between major sections
- **Elements**: 16px default spacing between related elements

#### Layout Spacing
- **Container**: Max-width 1200px with 24px horizontal padding
- **Grid Gaps**: 32px between grid items
- **Margins**: Use consistent vertical rhythm

## Components

### Buttons

#### Primary Button
```css
.btn-primary {
  background: linear-gradient(135deg, #2563EB, #1D4ED8);
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 500;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 150ms ease;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #1D4ED8, #1E40AF);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: white;
  color: #374151;
  border: 1px solid #D1D5DB;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 500;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 150ms ease;
}

.btn-secondary:hover {
  background: #F9FAFB;
  border-color: #9CA3AF;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

#### Button Sizes
- **Large**: 16px vertical, 32px horizontal padding, 16px font-size
- **Regular**: 12px vertical, 24px horizontal padding, 14px font-size
- **Small**: 8px vertical, 16px horizontal padding, 12px font-size

### Cards

#### Feature Card
```css
.feature-card {
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 300ms ease;
}

.feature-card:hover {
  border-color: #BFDBFE;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}
```

### Forms

#### Input Fields
```css
.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  transition: border-color 150ms ease;
}

.form-input:focus {
  outline: none;
  border-color: #2563EB;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
```

#### Labels
```css
.form-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
}
```

## Layout Guidelines

### Grid System
- **Container**: Max-width 1200px, centered
- **Columns**: CSS Grid with auto-fit and minmax for responsiveness
- **Gaps**: 32px between grid items
- **Breakpoints**: 768px (mobile), 1024px (tablet), 1200px (desktop)

### Responsive Design

#### Mobile First Approach
1. Design for mobile screens first (320px+)
2. Progressively enhance for larger screens
3. Use relative units (rem, %, vw/vh) where appropriate
4. Ensure touch targets are minimum 44px

#### Breakpoints
```css
/* Mobile: 320px - 767px (default) */

/* Tablet: 768px - 1023px */
@media (min-width: 768px) { }

/* Desktop: 1024px+ */
@media (min-width: 1024px) { }

/* Large Desktop: 1200px+ */
@media (min-width: 1200px) { }
```

## Accessibility Guidelines

### Color Contrast
- **Normal Text**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **UI Elements**: Minimum 3:1 contrast ratio

### Focus States
- Provide visible focus indicators for all interactive elements
- Use consistent focus styling across components
- Ensure focus indicators have sufficient contrast

### Semantic HTML
- Use proper heading hierarchy (H1 → H2 → H3)
- Include alt text for all images
- Use semantic HTML elements (nav, main, section, article)
- Provide skip links for keyboard navigation

### ARIA Labels
- Add aria-labels for icon-only buttons
- Use aria-expanded for collapsible content
- Include role attributes where appropriate

## Animation Guidelines

### Principles
- **Purposeful**: Animations should serve a functional purpose
- **Subtle**: Avoid distracting or overwhelming animations
- **Fast**: Keep animations under 300ms for UI feedback
- **Respectful**: Respect prefers-reduced-motion settings

### Timing Functions
```css
--transition-fast: 150ms ease;      /* UI feedback */
--transition-normal: 300ms ease;    /* State changes */
--transition-slow: 500ms ease;      /* Page transitions */
```

### Common Animations
- **Hover Effects**: Subtle scale, shadow, or color changes
- **Loading States**: Skeleton screens or spinners
- **Page Transitions**: Fade or slide effects
- **Micro-interactions**: Button press feedback

## Performance Guidelines

### Optimization
- Minimize CSS file size through efficient selectors
- Use CSS custom properties for consistent theming
- Optimize images and use appropriate formats
- Implement lazy loading for non-critical content

### Loading Strategy
1. Critical CSS inline in HTML head
2. Non-critical CSS loaded asynchronously
3. Progressive enhancement for JavaScript features
4. Optimize font loading with font-display: swap

## Implementation Notes

### CSS Architecture
- Use CSS custom properties for theming
- Follow BEM methodology for class naming
- Organize CSS by components, not pages
- Use CSS Grid and Flexbox for layouts

### Browser Support
- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Progressive enhancement for older browsers
- Graceful degradation for unsupported features

### Maintenance
- Regular design system audits
- Component library updates
- Performance monitoring
- Accessibility testing

## File Structure
```
design-system/
├── brand-analysis.md
├── wireframes.md
├── style-guide.md
└── components/
    ├── buttons.css
    ├── cards.css
    ├── forms.css
    └── layout.css

redesigned-website/
├── index.html
├── styles.css
├── script.js
└── assets/
    └── images/
```

This style guide serves as the single source of truth for IonBank's design system and should be referenced for all design and development decisions.