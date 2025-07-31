

// Función para actualizar los campos relacionados
export function actualizarCampos(event) {
  const inputModificado = event.target;  // El campo que ha sido modificado
  const valor = parseFloat(inputModificado.value);  // El valor ingresado convertido a número
  
  if (isNaN(valor)) return; // Si no es un número válido, no hacer nada
  
  const tipo = inputModificado.getAttribute('data-rel');  // Obtener el tipo de relación (largo, ancho, etc.)

  // Actualizar todos los campos relacionados con este tipo
  const camposRelacionados = document.querySelectorAll(`[data-rel="${tipo}"]`);
  camposRelacionados.forEach(campo => {
    if (campo !== inputModificado) {
      campo.value = valor; // Actualizar valor de los inputs relacionados
    }
  });
}

// Función para asociar la función de actualización a los campos de entrada
export function asociarActualizacion() {
  // Asociar la función a los eventos 'input' de todos los inputs relacionados
  document.querySelectorAll('[data-rel]').forEach(input => {
    input.addEventListener('input', actualizarCampos);
  });
}


// Función para actualizar los campos de TI en Tacón sincronizarTI
export function sincronizarTI() {
  const largoGral = document.getElementById('largoGral');
  const largoTI2 = document.getElementById('largoTI-2');
  const anchoTI2 = document.getElementById('anchoTI-1');

  if (!largoGral || !largoTI2 || !anchoTI2) return;

  // Cuando cambia anchoTI-2 o largoGral, recalcular largoTI-2
  function actualizarLargoTI2() {
    const largo = parseFloat(largoGral.value);
    const ancho = parseFloat(anchoTI2.value);
    if (isNaN(largo) || isNaN(ancho)) return;

    largoTI2.value = largo - 2 * ancho;
  }

  // Cuando cambia largoTI-2 o largoGral, recalcular anchoTI-2
  function actualizarAnchoTI2() {
    const largo = parseFloat(largoGral.value);
    const largo2 = parseFloat(largoTI2.value);
    if (isNaN(largo) || isNaN(largo2)) return;

    anchoTI2.value = (largo - largo2) / 2;
  }

  // Asociar eventos
  anchoTI2.addEventListener('input', actualizarLargoTI2);
  largoTI2.addEventListener('input', actualizarAnchoTI2);
  largoGral.addEventListener('input', () => {
    actualizarLargoTI2();
    actualizarAnchoTI2();
  });
}
