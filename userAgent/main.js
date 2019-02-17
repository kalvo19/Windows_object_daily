

// 1-- Introducing history object
window.console.log(window.navigator.userAgent);

function obtenerIdNavegador() {
    let
        identificadores = ["MSIE", "Firefox", "Chrome", "Brave", "Edge", "Opera"],
        indice = identificadores.length - 1;

    for (indice; indice > -1 && window.navigator.userAgent.indexOf(identificadores[indice]) === -1; indice--);

    return identificadores[indice]
}

console.log(obtenerIdNavegador());


