
// IMPORTACIÓN DE FUNCIONES EXTERNAS
// Importar funciones de validación Barrote
import {validarCamposInvalidos,
        validarLargoTS, validarAnchoTS, validarGrosorTS, 
        validarLargoTI, validarAnchoTI, validarGrosorTI,
        validarLargoB, validarAnchoB, validarGrosorB} from "./validaciones/validaBarrote.js"
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

    // Validaciones barrotes 
    const cantidadBIn = document.getElementById('cantidadB');
    const largoBIn = document.getElementById('largoB');
    const anchoBIn = document.getElementById('anchoB');
    const grosorBIn = document.getElementById('grosorB');

    const errorB1 = document.getElementById('error-lB');
    const errorB2 = document.getElementById('error-aB');
    const errorB3 = document.getElementById('error-gB');
    
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
    if (anchoBIn && grosorTSIn && grosorTIIn && grosorGralIn && errorTS3) {
        validarGrosorTS(anchoBIn, grosorTSIn, grosorTIIn, grosorGralIn, errorTS3);
    }

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
    if (anchoBIn && grosorTSIn && grosorTIIn && grosorGralIn && errorTI3) {
        validarGrosorTI(anchoBIn, grosorTSIn, grosorTIIn, grosorGralIn, errorTI3);
    }
  
        // BARROTE
    // Validación Largo Barrote
    if (largoBIn && largoGralIn && errorB1) {
        validarLargoB(largoBIn, largoGralIn, errorB1);
    }

    // Validación Ancho Barrote 
    if (anchoBIn && grosorTSIn && grosorTIIn && grosorGralIn && errorB2) {
        validarAnchoB(anchoBIn, grosorTSIn, grosorTIIn, grosorGralIn, errorB2);
    }

    // Validación Grueso Barrote
    if (grosorBIn && errorB3) {
        validarGrosorB(grosorBIn, errorB3);
    }
}


// GUARDAR INFORMACION EN JSON AL DAR CLICK EN "AGREGAR"
// Crear evento al dar click al botón Agregar
document.getElementById('btn_agregar').addEventListener('click', function(event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const tipo = document.getElementById('tipo').value;
    const subtipo = document.getElementById('subtipo').value;
    const acomodo = document.getElementById('acomodo').value;
        
    // Obtener los datos de las tablas compartidos entre ambos tipos de tarima
    const largoGral = parseFloat(document.getElementById('largoGral').value);
    const anchoGral = parseFloat(document.getElementById('anchoGral').value);
    const grosorGral = parseFloat(document.getElementById('grosorGral').value);

    const cantidadTS = parseInt(document.getElementById('cantidadTS').value);
    const largoTS = parseFloat(document.getElementById('largoTS').value);
    const anchoTS = parseFloat(document.getElementById('anchoTS').value);
    const grosorTS = parseFloat(document.getElementById('grosorTS').value);
    const separacionTS = ((largoGral - (anchoTS * cantidadTS)) / (cantidadTS - 1)).toFixed(2);
        
    const cantidadTI = parseInt(document.getElementById('cantidadTI').value);
    const largoTI = parseFloat(document.getElementById('largoTI').value);
    const anchoTI = parseFloat(document.getElementById('anchoTI').value);
    const grosorTI = parseFloat(document.getElementById('grosorTI').value);

    // Obtener los datos de las tablas dependiendo el tipo de tarima
    // TARIMA DE BARROTE
    if (subtipo === 'Barrote') {
        let arregloTI = document.getElementById('arregloTI').value;

        // Si se elige un arreglo especial capturar la descripción
        if (arregloTI === 'Especial') {
            let arregloEsp = document.getElementById('arregloEsp').value;
            arregloTI = arregloEsp;
        }

        const cantidadB = parseInt(document.getElementById('cantidadB').value);
        const tipoB = document.getElementById('tipoB').value;
        const largoB = parseFloat(document.getElementById('largoB').value);
        const anchoB = parseFloat(document.getElementById('anchoB').value);
        const grosorB = parseFloat(document.getElementById('grosorB').value);

        // VALIDAR LOS CAMPOS ANTES DE GUARDAR LA INFORMACIÓN
        // Validar si algún campo está vacío
        if (!largoGral || !anchoGral || !grosorGral ||
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

        // COSTO //
        // Valores para calcular los costos
        const costoBase = 500; // costo base tarima
        const costoTablaSuperior = 100; // tabla superior
        const costoTablaInferior = 80; // tabla inferior
        const costoBarrote = 50; // tacón 

        // Calcular precio unitario de la tarima
        const desgloce1 = costoBase + costoTablaSuperior; // base + tabla superior
        const desgloce2 = costoTablaInferior + costoBarrote; // tabla inferior + tacón 
        const desgloce3 = costoBarrote + costoBarrote; // tacón chico + tablas de carga

        const precioUnit = desgloce1 + desgloce2 + desgloce3;

        // Crear un objeto con todos los datos del formulario
        formData = {
            tipo, subtipo, acomodo, precioUnit,
            largoGral, anchoGral, grosorGral,
            cantidadTS, largoTS, anchoTS, grosorTS, separacionTS,
            cantidadTI, largoTI, anchoTI, grosorTI, arregloTI,
            cantidadB, tipoB, largoB, anchoB, grosorB
        };

        // Convertir el objeto JSON a string
        const formDataJSON = JSON.stringify(formData);

        // Guardar el JSON en localStorage
        localStorage.setItem('formData', formDataJSON);
        // Limpiar los campos
        location.reload();
         // Mostrar alerta de agregado correctamente
        alert('Datos guardados correctamente.');

    // TARIMA DE TACON
    } else if (subtipo === 'Tacón'){
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
        if (!largoGral || !anchoGral || !grosorGral ||
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

        // COSTO //
        // Valores para calcular los costos
        const costoBase = 500; // costo base tarima
        const costoTablaSuperior = 100; // tabla superior
        const costoTablaInferior = 80; // tabla inferior
        const costoTacon = 50; // tacón 
        const costoCarga = 70; // tablas de carga

        // Calcular precio unitario de la tarima
        const desgloce1 = costoBase + costoTablaSuperior; // base + tabla superior
        const desgloce2 = costoTablaInferior + costoTacon; // tabla inferior + tacón 
        const desgloce3 = costoTacon + costoCarga; // tacón chico + tablas de carga

        const precioUnit = desgloce1 + desgloce2 + desgloce3;

        // Crear un objeto con todos los datos del formulario
        formData = {
            tipo, subtipo, acomodo, precioUnit,
            largoGral, anchoGral, grosorGral,
            cantidadTS, largoTS, anchoTS, grosorTS, separacionTS,
            cantidadTI, largoTI, anchoTI, grosorTI,
            cantidadTA, largoTA, anchoTA, grosorTA,
            cantidadTC, largoTC, anchoTC, grosorTC
        };

        // Convertir el objeto JSON a string
        const formDataJSON = JSON.stringify(formData);

        // Guardar el JSON en localStorage
        localStorage.setItem('formData', formDataJSON);
        // Limpiar los campos
        location.reload();
        // Mostrar alerta de agregado correctamente
        alert('Datos guardados correctamente.');
    }

});

