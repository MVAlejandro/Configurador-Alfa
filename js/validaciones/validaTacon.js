
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
export function validarGrosorTST(anchoBIn, grosorTSIn, grosorTIIn, grosorGralIn, errorTS3) {
    grosorTSIn.addEventListener('input', function () {
        const grosorTS = parseFloat(grosorTSIn.value.trim());
        const anchoB = parseFloat(anchoBIn.value.trim());
        const grosorTI = parseFloat(grosorTIIn.value.trim());
        const grosorGral = parseFloat(grosorGralIn.value.trim());

        if (isNaN(grosorTS) || grosorTS === 0){
            errorTS3.textContent = 'El grosor no puede ser 0';
            grosorTSIn.classList.add('is-invalid');
            grosorTSIn.classList.remove('is-valid');
        } else if ((grosorTS+anchoB+grosorTI) <=  grosorGral) {
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
// Validar Largo de Tabla Inferior
export function validarLargoTIT(largoTIIn, anchoGralIn, errorTI1) {
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
export function validarAnchoTIT(anchoTSIn, anchoTIIn, errorTI2) {
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
export function validarGrosorTIT(anchoBIn, grosorTSIn, grosorTIIn, grosorGralIn, errorTI3) {
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
