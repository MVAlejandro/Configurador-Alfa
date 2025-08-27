
// IMPORTACIÓN DE FUNCIONES EXTERNAS
// Importar funciones de validación de campos
import {validarCamposInvalidos} from "../validaciones/valida_campos.js"

export function componenteTSData() {
    const largo_gral = parseFloat(document.getElementById('largoGral').value);
    // Obtener los datos de las tablas superiores
    const material_TS = document.getElementById('materialTS').value;
    const tolerancia_TS = document.getElementById('toleranciaTS').value;
        
    const variacionTS = document.getElementById('variacionTS')?.value || 'Único';
    let componenteTS = [];
    let cantidad_TS, largo_TS, ancho_TS, grosor_TS, separacion_TS;
    
    if (variacionTS === 'Único') {
        // Recolección estándar
        cantidad_TS = parseInt(document.getElementById('cantidadTS-1').value);
        largo_TS = parseFloat(document.getElementById('largoTS-1').value);
        ancho_TS = parseFloat(document.getElementById('anchoTS-1').value);
        grosor_TS = parseFloat(document.getElementById('grosorTS-1').value);
    
        // Validar antes de guardar los valores
        if (!cantidad_TS || !largo_TS || !ancho_TS || !grosor_TS) {
            alert('Por favor completa todos los campos de la tabla superior.');
            return;
        }
            
        separacion_TS = ((largo_gral - (ancho_TS * cantidad_TS)) / (cantidad_TS - 1)).toFixed(2);
    
        componenteTS.push({
            cantidad_TS, largo_TS, ancho_TS, grosor_TS, material_TS, tolerancia_TS, separacion_TS
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
                cantidad_TS: cant,
                largo_TS: largo,
                ancho_TS: ancho,
                grosor_TS: grosor,
                material_TS,
                tolerancia_TS
                // separacionTS se agregará después
            });
        }
    
        const separacionGlobal = ((largo_gral - totalOcupado) / (totalCantidad - 1)).toFixed(2);
    
        // Agregar separación a cada entrada
        variacionesTemp.forEach(variacion => {
            variacion.separacion_TS = separacionGlobal;
            componenteTS.push(variacion);
        });
    }

    return componenteTS;
}

