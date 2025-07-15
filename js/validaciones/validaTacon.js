
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
