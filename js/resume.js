
// Recuperar los datos del localStorage
const formDataJSON = localStorage.getItem('formData');

// Verificar si hay datos guardados
if (formDataJSON) {
    const formData = JSON.parse(formDataJSON);  // Convertir JSON string a un objeto
    console.log(formDataJSON);

    // Obtener el contenedor ul donde se agregarán los li
    const resumenLista = document.getElementById('resumenLista');

     // Crear el contenido HTML para estado y tipo
    let estadoTexto;
    if (formData.estado === '1') {
        estadoTexto = 'Nueva';
    } else {
        estadoTexto = 'Reciclada';
    }

    switch (formData.tipo) {
        case '1':
            tipoTexto = 'Ciega';
            break;
        case '2':
            tipoTexto = 'Barrote';
            break;
        case '3':
            tipoTexto = 'Tacón';
            break;
        default:
            tipoTexto = 'Tacón chico';
            break;
    }

    // Insertar el estado y tipo 
    resumenLista.insertAdjacentHTML('beforeend', 
        `<li id="estadoTarima">Estado: ${estadoTexto}</li>
        <li id="tipoTarima">Tipo: ${tipoTexto}</li>`
    );

    // Función para generar los elementos de las tablas
    function crearItemLista(nombre, cantidad, largo, ancho, grosor) {
        resumenLista.insertAdjacentHTML('beforeend', 
            `<li>${nombre}: ${cantidad} | ${largo}" x ${ancho}" x ${grosor}"</li>`
        );
    }

    // Llamar a la función para cada tabla con sus datos correspondientes
    crearItemLista('Tabla superior', formData.cantidadTS, formData.largoTS, formData.anchoTS, formData.grosorTS);
    crearItemLista('Tabla inferior', formData.cantidadTI, formData.largoTI, formData.anchoTI, formData.grosorTI);
    crearItemLista('Tacón grueso', formData.cantidadTAG, formData.largoTAG, formData.anchoTAG, formData.grosorTAG);
    crearItemLista('Tacón delgado', formData.cantidadTAC, formData.largoTAC, formData.anchoTAC, formData.grosorTAC);
    crearItemLista('Tablas de carga', formData.cantidadTC, formData.largoTC, formData.anchoTC, formData.grosorTC);

} else {
    console.error('No se encontraron datos en localStorage.');
}


