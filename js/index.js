
// Crear evento al dar click al botón Siguiente
document.getElementById('btn-sig').addEventListener('click', function(event) {
// Prevenir el comportamiento predeterminado del botón
event.preventDefault();

// Obtener los valores de los campos del formulario
const estado = document.getElementById('estado').value;
const tipo = document.getElementById('tipo').value;
    
// Datos de las tablas y tacones
const cantidadTS = document.getElementById('cantidadTS').value;
const largoTS = document.getElementById('largoTS').value;
const anchoTS = document.getElementById('anchoTS').value;
const grosorTS = document.getElementById('grosorTS').value;
    
const cantidadTI = document.getElementById('cantidadTI').value;
const largoTI = document.getElementById('largoTI').value;
const anchoTI = document.getElementById('anchoTI').value;
const grosorTI = document.getElementById('grosorTI').value;
    
const cantidadTAG = document.getElementById('cantidadTAG').value;
const largoTAG = document.getElementById('largoTAG').value;
const anchoTAG = document.getElementById('anchoTAG').value;
const grosorTAG = document.getElementById('grosorTAG').value;
    
const cantidadTAC = document.getElementById('cantidadTAC').value;
const largoTAC = document.getElementById('largoTAC').value;
const anchoTAC = document.getElementById('anchoTAC').value;
const grosorTAC = document.getElementById('grosorTAC').value;
    
const cantidadTC = document.getElementById('cantidadTC').value;
const largoTC = document.getElementById('largoTC').value;
const anchoTC = document.getElementById('anchoTC').value;
const grosorTC = document.getElementById('grosorTC').value;

// Verificar si algún campo está vacío
if (!estado || !tipo || 
    !cantidadTS || !largoTS || !anchoTS || !grosorTS ||
    !cantidadTI || !largoTI || !anchoTI || !grosorTI ||
    !cantidadTAG || !largoTAG || !anchoTAG || !grosorTAG ||
    !cantidadTAC || !largoTAC || !anchoTAC || !grosorTAC ||
    !cantidadTC || !largoTC || !anchoTC || !grosorTC) {
        
    // Si algún campo está vacío, mostrar mensaje de error
    alert('Por favor, complete todos los campos antes de continuar.');
    return; // Detener la ejecución y no redirigir
}

// Crear un objeto con todos los datos del formulario
const formData = {
    estado,
    tipo,
    cantidadTS, largoTS, anchoTS, grosorTS,
    cantidadTI, largoTI, anchoTI, grosorTI,
    cantidadTAG, largoTAG, anchoTAG, grosorTAG,
    cantidadTAC, largoTAC, anchoTAC, grosorTAC,
    cantidadTC, largoTC, anchoTC, grosorTC
};

// Convertir el objeto JSON a string
const formDataJSON = JSON.stringify(formData);

// Guardar el JSON en localStorage
localStorage.setItem('formData', formDataJSON);

// Redirigir a la página del resumen
window.location.href = './resume.html';
});

