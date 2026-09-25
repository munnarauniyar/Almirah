# 🛍️ ALMIRAH — Frontend Development Guide

> **Almirah** is a portfolio-focused, modern e-commerce frontend built to practice and demonstrate real-world React, responsive UI design, API integration, state management, and frontend architecture.

---

## 🎯 Project Goal

The purpose of this project is not simply to make an e-commerce website.

The purpose is to move from:

**"I know React."**

to:

**"I can independently design, build, debug, and ship a complete responsive frontend."**

This project should be built mostly independently. Tutorials can be used for learning specific concepts, but the application itself should not be copied from a tutorial.

### Development rule

> **Build first. Ask for help when stuck. Don't ask for complete code unless absolutely necessary.**

When stuck, explain:

1. What I am trying to achieve
2. What I tried
3. What I expected
4. What actually happened
5. What I think might be wrong

The goal is to understand the problem, not just paste a fix.

---

# 🏪 Product Concept

### Brand

**Almirah**

The name is inspired by the Nepali pronunciation/use of "wardrobe."

### Concept

A modern online marketplace aimed at young people who want to discover and purchase genuine, trustworthy products online.

Almirah is intentionally a multi-category marketplace rather than a store focused on one type of product.

### Possible categories

- Electronics
- Gadgets
- Fashion
- Cosmetics
- Wearables
- Accessories
- Grocery
- Food & Snacks
- Home & Lifestyle

Categories can evolve as the project develops.

---

# 👥 Target Customer

Young online shoppers who:

- Prefer convenient online shopping
- Want to discover trending products
- Care about genuine products
- Compare prices and reviews
- Want a modern and trustworthy shopping experience
- Use both desktop and mobile devices

---

# 🧭 Main Pages

Initial route structure:

```text
/
├── /shop
├── /categories
├── /cart
├── /wishlist
├── /checkout
├── /login
├── /account
├── /orders
├── /contact
└── /help
```

Dynamic routes will eventually include:

```text
/product/:id
```

Category/search states may later use URL search parameters, for example:

```text
/shop?category=electronics
```

---

# 🧩 Core User Features

Users should eventually be able to:

- Browse products
- Search products
- Filter products
- Sort products
- Browse categories
- Open product details
- View product images
- View prices
- View ratings
- View reviews
- View seller information
- Add products to cart
- Change cart quantity
- Remove products from cart
- Add products to wishlist
- Remove products from wishlist
- Login/logout in the demo frontend
- Checkout
- Place simulated orders
- View previous orders
- Keep cart/wishlist/orders after refreshing the browser

Actual payment processing and secure authentication will be added only if/when a backend is introduced.

---

# 🗄️ Data Strategy

## Initial goal: real product data

The final application should avoid relying entirely on manually invented products.

Possible data sources include:

- Open Food Facts → food products
- Open Beauty Facts → cosmetics/beauty products
- UPCitemdb → product/catalog information
- eBay Browse API → marketplace listings
- Amazon/other marketplace APIs where their current terms and access allow it

### Important

Do not connect five APIs immediately.

First build the frontend architecture.

Then introduce API data gradually.

The frontend should be designed so that components do not care where a product originated.

For example:

```text
API / database
      ↓
Product service
      ↓
Normalized product data
      ↓
React components
```

A `ProductCard` should receive a product and display it. It should not know whether that product came from an API, local data, or MongoDB.

---

# 🔄 Product Data Architecture

Try to eventually normalize different API responses into a common product structure.

Conceptually:

```text
Product
├── id
├── name
├── price
├── oldPrice
├── description
├── images
├── category
├── rating
├── reviews
├── seller
├── stock
├── colors
├── sizes
└── featured/trending information
```

The exact structure can evolve as real APIs are integrated.

---

# 💾 localStorage Strategy

Use `localStorage` for client-side user-related state during the frontend-only version.

Possible stored data:

```text
cart
wishlist
orders
user preferences
demo session state
```

### Do NOT store

Real passwords or sensitive authentication credentials in localStorage.

When a real backend is added, authentication and sensitive data will be handled properly.

---

# 🏗️ Suggested Project Structure

```text
src/
│
├── assets/
│
├── components/
│
├── layouts/
│
├── pages/
│
├── services/
│
├── data/
│
├── hooks/
│
├── utils/
│
├── App.jsx
└── main.jsx
```

### `components/`

Reusable UI components.

Examples:

