
// VALIDACIONES GENERALES
// Función para validar que ningún input es inválido
  // PONER EN CADA ARCHIVO QUE LA OCUPE =>    const campos = document.querySelectorAll('input');
export function validarCamposInvalidos(campos) {
    for (let campo of campos) {
        if (campo.classList.contains('is-invalid')) {
        return false;
        }
    }
    return true;
} 

	// TABLA SUPERIOR
// Validar Largo de Tabla Superior
export function validarLargoTSB(inputElement, anchoGralIn, errorElement) {
    inputElement.addEventListener('input', function () {
        const valor = parseFloat(inputElement.value.trim());
        const anchoGral = parseFloat(anchoGralIn.value.trim());

        if (isNaN(valor) || valor <= 0) {
            errorElement.textContent = 'El largo debe ser un número mayor a 0';
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
        } else if (valor === anchoGral) {
            errorElement.textContent = '';
            inputElement.classList.remove('is-invalid');
            inputElement.classList.add('is-valid');
        } else {
            errorElement.textContent = 'El largo de la tabla debe ser igual al ancho general';
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
        }
    });
}

//

// Validar Ancho de Tabla Superior
export function validarAnchoTSB(anchoTSIn, largoGralIn, cantidadTSIn, errorTS2) {
    anchoTSIn.addEventListener('input', function () {
        const largoGral = parseFloat(largoGralIn.value.trim());
        const cantidadTS = parseFloat(cantidadTSIn.value.trim());
        const anchoTS = parseFloat(anchoTSIn.value.trim());

        const separacionText = document.getElementById('separacionTS');

        const separacion = ((largoGral - (anchoTS * cantidadTS)) / (cantidadTS - 1)).toFixed(2);

        if (isNaN(anchoTS) || anchoTS === 0){
            errorTS2.textContent = 'El ancho no puede ser 0';
            anchoTSIn.classList.add('is-invalid');
            anchoTSIn.classList.remove('is-valid');
        } else if ((anchoTS * cantidadTS) <= largoGral) {
            errorTS2.textContent = '';
            anchoTSIn.classList.remove('is-invalid');
            anchoTSIn.classList.add('is-valid');
            separacionText.innerHTML = `<p style="color: black;">Separación: ${separacion}"</p>`;
        } else {
            errorTS2.textContent = 'El ancho y la cantidad de tablas supera al largo general';
            anchoTSIn.classList.add('is-invalid');
            anchoTSIn.classList.remove('is-valid');
            separacionText.innerHTML = '';
        }
    });
}

// Validar Grosor de Tabla Superior
export function validarGrosorTSB(grosorTSIn, grosorGralIn, errorGrosor) {
    grosorTSIn.addEventListener('input', function () {
        const grosorTS = parseFloat(grosorTSIn.value.trim());
        const grosorGral = parseFloat(grosorGralIn.value.trim());

        if (isNaN(grosorTS) || grosorTS <= 0) {
            errorGrosor.textContent = 'El espesor debe ser un número mayor a 0';
            grosorTSIn.classList.add('is-invalid');
            grosorTSIn.classList.remove('is-valid');
        } else if (grosorTS < grosorGral) {
            errorGrosor.textContent = '';
            grosorTSIn.classList.remove('is-invalid');
            grosorTSIn.classList.add('is-valid');
        } else {
            errorGrosor.textContent = 'El grosor supera la altura general';
            grosorTSIn.classList.add('is-invalid');
            grosorTSIn.classList.remove('is-valid');
        }
    });
}

	// TABLA INFERIOR
// Validar Largo de Tabla Inferior
export function validarLargoTIB(largoTIIn, anchoGralIn, errorTI1) {
    largoTIIn.addEventListener('input', function () {
        const anchoGral = parseFloat(anchoGralIn.value.trim());
        const largoTI = parseFloat(largoTIIn.value.trim());

        if (isNaN(largoTI) || largoTI === 0){
            errorTI1.textContent = 'El largo no puede ser 0';
            grosorTIIn.classList.add('is-invalid');
            grosorTIIn.classList.remove('is-valid');
        } else if (largoTI === anchoGral) {
            errorTI1.textContent = '';
            largoTIIn.classList.remove('is-invalid');
            largoTIIn.classList.add('is-valid');
        } else {
            errorTI1.textContent = 'El largo de la tabla debe ser igual al ancho general';
            largoTIIn.classList.add('is-invalid');
            largoTIIn.classList.remove('is-valid');
        }
    });
}

