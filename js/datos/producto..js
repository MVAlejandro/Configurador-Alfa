
// IMPORTACIÓN DE FUNCIONES EXTERNAS
// Importar funciones de validación de campos
import {validarCamposInvalidos} from "../validaciones/valida_campos.js"

export function productoData() {
    // Declarar el objeto formData para después
    let producto = {};

    // Obtener los valores de los campos del formulario
    const tipo = document.getElementById('tipo').value;
    const subtipo = document.getElementById('subtipo').value;
    const acomodo = document.getElementById('acomodo').value;

    const largoGral = parseFloat(document.getElementById('largoGral').value);
    const anchoGral = parseFloat(document.getElementById('anchoGral').value);
    const grosorGral = parseFloat(document.getElementById('grosorGral').value);

    let cantidad = 1;
    let precioUnit = 0;

    if (!largoGral || !anchoGral || !grosorGral) {
        alert('Por favor, complete todos los campos para agregar el producto.');
        return;
    }

    // Validar si hay campos inválidos
    const campos = document.querySelectorAll('input');
    if (!validarCamposInvalidos(campos)) {
        alert('Corrige los errores antes de guardar.');
        return;
    }

    // Crear un objeto con todos los datos del formulario
    producto = {
        tipo, subtipo, acomodo, precioUnit, cantidad,
        largoGral, anchoGral, grosorGral,
    };

    return producto;
}