```text
Navbar
SearchBar
ProductCard
ProductGrid
CategoryCard
CartItem
QuantitySelector
Footer
```

### `pages/`

Route-level screens.

Examples:

```text
Home
Shop
ProductDetails
Cart
Wishlist
Checkout
Login
Account
Orders
Contact
Help
```

### `layouts/`

Shared page structures.

For example:

```text
Navbar
   ↓
Page content
   ↓
Footer
```

### `services/`

API/data-access logic.

React components should not become full of Axios requests.

### `data/`

Static data such as:

- navigation categories
- promotional content
- fallback/mock data when needed

### `hooks/`

Custom React hooks only when there is a real reason to create them.

### `utils/`

Small reusable utility functions.

Do not create files here just for the sake of having files.

---

# 🎨 Almirah Visual Identity

The logo establishes the main visual direction.

## Primary color

Use a modern purple close to:

```text
#5B35D5
```

The exact shade can be adjusted later.

Use purple for:

- Active navigation
- Primary buttons
- Important actions
- Selected states
- Badges
- Links/interactions
- Brand accents

## Light purple

A very light purple such as:

```text
#F1EDFF
```

Can be used for:

- Hover backgrounds
- Selected category backgrounds
- Promotional sections
- Subtle UI highlights

## Main text

Prefer dark charcoal instead of pure black:

```text
#171717
```

## Secondary text

Use a neutral gray:

```text
#6B7280
```

## Main background

Prefer:

```text
#FFFFFF
```

or a very subtle off-white where appropriate.

---

# 🧠 UI Design Principles

Do not blindly copy the reference design.

The reference is inspiration for:

- Spacing
- Hero composition
- Category cards
- Product grids
- Promotional banners
- Typography hierarchy
- Rounded cards
- Subtle borders
- Desktop layout

Almirah should develop its own identity.

### Ask these questions while designing:

- What is the visual hierarchy?
- What should the user notice first?
- What is the primary action?
- What happens at 375px width?
- What happens when text is unusually long?
- What happens when there are no results?
- What happens when an image fails?
- What happens when the API is loading?
- What happens when the user has an empty cart?

---

# 🧭 Navbar Design

The navbar should feel modern, clean, and lightweight.

### Desktop concept

```text
┌────────────────────────────────────────────────────────────┐
│ LOGO │ Home Shop Categories Deals Contact │ Search │ ♡ 🛒 👤 │
└────────────────────────────────────────────────────────────┘
```

### Current navbar goals

- White background
- Purple active state
- Dark charcoal text
- Medium-weight normal navigation
- Semibold active navigation
- Subtle shadow or border
- Moderate corner radius
- No excessive shadow
- Search area will be added later
- Cart and account icons
- Categories dropdown will be added later

Avoid using a huge `shadow-2xl` unless the design genuinely requires it.

Avoid making the entire desktop navbar a giant pill with `rounded-full` unless that becomes part of the final brand language.

---

# 🔵 Active Navigation State

Use React Router's `NavLink` rather than a normal `Link` when the navigation item needs to know whether it is active.

Desired behavior:

```text
Home        ← purple + bottom indicator
Shop
Categories
Contact
Help
```

When the user moves to Shop:

```text
Home
Shop        ← purple + bottom indicator
Categories
Contact
Help
```

The active state should communicate:

- Current page
- Purple brand color
- Slightly stronger typography
- Bottom border/indicator

The indicator should remain only on the currently active page.

---

# 🔗 Link vs Button

Think semantically.

Use a **Link/NavLink** when the user is navigating:

```text
Home
Shop
Cart
Account
```

Use a **button** when the user is performing an action:

```text
Add to cart
Wishlist
Increase quantity
Decrease quantity
Search
Open menu
Apply filter
```

Avoid unnecessary structures such as:

```text
Link
  ↓
Button
  ↓
Icon
```

when the entire element simply navigates somewhere.

---

# 📱 Mobile Navigation

The mobile top navbar should be simplified.

Hide the main desktop navigation links.

Keep:

```text
Logo
Cart
Account
```

Conceptually:

```text
┌──────────────────────────────┐
│ ALMIRAH                 🛒 👤│
└──────────────────────────────┘
```

A separate bottom navigation will later provide the primary mobile navigation.

Potential bottom navigation:

```text
Home | Shop | Liked | Cart | Account
```

Use icons with labels where space allows.

The mobile layout should be treated as a deliberate design, not merely a smaller desktop layout.

---

# 🔎 Search

