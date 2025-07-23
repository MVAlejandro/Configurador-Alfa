
	// TABLA SUPERIOR
// Validar Largo de Tabla Superior
export function validarLargoTST(largoTSIn, anchoGralIn, errorTS1) {
    largoTSIn.addEventListener('input', function () {
        const anchoGral = parseFloat(anchoGralIn.value.trim());
        const largoTS = parseFloat(largoTSIn.value.trim());

        if (isNaN(largoTS) || largoTS === 0){
            errorTS1.textContent = 'El largo no puede ser 0';
            largoTSIn.classList.add('is-invalid');
            largoTSIn.classList.remove('is-valid');
        } else if (largoTS === anchoGral) {
            errorTS1.textContent = '';
            largoTSIn.classList.remove('is-invalid');
            largoTSIn.classList.add('is-valid');
        } else {
            errorTS1.textContent = 'El largo de la tabla debe ser igual al ancho general';
            largoTSIn.classList.add('is-invalid');
            largoTSIn.classList.remove('is-valid');
    }
    });
}

// Validar Ancho de Tabla Superior
export function validarAnchoTST(anchoTSIn, largoGralIn, cantidadTSIn, errorTS2) {
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

// Validar Grueso de Tabla Superior
export function validarGrosorTST(grosorTSIn, grosorTIIn, grosorTALIn, grosorTCIn, grosorGralIn, errorTS3) {
    grosorTSIn.addEventListener('input', function () {
        const grosorTS = parseFloat(grosorTSIn.value.trim());
        const grosorTI = parseFloat(grosorTIIn.value.trim());
        const grosorTAL = parseFloat(grosorTALIn.value.trim());
        const grosorTC = parseFloat(grosorTCIn.value.trim());
        const grosorGral = parseFloat(grosorGralIn.value.trim());

        if (isNaN(grosorTS) || grosorTS === 0){
            errorTS3.textContent = 'El grosor no puede ser 0';
            grosorTSIn.classList.add('is-invalid');
            grosorTSIn.classList.remove('is-valid');
        } else if ((grosorTS + grosorTI + grosorTAL + grosorTC) <=  grosorGral) {
            errorTS3.textContent = '';
            grosorTSIn.classList.remove('is-invalid');
            grosorTSIn.classList.add('is-valid');
        } else {
            errorTS3.textContent = 'El grosor supera la altura general';
            grosorTSIn.classList.add('is-invalid');
            grosorTSIn.classList.remove('is-valid');
        }
    });
}

	// TABLA INFERIOR
// Validar Largo de Tabla Inferior Lateral
export function validarLargoTIL(largoTILIn, anchoGralIn, errorTIL1) {
    largoTILIn.addEventListener('input', function () {
        const anchoGral = parseFloat(anchoGralIn.value.trim());
        const largoTIL = parseFloat(largoTILIn.value.trim());

        if (isNaN(largoTIL) || largoTIL === 0){
            errorTIL1.textContent = 'El largo no puede ser 0';
            largoTILIn.classList.add('is-invalid');
            largoTILIn.classList.remove('is-valid');
        } else if (largoTIL === anchoGral) {
            errorTIL1.textContent = '';
            largoTILIn.classList.remove('is-invalid');
            largoTILIn.classList.add('is-valid');
        } else {
            errorTIL1.textContent = 'El largo de la tabla debe ser igual al ancho general';
            largoTILIn.classList.add('is-invalid');
            largoTILIn.classList.remove('is-valid');
        }
    });
}
// Validar Largo de Tabla Inferior Central
export function validarLargoTIC(largoTICIn, anchoTILIn, largoGralIn, errorTIC1) {
    largoTICIn.addEventListener('input', function () {
        const largoGral = parseFloat(largoGralIn.value.trim());
        const anchoTIL = parseFloat(anchoTILIn.value.trim());
        const largoTIC = parseFloat(largoTICIn.value.trim());

        if (isNaN(largoTIC) || largoTIC === 0){
            errorTIC1.textContent = 'El largo no puede ser 0';
            largoTICIn.classList.add('is-invalid');
            largoTICIn.classList.remove('is-valid');
        } else if (largoTIC === (largoGral-(2*anchoTIL))) {
            errorTIC1.textContent = '';
            largoTICIn.classList.remove('is-invalid');
            largoTICIn.classList.add('is-valid');
        } else {
            errorTIC1.textContent = 'El largo de la tabla sobrepasa el espacio disponible';
            largoTICIn.classList.add('is-invalid');
            largoTICIn.classList.remove('is-valid');
        }
    });
}

// Validar Ancho de Tabla Inferior Lateral
export function validarAnchoTIL(largoTICIn, anchoTILIn, largoGralIn, errorTIL2) {
    anchoTILIn.addEventListener('input', function () {
        const largoGral = parseFloat(largoGralIn.value.trim());
        const anchoTIL = parseFloat(anchoTILIn.value.trim());
        const largoTIC = parseFloat(largoTICIn.value.trim());

        if (isNaN(anchoTIL) || anchoTIL === 0){
            errorTIL2.textContent = 'El largo no puede ser 0';
            anchoTILIn.classList.add('is-invalid');
            anchoTILIn.classList.remove('is-valid');
        } else if (2*anchoTIL === (largoGral-largoTIC)) {
            errorTIL2.textContent = '';
            anchoTILIn.classList.remove('is-invalid');
            anchoTILIn.classList.add('is-valid');
        } else {
            errorTIL2.textContent = 'El ancho sobrepasa el espacio disponible';
            anchoTILIn.classList.add('is-invalid');
            anchoTILIn.classList.remove('is-valid');
        }
    });
}
// Validar Ancho de Tabla Inferior Central
export function validarAnchoTIC(anchoTSIn, anchoTICIn, errorTIC2) {
    anchoTICIn.addEventListener('input', function () {
        const anchoTS = parseFloat(anchoTSIn.value.trim());
        const anchoTIC = parseFloat(anchoTICIn.value.trim());

        if (isNaN(anchoTIC) || anchoTIC === 0){
            errorTIC2.textContent = 'El largo no puede ser 0';
            anchoTICIn.classList.add('is-invalid');
            anchoTICIn.classList.remove('is-valid');
        } else if (anchoTIC >= (anchoTS-1) && anchoTIC <= (anchoTS+1)) {
            errorTIC2.textContent = '';
            anchoTICIn.classList.remove('is-invalid');
            anchoTICIn.classList.add('is-valid');
        } else {
            errorTIC2.textContent = 'El ancho no puede variar tanto de la tabla superior';
            anchoTICIn.classList.add('is-invalid');
            anchoTICIn.classList.remove('is-valid');
        }
    });
}

// Validar Grueso de Tabla Inferior
export function validarGrosorTIT(grosorTSIn, inputElement, grosorTALIn, grosorTCIn, grosorGralIn, errorElement) {
    inputElement.addEventListener('input', function () {
        const grosorTS = parseFloat(grosorTSIn.value.trim());
        const valor = parseFloat(inputElement.value.trim());
        const grosorTAL = parseFloat(grosorTALIn.value.trim());
        const grosorTC = parseFloat(grosorTCIn.value.trim());
        const grosorGral = parseFloat(grosorGralIn.value.trim());

        if (isNaN(valor) || valor === 0){
            errorElement.textContent = 'El grosor no puede ser 0';
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
        } else if ((grosorTS + valor + grosorTAL + grosorTC) <=  grosorGral) {
            errorElement.textContent = '';
            inputElement.classList.remove('is-invalid');
            inputElement.classList.add('is-valid');
        } else {
            errorElement.textContent = 'El grosor supera la altura general';
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
        }
    });
}

    // TACON
// Validar Largo de Tacón
export function validarLargoTA(inputElement, errorElement) {
    inputElement.addEventListener('input', function () {
        const valor = parseFloat(inputElement.value.trim());

        if (isNaN(valor) || (valor === 0)) {
            errorElement.textContent = 'El largo no puede ser 0';
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
        } else {
            errorElement.textContent = '';
            inputElement.classList.remove('is-invalid');
            inputElement.classList.add('is-valid');
        }
    });
}

// Validar Ancho de Tacón
export function validarAnchoTA(inputElement, anchoTCIn, errorElement) {
    inputElement.addEventListener('input', function () {
        const valor = parseFloat(inputElement.value.trim());
        const anchoTC = parseFloat(anchoTCIn.value.trim());

        if (isNaN(valor) || valor === 0){
            errorElement.textContent = 'El ancho no puede ser 0';
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
        } else if (valor === anchoTC) {
            errorElement.textContent = '';
            inputElement.classList.remove('is-invalid');
            inputElement.classList.add('is-valid');
        } else {
            errorElement.textContent = 'El ancho no puede variar de la tabla de carga';
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
        }
    });
}

// Validar Grueso de Tacón
export function validarGrosorTA(grosorTSIn, grosorTILIn, inputElement, grosorTCIn, grosorGralIn, errorElement) {
    inputElement.addEventListener('input', function () {
        const grosorTS = parseFloat(grosorTSIn.value.trim());
        const grosorTIL = parseFloat(grosorTILIn.value.trim());
        const valor = parseFloat(inputElement.value.trim());
        const grosorTC = parseFloat(grosorTCIn.value.trim());
        const grosorGral = parseFloat(grosorGralIn.value.trim());

        if (isNaN(valor) || valor === 0){
            errorElement.textContent = 'El grosor no puede ser 0';
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
        } else if ((grosorTS + grosorTIL + valor + grosorTC) <=  grosorGral) {
            errorElement.textContent = '';
            inputElement.classList.remove('is-invalid');
            inputElement.classList.add('is-valid');
        } else {
            errorElement.textContent = 'El grosor supera la altura general';
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
        }
    });
}

    // TABLAS DE CARGA
// Validar Largo de Tabla carga
export function validarLargoTC(largoTCIn, largoGralIn, errorTC1) {
    largoTCIn.addEventListener('input', function () {
        const largoGral = parseFloat(largoGralIn.value.trim());
        const largoTC = parseFloat(largoTCIn.value.trim());

        if (isNaN(largoTC) || largoTC === 0){
            errorTC1.textContent = 'El largo no puede ser 0';
            largoTCIn.classList.add('is-invalid');
            largoTCIn.classList.remove('is-valid');
        } else if (largoTC === largoGral) {
            errorTC1.textContent = '';
            largoTCIn.classList.remove('is-invalid');
            largoTCIn.classList.add('is-valid');
        } else {
            errorTC1.textContent = 'El largo de la tabla debe ser igual al largo general';
            largoTCIn.classList.add('is-invalid');
            largoTCIn.classList.remove('is-valid');
        }
    });
}

// Validar Ancho de Tabla carga
export function validarAnchoTC(anchoTCIn, anchoTALIn, errorTC2) {
    anchoTCIn.addEventListener('input', function () {
        const anchoTC = parseFloat(anchoTCIn.value.trim());
        const anchoTAL = parseFloat(anchoTALIn.value.trim());

        if (isNaN(anchoTC) || anchoTC === 0){
            errorTC2.textContent = 'El ancho no puede ser 0';
            anchoTCIn.classList.add('is-invalid');
            anchoTCIn.classList.remove('is-valid');
        } else if (anchoTC === anchoTAL) {
            errorTC2.textContent = '';
            anchoTCIn.classList.remove('is-invalid');
            anchoTCIn.classList.add('is-valid');
        } else {
            errorTC2.textContent = 'El ancho no puede variar de los tacones';
            anchoTCIn.classList.add('is-invalid');
            anchoTCIn.classList.remove('is-valid');
        }
    });
}

// Validar Grueso de Tabla carga
export function validarGrosorTC(grosorTSIn, grosorTIIn, grosorTAIn, grosorTCIn, grosorGralIn, errorTC3) {
    grosorTCIn.addEventListener('input', function () {
        const grosorTS = parseFloat(grosorTSIn.value.trim());
        const grosorTI = parseFloat(grosorTIIn.value.trim());
        const grosorTA = parseFloat(grosorTAIn.value.trim());
        const grosorTC = parseFloat(grosorTCIn.value.trim());
        const grosorGral = parseFloat(grosorGralIn.value.trim());

        if (isNaN(grosorTC) || grosorTC === 0){
            errorTC3.textContent = 'El grosor no puede ser 0';
            grosorTCIn.classList.add('is-invalid');
            grosorTCIn.classList.remove('is-valid');
        } else if ((grosorTS + grosorTI + grosorTA + grosorTC) <=  grosorGral) {
            errorTC3.textContent = '';
            grosorTCIn.classList.remove('is-invalid');
            grosorTCIn.classList.add('is-valid');
        } else {
            errorTC3.textContent = 'El grosor supera la altura general';
            grosorTCIn.classList.add('is-invalid');
            grosorTCIn.classList.remove('is-valid');
        }
    });
}
