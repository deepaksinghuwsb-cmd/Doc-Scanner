# Doc Scanner

A mobile-first, client-side document scanning PWA built with Vite and vanilla JavaScript. All captured page images are stored in IndexedDB on the current device; page order and selection metadata are mirrored in localStorage. There is no application server or account backend.

## Features

- Live camera capture with rear/front camera switching, plus camera-file input fallback.
- Multi-file image and PDF import, with PDF pages rendered into editable scans.
- Drag-and-drop import and a horizontal, draggable page queue with reorder, duplicate, and delete actions.
- Per-page Original, Auto Enhance, Grayscale, B&W, and Lighten treatments; brightness, contrast, and 90° rotation controls.
- Four-corner crop editor with touch/mouse handles, OpenCV.js edge detection and perspective correction, and a rectangular canvas fallback.
- Tesseract.js OCR with editable recognized text; OCR text is embedded in PDF output for search.
- Ordered multi-page PDF export, JPG ZIP export, Web Share API, and installable PWA shell.

## Run locally

Requires Node.js 20 or newer.

```sh
npm install
npm run dev
```

Create a production bundle with `npm run build`, then preview it with `npm run preview`. Camera access requires HTTPS or localhost. The first load of PDF.js, OpenCV.js, pdf-lib, Tesseract.js, and JSZip uses jsDelivr; app screens and the queue are cached by the service worker after a successful first visit. Third-party processing libraries may need a network connection until downloaded.

## Project layout

- `src/main.js` — UI state, event wiring, queue and export actions
- `src/modules/camera.js` — camera stream and still capture
- `src/modules/scanner.js` — image and PDF page import
- `src/modules/crop.js` — edge detection, perspective correction and crop fallback
- `src/modules/filters.js` — image adjustments and export rendering
- `src/modules/pdfExport.js` — PDF and JPG ZIP generation
- `src/modules/ocr.js` — Tesseract text recognition
- `src/modules/storage.js` — IndexedDB page storage and localStorage queue metadata
- `sw.js`, `manifest.webmanifest`, `icon.svg` — PWA setup

## Privacy

Images remain in this browser’s IndexedDB. OCR and image processing run on-device after their libraries and language data load. Clearing this site’s browser storage deletes saved scans. Sharing or exporting sends data only when the user initiates that action.
