
// IMPORTACIÓN DE FUNCIONES EXTERNAS
// Importar funciones de validación Barrote
import {validarCamposInvalidos,
        validarLargoTSB, validarAnchoTSB, validarGrosorTSB, 
        validarLargoTIB, validarAnchoTIB, validarGrosorTIB,
        validarLargoB, validarAnchoB, validarGrosorB} from "./validaciones/validaBarrote.js"
// Importar funciones de validación Tacón
import {validarLargoTST, validarAnchoTST,  
        validarLargoTIT, validarAnchoTIT} from "./validaciones/validaTacon.js"

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

    const cantidadTIIn = document.getElementById('cantidadTI');
    const largoTIIn = document.getElementById('largoTI');
    const anchoTIIn = document.getElementById('anchoTI');
    const grosorTIIn = document.getElementById('grosorTI');

    const cantidadBIn = document.getElementById('cantidadB');
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
        validarLargoTST(largoTSIn, anchoGralIn, errorTS1);
    }

    // Validación Ancho Tabla Superior
    if (anchoTSIn && largoGralIn && cantidadTSIn && errorTS2) {
        validarAnchoTST(anchoTSIn, largoGralIn, cantidadTSIn, errorTS2);
    }

    // Validación Grueso Tabla Superior
    // if (anchoBIn && grosorTSIn && grosorTIIn && grosorGralIn && errorTS3) {
    //     validarGrosorTS(anchoBIn, grosorTSIn, grosorTIIn, grosorGralIn, errorTS3);
    // }

        // TABLA INFERIOR
    // Validación Largo Tabla Inferior
    if (largoTIIn && anchoGralIn && errorTI1) {
        validarLargoTIT(largoTIIn, anchoGralIn, errorTI1);
    }

    // Validación Ancho Tabla Inferior
    if (anchoTSIn && anchoTIIn && errorTI2) {
        validarAnchoTIT(anchoTSIn, anchoTIIn, errorTI2);
    }

    // Validación Grueso Tabla Inferior
    // if (anchoBIn && grosorTSIn && grosorTIIn && grosorGralIn && errorTI3) {
    //     validarGrosorTI(anchoBIn, grosorTSIn, grosorTIIn, grosorGralIn, errorTI3);
    // }
  
        // TACON

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

        separacionTS = ((anchoGral - (anchoTS * cantidadTS)) / (cantidadTS - 1)).toFixed(2);

        tablaSuperiorData.push({
            cantidadTS, largoTS, anchoTS, grosorTS, separacionTS
        });

    } else if (variacionTS === 'Variable') {
        const numVar = parseInt(document.getElementById('num_variacion').value);

        if (num_variacion === "1") {
            return
        }

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

        const separacionGlobal = ((anchoGral - totalOcupado) / (totalCantidad - 1)).toFixed(2);

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
        let distribucionTS = "Estándar";
        let arregloTI = document.getElementById('arregloTI').value;
        let distBar = "Estándar";

        // Si la variación de tablas superiores está activa, captura la descripción
        if (variacionTS === 'Variable') {
            const distribucionTS_texto = document.getElementById('distribucionTS').value;
            if (distribucionTS_texto === "") {
                alert('Por favor, coloque la descripción de la distribución superior');
                return;
            } else {
                distribucionTS = distribucionTS_texto
            }
        }


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

        // Si se elige saque capturar la distribución
        if (tipoB.value === 'Con saque') {
            const distBar_texto = document.getElementById('distBar').value;
            if (distBar_texto === "") {
                alert('Por favor, coloque la descripción de la distribución del saque');
                return;
            } else {
                distBar = distBar_texto
            }
        }

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
            tablaSuperior: tablaSuperiorData, distribucionTS,
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
        let distribucionTS = "Estándar";

        // Si la variación de tablas superiores está activa, captura la descripción
        if (variacionTS === 'Variable') {
            const distribucionTS_texto = document.getElementById('distribucionTS').value;
            if (distribucionTS_texto === "") {
                alert('Por favor, coloque la descripción de la distribución superior');
                return;
            } else {
                distribucionTS = distribucionTS_texto
            }
        }

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
            tipo, subtipo, acomodo, precioUnit, cantidad,
            largoGral, anchoGral, grosorGral,
            tablaSuperior: tablaSuperiorData, distribucionTS,
            cantidadTI, largoTI, anchoTI, grosorTI,
            cantidadTA, largoTA, anchoTA, grosorTA,
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
});

