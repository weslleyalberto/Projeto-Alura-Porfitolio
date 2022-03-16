function typeWrite(elemento) {
    const textArray = elemento.innerHTML.split(''); // Transforma Array
    elemento.innerHTML = ' '; // Limpa Elemento
    textArray.forEach(function (letra, i) {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 65 * i)
    });
}
const titulo = document.querySelector('#titulo-principal-h1');
const titulo2 = document.querySelector('#title-text');
var footdata = document.querySelector("#footer-data");


typeWrite(titulo);