Search will eventually become a major part of the marketplace.

Desktop:

```text
[ Search products... ]
```

Mobile may use a separate full-width search field below the top bar.

The search component should eventually support:

- Product search
- Search state
- Empty results
- Loading state
- Potential suggestions
- URL search parameters

Do not implement all of this at the beginning.

---

# 🖥️ Responsive Design Philosophy

Responsive design is not:

> "Build desktop and then add `md:` everywhere."

Instead, design intentionally for:

### Mobile

Approximately:

```text
360–430px
```

### Tablet

Approximately:

```text
768px
```

### Desktop

Approximately:

```text
1280px+
```

For every major component ask:

> What should this component look like on mobile?

> What information should disappear?

> What should stack?

> What should become horizontal?

> What should become a separate interaction?

---

# 🏠 Home Page Planned Structure

The home page can eventually contain:

```text
Top announcement
Navbar
Hero
Categories
Trending Products
Promotional Banner
Best Sellers
More Product Collections
Trust/Benefits Section
Footer
```

Possible trust section:

```text
Free Shipping
Easy Returns
Secure Payment
Customer Support
```

The hero should eventually feature real/trending products rather than permanently hard-coded fake products.

---

# 🛒 Product System

Create reusable product components.

A single `ProductCard` should eventually be reusable on:

```text
Home
Shop
Category
Search results
Trending
Wishlist
Related products
```

Do not create separate product-card designs for every page unless there is a genuine UI reason.

---

# 🔍 Shop Page

The Shop page should eventually support:

### Search

```text
Search → matching products
```

### Category filtering

```text
All
Electronics
Fashion
Beauty
Food
Grocery
...
```

### Price filtering

```text
Minimum ───────── Maximum
```

### Rating filtering

```text
★★★★☆
```

### Sorting

Possible options:

```text
Featured
Price: Low → High
Price: High → Low
Rating
Newest
```

### Pagination / loading

The exact implementation depends on the API.

---

# 📦 Product Details

Route:

```text
/product/:id
```

The product page should eventually contain:

- Product gallery
- Product name
- Price
- Previous price
- Discount if available
- Rating
- Reviews
- Description
- Seller
- Stock
- Sizes
- Colors
- Quantity
- Add to cart
- Wishlist
- Related products

The page must be dynamically generated from the product ID.

---

# ❤️ Wishlist

Expected flow:

```text
Click ❤️
    ↓
Wishlist state
    ↓
localStorage
    ↓
Refresh page
    ↓
Wishlist remains
```

Wishlist should have an appropriate empty state.

---

# 🛒 Cart

Expected functionality:

- Add product
- Remove product
- Increase quantity
- Decrease quantity
- Calculate subtotal
- Calculate shipping
- Apply discount if implemented
- Calculate total
- Continue shopping
- Checkout

The cart should persist after refresh.

---

# 💳 Checkout

Build a realistic checkout interface.

Possible sections:

### Contact

- Name
- Email
- Phone

### Shipping

- Address
- City
- Postal code
- Country

### Payment

A simulated payment UI can be used during the frontend-only version.

Do not pretend that the frontend is securely processing real payments.

Eventually a real payment provider can be integrated with a backend.

---

# 👤 Authentication

For the frontend-only version:

- Build login UI
- Build account UI
- Simulate login state if necessary
- Do not store real passwords

When the backend version begins:

```text
React
 ↓
Node/Express
 ↓
Authentication
 ↓
Database
```

---

# 📊 Orders

After checkout:

```text
Place Order
     ↓
Create order
     ↓
Store order locally
     ↓
Order Success
     ↓
Orders page
```

Orders can initially be stored in localStorage.

Later they should come from the backend/database.

---

# 🚦 UI States

Every major data-driven component should eventually consider:

### Loading

```text
Products are loading...
```

### Success

```text
Products displayed
```

### Empty

```text
No products found
```

### Error

```text
Something went wrong.
Try again.
```

### Long content

Test unusually long:

- Product names
- Descriptions
- Seller names
- Reviews

Never assume every API response will look perfect.

---

# 🧪 Development Rules

## Rule 1 — No tutorial-copying

Tutorials can teach concepts.

Do not copy an entire e-commerce application from a video.

---

## Rule 2 — Google is allowed

Real developers search.

Examples:

```text
React Router NavLink active class
Tailwind responsive grid
localStorage JSON
Axios error handling
React URL search params
```

The goal is to understand what you are searching for.

---

## Rule 3 — Try before asking

