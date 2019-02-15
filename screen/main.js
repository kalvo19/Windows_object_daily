/* Events triggered in index.html */
window.addEventListener('resize', showingOuterSize);

function showingOuterSize() {
    let anchuraVentanaNavegador = window.outerWidth; //Get the width of the current window
    let alturaVentanaNavegador = window.outerHeight; //Get the height of the current window
    let seccion = document.getElementById('outerSize');
    if (seccion.children.length == 0) {
        let primerParrafo = document.createElement('p');
        let segundoParrafo = document.createElement('p');
        primerParrafo.append(document.createTextNode('Altura de la ventana:' + alturaVentanaNavegador));
        segundoParrafo.append(document.createTextNode('Anchura de la ventana:' + anchuraVentanaNavegador));
        seccion.append(primerParrafo);
        seccion.append(segundoParrafo);
    } else {
        seccion.children[0].innerHTML = 'Altura de la ventana:' + alturaVentanaNavegador;
        seccion.children[seccion.children.length - 1].innerHTML = 'Altura de la ventana:' + anchuraVentanaNavegador;
    }
}