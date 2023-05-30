var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './css/styles.css',

        './js/main.js',
        
        './js/product.js', 

        './coleções/Babá/Babá.html',

        './coleções/Babá/Babá.css',

        './coleções/limpeza do lar/limpezadolar.css',

        './coleções/limpeza do lar/limpezadolar.html',

        './coleções/eletricista/eletricista.html',

        './coleções/eletricista/eletricista.css',

        './coleções/Encanador/Encanador.html',

        './coleções/Encanador/Encanador.css',

        './coleções/mecânico/mecanico.html',

        './coleções/mecânico/mecanico.css',

        './coleções/piscineiro/piscineiro.html',

        './coleções/piscineiro/piscineiro.css',

        './coleções/transportadora/transportadora.html',

        './coleções/transportadora/transportadora.css'

        ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});