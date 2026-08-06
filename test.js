
// funcion que genera un uuid para evitar cache en los scripts
const zzzzz
let cotizaciones_scripts = [
    // '../js/ksfilter.js::cotizaciones_scripts_loadend()',
    // '../js/storage.js::cotizaciones_scripts_loadend()',
    // '../js/general.functions.js::cotizaciones_scripts_loadend()',
    './detalles.js::<>()',
    './filtros.js::<>()',
    './cotizaciones.filtros.js::<>()',
    './envioCorreo.js::<>()',
    './notificacion.mensajes.js:module:<>()',
    './main.js::<>()',
    './events.js::<>()',
    './prettydate.js::<>()',
    './modalMasivo.js::<>()',

]

cotizaciones_scripts.forEach(src => {
    let parts = src.split(':');

    let e = document.createElement('script');   
    e.type = parts[1] ? parts[1] : 'text/javascript';
    e.src = `${parts[0]}?v=${cotizaciones_uuid}`;
    if (parts[2]) e.setAttribute('onload', parts[2]);

    document.body.append(e);
})