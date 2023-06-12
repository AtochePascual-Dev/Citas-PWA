
/*
Al registrar el SW la instalacion se ejecuta de manera automatica, y solo se instala 1 vez
*/
self.addEventListener('install', (e) => {
  console.log('Service worker instalado', e);
});


/*
Cuando se activa el SW, se activa de manera automatica
*/
self.addEventListener('activate', (e) => {
  console.log('Service worker activado', e);
});