
// IMPORTACIÓN DE FUNCIONES EXTERNAS
// Importar funciones de validación de campos
import {validarCamposInvalidos} from "./validaciones/valida_campos.js"
// Importar la función para obtener la imagen del plano
import {obtenerPlanoB} from './planos/plano_barrote.js'; 
import {obtenerPlanoT} from './planos/plano_tacon.js';

// Crear evento al dar click en botón Resumen
document.getElementById('btn_regresar').addEventListener('click', function () {
    window.location.href = './cliente.html';
});

// Recuperar los datos del localStorage e introducir el nombre del cliente
const cliente = JSON.parse(localStorage.getItem("clienteActual"));
console.log(cliente);

const cliente_activo = document.getElementById('cliente_activo');
cliente_activo.innerText = cliente.nombre;

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
    const materialTS = document.getElementById('materialTS').value;
    const materialTI = document.getElementById('materialTI').value;

    const toleranciaTS = document.getElementById('toleranciaTS').value;
    const toleranciaTI = document.getElementById('toleranciaTI').value;

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
    // Función auxiliar para capturar el valor de los radios
    function capturarValorRadio(nombreGrupo) {
        const radios = document.querySelectorAll(`input[name="${nombreGrupo}"]`);
        for (let radio of radios) {
            if (radio.checked) {
                return radio.id;  // Retorna el id del radio seleccionado
            }
        }
    };
    // Crear un arreglo para los valores seleccionados
    let servicios = {};

    // TARIMA DE BARROTE
    if (subtipo === 'Barrote') {
        // Captura los valores de los radios de servicios
        const pinturaSeleccionada = capturarValorRadio("pintura");
        if (tipo === 'Nueva') {
            servicios = {
                Armado: capturarValorRadio("armado") === "armado1" ? "Sí" : "No",
                HT: capturarValorRadio("HT") === "HT1" ? "Sí" : "No",
                Pintura: capturarValorRadio("pintura") === "pintura1" ? "Sí" : "No",
                Fumigacion: capturarValorRadio("fumigacion") === "fumigacion1" ? "Sí" : "No",
                Transporte: capturarValorRadio("transporte") === "transporte1" ? "Sí" : "No"
            };

            // Añadir el color de pintura si la opción es "Sí"
            if (pinturaSeleccionada === "pintura1") {
                const colorIn = document.getElementById("color");
                servicios.Color = colorIn.value;
            }

        } else {
            servicios = {
                Reparado: capturarValorRadio("reparado") === "reparado1" ? "Sí" : "No",
                Armado: capturarValorRadio("armado") === "armado1" ? "Sí" : "No",
                HT: capturarValorRadio("HT") === "HT1" ? "Sí" : "No",
                Pintura: capturarValorRadio("pintura") === "pintura1" ? "Sí" : "No",
                Fumigacion: capturarValorRadio("fumigacion") === "fumigacion1" ? "Sí" : "No",
                Transporte: capturarValorRadio("transporte") === "transporte1" ? "Sí" : "No"
            };

            // Añadir el color de pintura si la opción es "Sí"
            if (pinturaSeleccionada === "pintura1") {
                const colorIn = document.getElementById("color");
                servicios.Color = colorIn.value;
            }
        }

        const materialB = document.getElementById('materialB').value;
        const materialesData = []

        materialesData.push({
            materialTS, materialTI, materialB
        })

        const toleranciaB = document.getElementById('toleranciaB').value;
        const toleranciasData = [];

        toleranciasData.push({
            toleranciaTS, toleranciaTI, toleranciaB
        });

        const cantidadTI = parseInt(document.getElementById('cantidadTI').value);
        const largoTI = parseFloat(document.getElementById('largoTI').value);
        const anchoTI = parseFloat(document.getElementById('anchoTI').value);
        const grosorTI = parseFloat(document.getElementById('grosorTI').value);

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

            // Obtener la imagen del plano (base64) generado en el canvas
            const imgPlano = obtenerPlanoB();

            // Crear un objeto con todos los datos del formulario
            formData = {
                tipo, subtipo, acomodo, precioUnit, cantidad,
                largoGral, anchoGral, grosorGral,
                tablaSuperior: tablaSuperiorData,
                cantidadTI, largoTI, anchoTI, grosorTI,
                cantidadB, tipoB, distB, largoB, anchoB, grosorB,
                materiales: materialesData,
                tolerancias: toleranciasData,
                servicios: servicios,
                imgPlano: imgPlano
            };
        } else if (tipoB === 'Corrido') {
            let distB = 6;
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

            // Obtener la imagen del plano (base64) generado en el canvas
            const imgPlano = obtenerPlanoB();

            // Crear un objeto con todos los datos del formulario
            formData = {
                tipo, subtipo, acomodo, precioUnit, cantidad,
                largoGral, anchoGral, grosorGral,
                tablaSuperior: tablaSuperiorData,
                cantidadTI, largoTI, anchoTI, grosorTI,
                cantidadB, tipoB, largoB, anchoB, grosorB,
                materiales: materialesData,
                tolerancias: toleranciasData,
                servicios: servicios,
                imgPlano: imgPlano
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
        // Captura los valores de los radios de servicios
        const pinturaSeleccionada = capturarValorRadio("pintura");
        if (tipo === 'Nueva') {
            servicios = {
                Armado: capturarValorRadio("armado") === "armado1" ? "Sí" : "No",
                HT: capturarValorRadio("HT") === "HT1" ? "Sí" : "No",
                Pintura: capturarValorRadio("pintura") === "pintura1" ? "Sí" : "No",
                Fumigacion: capturarValorRadio("fumigacion") === "fumigacion1" ? "Sí" : "No",
                Transporte: capturarValorRadio("transporte") === "transporte1" ? "Sí" : "No"
            };

            // Añadir el color de pintura si la opción es "Sí"
            if (pinturaSeleccionada === "pintura1") {
                const colorIn = document.getElementById("color");
                servicios.Color = colorIn.value;
            }

        } else {
            servicios = {
                Reparado: capturarValorRadio("reparado") === "reparado1" ? "Sí" : "No",
                Armado: capturarValorRadio("armado") === "armado1" ? "Sí" : "No",
                HT: capturarValorRadio("HT") === "HT1" ? "Sí" : "No",
                Pintura: capturarValorRadio("pintura") === "pintura1" ? "Sí" : "No",
                Fumigacion: capturarValorRadio("fumigacion") === "fumigacion1" ? "Sí" : "No",
                Transporte: capturarValorRadio("transporte") === "transporte1" ? "Sí" : "No"
            };

            // Añadir el color de pintura si la opción es "Sí"
            if (pinturaSeleccionada === "pintura1") {
                const colorIn = document.getElementById("color");
                servicios.Color = colorIn.value;
            }
        } 

        const materialTA = document.getElementById('materialTA').value;
        const materialTC = document.getElementById('materialTC').value;
        const materialesData = []

        materialesData.push({
            materialTS, materialTI, materialTA, materialTC
        })

        const toleranciaTA = document.getElementById('toleranciaTA').value;
        const toleranciaTC = document.getElementById('toleranciaTC').value;
        const toleranciasData = [];

        toleranciasData.push({
            toleranciaTS, toleranciaTI, toleranciaTA, toleranciaTC
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

        // Obtener la imagen del plano (base64) generado en el canvas
            const imgPlano = obtenerPlanoT();

        // Crear un objeto con todos los datos del formulario
        formData = {
            tipo, subtipo, acomodo, precioUnit, cantidad,
            largoGral, anchoGral, grosorGral,
            tablaSuperior: tablaSuperiorData,
            tablaInferior: tablaInferiorData,
            cantidadTAL, largoTAL, anchoTAL, grosorTAL, 
            cantidadTAC, largoTAC, anchoTAC, grosorTAC,
            cantidadTC, largoTC, anchoTC, grosorTC,
            materiales: materialesData,
            tolerancias: toleranciasData,
            servicios: servicios,
            imgPlano: imgPlano
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

