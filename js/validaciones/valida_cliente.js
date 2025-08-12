
// Declaramos las expresiones regulares para validar los datos
const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Expresión regular para el nombre y el apellido
const textoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s.,]+$/; // Expresión regular para texto
const rfcRegex = /^([A-Z&Ñ]{3,4})\d{6}[A-Z0-9]{3}$/; // Exppresión regular para el RFC
const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/; // Expresión regular para el email
const numeroTelefonicoRegex = /^[1-9]\d{9}$/; // Expresión regular para el número telefónico
const cpRegex = /^\d{5}$/ // Expresión regular para el código postal

// Función que valida que los campos sean solo letras y que haya al menos 3 caracteres
export function validarText(data, error) {
    // Restablecer el mensaje de error y las clases antes de empezar
    error.textContent = '';
    data.classList.remove('is-invalid', 'is-valid');

    if (data.value.length < 3) {
        error.textContent = `El campo debe de tener al menos 3 caracteres`;
        data.classList.add('is-invalid');
        return; 
    }

    if (!textoRegex.test(data.value)) {
        error.textContent = `El campo no acepta caracteres especiales`;
        data.classList.add('is-invalid');
        return; 
    }

    data.classList.add('is-valid');
}

// Función que valida que los campos sean solo letras y que haya al menos 3 caracteres
export function validarNombre(data, error) {
    // Restablecer el mensaje de error y las clases antes de empezar
    error.textContent = '';
    data.classList.remove('is-invalid', 'is-valid');

    if (data.value.length < 3) {
        error.textContent = `El campo debe de tener al menos 3 caracteres`;
        data.classList.add('is-invalid');
        return; 
    }

    if (!nombreRegex.test(data.value)) {
        error.textContent = `El campo no acepta caracteres especiales ni números`;
        data.classList.add('is-invalid');
        return; 
    }

    data.classList.add('is-valid');
}

// Función que valida que el rfc tenga un formato válido
export  function validarRfc(rfc, error) {
    if (!rfcRegex.test(rfc.value)) {
        error.textContent=`El RFC debe de cumplir con el formato válido`;
        rfc.classList.add('is-invalid');
        rfc.classList.remove('is-valid');
    } else {
        error.textContent = '';
        rfc.classList.remove('is-invalid');
        rfc.classList.add('is-valid');
    }
}

// Función que valida que el correo tenga un formato válido
export  function validarEmail(email, error) {
    if (!emailRegex.test(email.value)) {
        error.textContent=`El correo debe de cumplir con el formato example@example.com`;
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
    } else {
        error.textContent = '';
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
}

// Función que valida que sea un número telefónico
export function validarTelefono(telefono, error) {
    if (!numeroTelefonicoRegex.test(telefono.value.trim())) {
        error.textContent=`El número telefónico no es válido`;
        telefono.classList.add('is-invalid');
        telefono.classList.remove('is-valid');
    } else {
        error.textContent = '';
        telefono.classList.remove('is-invalid');
        telefono.classList.add('is-valid');
    }
}

// Función que valida que el código postal sea correcto
export function validarCP (cp, error){
    if(!cpRegex.test(cp.value)){
        error.textContent=`El código postal no es válido`;
        cp.classList.add('is-invalid');
        cp.classList.remove('is-valid');
    } else {
        error.textContent = '';
        cp.classList.remove('is-invalid');
        cp.classList.add('is-valid');
    }
}
