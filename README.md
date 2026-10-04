# Doc Scanner V2 Pro

A mobile-first document scanning workspace built with React and Vite. Capture pages from a camera, import images or PDFs, crop and enhance scans, run OCR, organize pages, and export documents from the browser.

## Features

- Camera capture with rear/front camera switching, gallery import, multi-file import, and drag-and-drop.
- Editable scan queue with reorder, duplicate, delete, and persistent local page storage.
- Four-corner crop editor with OpenCV perspective correction and a canvas crop fallback.
- Per-page filters, brightness, contrast, rotation, flips, resize presets, before/after preview, and undo/redo.
- On-device OCR with editable text, multi-page PDF export, JPG ZIP export, and share support where available.
- Tools for images to PDF, PDF page images, image compression, PDF merge/split, and format conversion.
- Responsive navigation, light/dark themes, settings, and account screens. Local mode works without configuring a service.
- Optional Supabase email/password and Google sign-in integration.

## Requirements and local development

Use Node.js 20 or newer.

```sh
npm install
npm run dev
```

Build and preview the production bundle:

```sh
npm run build
npm run preview
```

Camera access requires HTTPS or `localhost`. The app stores scans on the current device using IndexedDB and localStorage; clearing this browser's site data removes local scans. PDF.js, OpenCV.js, and OCR language assets may be fetched on first use, so those capabilities need a network connection until loaded.

## Optional Supabase authentication

Copy `.env.example` to `.env.local` and provide the Supabase project URL and anon key. Enable email/password and, if desired, Google OAuth in the Supabase dashboard. Without these values, the app remains available in local mode and account screens explain that cloud auth is not configured. Any deployment must use the public anon key only; never put a service-role key in client code.

## Stack

- React 19, React Router, Vite, and responsive custom CSS
- IndexedDB/localStorage for on-device scan data and preferences
- pdf-lib, JSZip, PDF.js, Tesseract.js, and OpenCV.js for document workflows
- Supabase JS for optional authentication

## Project layout

- `src/main.jsx`, `src/App.jsx` — React entry and routes
- `src/pages/` — scanner, tools, files, settings, and account screens
- `src/components/` — responsive app shell and crop editor
- `src/modules/` — camera, import, crop, filters, OCR, storage, and export workflows
- `src/context/`, `src/lib/` — settings, theme, auth, and shared helpers
- `public/` — PWA manifest, service worker, and app icon

## Privacy

Images and OCR processing stay in the browser after required libraries and language assets load. Data leaves the device only when a user explicitly shares or exports it, or signs into a separately configured Supabase project.
