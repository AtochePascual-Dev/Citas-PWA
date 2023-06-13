// Archivos que deben ser cacheados para mejorar la velocidad y dar soporte offline
const ARCHIVOS = [
  "/",
  "/index.html",
  "/css/bootstrap.css",
  "/css/styles.css",
  "/js/app.js",
  "/js/apv.js",
];
const nombreCache = "apv-v1";

/*
Al registrar el SW la instalacion se ejecuta de manera automatica, y solo se instala 1 vez, es el lugar ideal para hacer el caching de los archivos
*/
self.addEventListener('install', (e) => {
  console.log('Service worker instalado', e);

  /*
  El cacheo de los archivos puede demorar cierto, esto se debe a que pueden haber archivos pesados como el bootstrap.css por lo que el codigo que cachea los archivos debe seguir ejecutandose hasta que se finalize de cachear todos los archivos waitUntil() es una funcion que ejecuta el codio hasta que finalize de cachear todos los archivos
  */
  e.waitUntil(
    caches.open(nombreCache)
      .then(cache => {
        console.log('Cacheando');
        cache.addAll(ARCHIVOS);
      })
  );
});


/*
Cuando se activa el SW, se activa de manera automatica
*/
self.addEventListener('activate', (e) => {
  console.log('Service worker activado', e);
});

/* Para hacer que un pwa sea instalable se tiene que tener 3 requisitos
1- un manifest valido
2- estar servido en un dominio https ó localhost
3- tener registrado el evento fect

registrando el evento fetch para descargar archivos staticos */
self.addEventListener('fetch', (e) => {
  console.log('Fetch', e);

  // Consumir los datos de cache para que la pagina sea mas rapida
  e.respondWith(
    caches.match(e.request)
      .then(respuestaCache => {
        return respuestaCache
      })
  );
});