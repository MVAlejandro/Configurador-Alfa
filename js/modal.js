
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
function crearElemListaPrin(nombre, cantidad, largo, ancho, grosor) {
    lista_resumen.insertAdjacentHTML('beforeend', 
        `<li><u>${nombre}:</u> ${cantidad} * (${largo}" x ${ancho}" x ${grosor}")</li>`
    );
}

function crearElemListaSec(nombre, descripcion) {
    lista_resumen.insertAdjacentHTML('beforeend', 
        `<li class="sub_descripcion ms-4">${nombre}: ${descripcion}</li>`
    );
}

function crearElemListaSecMed(nombre, descripcion) {
    lista_resumen.insertAdjacentHTML('beforeend', 
        `<li class="sub_descripcion ms-4">${nombre}: ${descripcion}"</li>`
    );
}

function crearElemListaTolerancia(valor1, valor2, valor3) {
    lista_resumen.insertAdjacentHTML('beforeend', 
        `<li class="tolerancia ms-2"><em>Tolerancia: La: +- ${valor1}, An: +- ${valor2}, Es: +- ${valor3}</em></li>`
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
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        // Mostrar tabla superior (puede ser una o varias)
        if (Array.isArray(formData.tablaSuperior)) {
            formData.tablaSuperior.forEach((tabla, i) => {
                const titulo = formData.tablaSuperior.length > 1 ? `Tabla superior ${i + 1}` : 'Tabla superior';
                crearElemListaPrin(titulo, tabla.cantidadTS, tabla.largoTS, tabla.anchoTS, tabla.grosorTS);
            });
        }
        crearElemListaTolerancia(formData.tolerancias[0].toleranciaTS1, formData.tolerancias[0].toleranciaTS2, formData.tolerancias[0].toleranciaTS3);
        crearElemListaSecMed('Separación', formData.tablaSuperior[0].separacionTS);
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        crearElemListaPrin('Tabla inferior', formData.cantidadTI, formData.largoTI, formData.anchoTI, formData.grosorTI);
        crearElemListaTolerancia(formData.tolerancias[0].toleranciaTI1, formData.tolerancias[0].toleranciaTI2, formData.tolerancias[0].toleranciaTI3);
        crearElemListaSec('Arreglo', formData.arregloTI);
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        crearElemListaPrin('Barrote', formData.cantidadB, formData.largoB, formData.anchoB, formData.grosorB);
        crearElemListaTolerancia(formData.tolerancias[0].toleranciaB1, formData.tolerancias[0].toleranciaB2, formData.tolerancias[0].toleranciaB3);
        crearElemListaSec('Tipo', formData.tipoB);

        if (formData.tipoB === 'Con saque') {
            crearElemListaSecMed('Inicio de saque', formData.distB);
            crearElemListaSec('Distribución saque', formData.distBar);
        }

        // Insertar el modelo de tarima de barrote
        if (formData.tipo === 'Nueva') {
            modelo.innerHTML = `<img src="./assets/Tarima-con-barrote-nueva-520x357.png" alt="Tarima de barrotes nueva" class="d-block mx-auto img-fluid">`;
        } else {
            modelo.innerHTML = `<img src="./assets/Tarima-con-barrote-nueva-520x357.png" alt="Tarima de barrotes reciclada" class="d-block mx-auto img-fluid">`;
        }
    // Insertar información TARIMA DE TACON
    } else if (formData.subtipo === 'Tacón') {
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        // Mostrar tabla superior (puede ser una o varias)
        if (Array.isArray(formData.tablaSuperior)) {
            formData.tablaSuperior.forEach((tabla, i) => {
                const titulo = formData.tablaSuperior.length > 1 ? `Tabla superior ${i + 1}` : 'Tabla superior';
                crearElemListaPrin(titulo, tabla.cantidadTS, tabla.largoTS, tabla.anchoTS, tabla.grosorTS);
            });
        }
        crearElemListaTolerancia(formData.tolerancias[0].toleranciaTS1, formData.tolerancias[0].toleranciaTS2, formData.tolerancias[0].toleranciaTS3);
        crearElemListaSecMed('Separación', formData.tablaSuperior[0].separacionTS);
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        if (Array.isArray(formData.tablaInferior)) {
            formData.tablaInferior.forEach((tabla, i) => {
                const titulo = formData.tablaInferior.length > 1 ? `Tabla inferior ${i + 1}` : 'Tabla inferior';
                crearElemListaPrin(titulo, tabla.cantidadTI, tabla.largoTI, tabla.anchoTI, tabla.grosorTI);
            });
        }
        crearElemListaTolerancia(formData.tolerancias[0].toleranciaTI1, formData.tolerancias[0].toleranciaTI2, formData.tolerancias[0].toleranciaTI3);
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        crearElemListaPrin('Tacón lateral', formData.cantidadTAL, formData.largoTAL, formData.anchoTAL, formData.grosorTAL);
        crearElemListaPrin('Tacón central', formData.cantidadTAC, formData.largoTAC, formData.anchoTAC, formData.grosorTAC);
        crearElemListaTolerancia(formData.tolerancias[0].toleranciaTA1, formData.tolerancias[0].toleranciaTA2, formData.tolerancias[0].toleranciaTA3);
        lista_resumen.insertAdjacentHTML('beforeend', `<hr>`);
        crearElemListaPrin('Tablas de carga', formData.cantidadTC, formData.largoTC, formData.anchoTC, formData.grosorTC);
        crearElemListaTolerancia(formData.tolerancias[0].toleranciaTC1, formData.tolerancias[0].toleranciaTC2, formData.tolerancias[0].toleranciaTC3);

        // Insertar el modelo de tarima de tacón
        if (formData.tipo === 'Nueva') {
            modelo.innerHTML = `<img src="./assets/Tarima-con-tacon-nueva-520x357.png" alt="Tarima de tacón nueva" class="d-block mx-auto img-fluid">`;
        } else {
            modelo.innerHTML = `<img src="./assets/Tarima-de-tacon-reciclada-520x357.jpg" alt="Tarima de tacón reciclada" class="d-block mx-auto img-fluid">`;
        }
    }

    // PROPIEDADES //
    // Fórmula para calcular la capacidad de carga
    const ts = formData.tablaSuperior[0]; // usar el primero como referencia
    if (formData.subtipo === 'Barrote') {
        let capacidad_estatica_calculo = ((ts.largoTS * ts.anchoTS * ts.grosorTS) + (formData.largoTI * formData.anchoTI * formData.grosorTI)) * 10;
        let capacidad_dinamica_calculo = capacidad_estatica_calculo * 0.64;

        // Mostrar los valores calculados
        capacidad_estatica.innerHTML = `${capacidad_estatica_calculo.toFixed(2)} kg`;
        capacidad_dinamica.innerHTML = `${capacidad_dinamica_calculo.toFixed(2)} kg`;
    } else if (formData.subtipo === 'Tacón') {
        const ti = formData.tablaInferior[0]; // usar el primero como referencia
        let capacidad_estatica_calculo = ((ts.largoTS * ts.anchoTS * ts.grosorTS) + (ti.largoTI * ti.anchoTI * ti.grosorTI)) * 10;
        let capacidad_dinamica_calculo = capacidad_estatica_calculo * 0.64;

        // Mostrar los valores calculados
        capacidad_estatica.innerHTML = `${capacidad_estatica_calculo.toFixed(2)} kg`;
        capacidad_dinamica.innerHTML = `${capacidad_dinamica_calculo.toFixed(2)} kg`;
    }

    // COSTO //
    // Mostrar valores de los resultados
    costo_unitario.innerHTML = `$${formData.precioUnit}`;

    cantidad_total.innerHTML= `${formData.cantidad}`;

    const total = formData.precioUnit * formData.cantidad;
    const totalFormateado = total.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    costo_total.innerHTML = `$${totalFormateado}`;
};

const modalProducto = document.getElementById('modal_producto');

