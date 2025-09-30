# BioPets E-Commerce Design Guidelines

## Design Approach
**Reference-Based E-Commerce Pattern** - Drawing inspiration from Chewy, Petco, and modern e-commerce leaders (Shopify, Etsy) with pet-friendly warmth. The design prioritizes emotional connection with pet owners while maintaining professional e-commerce functionality.

## Core Design Principles
1. **Emotional Connection**: Warm, approachable design that celebrates the pet-owner bond
2. **Trust & Credibility**: Professional presentation that builds confidence in product quality
3. **Seamless Shopping**: Intuitive product discovery and frictionless checkout experience
4. **Visual Storytelling**: Pet imagery and owner testimonials drive engagement

---

## Color Palette

### Primary Colors
- **Brand Green** (from BioPets logo): 140 65% 45% - Used for primary CTAs, active states, logo
- **Deep Teal**: 180 60% 35% - Secondary brand color for headers, important UI elements
- **Warm Background**: 40 20% 98% - Main background, creates soft, welcoming feel

### Accent & Semantic
- **Coral Accent**: 15 75% 60% - Sale tags, urgency indicators (use sparingly)
- **Success Green**: 145 70% 50% - Confirmation messages, in-stock indicators
- **Soft Gray**: 220 10% 60% - Borders, dividers, secondary text
- **Deep Charcoal**: 220 15% 20% - Primary text, headings

### Cart & Checkout
- **Cart Badge**: 0 75% 55% - Shopping cart item count
- **Price Highlight**: 140 65% 45% - Matches brand green for consistency

---

## Typography

### Font Families
- **Headings**: 'Outfit' or 'Nunito' (Google Fonts) - Friendly, modern, slightly rounded
- **Body**: 'Inter' (Google Fonts) - Excellent readability for product details
- **Accent**: 'Caveat' for handwritten testimonial signatures (Google Fonts)

### Hierarchy
- **Hero Headline**: text-5xl to text-7xl, font-bold, tracking-tight
- **Section Headers**: text-3xl to text-4xl, font-semibold
- **Product Titles**: text-xl, font-semibold
- **Body Text**: text-base, leading-relaxed
- **Prices**: text-2xl, font-bold (product pages), text-lg (cards)
- **Captions**: text-sm, text-gray-600

---

## Layout System

### Spacing Primitives
Use Tailwind units: **4, 6, 8, 12, 16, 20, 24** for consistent rhythm
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24
- Grid gaps: gap-6 to gap-8
- Container max-width: max-w-7xl

### Grid Structure
- **Product Grid**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- **Featured Products**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- **Testimonials**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

---

## Component Library

### Navigation
- Sticky header with BioPets logo (left), category navigation (center), cart icon with badge (right)
- Mobile: Hamburger menu, cart icon always visible
- Search bar integrated into header on desktop
- Category mega-menu on hover with product thumbnails

### Product Cards
- High-quality product image (16:9 ratio)
- Product name, short description (2 lines max)
- Prominent price display
- "Add to Cart" button (full-width on card)
- Quick view icon overlay on image hover
- Stock status badge (top-right corner)

### Shopping Cart
- Slide-in drawer from right (desktop) or full page (mobile)
- Product thumbnail, name, quantity selector, remove option
- Running subtotal at top
- Prominent "Checkout" CTA button
- "Continue Shopping" secondary action
- Empty cart state with pet illustration

### Forms & Checkout
- Single-column checkout flow with progress indicator
- Grouped form fields (Contact, Shipping, Payment)
- Paymongo payment options displayed as large, icon-based buttons
- Order summary sticky sidebar (desktop) or collapsible section (mobile)
- Input fields: rounded-lg, border-2, focus:border-brand-green

### Testimonials
- Card layout with rounded image of owner + pet (1:1 ratio, circular crop)
- Quote text in readable size (text-lg)
- Star rating display (5-star system)
- Owner name and pet name below
- 2-3 columns on desktop, 1 column on mobile

### Call-to-Action Buttons
- Primary: bg-brand-green, text-white, rounded-full, px-8 py-3, hover:scale-105
- Secondary: border-2 border-brand-green, text-brand-green, rounded-full
- Outline on images: backdrop-blur-md bg-white/20 border-2 border-white

---

## Images

### Hero Section
**Large Hero Image**: Full-width hero (h-screen or min-h-[600px]) featuring a happy pet owner with their healthy pet in a bright, natural setting. Image should convey joy, health, and the bond between pet and owner. Overlay with semi-transparent gradient (from-black/40 to-transparent) for text readability.

### Product Images
High-quality product photography on clean white backgrounds (consistent across all products). Include lifestyle shots showing products being used with pets. Minimum 1200x800px resolution.

### Testimonial Photos
Authentic, candid photos of customers with their pets (not stock photos). Circular cropped images at 200x200px minimum. Photos should show genuine happiness and connection.

### Company Section
Include team photos with office pets, behind-the-scenes of product creation, quality assurance testing with pets. Images should build trust and show the human side of BioPets.

### Empty States & Icons
Use Heroicons for UI elements (cart, search, menu, etc.). For empty cart state, include a friendly pet illustration or icon set.

---

## Page-Specific Designs

### Homepage
1. Hero with large image, headline "Premium Nutrition for Your Best Friend", CTA "Shop Now"
2. Featured Products grid (3-4 products)
3. Benefits section with icons (3 columns: Natural Ingredients, Vet Approved, Made with Love)
4. Testimonials carousel with owner + pet photos
5. About BioPets preview with CTA to full story
6. Newsletter signup with pet-themed illustration

### Product Listing
- Filter sidebar (categories, price range, ratings)
- Sort dropdown (price, popularity, newest)
- Product grid with hover quick-view
- Pagination or infinite scroll

### Product Detail Page
- Large product image gallery (main image + 3-4 thumbnails)
- Product name, price, rating, stock status
- Detailed description with ingredient list
- Quantity selector + "Add to Cart" CTA
- Related products section
- Reviews section with pet owner photos

### Checkout Flow
- Step indicator (Contact → Shipping → Payment)
- Paymongo payment options: Card, GCash, GrabPay, Maya displayed prominently with logos
- Order summary sidebar showing line items, subtotal, shipping, total
- Trust badges near payment section

### Success Page
Celebration design with pet-themed confetti or paw prints, order confirmation number, order summary, estimated delivery date, "Track Order" CTA.

---

## Animations
**Minimal & Purposeful**:
- Product card hover: subtle scale (scale-105) and shadow increase
- Add to Cart: brief pulse animation on cart icon badge
- Page transitions: smooth fade (200ms)
- No auto-playing animations or carousels