
/*
Triggered function after loading the Document Object Model
 */
window.addEventListener('load', function() {
    //Gets the current browser where the navigation is carrying up
    var navegadorUsuario = obtenerIdNavegador();

    /*
    Gets the <section> of the page where we are going to display the information
    about the browser the user is using to visualize the page
     */
    var seccionNavegador = document.querySelector('#browser');

    /*
    The path that contains the right picture that matches the user's browser
     */
    var imagenNavegador = '<img src=\"./stylesheets/images/' + navegadorUsuario + '.png\" alt=\"Imagen del navegador del usuario\" />';

    /*
    The title that is being displayed just below the picture of the browser's logo
     */
    var tituloSeccionNavegador = '<h2>' + navegadorUsuario + '</h2>';

    /*
    Adds both the title and the picture according to the browser obtained in 'navegadorUsuario'
     */
    switch(navegadorUsuario) {
        case "MSIE":
            seccionNavegador.innerHTML = imagenNavegador + tituloSeccionNavegador;
            break;
        case "Firefox":
            seccionNavegador.innerHTML = imagenNavegador + tituloSeccionNavegador;
            break;
        case "Chrome":
            seccionNavegador.innerHTML = imagenNavegador + tituloSeccionNavegador;
            break;
        case "Brave":
            seccionNavegador.innerHTML = imagenNavegador + tituloSeccionNavegador;
            break;
        case "Edge":
            seccionNavegador.innerHTML = imagenNavegador + tituloSeccionNavegador;
            break;
        case "Opera":
            seccionNavegador.innerHTML = imagenNavegador + tituloSeccionNavegador;
            break;
    }

    //Gets the current Operating System where the navigation is carrying up
    var dispositivoUsuario = obtenerIdDispositivo();

    /*
    Gets the <section> of the page where we are going to display the information
    about the Operating System the user is using to visualize the page
     */
    var seccionDispositivo = document.querySelector('#device');

    /*
    The path that contains the right picture that matches the user's Operating System
    */
    var imagenDispositivo = '<img src=\"./stylesheets/images/' + dispositivoUsuario + '.png\" alt=\"Imagen del navegador del usuario\" />';

    /*
    The title that is being displayed just below the picture of the Operating System's logo
     */
    var tituloSeccionDispositivo = '<h2>' + dispositivoUsuario + '</h2>';

    switch(dispositivoUsuario) {
        case "Windows":
            seccionDispositivo.innerHTML = imagenDispositivo + tituloSeccionDispositivo;
            break;
        case "Linux":
            seccionDispositivo.innerHTML = imagenDispositivo + tituloSeccionDispositivo;
            break;
    }
});

// 1-- Introducing navigator object
window.console.log(window.navigator.userAgent);

function obtenerIdNavegador() {

    /*
    Creates an array of Strings containing the ID of the differents browsers and an index that will
    be used to track through this array
     */
    let
        identificadores = ["MSIE", "Firefox", "Chrome", "Brave", "Edge", "Opera"],
        indice = identificadores.length - 1;

    /*
    Tracks the 'window.navigator.userAgent' until matching one of the browser's ID and returns
    this one as an String
     */
    for (indice; indice > -1 && window.navigator.userAgent.indexOf(identificadores[indice]) === -1; indice--);

    return identificadores[indice]
}

function obtenerIdDispositivo() {
    /*
    Creates an array of Strings containing the ID of the differents Operating Systems and an index that will
    be used to track through this array
     */
    sistemasOperativos = ["Windows", "Linux"];
    indiceSO = sistemasOperativos.length - 1;

    /*
    Tracks the 'window.navigator.userAgent' until matching one of the Operating System's ID and returns
    this one as an String
     */
    for (indiceSO; indiceSO > -1 && window.navigator.userAgent.indexOf(sistemasOperativos[indiceSO]) === -1; indiceSO--);

    return sistemasOperativos[indiceSO];
}