Before asking for help, attempt the feature yourself.

---

## Rule 4 — Prefer hints over solutions

When stuck, first understand the problem.

Ask:

> Why is this happening?

rather than immediately:

> Give me the fixed code.

---

## Rule 5 — Build independently

The final project should be something you can confidently explain in an interview.

You should know:

- Why the component exists
- Why state is stored where it is
- Why a particular hook is used
- How routing works
- How API data flows through the application
- How localStorage is used
- How responsive behavior works

---

# 🧱 Development Phases

## Phase 1 — Foundation

- Vite + React
- Tailwind
- React Router
- Axios
- Clean Vite project
- Folder structure
- Routes
- Git repository

## Phase 2 — Layout

- Desktop navbar
- Active navigation
- Mobile top navbar
- Mobile bottom navigation
- Main layout
- Footer

## Phase 3 — Home UI

- Hero
- Categories
- Promotional section
- Product sections
- Trust section

## Phase 4 — Product System

- Product data
- API integration
- ProductCard
- ProductGrid
- Product details
- Related products

## Phase 5 — Shop

- Search
- Filtering
- Sorting
- Pagination/loading
- Empty states
- Error states

## Phase 6 — User Features

- Wishlist
- Cart
- Persistent state
- Quantity management

## Phase 7 — Checkout

- Checkout form
- Validation
- Order creation
- Success page
- Orders

## Phase 8 — Account

- Login UI
- Account page
- Demo session state
- User preferences

## Phase 9 — Polish

- Responsive testing
- Animations
- Hover states
- Loading states
- Error states
- Accessibility
- Visual consistency
- Performance

## Phase 10 — Portfolio

- README
- Screenshots
- Live deployment
- GitHub cleanup
- Project description
- Technologies used
- Features
- Challenges/lessons learned

---

# 🚀 Future Full-Stack Version

The frontend-only project is only Version 1.

Potential evolution:

```text
Version 1
React + mock/fixed data

        ↓

Version 2
React + API + localStorage

        ↓

Version 3
React + backend API

        ↓

Version 4
Node + Express

        ↓

Version 5
MongoDB

        ↓

Version 6
Authentication

        ↓

Version 7
Admin Dashboard

        ↓

Version 8
Real payments

        ↓

Version 9
Deployment
```

The goal is to keep the frontend architecture clean enough that the data source can be replaced without rebuilding the entire UI.

---

# 🧠 Questions to Ask Before Building Any Feature

Before implementing a feature, ask:

### UI

- What should the user see?
- What is the primary action?
- What happens on mobile?
- What happens when content is missing?

### State

- Does this need React state?
- Should this state be local to a component?
- Should multiple components access it?
- Should it persist after refresh?

### Data

- Is this static data?
- Is this API data?
- Is this user-generated state?
- Does this belong in localStorage?

### Architecture

- Is this component reusable?
- Does this logic belong in a component?
- Should it be moved into a service?
- Am I duplicating code?

### UX

- What happens while loading?
- What happens if there are no results?
- What happens if an API fails?
- What happens after the user completes the action?

---

# 🧭 Current Status

## Completed

- [x] Vite + React project
- [x] Tailwind setup
- [x] React Router setup
- [x] Initial routes
- [x] Basic desktop navbar
- [x] Almirah logo
- [ ] Refine navbar visual design
- [ ] Active NavLink state
- [ ] Mobile navbar
- [ ] Mobile bottom navigation
- [ ] Footer
- [ ] Home page
- [ ] API/data layer
- [ ] Product system
- [ ] Shop
- [ ] Product details
- [ ] Wishlist
- [ ] Cart
- [ ] Checkout
- [ ] Orders
- [ ] Account
- [ ] Responsive polish
- [ ] Deployment

---

# 🧑‍💻 Working With ChatGPT

Use ChatGPT as a **senior developer/mentor**, not as a code generator.

When stuck, provide:

```text
What I want:
...

What I tried:
...

What I expected:
...

What actually happened:
...

Relevant code:
...
```

The preferred workflow is:

```text
Problem
   ↓
Understand
   ↓
Try yourself
   ↓
Debug
   ↓
Ask for hint
   ↓
Implement yourself
   ↓
Test
```

The objective is not to finish the project as quickly as possible.

The objective is to finish it while becoming capable of building the next project without help.

---

# ⭐ Final Principle

> **Don't build Almirah to prove that you can use React. Build Almirah to prove that you can build a product.**
