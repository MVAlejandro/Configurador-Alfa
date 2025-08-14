
// Función para validar que exista una sesión y un cliente activo
(function validarSesionYCliente() {
    // Validar sesión activa
    try {
        const sesion = JSON.parse(localStorage.getItem("sesionActiva"));
        if (!sesion || !sesion.activa) {
            window.location.href = "login.html";
            return;
        }
    } catch (error) {
        window.location.href = "login.html";
        return;
    }

    // No validar cliente si ya estamos en cliente.html
    // Obtener el nombre del archivo actual
    const paginaActual = window.location.pathname.split("/").pop();
    if (paginaActual !== "cliente.html") {
        const clienteActual = localStorage.getItem("clienteActual");
        if (!clienteActual) {
            window.location.href = "cliente.html";
            return;
        }
    }
})();