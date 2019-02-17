/* Events triggered in index.html */
window.addEventListener('resize', showingOuterSize);
window.addEventListener('resize', showingScreenSize);
window.addEventListener('resize', showingInnerSize);
document.getElementById('clientScreen').addEventListener('mousemove', showingClientPointer);
document.getElementById('scrollScreen').addEventListener('scroll', showingScrollPosition);
document.getElementById('scrollScreen').addEventListener('wheel', showingScrollPosition);

/* ------- GENERAL FUNCTION ------- */

function showSomeInformation(element, firstText, secondText, firstValue, secondValue ) {
    /*
   We check if the element passed as a first argument has any children elements
    */
    if (element.children.length == 0) {
        //Creates a paragraph element virtually where the first value is going to be displayed
        let primerParrafo = document.createElement('p');

        //Creates a second paragraph virtually where the second value is going to be displayed
        let segundoParrafo = document.createElement('p');

        /*
        We add the first text along the firs value into the first paragraph we've created
         */
        primerParrafo.append(document.createTextNode(firstText + '<strong>' + firstValue + '</strong>'));

        /*
        We add the first text along the firs value into the first paragraph we've created
         */
        segundoParrafo.append(document.createTextNode(secondText + '<strong>' + secondValue + '</strong>'));

        /*
        We add the two paragraph into the element so that both get reflected in the DOM tree
        and we are able to see it when displaying it in the browser
         */
        element.append(primerParrafo);
        element.append(segundoParrafo);
    } else { //if it has children...

        /*
        We just replace the content of both paragraph with the same text and the requited value
        on each one
         */
        element.children[0].innerHTML =  firstText + '<strong>' + firstValue + '</strong>';
        element.children[element.children.length - 1].innerHTML = secondText + '<strong>' + secondValue + '</strong>';
    }
}

/* ------- FUNCTIONS FIRST SECTION ------- */

/*
* Shows both the height and the width of the screen printed in his requited section
*/
function showingOuterSize() {
    //Get the width of the current window of the browser INCLUDING TOOLBAR but NO SCROLLING
    let anchuraVentanaNavegador = window.outerWidth;

    //Get the height of the current window of the browser INCLUDING TOOLBAR but NO SCROLLING
    let alturaVentanaNavegador = window.outerHeight;

    //Get the first <section> of the page
    let seccion = document.getElementById('outerSize');

   showSomeInformation(seccion, 'Altura de la ventana del navegador: ', 'Anchura de la ventana del navegador: ', alturaVentanaNavegador, anchuraVentanaNavegador);
}

/* ------- FUNCTIONS SECOND SECTION ------- */

function showingScreenSize() {
    let anchuraPantalla = window.screen.width; //Get the width of the screen resolution set in the Operating System
    let alturaPantalla = window.screen.height; //Get the height of the screen resolution set in the Operating System
    let seccion = document.getElementById('windowSize'); //Get the second <section> of the page

    showSomeInformation(seccion, 'Altura de la resolución de la ventana: ', 'Anchura de la resolución de la ventana: ', alturaPantalla, anchuraPantalla);
}

/* ------- FUNCTIONS THIRD SECTION ------ */

function showingInnerSize() {
    //Get the height of the viewport, that is, the part where the website is displayed
    let alturaViewport = window.innerHeight;

    //Get the width of the viewport, that is, the part where the website is displayed
    let anchuraViewport = window.innerWidth;

    //Get the third <section> of the page
    let seccion = document.getElementById('innerSize');

    showSomeInformation(seccion, 'Altura del viewport: ', 'Anchura del viewport: ', alturaViewport, anchuraViewport);
}

/* ------- FUNCTIONS FOURTH SECTION ------- */

function showingClientPointer(event) {

    event.preventDefault();

    //Selects the element that triggers the event
    let element = event.target;

    /*
    Triggers the 'mousewheel' event in order to update the Y position of the pointer when the user
    scrolls the page with the wheel of the mouse
     */
    window.addEventListener('wheel', updateClientPointer);

    //Updates the X initial position where the flashlight is going to be drawn
    element.style.setProperty('--cursorX', event.clientX + 'px');

    //Updates the Y initial position where the flashlight is going to be drawn
    element.style.setProperty('--cursorY', (event.clientY - 325) + 'px');
}

function updateClientPointer(event) {
    //Then selects the element, that is, the fourth <section> of the page
    element = document.getElementById('stifmeister');

    /*
    AS IF THIS DOESN'T EXIST PLEASE
     */
    //Gets the current position where the radial-gradient is drawn
    //positionClientY = parseInt(element.style.getPropertyValue('--cursorY').split('px'));

    /*
    Gets the current Y initial position where the flashlight is drawn and makes it into a 'Integer' number
    by setting apart the value from its measure unit (PIXELS)
     */
    let positionClientY = parseInt(element.style.getPropertyValue('--cursorY').split('px'));

    /*
    Finally sets the value obtained into the variable declared in our CSS stylesheet by means of an
    'style' attribute of the element tag
    */
    element.style.setProperty('--cursorY', (positionClientY + event.deltaY) + 'px');
}

/* ------- FUNCTIONS FIFTH SECTION ------ */

function showingScrollPosition(event) {
    //Gets the element that triggers the event
    let element = event.target;

    //Get the picture into the fifth <section> of the page
    let picture = document.querySelector('.displaced');

    //Checks if the scrolls reaches the penguin's face position
    if (element.scrollLeft > 430) {
        //Check if the picture is already hidden
        if (picture != null) {
            /*
            Toggles the classes so that the picture lingers hidden
             */
            picture.classList.add('hidden');
            picture.classList.remove('displaced');
        }
    } else { //if not...
        /*
        Checks if the picture exists; if not, means that the class 'hidden' is set
        instead of the 'displaced'
         */
        if (picture === null) {
            //Selects once again the picture element
            picture = document.querySelector('.hidden');

            /*
            Toggles the classes so that the picture lingers visible again
             */
            picture.classList.add('displaced');
            picture.classList.remove('hidden');
        }
    }
}

