const hoy = new Date().toISOString().split("T")[0];

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