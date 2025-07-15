
// IMPORTACIÓN DE FUNCIONES EXTERNAS
// Importar funciones de validación Barrote
import {validarCamposInvalidos,
        validarLargoTS, validarAnchoTS, 
        validarLargoTI, validarAnchoTI,
        validarLargoB, validarAnchoB} from "./validaciones/validaBarrote.js"
// Importar funciones de validación Tacón

// Declarar el objeto formData para después
let formData = {};


// VALIDACIONES DE LOS CAMPOS INTRODUCIDOS
// Función que inicia las validaciones
export function inicializarValidaciones() {
    // Validaciones generales
    const largoGralIn = document.getElementById('largoGral');
    const anchoGralIn = document.getElementById('anchoGral');
    const grosorGralIn = document.getElementById('grosorGral');

    const cantidadTSIn = document.getElementById('cantidadTS');
    const largoTSIn = document.getElementById('largoTS');
    const anchoTSIn = document.getElementById('anchoTS');
    const grosorTSIn = document.getElementById('grosorTS');

    const cantidadTIIn = document.getElementById('cantidadTI');
    const largoTIIn = document.getElementById('largoTI');
    const anchoTIIn = document.getElementById('anchoTI');
    const grosorTIIn = document.getElementById('grosorTI');
    
    const errorTS1 = document.getElementById('error-lTS');
    const errorTS2 = document.getElementById('error-aTS');
    const errorTS3 = document.getElementById('error-gTS');

    const errorTI1 = document.getElementById('error-lTI');
    const errorTI2 = document.getElementById('error-aTI');
    const errorTI3 = document.getElementById('error-gTI');

        // TABLA SUPERIOR
    // Validación Largo Tabla Superior
    if (largoTSIn && anchoGralIn && errorTS1) {
        validarLargoTS(largoTSIn, anchoGralIn, errorTS1);
    }

    // Validación Ancho Tabla Superior
    if (anchoTSIn && largoGralIn && cantidadTSIn && errorTS2) {
        validarAnchoTS(anchoTSIn, largoGralIn, cantidadTSIn, errorTS2);
    }

    // Validación Grueso Tabla Superior
  
        // TABLA INFERIOR
    // Validación Largo Tabla Inferior
    if (largoTIIn && anchoGralIn && errorTI1) {
        validarLargoTI(largoTIIn, anchoGralIn, errorTI1);
    }

    // Validación Ancho Tabla Inferior
    if (anchoTSIn && anchoTIIn && errorTI2) {
        validarAnchoTI(anchoTSIn, anchoTIIn, errorTI2);
    }

    // Validación Grueso Tabla Inferior
  
    // Validaciones barrotes
        // BARROTE
    const cantidadBIn = document.getElementById('cantidadB');
    const largoBIn = document.getElementById('largoB');
    const anchoBIn = document.getElementById('anchoB');
    const grosorBIn = document.getElementById('grosorB');

    const errorB1 = document.getElementById('error-lB');
    const errorB2 = document.getElementById('error-aB');
    const errorB3 = document.getElementById('error-gB');

    // Validación Largo Barrote
    if (largoBIn && largoGralIn && errorB1) {
        validarLargoB(largoBIn, largoGralIn, errorB1);
    }

    // Validación Ancho Barrote 
    if (anchoBIn && grosorTSIn && grosorTIIn && grosorGralIn && errorB2) {
        validarAnchoB(anchoBIn, grosorTSIn, grosorTIIn, grosorGralIn, errorB2);
    }

    // Validación Grueso Barrote

}


