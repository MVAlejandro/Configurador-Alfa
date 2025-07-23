
// IMPORTACIÓN DE FUNCIONES EXTERNAS
// Importar funciones de validación Barrote
import {validarCamposInvalidos,
        validarLargoTSB, validarAnchoTSB, validarGrosorTSB, 
        validarLargoTIB, validarAnchoTIB, validarGrosorTIB,
        validarLargoB, validarAnchoB, validarGrosorB} from "./validaciones/validaBarrote.js"
// Importar funciones de validación Tacón
import {validarLargoTST, validarAnchoTST, validarGrosorTST,  
        validarLargoTIL, validarAnchoTIL, validarGrosorTIT,
        validarLargoTIC, validarAnchoTIC,
        validarLargoTA, validarAnchoTA, validarGrosorTA,
        validarLargoTC, validarAnchoTC, validarGrosorTC} from "./validaciones/validaTacon.js"

// Declarar el arreglo para guardar los objetos, y recupera en caso de existir
let carrito = JSON.parse(localStorage.getItem("carrito")) || []; 
// Declarar el objeto formData para después
let formData = {};


// VALIDACIONES DE LOS CAMPOS INTRODUCIDOS
// Función que inicia las validaciones de barrote
export function inicializarValidacionesB() {
    const largoGralIn = document.getElementById('largoGral');
    const anchoGralIn = document.getElementById('anchoGral');
    const grosorGralIn = document.getElementById('grosorGral');

    const cantidadTSIn = document.getElementById('cantidadTS');
    const largoTSIn = document.getElementById('largoTS');
    const anchoTSIn = document.getElementById('anchoTS');
    const grosorTSIn = document.getElementById('grosorTS');

    const largoTIIn = document.getElementById('largoTI');
    const anchoTIIn = document.getElementById('anchoTI');
    const grosorTIIn = document.getElementById('grosorTI');

    const largoBIn = document.getElementById('largoB');
    const anchoBIn = document.getElementById('anchoB');
    const grosorBIn = document.getElementById('grosorB');

    const errorTS1 = document.getElementById('error-lTS');
    const errorTS2 = document.getElementById('error-aTS');
    const errorTS3 = document.getElementById('error-gTS');

    const errorTI1 = document.getElementById('error-lTI');
    const errorTI2 = document.getElementById('error-aTI');
    const errorTI3 = document.getElementById('error-gTI');

    const errorB1 = document.getElementById('error-lB');
    const errorB2 = document.getElementById('error-aB');
    const errorB3 = document.getElementById('error-gB');

        // TABLA SUPERIOR
    // Validación Largo Tabla Superior
    if (largoTSIn && anchoGralIn && errorTS1) {
        validarLargoTSB(largoTSIn, anchoGralIn, errorTS1);
    }

    // Validación Ancho Tabla Superior
    if (anchoTSIn && largoGralIn && cantidadTSIn && errorTS2) {
        validarAnchoTSB(anchoTSIn, largoGralIn, cantidadTSIn, errorTS2);
    }

    // Validación Grueso Tabla Superior
    if (anchoBIn && grosorTSIn && grosorTIIn && grosorGralIn && errorTS3) {
        validarGrosorTSB(anchoBIn, grosorTSIn, grosorTIIn, grosorGralIn, errorTS3);
    }

        // TABLA INFERIOR
    // Validación Largo Tabla Inferior
    if (largoTIIn && anchoGralIn && errorTI1) {
        validarLargoTIB(largoTIIn, anchoGralIn, errorTI1);
    }

    // Validación Ancho Tabla Inferior
    if (anchoTSIn && anchoTIIn && errorTI2) {
        validarAnchoTIB(anchoTSIn, anchoTIIn, errorTI2);
    }

    // Validación Grueso Tabla Inferior
    if (anchoBIn && grosorTSIn && grosorTIIn && grosorGralIn && errorTI3) {
        validarGrosorTIB(anchoBIn, grosorTSIn, grosorTIIn, grosorGralIn, errorTI3);
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

// Función que inicia las validaciones de tacón
export function inicializarValidacionesT() {
    // Validaciones generales
    const largoGralIn = document.getElementById('largoGral');
    const anchoGralIn = document.getElementById('anchoGral');
    const grosorGralIn = document.getElementById('grosorGral');

    const cantidadTSIn = document.getElementById('cantidadTS');
    const largoTSIn = document.getElementById('largoTS');
    const anchoTSIn = document.getElementById('anchoTS');
    const grosorTSIn = document.getElementById('grosorTS');

    const largoTILIn = document.getElementById('largoTIL');
    const anchoTILIn = document.getElementById('anchoTIL');
    const grosorTILIn = document.getElementById('grosorTIL');

    const largoTICIn = document.getElementById('largoTIC');
    const anchoTICIn = document.getElementById('anchoTIC');
    const grosorTICIn = document.getElementById('grosorTIC');

    const largoTALIn = document.getElementById('largoTAL');
    const anchoTALIn = document.getElementById('anchoTAL');
    const grosorTALIn = document.getElementById('grosorTAL');

    const largoTACIn = document.getElementById('largoTAC');
    const anchoTACIn = document.getElementById('anchoTAC');
    const grosorTACIn = document.getElementById('grosorTAC');

    const largoTCIn = document.getElementById('largoTC');
    const anchoTCIn = document.getElementById('anchoTC');
    const grosorTCIn = document.getElementById('grosorTC');
    
    const errorTS1 = document.getElementById('error-lTS');
    const errorTS2 = document.getElementById('error-aTS');
    const errorTS3 = document.getElementById('error-gTS');

    const errorTIL1 = document.getElementById('error-lTIL');
    const errorTIL2 = document.getElementById('error-aTIL');
    const errorTIL3 = document.getElementById('error-gTIL');

    const errorTIC1 = document.getElementById('error-lTIC');
    const errorTIC2 = document.getElementById('error-aTIC');
    const errorTIC3 = document.getElementById('error-gTIC');

    const errorTAL1 = document.getElementById('error-lTAL');
    const errorTAL2 = document.getElementById('error-aTAL');
    const errorTAL3 = document.getElementById('error-gTAL');

    const errorTAC1 = document.getElementById('error-lTAC');
    const errorTAC2 = document.getElementById('error-aTAC');
    const errorTAC3 = document.getElementById('error-gTAC');

    const errorTC1 = document.getElementById('error-lTC');
    const errorTC2 = document.getElementById('error-aTC');
    const errorTC3 = document.getElementById('error-gTC');

        // TABLA SUPERIOR
    // Validación Largo Tabla Superior
    if (largoTSIn && anchoGralIn && errorTS1) {
        validarLargoTST(largoTSIn, anchoGralIn, errorTS1);
    }

    // Validación Ancho Tabla Superior
    if (anchoTSIn && largoGralIn && cantidadTSIn && errorTS2) {
        validarAnchoTST(anchoTSIn, largoGralIn, cantidadTSIn, errorTS2);
    }

    // Validación Grueso Tabla Superior
    if (grosorTSIn && grosorTILIn && grosorTALIn && grosorTCIn && grosorGralIn && errorTS3) {
        validarGrosorTST(grosorTSIn, grosorTILIn, grosorTALIn, grosorTCIn, grosorGralIn, errorTS3);
    }

        // TABLA INFERIOR
    // Validación Largo Tabla Inferior Lateral
    if (largoTILIn && anchoGralIn && errorTIL1) {
        validarLargoTIL(largoTILIn, anchoGralIn, errorTIL1);
    }
    // Validación Largo Tabla Inferior Central
    if (largoTICIn && anchoTILIn && largoGralIn && errorTIC1) {
        validarLargoTIC(largoTICIn, anchoTILIn, largoGralIn, errorTIC1);
    }

    // Validación Ancho Tabla Inferior Lateral
    if (largoTICIn && anchoTILIn && largoGralIn && errorTIL2) {
        validarAnchoTIL(largoTICIn, anchoTILIn, largoGralIn, errorTIL2);
    }
    // Validación Ancho Tabla Inferior Central
    if (anchoTSIn && anchoTICIn && errorTIC2) {
        validarAnchoTIC(anchoTSIn, anchoTICIn, errorTIC2);
    }

    // Validación Grueso Tabla Inferior Lateral
    if (grosorTSIn && grosorTILIn && grosorTALIn && grosorTCIn && grosorGralIn && errorTIL3) {
        validarGrosorTIT(grosorTSIn, grosorTILIn, grosorTALIn, grosorTCIn, grosorGralIn, errorTIL3);
    }
    // Validación Grueso Tabla Inferior Central
    if (grosorTSIn && grosorTICIn && grosorTALIn && grosorTCIn && grosorGralIn && errorTIC3) {
        validarGrosorTIT(grosorTSIn, grosorTICIn, grosorTALIn, grosorTCIn, grosorGralIn, errorTIC3);
    }
  
        // TACON LATERAL
    // Validación Largo Tacón
    if (largoTALIn && errorTAL1) {
        validarLargoTA(largoTALIn, errorTAL1);
    }

    // Validación Ancho Tacón
    if (anchoTALIn && anchoTCIn && errorTAL2) {
        validarAnchoTA(anchoTALIn, anchoTCIn, errorTAL2);
    }

    // Validación Grueso Tacón
    if (grosorTSIn && grosorTILIn && grosorTALIn && grosorTCIn && grosorGralIn && errorTAL3) {
        validarGrosorTA(grosorTSIn, grosorTILIn, grosorTALIn, grosorTCIn, grosorGralIn, errorTAL3);
    }

        // TACON CENTRAL
    // Validación Largo Tacón
    if (largoTACIn && errorTAC1) {
        validarLargoTA(largoTACIn, errorTAC1);
    }

    // Validación Ancho Tacón
    if (anchoTACIn && anchoTCIn && errorTAC2) {
        validarAnchoTA(anchoTACIn, anchoTCIn, errorTAC2);
    }

    // Validación Grueso Tacón
    if (grosorTSIn && grosorTILIn && grosorTACIn && grosorTCIn && grosorGralIn && errorTAC3) {
        validarGrosorTA(grosorTSIn, grosorTILIn, grosorTACIn, grosorTCIn, grosorGralIn, errorTAC3);
    }

        // TABLAS DE CARGA
    // Validación Largo Tacón
    if (largoTCIn && largoGralIn && errorTC1) {
        validarLargoTC(largoTCIn, largoGralIn, errorTC1);
    }

    // Validación Ancho Tacón
    if (anchoTCIn && anchoTALIn && errorTC2) {
        validarAnchoTC(anchoTCIn, anchoTALIn, errorTC2);
    }

    // Validación Grueso Tacón
    if (grosorTSIn && grosorTILIn && grosorTALIn && grosorTCIn && grosorGralIn && errorTC3) {
        validarGrosorTC(grosorTSIn, grosorTILIn, grosorTALIn, grosorTCIn, grosorGralIn, errorTC3);
    }
}


// GUARDAR INFORMACION EN JSON AL DAR CLICK EN "AGREGAR"
// Crear evento al dar click al botón Agregar
document.getElementById('btn_agregar').addEventListener('click', function(event) {
    event.preventDefault();

    let cantidad = 1;
    // Obtener los valores de los campos del formulario
    const tipo = document.getElementById('tipo').value;
    const subtipo = document.getElementById('subtipo').value;
    if (subtipo === "1") { return }
    const acomodo = document.getElementById('acomodo').value;
        
    // Obtener los datos de las tablas compartidos entre ambos tipos de tarima
    const largoGral = parseFloat(document.getElementById('largoGral').value);
    const anchoGral = parseFloat(document.getElementById('anchoGral').value);
    const grosorGral = parseFloat(document.getElementById('grosorGral').value);

    const variacionTS = document.getElementById('variacionTS')?.value || 'Único';

    let tablaSuperiorData = [];
    let cantidadTS, largoTS, anchoTS, grosorTS, separacionTS;

    if (variacionTS === 'Único') {
        // Recolección estándar
        cantidadTS = parseInt(document.getElementById('cantidadTS').value);
        largoTS = parseFloat(document.getElementById('largoTS').value);
        anchoTS = parseFloat(document.getElementById('anchoTS').value);
        grosorTS = parseFloat(document.getElementById('grosorTS').value);

        // Validar antes de guardar los valores
        if (!cantidadTS || !largoTS || !anchoTS || !grosorTS) {
            alert('Por favor completa todos los campos de la tabla superior.');
            return;
        }
        
        separacionTS = ((largoGral - (anchoTS * cantidadTS)) / (cantidadTS - 1)).toFixed(2);

        tablaSuperiorData.push({
            cantidadTS, largoTS, anchoTS, grosorTS, separacionTS
        });

    } else if (variacionTS === 'Variable') {
        const numVar = parseInt(document.getElementById('num_variacion').value);

        let totalOcupado = 0;
        let totalCantidad = 0;

        // Temporales para guardar y luego empujar
        const variacionesTemp = []; 

        for (let i = 0; i < numVar; i++) {
            const cant = parseInt(document.getElementById(`cantidadTS-${i}`).value);
            const largo = parseFloat(document.getElementById(`largoTS-${i}`).value);
            const ancho = parseFloat(document.getElementById(`anchoTS-${i}`).value);
            const grosor = parseFloat(document.getElementById(`grosorTS-${i}`).value);

            if (!cant || !largo || !ancho || !grosor) {
                alert(`Por favor completa todos los campos de la Variación ${i + 1}`);
                return;
            }

            totalCantidad += cant;
            totalOcupado += ancho * cant;

            variacionesTemp.push({
                cantidadTS: cant,
                largoTS: largo,
                anchoTS: ancho,
                grosorTS: grosor
                // separacionTS se agregará después
            });
        }

        const separacionGlobal = ((largoGral - totalOcupado) / (totalCantidad - 1)).toFixed(2);

        // Agregar separación a cada entrada
        variacionesTemp.forEach(variacion => {
            variacion.separacionTS = separacionGlobal;
            tablaSuperiorData.push(variacion);
        });
    }

        
    const cantidadTI = parseInt(document.getElementById('cantidadTI').value);
    const largoTI = parseFloat(document.getElementById('largoTI').value);
    const anchoTI = parseFloat(document.getElementById('anchoTI').value);
    const grosorTI = parseFloat(document.getElementById('grosorTI').value);

    // Obtener los datos de las tablas dependiendo el tipo de tarima
    // TARIMA DE BARROTE
    if (subtipo === 'Barrote') {
        let arregloTI = document.getElementById('arregloTI').value;
        let distBar = document.getElementById('distBar').value;

        // Si se elige un arreglo especial capturar la descripción
        if (arregloTI === 'Especial') {
            const arregloTI_texto = document.getElementById('arregloEsp').value;
            if (arregloTI_texto === "") {
                alert('Por favor, coloque la descripción del arreglo inferior');
                return;
            } else {
                arregloTI = arregloTI_texto
            }
        }

        const cantidadB = parseInt(document.getElementById('cantidadB').value);
        const tipoB = document.getElementById('tipoB').value;
        const largoB = parseFloat(document.getElementById('largoB').value);
        const anchoB = parseFloat(document.getElementById('anchoB').value);
        const grosorB = parseFloat(document.getElementById('grosorB').value);

        // VALIDAR LOS CAMPOS ANTES DE GUARDAR LA INFORMACIÓN
        if (!largoGral || !anchoGral || !grosorGral || 
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
            tipo, subtipo, acomodo, precioUnit, cantidad,
            largoGral, anchoGral, grosorGral,
            tablaSuperior: tablaSuperiorData,
            cantidadTI, largoTI, anchoTI, grosorTI, arregloTI,
            cantidadB, tipoB, largoB, anchoB, grosorB, distBar
        };

        // Agregar el objeto creado al carrito
        carrito.push(formData);
        // Guardar el carrito en localStorage
        localStorage.setItem("carrito", JSON.stringify(carrito));
        // Limpiar los campos
        location.reload();
         // Mostrar alerta de agregado correctamente
        alert('Datos guardados correctamente.');

    // TARIMA DE TACON
    } else if (subtipo === 'Tacón'){
        const distribucionTA = document.getElementById('distribucionTA').value; 
        const cantidadTAL = parseInt(document.getElementById('cantidadTAL').value);
        const largoTAL = parseFloat(document.getElementById('largoTAL').value);
        const anchoTAL = parseFloat(document.getElementById('anchoTAL').value);
        const grosorTAL = parseFloat(document.getElementById('grosorTAL').value);
            
        const cantidadTC = parseInt(document.getElementById('cantidadTC').value);
        const largoTC = parseFloat(document.getElementById('largoTC').value);
        const anchoTC = parseFloat(document.getElementById('anchoTC').value);
        const grosorTC = parseFloat(document.getElementById('grosorTC').value);

        if (distribucionTA === 'Estándar') {
            const cantidadTAC = parseInt(document.getElementById('cantidadTAC').value);
            const largoTAC = parseFloat(document.getElementById('largoTAC').value);
            const anchoTAC = parseFloat(document.getElementById('anchoTAC').value);
            const grosorTAC = parseFloat(document.getElementById('grosorTAC').value);

            // VALIDAR LOS CAMPOS ANTES DE GUARDAR LA INFORMACIÓN
            // Verificar si algún campo está vacío
            if (!largoGral || !anchoGral || !grosorGral ||
                !cantidadTI || !largoTI || !anchoTI || !grosorTI ||
                !cantidadTAL || !largoTAL || !anchoTAL || !grosorTAL ||
                !cantidadTAC || !largoTAC || !anchoTAC || !grosorTAC ||
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
                tipo, subtipo, acomodo, precioUnit, cantidad,
                largoGral, anchoGral, grosorGral,
                tablaSuperior: tablaSuperiorData,
                cantidadTI, largoTI, anchoTI, grosorTI,
                cantidadTAL, largoTAL, anchoTAL, grosorTAL, distribucionTA,
                cantidadTAC, largoTAC, anchoTAC, grosorTAC,
                cantidadTC, largoTC, anchoTC, grosorTC
            };

            // Agregar el objeto creado al carrito
            carrito.push(formData);
            // Guardar el carrito en localStorage
            localStorage.setItem("carrito", JSON.stringify(carrito));
            // Limpiar los campos
            location.reload();
            // Mostrar alerta de agregado correctamente
            alert('Datos guardados correctamente.');
        } else {
            // VALIDAR LOS CAMPOS ANTES DE GUARDAR LA INFORMACIÓN
            // Verificar si algún campo está vacío
            if (!largoGral || !anchoGral || !grosorGral ||
                !cantidadTI || !largoTI || !anchoTI || !grosorTI ||
                !cantidadTAL || !largoTAL || !anchoTAL || !grosorTAL ||
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
                tipo, subtipo, acomodo, precioUnit, cantidad,
                largoGral, anchoGral, grosorGral,
                tablaSuperior: tablaSuperiorData,
                cantidadTI, largoTI, anchoTI, grosorTI,
                cantidadTAL, largoTAL, anchoTAL, grosorTAL, distribucionTA,
                cantidadTC, largoTC, anchoTC, grosorTC
            };

            // Agregar el objeto creado al carrito
            carrito.push(formData);
            // Guardar el carrito en localStorage
            localStorage.setItem("carrito", JSON.stringify(carrito));
            // Limpiar los campos
            location.reload();
            // Mostrar alerta de agregado correctamente
            alert('Datos guardados correctamente.');
        }
    }
});

