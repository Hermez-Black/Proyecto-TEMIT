import '../css/app.scss';

import './slider/sliderDOM';

// import './maps';

import './menu';

if(navigator.serviceWorker){ // navigator hace referencia al navegador en si, serviceWorker service worker
    // Si el navegador lo tiene entonces registralo
    navigator.serviceWorker.register('../sw.js')
};

