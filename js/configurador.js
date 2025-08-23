
// IMPORTACIÓN DE FUNCIONES EXTERNAS
// Importar funciones de creación de producto
import {productoData} from "./datos/producto..js"
import {componenteTSData, componenteTIData, componenteBData, componenteTALData, componenteTACData, componenteTCData} from "./datos/parrillas.js"
import {serviciosData} from "./datos/servicios.js"
// Importar la función para obtener la imagen del plano
import {obtenerPlanoB} from './planos/plano_barrote.js'; 
import {obtenerPlanoT} from './planos/plano_tacon.js';

// Crear evento al dar click en botón Resumen
document.getElementById('btn_regresar').addEventListener('click', function () {
    window.location.href = './cliente.html';
});

// Recuperar los datos del localStorage e introducir el nombre del cliente
const cliente = JSON.parse(localStorage.getItem("clienteActual"));
console.log(cliente);

const cliente_activo = document.getElementById('cliente_activo');
cliente_activo.innerText = cliente.nombre;

// Declarar el arreglo para guardar los objetos, y recupera en caso de existir
let carrito = JSON.parse(localStorage.getItem("carrito")) || []; 

// GUARDAR INFORMACION EN JSON AL DAR CLICK EN "AGREGAR"
// Crear evento al dar click al botón Agregar
document.getElementById('btn_agregar').addEventListener('click', function(event) {
    event.preventDefault();
    const subtipo = document.getElementById('subtipo').value;
    let formData = {}
    let imgPlano = null;

    // TARIMA DE BARROTE
    if (subtipo === 'Barrote') {
        // Obtener la imagen del plano (base64) generado en el canvas
        imgPlano = obtenerPlanoB();

        formData = {
            producto: productoData(), 
            componenteTS: componenteTSData(), 
            componenteTI: componenteTIData(), 
            componenteB: componenteBData(),
            servicios: serviciosData(), 
            imgPlano
        }

    // TARIMA DE TACON
    } else if (subtipo === 'Tacón'){
        // Obtener la imagen del plano (base64) generado en el canvas
        imgPlano = obtenerPlanoT();

        formData = {
            producto: productoData(), 
            componenteTS: componenteTSData(), 
            componenteTI: componenteTIData(), 
            componenteTAL: componenteTALData(),
            componenteTAC: componenteTACData(), 
            componenteTC: componenteTCData(),
            servicios: serviciosData(), 
            imgPlano
        }
    }

    // Agregar el objeto creado al carrito
    carrito.push(formData);
    // Guardar el carrito en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    // Limpiar los campos
    location.reload();
    // Mostrar alerta de agregado correctamente
    alert('Datos guardados correctamente.');

});

