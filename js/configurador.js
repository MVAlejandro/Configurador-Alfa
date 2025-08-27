
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

// Mostrar nombre del cliente activo en pantalla
const clienteActivo = JSON.parse(localStorage.getItem("cliente_activo"));
if (clienteActivo) {
    document.getElementById("cliente_activo").innerText = clienteActivo.nombre;
}

// Declarar el arreglo para guardar los objetos, y recupera en caso de existir
let carrito = JSON.parse(localStorage.getItem("carrito")) || []; 

// Crear evento al dar click al botón Agregar
document.getElementById('btn_agregar').addEventListener('click', async function(event) {
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

    // ----- DEBUG FORMULARIO ----- //
    // console.log('DEBUG - Datos completos del formulario:', {
    //     producto: formData.producto,
    //     servicios: formData.servicios,
    //     componenteTS: formData.componenteTS,
    //     componenteTI: formData.componenteTI,
    //     componenteB: formData.componenteB,
    //     componenteTAL: formData.componenteTAL,
    //     componenteTAC: formData.componenteTAC,
    //     componenteTC: formData.componenteTC
    // });

    try {
        // Obtener costos desde la API
        const costosDB = await obtenerCostosDesdeAPI();
        
        // Calcular precio total
        const precioTotal = await calcularPrecioTotal(formData, costosDB);
        
        // Crear producto con precio real
        const productoDataConPrecio = {
            ...formData.producto,
            precio_unit: precioTotal
        };
        const productoId = await crearProducto(productoDataConPrecio);
        
        // Crear componentes
        const costosMap = { 'Pino': 1, 'Oyamel': 2, 'Híbrido': 3, 'Reciclado': 4 };
        if (formData.componenteTS) await crearComponentes('TS', formData.componenteTS, productoId, costosMap);
        if (formData.componenteTI) await crearComponentes('TI', formData.componenteTI, productoId, costosMap);
        if (formData.componenteB) await crearComponente('B', formData.componenteB, productoId, costosMap);
        if (formData.componenteTAL) await crearComponente('TAL', formData.componenteTAL, productoId, costosMap);
        if (formData.componenteTAC) await crearComponente('TAC', formData.componenteTAC, productoId, costosMap);
        if (formData.componenteTC) await crearComponente('TC', formData.componenteTC, productoId, costosMap);
        
        // Asignar servicios
        await asignarServicios(productoId, formData.servicios);
        
        // Guardar ID en carrito local
        carrito.push({ id_producto: productoId, imgPlano });
        localStorage.setItem("carrito", JSON.stringify(carrito));
        
        alert("Datos guardados correctamente. Producto creado con éxito.");
        // Recargar
        location.reload();
        
    } catch (error) {
        console.error('Error completo:', error);
        alert('Error al agregar el producto: ' + error.message);
    }

    // ---------- FUNCIONES DE COSTO PARA ANTES DE SUBIR INFORMACIÓN ---------- //
    // Función para obtener costos desde API
    async function obtenerCostosDesdeAPI() {
        const response = await fetch("http://localhost:8000/api/costos/");
        if (!response.ok) throw new Error('Error al obtener costos');
        return await response.json();
    }

    // Función para calcular precio total
    async function calcularPrecioTotal(formData, costosDB) {
        let costoComponentes = 0;
        let costoServicios = 0;

        // 1. Calcular costo de componentes
        const todosComponentes = [
            ...(formData.componenteTS || []),
            ...(formData.componenteTI || []),
            ...(formData.componenteB ? [formData.componenteB] : []),
            ...(formData.componenteTAL ? [formData.componenteTAL] : []),
            ...(formData.componenteTAC ? [formData.componenteTAC] : []),
            ...(formData.componenteTC ? [formData.componenteTC] : [])
        ];

        for (const componente of todosComponentes) {
            const material = componente.material_TS || componente.material_TI || 
                            componente.material_B || componente.material_TA || 
                            componente.material_TC;
            
            const costoMaterial = costosDB.find(c => c.tipo_madera === material);
            if (!costoMaterial) continue;

            const largo = componente.largo_TS || componente.largo_TI || 
                        componente.largo_B || componente.largo_TAL || 
                        componente.largo_TAC || componente.largo_TC || 0;
            
            const ancho = componente.ancho_TS || componente.ancho_TI || 
                        componente.ancho_B || componente.ancho_TAL || 
                        componente.ancho_TAC || componente.ancho_TC || 0;
            
            const grosor = componente.grosor_TS || componente.grosor_TI || 
                        componente.grosor_B || componente.grosor_TAL || 
                        componente.grosor_TAC || componente.grosor_TC || 0;
            
            const cantidad = componente.cantidad_TS || componente.cantidad_TI || 
                            componente.cantidad_B || componente.cantidad_TAL || 
                            componente.cantidad_TAC || componente.cantidad_TC || 1;

            // Aplicar fórmula (convertir costo a número)
            const costoMaterialNumero = parseFloat(costoMaterial.costo);
            const costoComponente = (largo * ancho * grosor / 144) * costoMaterialNumero * cantidad;
            costoComponentes += costoComponente;
        }

        // 2. Calcular costo de servicios
        const serviciosMap = { 'Reparado': 1, 'Armado': 2, 'HT': 3, 'Pintura': 4, 'Fumigacion': 5, 'Transporte': 6 };
        for (const [nombre, valor] of Object.entries(formData.servicios)) {
            if (valor === "Sí" && serviciosMap[nombre]) {
                try {
                    const response = await fetch(`http://localhost:8000/api/servicios/${serviciosMap[nombre]}`);
                    if (response.ok) {
                        const servicio = await response.json();
                        // Convertir costo a número
                        costoServicios += parseFloat(servicio.costo);
                    }
                } catch (error) {
                    console.error('Error al obtener servicio:', error);
                }
            }
        }

        // 3. Retornar precio total redondeado
        return Math.round((costoComponentes + costoServicios) * 100) / 100;
    }

    // ---------- FUNCIONES DE PRODUCTO PARA DESPUÉS DE SUBIR INFORMACIÓN ---------- //
    // Función para crear producto
    async function crearProducto(productoData) {
        const response = await fetch("http://localhost:8000/api/productos/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(productoData)
        });
        const data = await response.json();
        return data.id_producto;
    }

    // Función para crear componentes (arrays)
    async function crearComponentes(tipo, componentes, productoId, costosMap) {
        for (const comp of componentes) {
            await crearComponente(tipo, comp, productoId, costosMap);
        }
    }

    // Función para crear componente individual
    async function crearComponente(tipo, compData, productoId, costosMap) {
        // Obtener material y id_costo
        const material = compData[`material_${tipo}`] || compData.material_TA || compData.material_TC || 'Pino';
        const id_costo = costosMap[material] || 1;

        const componente = {
            id_producto: productoId,
            tipo: tipo,
            id_costo: id_costo,
            // Usar propiedades
            cantidad: compData[`cantidad_${tipo}`] || compData.cantidad || 1,
            largo: compData[`largo_${tipo}`] || compData.largo || 0,
            ancho: compData[`ancho_${tipo}`] || compData.ancho || 0,
            grosor: compData[`grosor_${tipo}`] || compData.grosor || 0,
            tolerancia: compData[`tolerancia_${tipo}`] || compData.tolerancia_TA || compData.tolerancia_TC || 0,
            separacion_TS: compData.separacion_TS || null,
            tipo_B: compData.tipo_B || null,
            distancia_B: compData.distB || null
        };

        await fetch("http://localhost:8000/api/componentes/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(componente)
        });
    }

    // Función para asignar servicios
    async function asignarServicios(productoId, serviciosData) {
        const serviciosMap = { 'Reparado': 1, 'Armado': 2, 'HT': 3, 'Pintura': 4, 'Fumigacion': 5, 'Transporte': 6 };
        
        for (const [nombre, valor] of Object.entries(serviciosData)) {
            if (valor === "Sí" && serviciosMap[nombre]) {
                const servicio = {
                    id_producto: productoId,
                    id_servicio: serviciosMap[nombre],
                    color: nombre === "Pintura" ? serviciosData.Color || null : null
                };
                
                await fetch("http://localhost:8000/api/producto_servicios/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(servicio)
                });
            }
        }
    }
});


