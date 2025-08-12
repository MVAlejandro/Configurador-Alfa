
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

// Validar que los inputs no vayan vacios
export function validarInputs() {
  document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', () => {
      const valor = parseFloat(input.value.trim());
      const errorElement = input.parentElement.querySelector('.error');

      if (isNaN(valor) || valor <= 0) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        if (errorElement) {
          errorElement.textContent = 'Ingrese un valor mayor a 0';
        }
      } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        if (errorElement) {
          errorElement.textContent = '';
        }
      }
    });
  });
}