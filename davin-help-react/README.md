# Divine Help Foundation — React + Tailwind

This is a React (Vite) + Tailwind CSS rewrite of the original Bootstrap/HTML site.

## What changed
- Converted all pages (Home, About Us, Donate) to React components with React Router.
- Removed Bootstrap entirely; all styling rebuilt with Tailwind CSS utility classes.
- Removed Font Awesome; the arrow-up scroll button, hamburger menu, and close icon now use `react-icons` (`react-icons/fa6`).
- Bootstrap's JS-driven offcanvas mobile menu was rebuilt as a React component with local state.
- The jQuery scroll-to-top behavior was rebuilt with a `useEffect` scroll listener.
- Reusable components: `Header`, `Footer`, `ScrollToTopButton`, `ContactForm`.

## Getting started
```bash
npm install
npm run dev      # start local dev server
npm run build    # production build
```

Images live in `public/images` and are referenced with absolute paths (e.g. `/images/hero-person.png`).
