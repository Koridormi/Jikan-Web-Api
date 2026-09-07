import {obtenerDatos, crearCardLoading} from './home/home.js';

// document.addEventListener('DOMContentLoaded', crearCardLoading);
// document.addEventListener('DOMContentLoaded', obtenerDatos);

document.addEventListener('DOMContentLoaded', () => {
    crearCardLoading();
    obtenerDatos();
});