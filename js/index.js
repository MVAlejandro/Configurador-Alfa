
// IMPORTACIÓN DE FUNCIONES EXTERNAS
// Importar funciones de validación de campos
import {validarCamposInvalidos} from "./validaciones/validaBarrote.js"

// Crear evento al dar click en botón Resumen
document.getElementById('btn_regresar').addEventListener('click', function () {
    window.location.href = './cliente.html';
});

// Declarar el arreglo para guardar los objetos, y recupera en caso de existir
let carrito = JSON.parse(localStorage.getItem("carrito")) || []; 
// Declarar el objeto formData para después
let formData = {};

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
    const toleranciaTS1 = document.getElementById('toleranciaTS1').value;
    const toleranciaTS2 = document.getElementById('toleranciaTS2').value;
    const toleranciaTS3 = document.getElementById('toleranciaTS3').value;

    const toleranciaTI1 = document.getElementById('toleranciaTI1').value;
    const toleranciaTI2 = document.getElementById('toleranciaTI2').value;
    const toleranciaTI3 = document.getElementById('toleranciaTI3').value;

    const largoGral = parseFloat(document.getElementById('largoGral').value);
    const anchoGral = parseFloat(document.getElementById('anchoGral').value);
    const grosorGral = parseFloat(document.getElementById('grosorGral').value);

    const variacionTS = document.getElementById('variacionTS')?.value || 'Único';

    let tablaSuperiorData = [];
    let cantidadTS, largoTS, anchoTS, grosorTS, separacionTS;

    if (variacionTS === 'Único') {
        // Recolección estándar
        cantidadTS = parseInt(document.getElementById('cantidadTS-1').value);
        largoTS = parseFloat(document.getElementById('largoTS-1').value);
        anchoTS = parseFloat(document.getElementById('anchoTS-1').value);
        grosorTS = parseFloat(document.getElementById('grosorTS-1').value);

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
        const numVar = 2;

        let totalOcupado = 0;
        let totalCantidad = 0;

        // Temporales para guardar y luego empujar
        const variacionesTemp = []; 

        for (let i = 0; i < numVar; i++) {
            const cant = parseInt(document.getElementById(`cantidadTS-${i+1}`).value);
            const largo = parseFloat(document.getElementById(`largoTS-${i+1}`).value);
            const ancho = parseFloat(document.getElementById(`anchoTS-${i+1}`).value);
            const grosor = parseFloat(document.getElementById(`grosorTS-${i+1}`).value);

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

    // Obtener los datos de las tablas dependiendo el tipo de tarima
    // TARIMA DE BARROTE
    if (subtipo === 'Barrote') {
        const toleranciaB1 = document.getElementById('toleranciaB1').value;
        const toleranciaB2 = document.getElementById('toleranciaB2').value;
        const toleranciaB3 = document.getElementById('toleranciaB3').value;
        const toleranciasData = [];

        toleranciasData.push({
            toleranciaTS1, toleranciaTS2, toleranciaTS3,
            toleranciaTI1, toleranciaTI2, toleranciaTI3,
            toleranciaB1, toleranciaB2, toleranciaB3
        });

        const cantidadTI = parseInt(document.getElementById('cantidadTI').value);
        const largoTI = parseFloat(document.getElementById('largoTI').value);
        const anchoTI = parseFloat(document.getElementById('anchoTI').value);
        const grosorTI = parseFloat(document.getElementById('grosorTI').value);

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

        if (tipoB === 'Con saque') {
            const distB = parseFloat(document.getElementById('distB').value);

            // VALIDAR LOS CAMPOS ANTES DE GUARDAR LA INFORMACIÓN
            if (!largoGral || !anchoGral || !grosorGral || 
                !cantidadTI || !largoTI || !anchoTI || !grosorTI ||
                !cantidadB || !largoB || !anchoB || !grosorB || !distB) {
                        
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
                cantidadB, tipoB, distB, largoB, anchoB, grosorB, distBar,
                tolerancias: toleranciasData
            };
        } else if (tipoB === 'Corrido') {
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
                cantidadB, tipoB, largoB, anchoB, grosorB, distBar,
                tolerancias: toleranciasData
            };
        }

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
        const toleranciaTA1 = document.getElementById('toleranciaTA1').value;
        const toleranciaTA2 = document.getElementById('toleranciaTA2').value;
        const toleranciaTA3 = document.getElementById('toleranciaTA3').value;

        const toleranciaTC1 = document.getElementById('toleranciaTC1').value;
        const toleranciaTC2 = document.getElementById('toleranciaTC2').value;
        const toleranciaTC3 = document.getElementById('toleranciaTC3').value;
        const toleranciasData = [];

        toleranciasData.push({
            toleranciaTS1, toleranciaTS2, toleranciaTS3,
            toleranciaTI1, toleranciaTI2, toleranciaTI3,
            toleranciaTA1, toleranciaTA2, toleranciaTA3,
            toleranciaTC1, toleranciaTC2, toleranciaTC3
        });

        let tablaInferiorData = [];
        const numVar = 2;

        for (let i = 0; i < numVar; i++) {
            const cant = parseInt(document.getElementById(`cantidadTI-${i+1}`).value);
            const largo = parseFloat(document.getElementById(`largoTI-${i+1}`).value);
            const ancho = parseFloat(document.getElementById(`anchoTI-${i+1}`).value);
            const grosor = parseFloat(document.getElementById(`grosorTI-${i+1}`).value);

            if (!cant || !largo || !ancho || !grosor) {
                alert(`Por favor completa todos los campos de la Tabla inferior ${i + 1}`);
                return;
            }

            tablaInferiorData.push({
                cantidadTI: cant,
                largoTI: largo,
                anchoTI: ancho,
                grosorTI: grosor
            });
        }

        const cantidadTAL = parseInt(document.getElementById('cantidadTAL').value);
        const largoTAL = parseFloat(document.getElementById('largoTAL').value);
        const anchoTAL = parseFloat(document.getElementById('anchoTAL').value);
        const grosorTAL = parseFloat(document.getElementById('grosorTAL').value);
            
        const cantidadTC = parseInt(document.getElementById('cantidadTC').value);
        const largoTC = parseFloat(document.getElementById('largoTC').value);
        const anchoTC = parseFloat(document.getElementById('anchoTC').value);
        const grosorTC = parseFloat(document.getElementById('grosorTC').value);

        const cantidadTAC = parseInt(document.getElementById('cantidadTAC').value);
        const largoTAC = parseFloat(document.getElementById('largoTAC').value);
        const anchoTAC = parseFloat(document.getElementById('anchoTAC').value);
        const grosorTAC = parseFloat(document.getElementById('grosorTAC').value);

        // VALIDAR LOS CAMPOS ANTES DE GUARDAR LA INFORMACIÓN
        // Verificar si algún campo está vacío
        if (!largoGral || !anchoGral || !grosorGral ||
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
            tablaInferior: tablaInferiorData,
            cantidadTAL, largoTAL, anchoTAL, grosorTAL, 
            cantidadTAC, largoTAC, anchoTAC, grosorTAC,
            cantidadTC, largoTC, anchoTC, grosorTC,
            tolerancias: toleranciasData
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

