// * Validamos si el navegador soporta service-workers
if ('serviceWorker' in navigator) {
  // Sí soporta service worker, registramos el service worker
  navigator.serviceWorker.register('./sw.js')
    .then(registro => console.log('Se registro correctamente', registro))
    .catch(error => console.log('Fallo el registro', error))
} else {
  console.log('No soporta ServiceWorker');
}