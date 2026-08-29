/* 🌸 Fecha actual según la hora local */

function obtenerFechaLocal() {
    const fecha = new Date();

    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const dia = String(fecha.getDate()).padStart(2, "0");

    return `${año}-${mes}-${dia}`;
}

const hoy = obtenerFechaLocal();


/* 📅 Datos diarios */

function obtenerDatosDiarios() {
    const guardado = JSON.parse(
        localStorage.getItem("bloomDatosDiarios") || "null"
    );

    if (!guardado || guardado.fecha !== hoy) {

        const datosNuevos = {
            fecha: hoy,
            sesiones: [],
            vasos: []
        };

        localStorage.setItem(
            "bloomDatosDiarios",
            JSON.stringify(datosNuevos)
        );

        return datosNuevos;
    }

    return guardado;
}


function guardarDatosDiarios(datos) {
    localStorage.setItem(
        "bloomDatosDiarios",
        JSON.stringify(datos)
    );
}


/* 🔐 Protección con PIN */

const paginaActual = window.location.pathname.split("/").pop();

if (
    paginaActual !== "pin.html" &&
    sessionStorage.getItem("bloomDesbloqueada") !== "true"
) {
    window.location.href = "pin.html";
}