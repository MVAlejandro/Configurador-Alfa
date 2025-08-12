
// IMPORTACIÓN DE FUNCIONES EXTERNAS
// Importar funciones de validación de campos
import {validarCamposInvalidos} from "./validaciones/valida_campos.js"
import {validarText, validarNombre, validarRfc, validarEmail, validarTelefono, validarCP} from "./validaciones/valida_cliente.js"

// Declarar el objeto cliente para después
let cliente = {};

// Crear evento al dar click en botón Siguiente
document.getElementById("btn_siguiente").addEventListener("click", function () {
    const razonSocial = document.getElementById("razon").value.trim();
    const rfc = document.getElementById("rfc").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const codigoPostal = document.getElementById("cp").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const destino = document.getElementById("destino").value.trim();

    // Validar los campos introducidos
    const razonSocialIn = document.getElementById("razon");
    const rfcIn = document.getElementById("rfc");
    const nombreIn = document.getElementById("nombre");
    const codigoPostalIn = document.getElementById("cp");
    const direccionIn = document.getElementById("direccion");
    const numeroIn = document.getElementById("numero");
    const correoIn = document.getElementById("correo");
    const destinoIn = document.getElementById("destino");

    const error_razonSocial = document.getElementById("error-razon");
    const error_rfc = document.getElementById("error-rfc");
    const error_nombre = document.getElementById("error-nombre");
    const error_codigoPostal = document.getElementById("error-cp");
    const error_direccion = document.getElementById("error-direccion");
    const error_numero = document.getElementById("error-numero");
    const error_correo = document.getElementById("error-correo");
    const error_destino = document.getElementById("error-destino");

    validarText(razonSocialIn, error_razonSocial);
    validarRfc(rfcIn, error_rfc);
    validarNombre(nombreIn, error_nombre);
    validarCP(codigoPostalIn, error_codigoPostal);
    validarText(direccionIn, error_direccion);
    validarTelefono(numeroIn, error_numero);
    validarEmail(correoIn, error_correo);
    validarText(destinoIn, error_destino);

    // VALIDAR LOS CAMPOS ANTES DE GUARDAR LA INFORMACIÓN
    if (!razonSocial || !rfc || !nombre || !codigoPostal || !direccion || !numero || !correo || !destino) {         
        alert('Por favor, complete todos los campos para continuar.');
        return;
    }

    // Validar si hay campos inválidos
    const campos = document.querySelectorAll('input');
    if (!validarCamposInvalidos(campos)) {
        alert('Corrige los errores antes de guardar.');
        return;
    }

    cliente = {
        razonSocial, rfc, nombre, codigoPostal, direccion, numero, correo, destino
    }

    // Guardar en localStorage
    localStorage.setItem("clienteActual", JSON.stringify(cliente));
    // Mostrar alerta de agregado correctamente
    alert('Datos guardados correctamente.');
    console.log("Cliente guardado:", cliente);

    window.location.href = './index.html';
  });