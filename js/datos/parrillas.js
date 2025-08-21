
// IMPORTACIÓN DE FUNCIONES EXTERNAS
// Importar funciones de validación de campos
import {validarCamposInvalidos} from "../validaciones/valida_campos.js"

export function parrillaTSData() {
    const largoGral = parseFloat(document.getElementById('largoGral').value);
    // Obtener los datos de las tablas superiores
    const materialTS = document.getElementById('materialTS').value;
    const toleranciaTS = document.getElementById('toleranciaTS').value;
        
    const variacionTS = document.getElementById('variacionTS')?.value || 'Único';
    let parrillaTS = [];
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
    
        parrillaTS.push({
            cantidadTS, largoTS, anchoTS, grosorTS, separacionTS, materialTS, toleranciaTS
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
                grosorTS: grosor,
                materialTS,
                toleranciaTS
                // separacionTS se agregará después
            });
        }
    
        const separacionGlobal = ((largoGral - totalOcupado) / (totalCantidad - 1)).toFixed(2);
    
        // Agregar separación a cada entrada
        variacionesTemp.forEach(variacion => {
            variacion.separacionTS = separacionGlobal;
            parrillaTS.push(variacion);
        });
    }

    return parrillaTS;
}

export function parrillaTIData() {
    const subtipo = document.getElementById('subtipo').value;
    // Obtener los datos de las tablas inferiores
    const materialTI = document.getElementById('materialTI').value;
    const toleranciaTI = document.getElementById('toleranciaTI').value;

    let parrillaTI = [];

    // TARIMA DE BARROTE
    if (subtipo === 'Barrote') {
        const cantidadTI = parseInt(document.getElementById('cantidadTI').value);
        const largoTI = parseFloat(document.getElementById('largoTI').value);
        const anchoTI = parseFloat(document.getElementById('anchoTI').value);
        const grosorTI = parseFloat(document.getElementById('grosorTI').value);

        if (!cantidadTI || !largoTI || !anchoTI || !grosorTI) {
            alert('Por favor, complete todos los campos para agregar el producto.');
            return;
        }

        // Validar si hay campos inválidos
        const campos = document.querySelectorAll('input');
        if (!validarCamposInvalidos(campos)) {
            alert('Corrige los errores antes de guardar.');
            return;
        }

        parrillaTI.push({
            cantidadTI, largoTI, anchoTI, grosorTI, materialTI, toleranciaTI
        });

    } else if (subtipo === 'Tacón'){ 
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

            parrillaTI.push({
                cantidadTI: cant,
                largoTI: largo,
                anchoTI: ancho,
                grosorTI: grosor,
                materialTI,
                toleranciaTI
            });
        }
    }

    return parrillaTI;
}

export function parrillaTCData() {
    const subtipo = document.getElementById('subtipo').value;
    let parrillaTC = [];

    // TARIMA DE BARROTE
    if (subtipo === 'Barrote') {
        const materialB = document.getElementById('materialB').value;
        const toleranciaB = document.getElementById('toleranciaB').value;

        const cantidadB = parseInt(document.getElementById('cantidadB').value);
        const tipoB = document.getElementById('tipoB').value;
        const largoB = parseFloat(document.getElementById('largoB').value);
        const anchoB = parseFloat(document.getElementById('anchoB').value);
        const grosorB = parseFloat(document.getElementById('grosorB').value);

        // VALIDAR LOS CAMPOS ANTES DE GUARDAR LA INFORMACIÓN
        if (!cantidadB || !largoB || !anchoB || !grosorB || !distB) {     
            alert('Por favor, complete todos los campos para agregar el producto.');
            return;
        }
            
        // Validar si hay campos inválidos
        const campos = document.querySelectorAll('input');
        if (!validarCamposInvalidos(campos)) {
            alert('Corrige los errores antes de guardar.');
            return;
        }

        parrillaTC.push({
            cantidadB, tipoB, largoB, anchoB, grosorB, materialB, toleranciaB,
            distB: tipoB === 'Con saque' ? distB : null
        });

    // TARIMA DE TACON
    } else if (subtipo === 'Tacón') {
        const materialTA = document.getElementById('materialTA').value;
        const materialTC = document.getElementById('materialTC').value;
        const toleranciaTA = document.getElementById('toleranciaTA').value;
        const toleranciaTC = document.getElementById('toleranciaTC').value;

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
        if (!cantidadTAL || !largoTAL || !anchoTAL || !grosorTAL ||
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

        parrillaTC.push({
            cantidadTAL, largoTAL, anchoTAL, grosorTAL,
            cantidadTAC, largoTAC, anchoTAC, grosorTAC, materialTA, toleranciaTA
        }, {
            cantidadTC, largoTC, anchoTC, grosorTC, materialTC, toleranciaTC
        });
    }

    return parrillaTC;
}