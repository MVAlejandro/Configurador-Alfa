
// CARACTERISTICAS //
// Obtener el lista_servicios ul donde se agregarán los li
const lista_resumen = document.getElementById('lista_resumen');
const lista_servicios = document.getElementById('lista_servicios');

// Función para generar el tamaño de la tarima
function crearTamGral(largoG, anchoG, grosorG) {
        lista_resumen.insertAdjacentHTML('beforeend', 
            `<li id="tamGral">Tamaño: ${largoG}" x ${anchoG}" x ${grosorG}"</li>`
        );
    }

// Función para generar los elementos de las tablas
function crearElemListaPrin(nombre, cantidad, largo, ancho, grosor) {
    lista_resumen.insertAdjacentHTML('beforeend', 
        `<li><u>${nombre}:</u> ${cantidad} * (${largo}" x ${ancho}" x ${grosor}")</li>`
    );
}
// Función para generar los elementos secundarios de las tablas 
function crearElemListaSec(nombre, descripcion) {
    lista_resumen.insertAdjacentHTML('beforeend', 
        `<li class="sub_descripcion ms-4">${nombre}: ${descripcion}</li>`
    );
}
// Función para generar los elementos de las tablas con medidas en pulgadas(")"
function crearElemListaSecMed(nombre, descripcion) {
    lista_resumen.insertAdjacentHTML('beforeend', 
        `<li class="sub_descripcion ms-4">${nombre}: ${descripcion}"</li>`
    );
}
// Función para generar las tolerancias de las tablas
function crearElemListaTolerancia(valor) {
    lista_resumen.insertAdjacentHTML('beforeend', 
        `<li class="tolerancia ms-2"><em>Tolerancias: +- ${valor}</em></li>`
    );
}

