

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

