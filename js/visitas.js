window.addEventListener("load", init);

function comprobarSoporte() {
    if (typeof (Storage) !== "undefined") {
        console.info("Tu navegador acepta almacenamiento local");
    }
    else {
        console.info("Tu navegador NO acepta almacenamiento local");
    }
}

function guardarDatos(clave, valor) {
    localStorage.setItem(clave, valor);
}

function comprobarUsuario() {
    if (localStorage.getItem("usuario") == null) {
        var usuario = prompt("Mete tu nombre de usuario");
        guardarDatos("usuario", usuario);
        guardarDatos("contador", 0);
        guardarDatos("visitas", 1);
    }
    else {
        var numeroVisitas = parseInt(recuperarDatos("visitas"));
        numeroVisitas += 1;
        guardarDatos("visitas", numeroVisitas);
    }
}


function recuperarDatos(clave) {
    return localStorage.getItem(clave);
}

function mandarSaludo() {

    switch (parseInt(localStorage.getItem("visitas"))) {
        case (1):
            document.getElementById("saludo").innerHTML = "¡Tú primera visita " + localStorage.getItem("usuario") + "!";
            break;
        default:
            document.getElementById("saludo").innerHTML += "Bienvenido de vuelta " + localStorage.getItem("usuario");
            break;
    }
    document.getElementById("contador").innerHTML = "Contador:" + localStorage.getItem("contador");


}

function cerrarSesion() {
    localStorage.removeItem("usuario");
}

function incrementar() {
    var contadorAu = parseInt(localStorage.getItem("contador"));
    contadorAu = contadorAu + 1;
    guardarDatos("contador", contadorAu);
}

function decrementar() {
    var contadorAu = parseInt(localStorage.getItem("contador"));
    contadorAu = contadorAu - 1;
    guardarDatos("contador", contadorAu);
}


function init() {
    document.getElementById("logout").addEventListener("click", cerrarSesion, false);
    document.getElementById("incrementar").addEventListener("click", incrementar, false);
    document.getElementById("decrementar").addEventListener("click", decrementar, false);
}

comprobarUsuario();
comprobarSoporte();
mandarSaludo();
