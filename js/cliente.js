
// Crear evento al dar click en botón Siguiente
document.getElementById('btn_siguiente').addEventListener('click', function () {
    window.location.href = './index.html';
});

// Declarar el objeto cliente para después
let cliente = {};

document.getElementById("btn_siguiente").addEventListener("click", function () {
    const razonSocial = document.getElementById("razon").value.trim();
    const rfc = document.getElementById("rfc").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const codigoPostal = document.getElementById("cp").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const destino = document.getElementById("destino").value.trim();

    cliente = {
        razonSocial, rfc, nombre, codigoPostal, direccion, numero, destino
    }

    // Guardar en localStorage
    localStorage.setItem("clienteActual", JSON.stringify(cliente));
    // Mostrar alerta de agregado correctamente
    alert('Datos guardados correctamente.');
    console.log("Cliente guardado:", cliente);

  });