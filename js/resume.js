
// Recuperar los datos del localStorage
const formDataJSON = localStorage.getItem('formData');
const formData = JSON.parse(formDataJSON);  // Convertir JSON string a un objeto
console.log(formDataJSON);


// CARACTERISTICAS //
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
function crearElemLista(nombre, cantidad, largo, ancho, grosor) {
    resumenLista.insertAdjacentHTML('beforeend', 
        `<li>${nombre}: ${cantidad} | ${largo}" x ${ancho}" x ${grosor}"</li>`
    );
}

// Llamar a la función para cada tabla con sus datos correspondientes
crearElemLista('Tabla superior', formData.cantidadTS, formData.largoTS, formData.anchoTS, formData.grosorTS);
crearElemLista('Tabla inferior', formData.cantidadTI, formData.largoTI, formData.anchoTI, formData.grosorTI);
crearElemLista('Tacón grueso', formData.cantidadTAG, formData.largoTAG, formData.anchoTAG, formData.grosorTAG);
crearElemLista('Tacón delgado', formData.cantidadTAC, formData.largoTAC, formData.anchoTAC, formData.grosorTAC);
crearElemLista('Tablas de carga', formData.cantidadTC, formData.largoTC, formData.anchoTC, formData.grosorTC);


// PROPIEDADES //
// Obtener las dimensiones de las tablas
const largoTS = parseFloat(formData.largoTS);
const anchoTS = parseFloat(formData.anchoTS);
const grosorTS = parseFloat(formData.grosorTS);

const largoTI = parseFloat(formData.largoTI);
const anchoTI = parseFloat(formData.anchoTI);
const grosorTI = parseFloat(formData.grosorTI);

// Fórmula para calcular la capacidad de carga
const capacidadEstatica = ((largoTS * anchoTS * grosorTS) + (largoTI * anchoTI * grosorTI)) * 10;
const capacidadDinamica = capacidadEstatica * 0.64;

// Mostrar los resultados en la tabla
const capEst = document.getElementById('cap-est');
const capDin = document.getElementById('cap-din');
  
// Mostrar valores calculados
capEst.insertAdjacentHTML('beforeend', 
    `${capacidadEstatica.toFixed(2)} kg`
);
capDin.insertAdjacentHTML('beforeend', 
    `${capacidadDinamica.toFixed(2)} kg`
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
  const precioFinalElement = document.getElementById('precio-fin');
  const desgloce1Element = document.getElementById('desgloce1');
  const desgloce2Element = document.getElementById('desgloce2');
  const desgloce3Element = document.getElementById('desgloce3');

// Mostrar valores de los resultados
precioFinalElement.insertAdjacentHTML('beforeend', 
    `$${precioFinal.toFixed(2)}`
);
desgloce1Element.insertAdjacentHTML('beforeend', 
    `$${desgloce1.toFixed(2)}`
);
desgloce2Element.insertAdjacentHTML('beforeend', 
    `$${desgloce2.toFixed(2)}`
);
desgloce3Element.insertAdjacentHTML('beforeend', 
    `$${desgloce3.toFixed(2)}`
);

