
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
export function validarLargoTS(largoTSIn, anchoGralIn, errorTS1) {
largoTSIn.addEventListener('input', function () {
  const anchoGral = parseFloat(anchoGralIn.value.trim());
  const largoTS = parseFloat(largoTSIn.value.trim());

  if (largoTS === anchoGral) {
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
export function validarAnchoTS(anchoTSIn, largoGralIn, cantidadTSIn, errorTS2) {
  anchoTSIn.addEventListener('input', function () {
    const largoGral = parseFloat(largoGralIn.value.trim());
    const cantidadTS = parseFloat(cantidadTSIn.value.trim());
    const anchoTS = parseFloat(anchoTSIn.value.trim());

    const separacionText = document.getElementById('separacion');

    const separacion = ((largoGral - (anchoTS * cantidadTS)) / (cantidadTS - 1)).toFixed(2);

    if ((anchoTS * cantidadTS) <= largoGral) {
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


	// TABLA INFERIOR
// Validar Largo de Tabla Inferior
export function validarLargoTI(largoTIIn, anchoGralIn, errorTI1) {
largoTIIn.addEventListener('input', function () {
  const anchoGral = parseFloat(anchoGralIn.value.trim());
  const largoTI = parseFloat(largoTIIn.value.trim());

  if (largoTI === anchoGral) {
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
export function validarAnchoTI(anchoTSIn, anchoTIIn, errorTI2) {
  anchoTIIn.addEventListener('input', function () {
    const anchoTS = parseFloat(anchoTSIn.value.trim());
    const anchoTI = parseFloat(anchoTIIn.value.trim());

    if (anchoTI >= (anchoTS-1) && anchoTI <= (anchoTS+1)) {
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

// VALIDACIONES BARROTES
	// BARROTE
// Validar Largo de Tabla Barrote
export function validarLargoB(largoBIn, largoGralIn, errorB1) {
largoBIn.addEventListener('input', function () {
  const largoGral = parseFloat(largoGralIn.value.trim());
  const largoB = parseFloat(largoBIn.value.trim());

  if (largoB === largoGral) {
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

    if ((anchoB+grosorTS+grosorTI) ===  grosorGral) {
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


