// Genesis Website Service Worker - Optimized for Performance
const CACHE_NAME = 'genesis-v1.0.0';
const STATIC_CACHE = 'genesis-static-v1.0.0';
const AUDIO_CACHE = 'genesis-audio-v1.0.0';
const IMAGE_CACHE = 'genesis-images-v1.0.0';

// Cache strategies
const CACHE_STRATEGIES = {
  // Static assets - cache first
  static: ['/', '/manifest.json', '/icons/', '/sw.js'],
  // Images - cache first with fallback
  images: ['/images/'],
  // Audio - cache first with fallback
  audio: ['/audio/'],
  // API calls - network first
  api: ['/api/'],
  // Other resources - stale while revalidate
  other: []
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets...');
        return cache.addAll([
          '/',
          '/manifest.json',
          '/icons/icon-192x192.png',
          '/icons/icon-512x512.png'
        ]);
      })
      .then(() => {
        console.log('Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName.startsWith('genesis-') && 
                     !cacheName.includes('v1.0.0');
            })
            .map((cacheName) => {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('Old caches cleaned up');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  // Determine cache strategy based on URL
  let strategy = 'other';
  let cacheName = CACHE_NAME;
  
  if (url.pathname === '/' || url.pathname.startsWith('/icons/') || url.pathname === '/manifest.json') {
    strategy = 'static';
    cacheName = STATIC_CACHE;
  } else if (url.pathname.startsWith('/images/')) {
    strategy = 'images';
    cacheName = IMAGE_CACHE;
  } else if (url.pathname.startsWith('/audio/')) {
    strategy = 'audio';
    cacheName = AUDIO_CACHE;
  } else if (url.pathname.startsWith('/api/')) {
    strategy = 'api';
  }
  
  // Implement caching strategy
  event.respondWith(handleRequest(request, strategy, cacheName));
});

// Handle different caching strategies
async function handleRequest(request, strategy, cacheName) {
  const cache = await caches.open(cacheName);
  
  switch (strategy) {
    case 'static':
      // Cache first for static assets
      return cacheFirst(request, cache);
      
    case 'images':
    case 'audio':
      // Cache first with network fallback for media
      return cacheFirstWithFallback(request, cache);
      
    case 'api':
      // Network first for API calls
      return networkFirst(request, cache);
      
    default:
      // Stale while revalidate for other resources
      return staleWhileRevalidate(request, cache);
  }
}

// Cache first strategy
async function cacheFirst(request, cache) {
  try {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Cache first failed:', error);
    return new Response('Network error', { status: 503 });
  }
}

// Cache first with network fallback
async function cacheFirstWithFallback(request, cache) {
  try {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      // Return cached version immediately
      // Update cache in background
      fetch(request).then(response => {
        if (response.ok) {
          cache.put(request, response.clone());
        }
      }).catch(() => {
        // Ignore network errors for background updates
      });
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Cache first with fallback failed:', error);
    return new Response('Media not available', { status: 503 });
  }
}

// Network first strategy
async function networkFirst(request, cache) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Network error', { status: 503 });
  }
}

// Stale while revalidate strategy
async function staleWhileRevalidate(request, cache) {
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => {
    // Return cached version if network fails
    return cachedResponse;
  });
  
  return cachedResponse || fetchPromise;
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  console.log('Performing background sync...');
  // Implement background sync logic here
}

// Push notifications (if needed in future)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-192x192.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

console.log('Genesis Service Worker loaded successfully');