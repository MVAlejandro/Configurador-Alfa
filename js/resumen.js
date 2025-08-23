
// Crear evento al dar click en botón Regresar
document.getElementById('btn_regresar').addEventListener('click', function () {
    window.location.href = './configurador.html';
});

// Recuperar los datos del localStorage e introducir el nombre del cliente
const cliente = JSON.parse(localStorage.getItem("clienteActual"));
console.log(cliente);

const cliente_activo = document.getElementById('cliente_activo');
cliente_activo.innerText = cliente.nombre;

// Recuperar los datos del localStorage
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(carrito);


const lista_productos = document.getElementById('lista_productos');
const titulo_modal = document.getElementById('titulo_modal');

// Declarar variables de precio total
const precio_total_texto = document.getElementById('precio_total');
let precio_total = 0;

// Declarar variables de cantidad total
const productos_total_texto = document.getElementById('productos_total');

// Verificar que el localStorage no esté vacio
if (!carrito) {
    lista_productos.insertAdjacentHTML('beforeend',
        `<div id="item_container_1" class="card-body">
            No se ha agregado ningún producto.
        </div>`
    );
}

// Verificar que el arreglo no esté vacío
if (carrito.length === 0) {
    lista_productos.insertAdjacentHTML('beforeend',
        `<div id="item_container_1" class="card-body">
            No se ha agregado ningún producto.
        </div>`
    );
}

// Función para actualizar la cantidad total y sumar el precio total
function actualizarCantidadTotal() {
    let productos_total = 0;
    let precio_total = 0;

    const inputs = document.querySelectorAll('.cantidad_producto');

    inputs.forEach((input, index) => {
        const cantidad = parseInt(input.value.trim());
        if (!isNaN(cantidad) && cantidad > 0) {
            productos_total += cantidad;
            precio_total += cantidad * carrito[index].producto.precio_unit;
        }
    });

    productos_total_texto.innerText = productos_total;
    precio_total_texto.innerText = "$" + precio_total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Función para generar los elementos
carrito.forEach((formData, index) => {
    const item = 
    `<div id="item_container_${index + 1}" class="card-body border mb-3">
        <button id="btn_eliminar_${index + 1}" type="button" class="btn-close" aria-label="Close"></button>
        <div class="row d-flex">
            <div id="miniatura_item_${index + 1}" class="col-sm-3 d-flex justify-content-center align-items-center">
            
            </div>
            <div class="col-sm-9">
                <div class="row">
                    <div class="col-lg-9">
                        <p id="item${index + 1}_texto" class="item_lista">
                            Tarima de ${formData.producto.subtipo}, ${formData.producto.tipo} (${formData.producto.largo_gral}" x ${formData.producto.ancho_gral}" x ${formData.producto.grosor_gral}")
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
                        <input type="number" value="${formData.producto.cantidad}" id="item${index + 1}_cantidad" class="form-control no-arrows text-center cantidad_producto w-25" placeholder="Cantidad">
                    </div>
                    <div class="col d-flex justify-content-end align-items-end me-2">
                        <p id="item${index + 1}_precio" class="costo text-center mb-2">
                            <strong>$${formData.producto.precio_unit}</strong>
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
        // Eliminar el producto del arreglo
        carrito.splice(index, 1);

        // Actualizar el localStorage
        localStorage.setItem("carrito", JSON.stringify(carrito));
        location.reload();
    });

    // Asignar cada miniatura por item
    const miniatura_item = document.getElementById(`miniatura_item_${index + 1}`);
    if (formData.producto.tipo === 'Nueva' && formData.producto.subtipo === 'Barrote') {
        miniatura_item.innerHTML = `<img src="./assets/Tarima-con-barrote-nueva-520x357.png" alt="Tarima de barrotes nueva" width="110px">`;
    } else if (formData.producto.tipo === 'Reciclada' && formData.producto.subtipo === 'Barrote') {
        miniatura_item.innerHTML = `<img src="./assets/Tarima-con-barrote-reciclada-520x357.png" alt="Tarima de barrotes reciclada" width="110px">`;
    } else if (formData.producto.tipo === 'Nueva' && formData.producto.subtipo === 'Tacón') {
        miniatura_item.innerHTML = `<img src="./assets/Tarima-con-tacon-nueva-520x357.png" alt="Tarima de tacón nueva" width="110px">`;
    } else if (formData.producto.tipo === 'Reciclada' && formData.producto.subtipo === 'Tacón') {
        miniatura_item.innerHTML = `<img src="./assets/Tarima-de-tacon-reciclada-520x357.jpg" alt="Tarima de tacón reciclada" width="110px">`;
    };
        
    // Agregar evento de abrir el modal a cada botón
    const btn_detalles = document.querySelectorAll('.abrir-modal');

    btn_detalles.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = btn.getAttribute('data-index');
            const formData = carrito[index];

            if (!formData || !formData.producto) {
            alert('No se pudieron cargar los detalles del producto.');
            return;
        }
        
            titulo_modal.innerHTML = 
                `Tarima de ${formData.producto.subtipo}, ${formData.producto.tipo} (${formData.producto.largo_gral}" x ${formData.producto.ancho_gral}" x ${formData.producto.grosor_gral}")`;
            
            abrirModalItem(formData);
        });
    });
});

document.querySelectorAll('.cantidad_producto').forEach((input, index) => {
    input.addEventListener('input', (e) => {
        const nuevaCantidad = parseInt(e.target.value.trim());

        // Actualizar cantidad en el carrito si es válida
        if (!isNaN(nuevaCantidad) && nuevaCantidad >= 0) {
            carrito[index].producto.cantidad = nuevaCantidad;
            localStorage.setItem("carrito", JSON.stringify(carrito));
        }

        // Actualizar totales
        actualizarCantidadTotal();
    });
});

// Calcular al iniciar por si ya hay cantidades
actualizarCantidadTotal();

// Crear evento al dar click en botón Siguiente
document.getElementById('btn_siguiente').addEventListener('click', function () {
    window.location.href = './orden.html';
});

