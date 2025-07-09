
// GUARDAR INFORMACION EN JSON AL DAR CLICK EN "SIGUIENTE"
// Crear evento al dar click al botón Siguiente
document.getElementById('btn-sig').addEventListener('click', function(event) {
// Prevenir comportamiento predeterminado del botón
event.preventDefault();

// Obtener los valores de los campos del formulario
const tipo = document.getElementById('tipo').value;
const subtipo = document.getElementById('subtipo').value;
    
// Obtener los datos de las tablas compartidos entre ambos tipos de tarima
const largoGral = document.getElementById('largoGral').value;
const anchoGral = document.getElementById('anchoGral').value;
const grosorGral = document.getElementById('grosorGral').value;

const cantidadTS = document.getElementById('cantidadTS').value;
const largoTS = document.getElementById('largoTS').value;
const anchoTS = document.getElementById('anchoTS').value;
const grosorTS = document.getElementById('grosorTS').value;
    
const cantidadTI = document.getElementById('cantidadTI').value;
const largoTI = document.getElementById('largoTI').value;
const anchoTI = document.getElementById('anchoTI').value;
const grosorTI = document.getElementById('grosorTI').value;

// Declarar el objeto formData para después
let formData = {};

// Obtener los datos de las tablas dependiendo el tipo de tarima
if (subtipo === '2') {
    const cantidadB = document.getElementById('cantidadB').value;
    const largoB = document.getElementById('largoB').value;
    const anchoB = document.getElementById('anchoB').value;
    const grosorB = document.getElementById('grosorB').value;

    // VALIDAR LOS CAMPOS ANTES DE GUARDAR LA INFORMACIÓN
    // Verificar si algún campo está vacío
    if (!tipo || !subtipo || !largoGral || !anchoGral || !grosorGral ||
        !cantidadTS || !largoTS || !anchoTS || !grosorTS ||
        !cantidadTI || !largoTI || !anchoTI || !grosorTI ||
        !cantidadB || !largoB || !anchoB || !grosorB) {
            
        // Si algún campo está vacío, mostrar mensaje de error
        alert('Por favor, complete todos los campos antes de continuar.');
        return; // Detener la ejecución y no redirigir
    }

    // Crear un objeto con todos los datos del formulario
    formData = {
        tipo,
        subtipo,
        largoGral, anchoGral, grosorGral,
        cantidadTS, largoTS, anchoTS, grosorTS,
        cantidadTI, largoTI, anchoTI, grosorTI,
        cantidadB, largoB, anchoB, grosorB
    };

} else if (subtipo === '3'){
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

    // VALIDAR LOS CAMPOS ANTES DE GUARDAR LA INFORMACIÓN
    // Verificar si algún campo está vacío
    if (!tipo || !subtipo || !largoGral || !anchoGral || !grosorGral ||
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
    formData = {
        tipo,
        subtipo,
        largoGral, anchoGral, grosorGral,
        cantidadTS, largoTS, anchoTS, grosorTS,
        cantidadTI, largoTI, anchoTI, grosorTI,
        cantidadTAG, largoTAG, anchoTAG, grosorTAG,
        cantidadTAC, largoTAC, anchoTAC, grosorTAC,
        cantidadTC, largoTC, anchoTC, grosorTC
    };
}


// Convertir el objeto JSON a string
const formDataJSON = JSON.stringify(formData);

// Guardar el JSON en localStorage
localStorage.setItem('formData', formDataJSON);

// Redirigir a la página del resumen
window.location.href = './resume.html';
});

