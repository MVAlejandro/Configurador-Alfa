
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
function crearElemListaB(nombre, cantidad, largo, ancho, grosor, nombre2, subDes) {
    lista_resumen.insertAdjacentHTML('beforeend', 
        `<li>${nombre}: ${cantidad} * ${largo}" x ${ancho}" x ${grosor}"</li>
        <li class="sub_descripcion ms-4">${nombre2}: ${subDes}</li>`
    );
}

function crearElemListaT(nombre, cantidad, largo, ancho, grosor) {
    lista_resumen.insertAdjacentHTML('beforeend', 
        `<li>${nombre}: ${cantidad} * ${largo}" x ${ancho}" x ${grosor}"</li>`
    );
}

// Definir subtipo de tarima  y generar los elementos de las tablas
// TARIMA DE BARROTE
if (formData.subtipo === 'Barrote') {
    // Insertar el tipo, subtipo, acomodo y tamaño 
    lista_resumen.insertAdjacentHTML('beforeend', 
        `<li id="tipoTarima">Tipo: ${formData.tipo}</li>
        <li id="subtipoTarima">Subtipo: ${formData.subtipo}</li>
        <li id="acomodoTarima">Acomodo: ${formData.acomodo}</li>`
    );

    crearTamGral(formData.largoGral, formData.anchoGral, formData.grosorGral);

    // Llamar a la función para cada tabla con sus datos correspondientes
    crearElemListaB('Tabla superior', formData.cantidadTS, formData.largoTS, formData.anchoTS, formData.grosorTS, 'Separación', formData.separacionTS);
    crearElemListaB('Tabla inferior', formData.cantidadTI, formData.largoTI, formData.anchoTI, formData.grosorTI, 'Arreglo', formData.arregloTI);
    crearElemListaB('Barrote', formData.cantidadB, formData.largoB, formData.anchoB, formData.grosorB, 'Tipo', formData.tipoB);

    // Insertar el modelo de tarima de barrote
    if (formData.tipo === 'Nueva') {
        modelo.innerHTML = `<img src="./assets/Tarima-con-Barrote-Nueva.png" alt="Tarima de barrotes" width="520px" class="d-block mx-auto">`;
    } else if (formData.tipo === 'Reciclada') {
        modelo.innerHTML = `<img src="./assets/Tarima-con-Barrote-Nueva.png" alt="Tarima de barrotes" width="520px" class="d-block mx-auto">`;
    }

// TARIMA DE TACON
} else if (formData.subtipo === 'Tacón'){
    // Insertar el tipo, subtipo y tamaño
    lista_resumen.insertAdjacentHTML('beforeend', 
        `<li id="tipoTarima">Tipo: ${formData.tipo}</li>
        <li id="subtipoTarima">Subtipo: ${formData.subtipo}</li>
        <li id="acomodoTarima">Acomodo: ${formData.acomodo}</li>`
    );

    crearTamGral(formData.largoGral, formData.anchoGral, formData.grosorGral);

    // Llamar a la función para cada tabla con sus datos correspondientes
    crearElemListaB('Tabla superior', formData.cantidadTS, formData.largoTS, formData.anchoTS, formData.grosorTS, 'Separación', formData.separacionTS);
    crearElemListaT('Tabla inferior', formData.cantidadTI, formData.largoTI, formData.anchoTI, formData.grosorTI);
    crearElemListaT('Tacón', formData.cantidadTA, formData.largoTA, formData.anchoTA, formData.grosorTA);
    crearElemListaT('Tablas de carga', formData.cantidadTC, formData.largoTC, formData.anchoTC, formData.grosorTC);

    // Insertar el modelo de tarima de tacón
    if (formData.tipo === 'Nueva') {
        modelo.innerHTML = `<img src="./assets/Tarima-con-tacon-nueva.png" alt="Tarima con tacón nueva" width="520px" class="d-block mx-auto"></img>`;
    } else if (formData.tipo === 'Reciclada') {
        modelo.innerHTML = `<img src="./assets/Tarima-de-Tacon-reciclada.jpg" alt="Tarima con tacón nueva" width="520px" class="d-block mx-auto"></img>`;
    }
}


// PROPIEDADES //
// Fórmula para calcular la capacidad de carga
const capacidad_estatica_calculo = ((formData.largoTS * formData.anchoTS * formData.grosorTS) + (formData.largoTI * formData.anchoTI * formData.grosorTI)) * 10;
const capacidad_dinamica_calculo = capacidad_estatica_calculo * 0.64;

// Mostrar los resultados en la tabla
const capacidad_estatica = document.getElementById('capacidad_estatica');
const capacidad_dinamica = document.getElementById('capacidad_dinamica');
  
// Mostrar valores calculados
capacidad_estatica.insertAdjacentHTML('beforeend', 
    `${capacidad_estatica_calculo.toFixed(2)} kg`
);
capacidad_dinamica.insertAdjacentHTML('beforeend', 
    `${capacidad_dinamica_calculo.toFixed(2)} kg`
);


// COSTO //
// Definir elementos para mostrar la información
  const costo_unitario = document.getElementById('costo_unitario');

// Mostrar valores de los resultados
costo_unitario.insertAdjacentHTML('beforeend', 
    `$${formData.precioUnit}`
);

