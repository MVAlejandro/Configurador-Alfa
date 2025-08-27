
// IMPORTACIÓN DE FUNCIONES EXTERNAS
// Importar función adaptadora para convertir datos API a JSON
import {abrirModalDesdeAPI} from './api/modal_api.js'

// Crear evento al dar click en botón Regresar
document.getElementById('btn_regresar').addEventListener('click', function () {
    window.location.href = './configurador.html';
});

// Mostrar nombre del cliente activo en pantalla
const clienteActivo = JSON.parse(localStorage.getItem("cliente_activo"));
if (clienteActivo) {
    document.getElementById("cliente_activo").innerText = clienteActivo.nombre;
}

// Declarar arreglos para su uso más adelante
let carritoAPI = [];
let productosCompletos = [];

// Recuperar los datos del localStorage (solo IDs)
const carritoLocal = JSON.parse(localStorage.getItem("carrito")) || [];

const lista_productos = document.getElementById('lista_productos');
const titulo_modal = document.getElementById('titulo_modal');
const precio_total_texto = document.getElementById('precio_total');
const productos_total_texto = document.getElementById('productos_total');

// Función para mostrar mensaje de carrito vacío
function carritoVacio() {
    lista_productos.innerHTML = `
        <div class="card-body text-center">
            <p>No se ha agregado ningún producto.</p>
            <a href="configurador.html" class="btn btn-primary">Agregar Productos</a>
        </div>`;
}

// Función para actualizar totales
function actualizarCantidadTotal() {
    let productos_total = 0;
    let precio_total = 0;

    document.querySelectorAll('.cantidad_producto').forEach((input, index) => {
        const cantidad = parseInt(input.value.trim());
        const precioUnit = carritoAPI[index]?.precio_unit || 0;
        
        if (!isNaN(cantidad) && cantidad > 0) {
            productos_total += cantidad;
            precio_total += cantidad * precioUnit;
        }
    });

    productos_total_texto.innerText = productos_total;
    precio_total_texto.innerText = "$" + precio_total.toLocaleString('en-US', { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
    });
}

// Función principal para cargar el carrito desde API
async function cargarCarritoAPI() {
    try {
        // Obtener todos los productos del carrito desde la API
        carritoAPI = await Promise.all(
            carritoLocal.map(async item => {
                const response = await fetch(`http://localhost:8000/api/productos/${item.id_producto}`);
                if (!response.ok) throw new Error('Error al obtener producto');
                return await response.json();
            })
        );

        productosCompletos = carritoAPI;

        // Mostrar productos en la interfaz
        mostrarProductosCarrito();

        // Actualizar totales iniciales
        actualizarCantidadTotal();

    } catch (error) {
        console.error('Error al cargar carrito:', error);
        carritoVacio();
    }
}

