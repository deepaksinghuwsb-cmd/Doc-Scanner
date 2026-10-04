# ClearScan

ClearScan is a browser-based document scanning workspace. Open `index.html` in a modern browser, capture pages with a phone camera, or add image/PDF files. Files and scans stay in the browser; PDF import/export libraries are loaded from jsDelivr when needed.

## Current features

- Capture a page with the device camera or upload image files.
- Import PDF pages into the scan queue.
- Reorder, rotate, and remove pages.
- Preview color, grayscale, and high-contrast treatments with brightness and contrast controls.
- Save the scan queue locally in IndexedDB and export a multi-page PDF or individual JPEG pages.
- Responsive layout for desktop and mobile.

## Incremental roadmap

1. **Scanning foundation (current):** local scan queue, image/PDF import, page management, basic cleanup, PDF export.
2. **Capture quality:** page boundary detection, perspective correction, crop handles, shadow cleanup, batch camera capture.
3. **Document tools:** OCR and searchable PDFs, text selection, annotation, fillable forms, merge/split, compression, and page-size controls.
4. **Ready-to-use product:** accessible keyboard workflows, robust error handling, browser/device coverage, privacy controls, and optional sign-in/sync.

The roadmap describes planned work; features in steps 2–4 are not implemented yet.

