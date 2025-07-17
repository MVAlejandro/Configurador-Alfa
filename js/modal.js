
// CARACTERISTICAS //
// Obtener el contenedor ul donde se agregarán los li
const lista_resumen = document.getElementById('lista_resumen');

// Función para generar el tamaño de la tarima
function crearTamGral(largoG, anchoG, grosorG) {
        lista_resumen.insertAdjacentHTML('beforeend', 
            `<li id="tamGral">Tamaño: ${largoG}" x ${anchoG}" x ${grosorG}"</li>`
        );
    }

// Función para generar los elementos de las tablas
function crearElemListaB(nombre, cantidad, largo, ancho, grosor) {
    lista_resumen.insertAdjacentHTML('beforeend', 
        `<li>${nombre}: ${cantidad} * ${largo}" x ${ancho}" x ${grosor}"</li>`
    );
}

function crearElemListaT(nombre, cantidad, largo, ancho, grosor) {
    lista_resumen.insertAdjacentHTML('beforeend', 
        `<li>${nombre}: ${cantidad} * ${largo}" x ${ancho}" x ${grosor}"</li>`
    );
}

function crearElemListaSec(nombre, descripcion) {
    lista_resumen.insertAdjacentHTML('beforeend', 
        `<li class="sub_descripcion ms-4">${nombre}: ${descripcion}</li>`
    );
}

// Función para llenar toda la información en el modal
function abrirModalItem(formData) {
    // Limpiar contenedores antes de insertar la información
    lista_resumen.innerHTML = '';
    modelo.innerHTML = '';
    capacidad_estatica.innerHTML = '';
    capacidad_dinamica.innerHTML = '';
    costo_unitario.innerHTML = '';

    // Insertar información general
    lista_resumen.insertAdjacentHTML('beforeend', `
        <li id="tipoTarima">Tipo: ${formData.tipo}</li>
        <li id="subtipoTarima">Subtipo: ${formData.subtipo}</li>
        <li id="acomodoTarima">Acomodo: ${formData.acomodo}</li>
    `);

    crearTamGral(formData.largoGral, formData.anchoGral, formData.grosorGral);

    // Insertar información TARIMA DE BARROTE
    if (formData.subtipo === 'Barrote') {
        crearElemListaB('Tabla superior', formData.cantidadTS, formData.largoTS, formData.anchoTS, formData.grosorTS);
        crearElemListaSec('Separación', formData.separacionTS);
        crearElemListaB('Tabla inferior', formData.cantidadTI, formData.largoTI, formData.anchoTI, formData.grosorTI);
        crearElemListaSec('Arreglo', formData.arregloTI);
        crearElemListaB('Barrote', formData.cantidadB, formData.largoB, formData.anchoB, formData.grosorB);
        crearElemListaSec('Tipo', formData.tipoB);
        crearElemListaSec('Distribución', formData.distBar);

        // Insertar el modelo de tarima de barrote
        if (formData.tipo === 'Nueva') {
            modelo.innerHTML = `<img src="./assets/Tarima-con-Barrote-Nueva.png" alt="Tarima de barrotes nueva" width="520px" class="d-block mx-auto">`;
        } else {
            modelo.innerHTML = `<img src="./assets/Tarima-con-Barrote-Nueva.png" alt="Tarima de barrotes reciclada" width="520px" class="d-block mx-auto">`;
        }
    // Insertar información TARIMA DE TACON
    } else if (formData.subtipo === 'Tacón') {
        crearElemListaB('Tabla superior', formData.cantidadTS, formData.largoTS, formData.anchoTS, formData.grosorTS, 'Separación', formData.separacionTS);
        crearElemListaT('Tabla inferior', formData.cantidadTI, formData.largoTI, formData.anchoTI, formData.grosorTI);
        crearElemListaT('Tacón', formData.cantidadTA, formData.largoTA, formData.anchoTA, formData.grosorTA);
        crearElemListaT('Tablas de carga', formData.cantidadTC, formData.largoTC, formData.anchoTC, formData.grosorTC);

        // Insertar el modelo de tarima de tacón
        if (formData.tipo === 'Nueva') {
            modelo.innerHTML = `<img src="./assets/Tarima-con-tacon-nueva.png" alt="Tarima de tacón nueva" width="520px" class="d-block mx-auto">`;
        } else {
            modelo.innerHTML = `<img src="./assets/Tarima-de-Tacon-reciclada.jpg" alt="Tarima de tacón reciclada" width="520px" class="d-block mx-auto">`;
        }
    }

    // PROPIEDADES //
    // Fórmula para calcular la capacidad de carga
    const capacidad_estatica_calculo = ((formData.largoTS * formData.anchoTS * formData.grosorTS) + (formData.largoTI * formData.anchoTI * formData.grosorTI)) * 10;
    const capacidad_dinamica_calculo = capacidad_estatica_calculo * 0.64;

    // Mostrar los valores calculados
    capacidad_estatica.innerHTML = `${capacidad_estatica_calculo.toFixed(2)} kg`;
    capacidad_dinamica.innerHTML = `${capacidad_dinamica_calculo.toFixed(2)} kg`;

    // COSTO //
    // Mostrar valores de los resultados
    costo_unitario.innerHTML = `$${formData.precioUnit}`;

    const total = formData.precioUnit * formData.cantidad;
    const totalFormateado = total.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    costo_total.innerHTML = `$${totalFormateado}`;
};

const modalProducto = document.getElementById('modal_producto');