// Función para mostrar productos en el carrito
function mostrarProductosCarrito() {
    lista_productos.innerHTML = '';

    if (carritoAPI.length === 0) {
        carritoVacio();
        return;
    }

    // Función para generar los elementos
    carritoAPI.forEach((producto, index) => {
        const item = `
        <div id="item_container_${index + 1}" class="card-body border mb-3">
            <button id="btn_eliminar_${index + 1}" type="button" class="btn-close" aria-label="Close"></button>
            <div class="row d-flex">
                <div id="miniatura_item_${index + 1}" class="col-sm-3 d-flex justify-content-center align-items-center">
                    ${obtenerMiniatura(producto.tipo, producto.subtipo)}
                </div>
                <div class="col-sm-9">
                    <div class="row">
                        <div class="col-lg-9">
                            <p id="item${index + 1}_texto" class="item_lista">
                                Tarima de ${producto.subtipo}, ${producto.tipo} (${producto.largo_gral}" x ${producto.ancho_gral}" x ${producto.grosor_gral}")
                            </p>
                        </div>
                        <div class="col mb-2 text-end">
                            <button type="button" class="btn btn-primary abrir-modal" data-bs-toggle="modal" data-bs-target="#modal_producto" data-index="${index}">
                                Detalles
                            </button>
                        </div>
                    </div>

                    <div class="row d-flex mb-3">
                        <div class="col-9 d-flex align-items-end justify-content-end">
                            <label for="item${index + 1}_cantidad" class="col-form-label me-3">Lote estimado:</label>
                            <input type="number" value="1" id="item${index + 1}_cantidad" class="form-control no-arrows text-center cantidad_producto w-25" placeholder="Cantidad">
                        </div>
                        <div class="col d-flex justify-content-end align-items-end me-2">
                            <p id="item${index + 1}_precio" class="costo text-center mb-2">
                                <strong>$${producto.precio_unit || '0.00'}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        lista_productos.insertAdjacentHTML('beforeend', item);

        // Declarar el botón de eliminar producto
        const btn_eliminar = document.getElementById(`btn_eliminar_${index + 1}`);
        btn_eliminar.addEventListener('click', () => {
            // Eliminar del carrito local
            carritoLocal.splice(index, 1);
            localStorage.setItem("carrito", JSON.stringify(carritoLocal));
            
            // Recargar el carrito
            cargarCarritoAPI();
        });

        // Configurar miniatura
        const miniatura_item = document.getElementById(`miniatura_item_${index + 1}`);
        miniatura_item.innerHTML = obtenerMiniatura(producto.tipo, producto.subtipo);
    });

    // Configurar eventos de modal y cantidad
    configurarEventos();
}

// Función para obtener la miniatura del producto
function obtenerMiniatura(tipo, subtipo) {
    const imagenes = {
        'Nueva_Barrote': './assets/Tarima-con-barrote-nueva-520x357.png',
        'Reciclada_Barrote': './assets/Tarima-con-barrote-reciclada-520x357.png',
        'Nueva_Tacón': './assets/Tarima-con-tacon-nueva-520x357.png',
        'Reciclada_Tacón': './assets/Tarima-de-tacon-reciclada-520x357.jpg'
    };
    
    const clave = `${tipo}_${subtipo}`;
    const imagenSrc = imagenes[clave] || './assets/default-producto.png';
    
    return `<img src="${imagenSrc}" alt="Tarima de ${subtipo} ${tipo}" width="110px">`;
}

// Función para configurar eventos
function configurarEventos() {
    // Agregar evento de abrir el modal a cada botón
    document.querySelectorAll('.abrir-modal').forEach(btn => {
        btn.addEventListener('click', async () => {
            const index = btn.getAttribute('data-index');
            const producto = carritoAPI[index];
            
            // Obtener cantidad actual del input
            const inputCantidad = document.getElementById(`item${parseInt(index) + 1}_cantidad`);
            
            const cantidadActual = inputCantidad ? parseInt(inputCantidad.value) || 1 : 1;
            
            // Actualizar carritoAPI
            carritoAPI[index].cantidad = cantidadActual;
            
            titulo_modal.innerHTML = `Tarima de ${producto.subtipo}, ${producto.tipo} (${producto.largo_gral}" x ${producto.ancho_gral}" x ${producto.grosor_gral}")`;
            
            // Pasar ambos
            await abrirModalDesdeAPI(producto.id_producto, cantidadActual);
        });
    });

    // Eventos para cantidades
    document.querySelectorAll('.cantidad_producto').forEach((input, index) => {
        input.addEventListener('input', (e) => {
            const nuevaCantidad = parseInt(e.target.value.trim());
            
            // Actualizar cantidad en el carrito si es válida
            if (!isNaN(nuevaCantidad) && nuevaCantidad >= 0) {
                // Actualizar totales
                actualizarCantidadTotal();
            }
        });
    });
}

// Iniciar la carga del carrito cuando la página se cargue
document.addEventListener('DOMContentLoaded', cargarCarritoAPI);

// Crear evento al dar click en botón Siguiente
document.getElementById('btn_siguiente').addEventListener('click', async function (event) {
    event.preventDefault();
    
    const cliente = JSON.parse(localStorage.getItem("cliente_activo"));
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    if (!cliente || carrito.length === 0) {
        alert("No existe cliente o el carrito está vacío");
        return;
    }

    try {
        // Obtener cantidades de los inputs
        const cantidades = {};
        carrito.forEach((item, index) => {
            const input = document.getElementById(`item${index + 1}_cantidad`);
            cantidades[item.id_producto] = input ? parseInt(input.value) || 1 : 1;
        });

        // Calcular total desde API con las cantidades
        let total = 0;
        for (const item of carrito) {
            const response = await fetch(`http://localhost:8000/api/productos/${item.id_producto}`);
            if (response.ok) {
                const producto = await response.json();
                const cantidad = cantidades[item.id_producto] || 1;
                total += cantidad * (producto.precio_unit || 0);
            }
        }

        // Crear la orden
        const responseOrden = await fetch("http://localhost:8000/api/ordenes/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id_cliente: cliente.id_cliente,
                total_estimado: total
            })
        });

        if (!responseOrden.ok) throw new Error("Error creando orden");
        
        const ordenCreada = await responseOrden.json();
        const id_orden = ordenCreada.id_orden;

        // Agregar los productos a la orden con sus cantidades
        for (const item of carrito) {
            const responseProducto = await fetch("http://localhost:8000/api/orden_productos/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id_orden: id_orden,
                    id_producto: item.id_producto,
                    cantidad: cantidades[item.id_producto] || 1
                })
            });
            
            if (!responseProducto.ok) throw new Error("Error agregando producto a orden");
        }

        // Redirigir
        window.location.href = `./orden.html?id_orden=${id_orden}`;
        
    } catch (error) {
        console.error("Error creando orden:", error);
        alert("Error al crear la orden: " + error.message);
    }
});
