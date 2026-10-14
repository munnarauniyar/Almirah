# Almirah

**Almirah** is a modern, responsive multi-category e-commerce frontend
built with React. Inspired by the familiar idea of an *almirah*
(wardrobe), the project aims to create an approachable online shopping
experience where users can discover products across electronics,
fashion, beauty, groceries, and more.

> **Project status:** Work in progress. This is an evolving portfolio
> project, not a live commercial store.

## Current preview

Add your Vercel URL here after the first deployment.

## Tech stack

-   React + Vite
-   Tailwind CSS
-   React Router
-   Lucide React
-   JavaScript

## Implemented so far

-   Responsive desktop navigation and mobile bottom navigation
-   Shared application layout using React Router's `Outlet`
-   Home hero with a permanent abstract background, featured-product
    presentation, and search UI
-   Data-driven, horizontally scrollable Shop by Categories cards
-   Reusable category card component

## Planned features

-   Animated hero product switching, including clickable next-product
    preview
-   Functional product search linked to the Shop page
-   Trending promotional posters (multiple on desktop, one-at-a-time
    slider on mobile)
-   Reusable product cards and Best Sellers section
-   Product details, category filters, sorting, wishlist, and cart
-   LocalStorage persistence for appropriate demo shopping state
-   Simulated checkout and order history
-   Improved loading, empty, and error states
-   Potential full-stack expansion with a backend and database

**Note:** Buttons, search, prices, product imagery, and item counts
shown during UI development may currently be illustrative rather than
connected to a live product catalog. No real checkout or payment
processing is available.

## Run locally

Prerequisites: Node.js and npm.

``` bash
git clone YOUR_REPOSITORY_URL
cd YOUR_REPOSITORY_FOLDER
npm install
npm run dev
```

Create a production build with:

``` bash
npm run build
npm run preview
```

## Project approach

The project is being built incrementally: responsive UI first, followed
by reusable components, normalized product data, interactions, local
persistence, and eventually backend integration. The goal is to practice
real frontend architecture and independently implement each feature.

## Deployment

The project is intended to be deployed on Vercel. Add the live preview
link once available. If using React Router with client-side routes,
configure the hosting platform to serve the SPA entry point for direct
nested-route requests.

## Disclaimer

Almirah is an independent learning and portfolio project. Featured
third-party brand names and product images are used for illustrative
purposes and do not imply affiliation or endorsement.
