
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

    crearTamGral(formData.producto.largo_gral, formData.producto.ancho_gral, formData.producto.grosor_gral);

    // Insertar información TARIMA DE BARROTE
    if (formData.producto.subtipo === 'Barrote') {
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        // Mostrar tabla superior (puede ser una o varias)
        if (Array.isArray(formData.componenteTS)) {
            formData.componenteTS.forEach((tabla, i) => {
                const titulo = formData.componenteTS.length > 1 ? `Tabla superior ${i + 1}` : 'Tabla superior';
                crearElemListaPrin(titulo, tabla.cantidad_TS, tabla.largo_TS, tabla.ancho_TS, tabla.grosor_TS);
            });
        }
        crearElemListaTolerancia(formData.componenteTS[0].tolerancia_TS);
        crearElemListaSecMed('Separación', formData.componenteTS[0].separacion_TS);
        crearElemListaSec('Material', formData.componenteTS[0].material_TS);
        // Mostrar tabla inferior (puede ser una o varias)
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        if (Array.isArray(formData.componenteTI)) {
            formData.componenteTI.forEach((tabla, i) => {
                const titulo = formData.componenteTI.length > 1 ? `Tabla inferior ${i + 1}` : 'Tabla inferior';
                crearElemListaPrin(titulo, tabla.cantidad_TI, tabla.largo_TI, tabla.ancho_TI, tabla.grosor_TI);
            });
        }
        crearElemListaTolerancia(formData.componenteTI[0].tolerancia_TI);
        crearElemListaSec('Material', formData.componenteTI[0].material_TI);
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        // Mostrar barrotes
        crearElemListaPrin('Barrote', formData.componenteB.cantidad_B, formData.componenteB.largo_B, formData.componenteB.ancho_B, formData.componenteB.grosor_B);
        crearElemListaTolerancia(formData.componenteB.tolerancia_B);
        crearElemListaSec('Material', formData.componenteB.material_B);
        crearElemListaSec('Tipo', formData.componenteB.tipo_B);

        if (formData.componenteB.tipo_B === 'Con saque') {
            crearElemListaSecMed('Inicio de saque', formData.componenteB.dist_B);
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
        if (Array.isArray(formData.componenteTS)) {
            formData.componenteTS.forEach((tabla, i) => {
                const titulo = formData.componenteTS.length > 1 ? `Tabla superior ${i + 1}` : 'Tabla superior';
                crearElemListaPrin(titulo, tabla.cantidad_TS, tabla.largo_TS, tabla.ancho_TS, tabla.grosor_TS);
            });
        }
        crearElemListaTolerancia(formData.componenteTS[0].tolerancia_TS);
        crearElemListaSecMed('Separación', formData.componenteTS[0].separacion_TS);
        crearElemListaSec('Material', formData.componenteTS[0].material_TS);
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        // Mostrar tabla inferior (puede ser una o varias)
        if (Array.isArray(formData.componenteTI)) {
            formData.componenteTI.forEach((tabla, i) => {
                const titulo = formData.componenteTI.length > 1 ? `Tabla inferior ${i + 1}` : 'Tabla inferior';
                crearElemListaPrin(titulo, tabla.cantidad_TI, tabla.largo_TI, tabla.ancho_TI, tabla.grosor_TI);
            });
        }
        crearElemListaTolerancia(formData.componenteTI[0].tolerancia_TI);
        crearElemListaSec('Material', formData.componenteTI[0].material_TI);
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        // Mostrar tacón lateral y central
        crearElemListaPrin('Tacón lateral', formData.componenteTAL.cantidad_TAL, formData.componenteTAL.largo_TAL, formData.componenteTAL.ancho_TAL, formData.componenteTAL.grosor_TAL);
        crearElemListaPrin('Tacón central', formData.componenteTAC.cantidad_TAC, formData.componenteTAC.largo_TAC, formData.componenteTAC.ancho_TAC, formData.componenteTAC.grosor_TAC);
        crearElemListaTolerancia(formData.componenteTAL.tolerancia_TA);
        crearElemListaSec('Material', formData.componenteTAL.material_TA);
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        // Mostrar tablas de carga
        crearElemListaPrin('Tablas de carga', formData.componenteTC.cantidad_TC, formData.componenteTC.largo_TC, formData.componenteTC.ancho_TC, formData.componenteTC.grosor_TC);
        crearElemListaTolerancia(formData.componenteTC.tolerancia_TC);
        crearElemListaSec('Material', formData.componenteTC.material_TC);

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
    const ts = formData.componenteTS[0]; // usar el primero como referencia
    const ti = formData.componenteTI[0]; // usar el primero como referencia
    if (formData.producto.subtipo === 'Barrote') {
        let capacidad_estatica_calculo = ((ts.largo_TS * ts.ancho_TS * ts.grosor_TS) + (ti.largo_TI * ti.ancho_TI * ti.grosor_TI)) * 10;
        let capacidad_dinamica_calculo = capacidad_estatica_calculo * 0.64;

        // Mostrar los valores calculados
        capacidad_estatica.innerHTML = `${capacidad_estatica_calculo.toFixed(2)} kg`;
        capacidad_dinamica.innerHTML = `${capacidad_dinamica_calculo.toFixed(2)} kg`;

    } else if (formData.producto.subtipo === 'Tacón') {
        let capacidad_estatica_calculo = ((ts.largo_TS * ts.ancho_TS * ts.grosor_TS) + (ti.largo_TI * ti.ancho_TI * ti.grosor_TI)) * 10;
        let capacidad_dinamica_calculo = capacidad_estatica_calculo * 0.64;

        // Mostrar los valores calculados
        capacidad_estatica.innerHTML = `${capacidad_estatica_calculo.toFixed(2)} kg`;
        capacidad_dinamica.innerHTML = `${capacidad_dinamica_calculo.toFixed(2)} kg`;
    }


    // COSTO //
    // Mostrar valores de los resultados
    costo_unitario.innerHTML = `$${formData.producto.precio_unit}`;

    cantidad_total.innerHTML= `${formData.producto.cantidad}`;

    const total = formData.producto.precio_unit * formData.producto.cantidad;
    const totalFormateado = total.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    costo_total.innerHTML = `$${totalFormateado}`;
};

const modalProducto = document.getElementById('modal_producto');