// Función para llenar toda la información en el modal
function abrirModalItem(formData) {
    // Limpiar lista_servicioses antes de insertar la información
    lista_resumen.innerHTML = '';
    lista_servicios.innerHTML = '';
    modelo.innerHTML = '';
    capacidad_estatica.innerHTML = '';
    capacidad_dinamica.innerHTML = '';
    costo_unitario.innerHTML = '';

    // Insertar información general
    lista_resumen.insertAdjacentHTML('beforeend', `
        <li id="tipoTarima">Tipo: ${formData.producto.tipo}</li>
        <li id="subtipoTarima">Subtipo: ${formData.producto.subtipo}</li>
        <li id="acomodoTarima">Acomodo: ${formData.producto.acomodo}</li>
    `);

    crearTamGral(formData.producto.largoGral, formData.producto.anchoGral, formData.producto.grosorGral);

    // Insertar información TARIMA DE BARROTE
    if (formData.producto.subtipo === 'Barrote') {
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        // Mostrar tabla superior (puede ser una o varias)
        if (Array.isArray(formData.parrillaTS)) {
            formData.parrillaTS.forEach((tabla, i) => {
                const titulo = formData.parrillaTS.length > 1 ? `Tabla superior ${i + 1}` : 'Tabla superior';
                crearElemListaPrin(titulo, tabla.cantidadTS, tabla.largoTS, tabla.anchoTS, tabla.grosorTS);
            });
        }
        crearElemListaTolerancia(formData.parrillaTS[0].toleranciaTS);
        crearElemListaSecMed('Separación', formData.parrillaTS[0].separacionTS);
        crearElemListaSec('Material', formData.parrillaTS[0].materialTS);
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        if (Array.isArray(formData.parrillaTI)) {
            formData.parrillaTI.forEach((tabla, i) => {
                const titulo = formData.parrillaTI.length > 1 ? `Tabla inferior ${i + 1}` : 'Tabla inferior';
                crearElemListaPrin(titulo, tabla.cantidadTI, tabla.largoTI, tabla.anchoTI, tabla.grosorTI);
            });
        }
        crearElemListaTolerancia(formData.parrillaTI[0].toleranciaTI);
        crearElemListaSec('Material', formData.parrillaTI[0].materialTI);
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        crearElemListaPrin('Barrote', formData.parrillaTC[0].cantidadB, formData.parrillaTC[0].largoB, formData.parrillaTC[0].anchoB, formData.parrillaTC[0].grosorB);
        crearElemListaTolerancia(formData.parrillaTC[0].toleranciaB);
        crearElemListaSec('Material', formData.parrillaTC[0].materialB);
        crearElemListaSec('Tipo', formData.parrillaTC[0].tipoB);

        if (formData.parrillaTC[0].tipoB === 'Con saque') {
            crearElemListaSecMed('Inicio de saque', formData.parrillaTC[0].tipoB);
        }

        // Insertar el modelo de tarima de barrote
        if (formData.producto.tipo === 'Nueva') {
            modelo.innerHTML = `<img src="./assets/Tarima-con-barrote-nueva-520x357.png" alt="Tarima de barrotes nueva" class="d-block mx-auto img-fluid">`;
        } else {
            modelo.innerHTML = `<img src="./assets/Tarima-con-barrote-reciclada-520x357.png" alt="Tarima de barrotes reciclada" class="d-block mx-auto img-fluid">`;
        }
    // Insertar información TARIMA DE TACON
    } else if (formData.producto.subtipo === 'Tacón') {
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        // Mostrar tabla superior (puede ser una o varias)
        if (Array.isArray(formData.parrillaTS)) {
            formData.parrillaTS.forEach((tabla, i) => {
                const titulo = formData.parrillaTS.length > 1 ? `Tabla superior ${i + 1}` : 'Tabla superior';
                crearElemListaPrin(titulo, tabla.cantidadTS, tabla.largoTS, tabla.anchoTS, tabla.grosorTS);
            });
        }
        crearElemListaTolerancia(formData.parrillaTS[0].toleranciaTS);
        crearElemListaSecMed('Separación', formData.parrillaTS[0].separacionTS);
        crearElemListaSec('Material', formData.parrillaTS[0].materialTS);
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        if (Array.isArray(formData.parrillaTI)) {
            formData.parrillaTI.forEach((tabla, i) => {
                const titulo = formData.parrillaTI.length > 1 ? `Tabla inferior ${i + 1}` : 'Tabla inferior';
                crearElemListaPrin(titulo, tabla.cantidadTI, tabla.largoTI, tabla.anchoTI, tabla.grosorTI);
            });
        }
        crearElemListaTolerancia(formData.parrillaTI[0].toleranciaTI);
        crearElemListaSec('Material', formData.parrillaTI[0].materialTI);
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        crearElemListaPrin('Tacón lateral', formData.parrillaTC[0].cantidadTAL, formData.parrillaTC[0].largoTAL, formData.parrillaTC[0].anchoTAL, formData.parrillaTC[0].grosorTAL);
        crearElemListaPrin('Tacón central', formData.parrillaTC[0].cantidadTAC, formData.parrillaTC[0].largoTAC, formData.parrillaTC[0].anchoTAC, formData.parrillaTC[0].grosorTAC);
        crearElemListaTolerancia(formData.parrillaTC[0].toleranciaTA);
        crearElemListaSec('Material', formData.parrillaTC[0].materialTA);
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        crearElemListaPrin('Tablas de carga', formData.parrillaTC[1].cantidadTC, formData.parrillaTC[1].largoTC, formData.parrillaTC[1].anchoTC, formData.parrillaTC[1].grosorTC);
        crearElemListaTolerancia(formData.parrillaTC[1].toleranciaTC);
        crearElemListaSec('Material', formData.parrillaTC[1].materialTC);

        // Insertar el modelo de tarima de tacón
        if (formData.producto.tipo === 'Nueva') {
            modelo.innerHTML = `<img src="./assets/Tarima-con-tacon-nueva-520x357.png" alt="Tarima de tacón nueva" class="d-block mx-auto img-fluid">`;
        } else {
            modelo.innerHTML = `<img src="./assets/Tarima-de-tacon-reciclada-520x357.jpg" alt="Tarima de tacón reciclada" class="d-block mx-auto img-fluid">`;
        }
    }


    // SERVICIOS
    // Verifica los servicios seleccionados
    const servicio = formData.servicios;

    // Insertar el servicio a la lista
    for (let propiedad in servicio) {
        if (servicio[propiedad] === "Sí") {
            lista_servicios.insertAdjacentHTML('beforeend', `<li>${propiedad}</li>`);
        }
    }

    // Si existe la opción de color, mostrarla
    if (servicio.hasOwnProperty('Color') && servicio['Color']) {
        lista_servicios.insertAdjacentHTML('beforeend', `<li class="sub_descripcion ms-4">Color: ${servicio['Color']}</li>`);
    }

    // PROPIEDADES //
    // Fórmula para calcular la capacidad de carga
    const ts = formData.parrillaTS[0]; // usar el primero como referencia
    const ti = formData.parrillaTI[0]; // usar el primero como referencia
    if (formData.producto.subtipo === 'Barrote') {
        let capacidad_estatica_calculo = ((ts.largoTS * ts.anchoTS * ts.grosorTS) + (ti.largoTI * ti.anchoTI * ti.grosorTI)) * 10;
        let capacidad_dinamica_calculo = capacidad_estatica_calculo * 0.64;

        // Mostrar los valores calculados
        capacidad_estatica.innerHTML = `${capacidad_estatica_calculo.toFixed(2)} kg`;
        capacidad_dinamica.innerHTML = `${capacidad_dinamica_calculo.toFixed(2)} kg`;

    } else if (formData.producto.subtipo === 'Tacón') {
        let capacidad_estatica_calculo = ((ts.largoTS * ts.anchoTS * ts.grosorTS) + (ti.largoTI * ti.anchoTI * ti.grosorTI)) * 10;
        let capacidad_dinamica_calculo = capacidad_estatica_calculo * 0.64;

        // Mostrar los valores calculados
        capacidad_estatica.innerHTML = `${capacidad_estatica_calculo.toFixed(2)} kg`;
        capacidad_dinamica.innerHTML = `${capacidad_dinamica_calculo.toFixed(2)} kg`;
    }


    // COSTO //
    // Mostrar valores de los resultados
    costo_unitario.innerHTML = `$${formData.producto.precioUnit}`;

    cantidad_total.innerHTML= `${formData.producto.cantidad}`;

    const total = formData.producto.precioUnit * formData.producto.cantidad;
    const totalFormateado = total.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    costo_total.innerHTML = `$${totalFormateado}`;
};

const modalProducto = document.getElementById('modal_producto');
