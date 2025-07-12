
// GUARDAR INFORMACION EN JSON AL DAR CLICK EN "SIGUIENTE"
// Crear evento al dar click al botón Siguiente
document.getElementById('btn_agregar').addEventListener('click', function(event) {
    // Prevenir comportamiento predeterminado del botón
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const tipo = document.getElementById('tipo').value;
    const subtipo = document.getElementById('subtipo').value;
        
    // Obtener los datos de las tablas compartidos entre ambos tipos de tarima
    const largoGral = parseFloat(document.getElementById('largoGral').value);
    const anchoGral = parseFloat(document.getElementById('anchoGral').value);
    const grosorGral = parseFloat(document.getElementById('grosorGral').value);

    const cantidadTS = parseInt(document.getElementById('cantidadTS').value);
    const largoTS = parseFloat(document.getElementById('largoTS').value);
    const anchoTS = parseFloat(document.getElementById('anchoTS').value);
    const grosorTS = parseFloat(document.getElementById('grosorTS').value);
        
    const cantidadTI = parseInt(document.getElementById('cantidadTI').value);
    const largoTI = parseFloat(document.getElementById('largoTI').value);
    const anchoTI = parseFloat(document.getElementById('anchoTI').value);
    const grosorTI = parseFloat(document.getElementById('grosorTI').value);

    // Declarar el objeto formData para después
    let formData = {};

    // Obtener los datos de las tablas dependiendo el tipo de tarima
    // TARIMA DE BARROTE
    if (subtipo === '2') {
        const cantidadB = parseInt(document.getElementById('cantidadB').value);
        const largoB = parseFloat(document.getElementById('largoB').value);
        const anchoB = parseFloat(document.getElementById('anchoB').value);
        const grosorB = parseFloat(document.getElementById('grosorB').value);

        // VALIDAR LOS CAMPOS ANTES DE GUARDAR LA INFORMACIÓN
        // Verificar si algún campo está vacío
        if (!tipo || !subtipo || !largoGral || !anchoGral || !grosorGral ||
            !cantidadTS || !largoTS || !anchoTS || !grosorTS ||
            !cantidadTI || !largoTI || !anchoTI || !grosorTI ||
            !cantidadB || !largoB || !anchoB || !grosorB) {
                
            // Si algún campo está vacío, mostrar mensaje de error
            alert('Por favor, complete todos los campos para agregar el producto.');
            return; // Detener la ejecución y no continuar
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

    // TARIMA DE TACON
    } else if (subtipo === '3'){
        const cantidadTA = parseInt(document.getElementById('cantidadTA').value);
        const largoTA = parseFloat(document.getElementById('largoTA').value);
        const anchoTA = parseFloat(document.getElementById('anchoTA').value);
        const grosorTA = parseFloat(document.getElementById('grosorTA').value);
            
        const cantidadTC = parseInt(document.getElementById('cantidadTC').value);
        const largoTC = parseFloat(document.getElementById('largoTC').value);
        const anchoTC = parseFloat(document.getElementById('anchoTC').value);
        const grosorTC = parseFloat(document.getElementById('grosorTC').value);

        // VALIDAR LOS CAMPOS ANTES DE GUARDAR LA INFORMACIÓN
        // Verificar si algún campo está vacío
        if (!tipo || !subtipo || !largoGral || !anchoGral || !grosorGral ||
            !cantidadTS || !largoTS || !anchoTS || !grosorTS ||
            !cantidadTI || !largoTI || !anchoTI || !grosorTI ||
            !cantidadTA || !largoTA || !anchoTA || !grosorTA ||
            !cantidadTC || !largoTC || !anchoTC || !grosorTC) {
                
            // Si algún campo está vacío, mostrar mensaje de error
            alert('Por favor, complete todos los campos para agregar el producto.');
            return; // Detener la ejecución y no continuar
        }

        // Crear un objeto con todos los datos del formulario
        formData = {
            tipo,
            subtipo,
            largoGral, anchoGral, grosorGral,
            cantidadTS, largoTS, anchoTS, grosorTS,
            cantidadTI, largoTI, anchoTI, grosorTI,
            cantidadTA, largoTA, anchoTA, grosorTA,
            cantidadTC, largoTC, anchoTC, grosorTC
        };
    }


    // Convertir el objeto JSON a string
    const formDataJSON = JSON.stringify(formData);

    // Guardar el JSON en localStorage
    localStorage.setItem('formData', formDataJSON);

    // Limpiar los campos
    location.reload();

    // Mostrar alerta de agregado correctamente
    alert('Datos guardados correctamente.');
});

