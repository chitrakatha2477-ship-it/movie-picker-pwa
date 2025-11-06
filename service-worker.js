// PWA Service Worker - Minimal setup for installability

// This event is fired when the browser tries to install the service worker.
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Install Event: New content available.');
  // Force the waiting service worker to become the active service worker immediately
  self.skipWaiting(); 
});

// This event is fired when the service worker takes control of the page.
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activate Event.');
  // Claim clients immediately so the app starts working right away
  event.waitUntil(self.clients.claim());
});

// We are intentionally not adding complex 'fetch' logic because this app relies on 
// live API calls, which need an active internet connection anyway.
// The main purpose of this service worker is to enable the PWA "Install" feature.
self.addEventListener('fetch', (event) => {
  // Pass through network requests directly
});