// GUARDAR INFORMACION EN JSON AL DAR CLICK EN "AGREGAR"
// Crear evento al dar click al botón Agregar
document.getElementById('btn_agregar').addEventListener('click', function(event) {
    // Prevenir comportamiento predeterminado del botón
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const tipo = document.getElementById('tipo').value;
    const subtipo = document.getElementById('subtipo').value;
        
    // Obtener los datos de las tablas compartidos entre ambos tipos de tarima
    const largoGral = parseFloat(document.getElementById('largoGral').value);
    const anchoGral = parseFloat(document.getElementById('anchoGral').value);
    const grosorGral = parseFloat(document.getElementById('grosorGral').value);

    const cantidadTS = parseInt(document.getElementById('cantidadTS').value);
    const largoTS = parseFloat(document.getElementById('largoTS').value);
    const anchoTS = parseFloat(document.getElementById('anchoTS').value);
    const grosorTS = parseFloat(document.getElementById('grosorTS').value);
        
    const cantidadTI = parseInt(document.getElementById('cantidadTI').value);
    const largoTI = parseFloat(document.getElementById('largoTI').value);
    const anchoTI = parseFloat(document.getElementById('anchoTI').value);
    const grosorTI = parseFloat(document.getElementById('grosorTI').value);

    // Obtener los datos de las tablas dependiendo el tipo de tarima
    // TARIMA DE BARROTE
    if (subtipo === '2') {
        const cantidadB = parseInt(document.getElementById('cantidadB').value);
        const largoB = parseFloat(document.getElementById('largoB').value);
        const anchoB = parseFloat(document.getElementById('anchoB').value);
        const grosorB = parseFloat(document.getElementById('grosorB').value);

        // VALIDAR LOS CAMPOS ANTES DE GUARDAR LA INFORMACIÓN
        // Validar si algún campo está vacío
        if (!tipo || !subtipo || !largoGral || !anchoGral || !grosorGral ||
            !cantidadTS || !largoTS || !anchoTS || !grosorTS ||
            !cantidadTI || !largoTI || !anchoTI || !grosorTI ||
            !cantidadB || !largoB || !anchoB || !grosorB) {
                
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
        formData = {
            tipo,
            subtipo,
            largoGral, anchoGral, grosorGral,
            cantidadTS, largoTS, anchoTS, grosorTS,
            cantidadTI, largoTI, anchoTI, grosorTI,
            cantidadB, largoB, anchoB, grosorB
        };

    // TARIMA DE TACON
    } else if (subtipo === '3'){
        const cantidadTA = parseInt(document.getElementById('cantidadTA').value);
        const largoTA = parseFloat(document.getElementById('largoTA').value);
        const anchoTA = parseFloat(document.getElementById('anchoTA').value);
        const grosorTA = parseFloat(document.getElementById('grosorTA').value);
            
        const cantidadTC = parseInt(document.getElementById('cantidadTC').value);
        const largoTC = parseFloat(document.getElementById('largoTC').value);
        const anchoTC = parseFloat(document.getElementById('anchoTC').value);
        const grosorTC = parseFloat(document.getElementById('grosorTC').value);

        // VALIDAR LOS CAMPOS ANTES DE GUARDAR LA INFORMACIÓN
        // Verificar si algún campo está vacío
        if (!tipo || !subtipo || !largoGral || !anchoGral || !grosorGral ||
            !cantidadTS || !largoTS || !anchoTS || !grosorTS ||
            !cantidadTI || !largoTI || !anchoTI || !grosorTI ||
            !cantidadTA || !largoTA || !anchoTA || !grosorTA ||
            !cantidadTC || !largoTC || !anchoTC || !grosorTC) {
                
            // Si algún campo está vacío, mostrar mensaje de error
            alert('Por favor, complete todos los campos para agregar el producto.');
            return; // Detener la ejecución y no continuar
        } 
        // Validar si hay campos inválidos
        const campos = document.querySelectorAll('input');
        if (!validarCamposInvalidos(campos)) {
            alert('Corrige los errores antes de guardar.');
            return; 
        }

        // Crear un objeto con todos los datos del formulario
        formData = {
            tipo,
            subtipo,
            largoGral, anchoGral, grosorGral,
            cantidadTS, largoTS, anchoTS, grosorTS,
            cantidadTI, largoTI, anchoTI, grosorTI,
            cantidadTA, largoTA, anchoTA, grosorTA,
            cantidadTC, largoTC, anchoTC, grosorTC
        };
    }


    // Convertir el objeto JSON a string
    const formDataJSON = JSON.stringify(formData);

    // Guardar el JSON en localStorage
    localStorage.setItem('formData', formDataJSON);

    // Limpiar los campos
    location.reload();

    // Mostrar alerta de agregado correctamente
    alert('Datos guardados correctamente.');
});