export function componenteTIData() {
    const subtipo = document.getElementById('subtipo').value;
    // Obtener los datos de las tablas inferiores
    const material_TI = document.getElementById('materialTI').value;
    const tolerancia_TI = document.getElementById('toleranciaTI').value;

    let componenteTI = [];

    // TARIMA DE BARROTE
    if (subtipo === 'Barrote') {
        const cantidad_TI = parseInt(document.getElementById('cantidadTI').value);
        const largo_TI = parseFloat(document.getElementById('largoTI').value);
        const ancho_TI = parseFloat(document.getElementById('anchoTI').value);
        const grosor_TI = parseFloat(document.getElementById('grosorTI').value);

        if (!cantidad_TI || !largo_TI || !ancho_TI || !grosor_TI) {
            alert('Por favor, complete todos los campos para agregar el producto.');
            return;
        }

        // Validar si hay campos inválidos
        const campos = document.querySelectorAll('input');
        if (!validarCamposInvalidos(campos)) {
            alert('Corrige los errores antes de guardar.');
            return;
        }

        componenteTI.push({
            cantidad_TI, largo_TI, ancho_TI, grosor_TI, material_TI, tolerancia_TI
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

            componenteTI.push({
                cantidad_TI: cant,
                largo_TI: largo,
                ancho_TI: ancho,
                grosor_TI: grosor,
                material_TI,
                tolerancia_TI
            });
        }
    }

    return componenteTI;
}

export function componenteBData() {
    let componenteB = {};
    const material_B = document.getElementById('materialB').value;
    const tolerancia_B = document.getElementById('toleranciaB').value;

    const cantidad_B = parseInt(document.getElementById('cantidadB').value);
    const tipo_B = document.getElementById('tipoB').value;
    const largo_B = parseFloat(document.getElementById('largoB').value);
    const ancho_B = parseFloat(document.getElementById('anchoB').value);
    const grosor_B = parseFloat(document.getElementById('grosorB').value);
    const dist_B = parseFloat(document.getElementById('distB')?.value) || null;

    // VALIDAR LOS CAMPOS ANTES DE GUARDAR LA INFORMACIÓN
    if (!cantidad_B || !largo_B || !ancho_B || !grosor_B) {     
        alert('Por favor, complete todos los campos para agregar el producto.');
        return;
    }
            
    // Validar si hay campos inválidos
    const campos = document.querySelectorAll('input');
    if (!validarCamposInvalidos(campos)) {
        alert('Corrige los errores antes de guardar.');
        return;
    }

    componenteB = {
        cantidad_B, tipo_B, largo_B, ancho_B, grosor_B, material_B, tolerancia_B,
        distB: tipo_B === 'Con saque' ? dist_B : null
    };

    return componenteB;
}

export function componenteTALData() {
    let componenteTAL = {};
    const material_TA = document.getElementById('materialTA').value;
    const tolerancia_TA = document.getElementById('toleranciaTA').value;

    const cantidad_TAL = parseInt(document.getElementById('cantidadTAL').value);
    const largo_TAL = parseFloat(document.getElementById('largoTAL').value);
    const ancho_TAL = parseFloat(document.getElementById('anchoTAL').value);
    const grosor_TAL = parseFloat(document.getElementById('grosorTAL').value);

    // VALIDAR LOS CAMPOS ANTES DE GUARDAR LA INFORMACIÓN
    // Verificar si algún campo está vacío
    if (!cantidad_TAL || !largo_TAL || !ancho_TAL || !grosor_TAL) {
        alert('Por favor, complete todos los campos para agregar el producto.');
        return; // Detener la ejecución y no continuar
    } 

    // Validar si hay campos inválidos
    const campos = document.querySelectorAll('input');
    if (!validarCamposInvalidos(campos)) {
        alert('Corrige los errores antes de guardar.');
        return; 
    }

    componenteTAL = {
            cantidad_TAL, largo_TAL, ancho_TAL, grosor_TAL, material_TA, tolerancia_TA
    };

    return componenteTAL;
}

export function componenteTACData() {
    let componenteTAC = {};
    const material_TA = document.getElementById('materialTA').value;
    const tolerancia_TA = document.getElementById('toleranciaTA').value;

    const cantidad_TAC = parseInt(document.getElementById('cantidadTAC').value);
    const largo_TAC = parseFloat(document.getElementById('largoTAC').value);
    const ancho_TAC = parseFloat(document.getElementById('anchoTAC').value);
    const grosor_TAC = parseFloat(document.getElementById('grosorTAC').value);

    // VALIDAR LOS CAMPOS ANTES DE GUARDAR LA INFORMACIÓN
    // Verificar si algún campo está vacío
    if (!cantidad_TAC || !largo_TAC || !ancho_TAC || !grosor_TAC) {
        alert('Por favor, complete todos los campos para agregar el producto.');
        return; // Detener la ejecución y no continuar
    } 

    // Validar si hay campos inválidos
    const campos = document.querySelectorAll('input');
    if (!validarCamposInvalidos(campos)) {
        alert('Corrige los errores antes de guardar.');
        return; 
    }

    componenteTAC = {
            cantidad_TAC, largo_TAC, ancho_TAC, grosor_TAC, material_TA, tolerancia_TA
    };

    return componenteTAC;
}

export function componenteTCData() {
    let componenteTC = {};
    const material_TC = document.getElementById('materialTA').value;
    const tolerancia_TC = document.getElementById('toleranciaTA').value;

    const cantidad_TC = parseInt(document.getElementById('cantidadTC').value);
    const largo_TC = parseFloat(document.getElementById('largoTC').value);
    const ancho_TC = parseFloat(document.getElementById('anchoTC').value);
    const grosor_TC = parseFloat(document.getElementById('grosorTC').value);

    // VALIDAR LOS CAMPOS ANTES DE GUARDAR LA INFORMACIÓN
    // Verificar si algún campo está vacío
    if (!cantidad_TC || !largo_TC || !ancho_TC || !grosor_TC) {
        alert('Por favor, complete todos los campos para agregar el producto.');
        return; // Detener la ejecución y no continuar
    } 

    // Validar si hay campos inválidos
    const campos = document.querySelectorAll('input');
    if (!validarCamposInvalidos(campos)) {
        alert('Corrige los errores antes de guardar.');
        return; 
    }

    componenteTC = {
            cantidad_TC, largo_TC, ancho_TC, grosor_TC, material_TC, tolerancia_TC
    };

    return componenteTC;
}