// Validar Ancho de Tabla Inferior
export function validarAnchoTIB(anchoTSIn, anchoTIIn, errorTI2) {
    anchoTIIn.addEventListener('input', function () {
        const anchoTS = parseFloat(anchoTSIn.value.trim());
        const anchoTI = parseFloat(anchoTIIn.value.trim());

        if (isNaN(anchoTI) || anchoTI === 0){
            errorTI2.textContent = 'El largo no puede ser 0';
            anchoTIIn.classList.add('is-invalid');
            anchoTIIn.classList.remove('is-valid');
        } else if (anchoTI >= (anchoTS-1) && anchoTI <= (anchoTS+1)) {
            errorTI2.textContent = '';
            anchoTIIn.classList.remove('is-invalid');
            anchoTIIn.classList.add('is-valid');
        } else {
            errorTI2.textContent = 'El ancho no puede variar tanto de la tabla superior';
            anchoTIIn.classList.add('is-invalid');
            anchoTIIn.classList.remove('is-valid');
        }
    });
}

// Validar Grueso de Tabla Inferior
export function validarGrosorTIB(anchoBIn, grosorTSIn, grosorTIIn, grosorGralIn, errorTI3) {
    grosorTIIn.addEventListener('input', function () {
        const grosorTI = parseFloat(grosorTIIn.value.trim());
        const grosorTS = parseFloat(grosorTSIn.value.trim());
        const anchoB = parseFloat(anchoBIn.value.trim());
        const grosorGral = parseFloat(grosorGralIn.value.trim());

        if (isNaN(grosorTI) || grosorTI === 0){
            errorTI3.textContent = 'El grosor no puede ser 0';
            grosorTIIn.classList.add('is-invalid');
            grosorTIIn.classList.remove('is-valid');
        } else if ((grosorTI !== 0) || ((grosorTS+anchoB+grosorTI) <=  grosorGral)) {
            errorTI3.textContent = '';
            grosorTIIn.classList.remove('is-invalid');
            grosorTIIn.classList.add('is-valid');
        } else {
            errorTI3.textContent = 'El grosor supera la altura general';
            grosorTIIn.classList.add('is-invalid');
            grosorTIIn.classList.remove('is-valid');
        }
    });
}

	// BARROTE
// Validar Largo de Tabla Barrote
export function validarLargoB(largoBIn, largoGralIn, errorB1) {
    largoBIn.addEventListener('input', function () {
        const largoGral = parseFloat(largoGralIn.value.trim());
        const largoB = parseFloat(largoBIn.value.trim());

        if (isNaN(largoB) || largoB === 0){
            errorB1.textContent = 'El largo no puede ser 0';
            largoBIn.classList.add('is-invalid');
            largoBIn.classList.remove('is-valid');
        } else if (largoB === largoGral) {
            errorB1.textContent = '';
            largoBIn.classList.remove('is-invalid');
            largoBIn.classList.add('is-valid');
        } else {
            errorB1.textContent = 'El largo del barrote debe ser igual al largo general';
            largoBIn.classList.add('is-invalid');
            largoBIn.classList.remove('is-valid');
        }
    });
}

// Validar Ancho de Tabla Barrote
export function validarAnchoB(anchoBIn, grosorTSIn, grosorTIIn, grosorGralIn, errorB2) {
    anchoBIn.addEventListener('input', function () {
        const anchoB = parseFloat(anchoBIn.value.trim());
        const grosorTS = parseFloat(grosorTSIn.value.trim());
        const grosorTI = parseFloat(grosorTIIn.value.trim());
        const grosorGral = parseFloat(grosorGralIn.value.trim());

        if (isNaN(anchoB) || anchoB === 0){
            errorB2.textContent = 'El ancho no puede ser 0';
            anchoBIn.classList.add('is-invalid');
            anchoBIn.classList.remove('is-valid');
        } else if ((anchoB !== 0) || ((grosorTS+anchoB+grosorTI) <=  grosorGral)) {
            errorB2.textContent = '';
            anchoBIn.classList.remove('is-invalid');
            anchoBIn.classList.add('is-valid');
        } else {
            errorB2.textContent = 'La altura del barrote supera la altura general';
            anchoBIn.classList.add('is-invalid');
            anchoBIn.classList.remove('is-valid');
        }
    });
}
// Validar Grueso de Tabla Barrote
export function validarGrosorB(grosorBIn, errorB3) {
    grosorBIn.addEventListener('input', function () {
        const grosorB = parseFloat(grosorBIn.value.trim());

        if (isNaN(grosorB) || grosorB === 0){
            errorB3.textContent = 'El grosor no puede ser 0';
            grosorBIn.classList.add('is-invalid');
            grosorBIn.classList.remove('is-valid');
        } else if (grosorB >= 1 && grosorB <= 3) {
            errorB3.textContent = '';
            grosorBIn.classList.remove('is-invalid');
            grosorBIn.classList.add('is-valid');
        } else {
            errorB3.textContent = 'El grosor no puede ser de ese tamaño';
            grosorBIn.classList.add('is-invalid');
            grosorBIn.classList.remove('is-valid');
        }
    });
}

