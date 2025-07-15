
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
function crearElemLista(nombre, cantidad, largo, ancho, grosor) {
    lista_resumen.insertAdjacentHTML('beforeend', 
        `<li>${nombre}: ${cantidad} * ${largo}" x ${ancho}" x ${grosor}"</li>`
    );
}

// Definir tipo de tarima
let tipo_texto;
if (formData.tipo === '1') {
    tipo_texto = 'Nueva';
} else {
    tipo_texto = 'Reciclada';
}

// Definir subtipo de tarima  y generar los elementos de las tablas
// TARIMA DE BARROTE
let subtipo_texto;
if (formData.subtipo === '2') {
    subtipo_texto = 'Barrote';
    // Insertar el tipo, subtipo y tamaño 
    lista_resumen.insertAdjacentHTML('beforeend', 
        `<li id="tipoTarima">Tipo: ${tipo_texto}</li>
        <li id="subtipoTarima">Subtipo: ${subtipo_texto}</li>`
    );

    crearTamGral(formData.largoGral, formData.anchoGral, formData.grosorGral);

    // Llamar a la función para cada tabla con sus datos correspondientes
    crearElemLista('Tabla superior', formData.cantidadTS, formData.largoTS, formData.anchoTS, formData.grosorTS);
    crearElemLista('Tabla inferior', formData.cantidadTI, formData.largoTI, formData.anchoTI, formData.grosorTI);
    crearElemLista('Barrote', formData.cantidadB, formData.largoB, formData.anchoB, formData.grosorB);

    // Insertar el modelo de tarima de barrote
    modelo.innerHTML = `<img src="./assets/Tarima-con-Barrote-Nueva.png" alt="Tarima de barrotes" width="520px" class="d-block mx-auto">`;

// TARIMA DE TACON
} else if (formData.subtipo === '3'){
    subtipo_texto = 'Tacón';
    // Insertar el tipo, subtipo y tamaño
    lista_resumen.insertAdjacentHTML('beforeend', 
        `<li id="tipoTarima">Tipo: ${tipo_texto}</li>
        <li id="subtipoTarima">Subtipo: ${subtipo_texto}</li>`
    );

    crearTamGral(formData.largoGral, formData.anchoGral, formData.grosorGral);

    // Llamar a la función para cada tabla con sus datos correspondientes
    crearElemLista('Tabla superior', formData.cantidadTS, formData.largoTS, formData.anchoTS, formData.grosorTS);
    crearElemLista('Tabla inferior', formData.cantidadTI, formData.largoTI, formData.anchoTI, formData.grosorTI);
    crearElemLista('Tacón', formData.cantidadTA, formData.largoTA, formData.anchoTA, formData.grosorTA);
    crearElemLista('Tablas de carga', formData.cantidadTC, formData.largoTC, formData.anchoTC, formData.grosorTC);

    // Insertar el modelo de tarima de tacón
    modelo.innerHTML = `<img src="./assets/Tarima-con-tacon-nueva.png" alt="Tarima con tacón nueva" width="520px" class="d-block mx-auto"></img>`;
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
// Valores para calcular los costos
const costoBase = 500; // costo base tarima
const costoTablaSuperior = 100; // tabla superior
const costoTablaInferior = 80; // tabla inferior
const costoTaconGrueso = 50; // tacón grueso
const costoTaconChico = 30; // tacón chico
const costoCarga = 70; // tablas de carga

// Fórmula cálculo de costos
const desgloce1 = costoBase + costoTablaSuperior; // base + tabla superior
const desgloce2 = costoTablaInferior + costoTaconGrueso; // tabla inferior + tacón grueso
const desgloce3 = costoTaconChico + costoCarga; // tacón chico + tablas de carga

// Precio final = Suma de desgloces
const precioFinal = desgloce1 + desgloce2 + desgloce3;

// Definir elementos para mostrar la información
  const precioFinalElement = document.getElementById('costo_final');

// Mostrar valores de los resultados
precioFinalElement.insertAdjacentHTML('beforeend', 
    `$${precioFinal.toFixed(2)}`
);

