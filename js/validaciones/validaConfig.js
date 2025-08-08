
// IMPORTACIÓN DE FUNCIONES EXTERNAS
// Importar funciones de validación Barrote
import {validarLargoTSB, validarAnchoTSB, validarGrosorTSB, 
        validarLargoTIB, validarAnchoTIB, validarGrosorTIB,
        validarLargoB, validarAnchoB, validarGrosorB} from "./validaBarrote.js"
// Importar funciones de validación Tacón
import {validarLargoTST, validarAnchoTST, validarGrosorTST,  
        validarLargoTIL, validarAnchoTIL, validarGrosorTIT,
        validarLargoTIC, validarAnchoTIC,
        validarLargoTA, validarAnchoTA, validarGrosorTA,
        validarLargoTC, validarAnchoTC, validarGrosorTC} from "./validaTacon.js"


// VALIDACIONES DE LOS CAMPOS INTRODUCIDOS
// Función que inicia las validaciones de barrote
export function inicializarValidacionesB() {
    const largoGralIn = document.getElementById('largoGral');
    const anchoGralIn = document.getElementById('anchoGral');
    const grosorGralIn = document.getElementById('grosorGral');

    const cantidadTSIn = document.getElementById('cantidadTS-1');
    const largoTSIn = document.getElementById('largoTS-1');
    const anchoTSIn = document.getElementById('anchoTS-1');
    const grosorTSIn = document.getElementById('grosorTS-1');

    const largoTIIn = document.getElementById('largoTI');
    const anchoTIIn = document.getElementById('anchoTI');
    const grosorTIIn = document.getElementById('grosorTI');

    const largoBIn = document.getElementById('largoB');
    const anchoBIn = document.getElementById('anchoB');
    const grosorBIn = document.getElementById('grosorB');

    const errorTS1 = document.getElementById('error-lTS-1');
    const errorTS2 = document.getElementById('error-aTS-1');
    const errorTS3 = document.getElementById('error-gTS-1');

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

    const cantidadTSIn = document.getElementById('cantidadTS-1');
    const largoTSIn = document.getElementById('largoTS-1');
    const anchoTSIn = document.getElementById('anchoTS-1');
    const grosorTSIn = document.getElementById('grosorTS-1');

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
    
    const errorTS1 = document.getElementById('error-lTS-1');
    const errorTS2 = document.getElementById('error-aTS-1');
    const errorTS3 = document.getElementById('error-gTS-1');

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