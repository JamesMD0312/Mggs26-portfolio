# Mateo Alvarez — React Portfolio

A minimalist, cinematic photography and film portfolio built with React + Vite.

## Requirements

- Node.js 18+
- VS Code recommended

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Build for production

```bash
npm run build
```

## Where to edit content

### Portfolio projects

Edit:

```text
src/data/projects.js
```

You can change:

- Project title
- Category
- Year
- Image URL
- Alt text
- Layout

### About text

Edit:

```text
src/components/About.jsx
```

### Contact email

Edit the email address inside:

```text
src/components/Contact.jsx
```

Look for:

```js
hello@mateoalvarez.com
```

Replace it with the real email address.

### Hero image and text

Edit:

```text
src/components/Hero.jsx
```

### Styling

All visual styling lives in:

```text
src/index.css
```

The design intentionally uses CSS variables at the top of that file for the primary colors and typography.

## Image recommendations

For production, download licensed images into:

```text
public/images/
```

and replace remote Unsplash URLs in `src/data/projects.js` with paths such as:

```js
image: "/images/project-01.jpg"
```

This keeps the site independent of third-party image hosting.