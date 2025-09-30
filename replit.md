# BioPets E-Commerce Website

## Overview
BioPets is a full-stack e-commerce website selling veterinary products with integrated payment processing via Paymongo. The site features a modern, responsive design with complete shopping cart functionality and checkout flow.

## Products
The site sells 4 veterinary products:
1. **Cleansedine Antiseptic/Disinfectant Solution** - ₱895.00
2. **Cleansedine Oral Care** - ₱425.00
3. **Purepet Multi-Surface Disinfectant** - ₱695.00
4. **Fur-tastic Medicated Shampoo** - ₱550.00

## Key Features Implemented

### Shopping Cart
- Persistent cart using localStorage (survives page refreshes)
- Add/remove items with quantity controls
- Real-time total calculation with shipping
- Free shipping for orders over ₱5,000

### Checkout Flow
- **Contact Information Validation**
  - First name and last name required
  - Email validation (proper email format)
  - Philippine phone number validation (+63 or 0 prefix, 10 digits)

- **Shipping Address Validation**
  - Street address required
  - City required
  - Postal code validation (4 digits)

- **Payment Method Selection**
  - Credit/Debit Card (Visa, Mastercard)
  - GCash
  - GrabPay
  - Maya (PayMaya)
  - Validation ensures payment method is selected

### Paymongo Integration
- Backend API endpoint: `/api/create-payment`
- Creates Paymongo checkout sessions
- Supports multiple payment methods (card, gcash, grabpay, paymaya)
- Redirects to Paymongo hosted checkout page
- Success page clears cart after successful payment
- Secret key managed via Replit Secrets: `PAYMONGO_SECRET_KEY`

## Technical Stack
- **Frontend**: React + TypeScript, Wouter (routing), TailwindCSS, Shadcn UI
- **Backend**: Express.js, Node.js
- **Storage**: In-memory (localStorage for cart persistence)
- **Payment Gateway**: Paymongo (Philippines)

## Recent Changes (September 30, 2025)
- Fixed cart persistence issues with localStorage
- Removed page reloads in favor of proper routing with wouter
- Implemented comprehensive form validation for all checkout fields
- Connected Paymongo payment gateway with real API integration
- Fixed Success page infinite loop bug
- Added proper error handling and user feedback via toasts
- Fixed product pricing to meet Paymongo's ₱20 minimum (was ₱2.99-₱4.49, now ₱425-₱895)
- Created missing pages: Shipping & Returns, FAQs, Privacy Policy
- Updated BioPets description from nutrition to grooming, oral care, and disinfectant products
- Made footer support links clickable

## User Preferences
- Focus on veterinary/disinfectant products for BioPets branding
- Product images use object-contain to show full products without cropping
- Philippine market focus (PHP currency, phone validation, payment methods)

## Environment Variables
- `PAYMONGO_SECRET_KEY` - Secret key for Paymongo API (stored in Replit Secrets)

## Routes
- `/` - Home page with hero and product grid
- `/about` - About BioPets company
- `/testimonials` - Customer testimonials
- `/product/:id` - Product detail page
- `/cart` - Shopping cart
- `/checkout` - Checkout with form validation
- `/success` - Order confirmation page
- `/shipping-returns` - Shipping information and return policy
- `/faqs` - Frequently asked questions with accordion layout
- `/privacy-policy` - Complete privacy policy
