// Crear evento al dar click en botón Regresar
document.getElementById('btn_regresar').addEventListener('click', function () {
  window.location.href = './index.html';
});

// Recuperar los datos del localStorage
const formDataJSON = localStorage.getItem('formData');
const formData = JSON.parse(formDataJSON);  // Convertir JSON string a un objeto
console.log(formDataJSON);

const lista_productos = document.getElementById('lista_productos');
const titulo_modal = document.getElementById('titulo_modal');

// Verificar que el localStorage no esté vacio
if (!formData) {
  lista_productos.insertAdjacentHTML('beforeend',
    `<div id="item_container_1" class="card-body">
        No se ha agregado ningún producto.
    </div>`
);
}

// Función para generar los elementos
function crearItemLista(subtipo, tipo, largo, ancho, grosor, precio) {
    lista_productos.insertAdjacentHTML('beforeend', 
        `<div id="item_container_1" class="card-body">
            <div class="row d-flex">
                <div id="miniatura_item" class="col-sm-3 d-flex justify-content-center align-items-center">
                    
                </div>
                <div class="col-sm-9">
                    <div class="row mb-2">
                        <div class="col-9">
                            <p id="item1" class="item_lista">Tarima de ${subtipo}, ${tipo} (${largo}" x ${ancho}" x ${grosor}")</p>
                        </div>
                        <div class="col text-center">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal_producto">
                                Detalles
                            </button>
                        </div>
                    </div>
                    <div class="row d-flex">
                        <div class="col-9 d-flex align-items-end">
                            <input type="number" class="form-control no-arrows ms-auto text-center cantidad_producto w-25" placeholder="Cantidad">
                        </div>
                        <div class="col  d-flex justify-content-center align-items-end">
                            <p class="costo text-center mb-2"><strong>$${precio}</strong></p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>`);
    const miniatura_item = document.getElementById('miniatura_item');
    if (formData.tipo === 'Nueva' && formData.subtipo === 'Barrote') {
        miniatura_item.innerHTML = `<img src="./assets/Tarima-con-Barrote-Nueva.png" alt="" width="110px">`;
    } else if (formData.tipo === 'Reciclada' && formData.subtipo === 'Barrote') {
        miniatura_item.innerHTML = `<img src="./assets/Tarima-con-Barrote-Nueva.png" alt="" width="110px">`;
    } else if (formData.tipo === 'Nueva' && formData.subtipo === 'Tacón') {
        miniatura_item.innerHTML = `<img src="./assets/Tarima-con-tacon-nueva.png" alt="" width="110px">`;
    } else if (formData.tipo === 'Reciclada' && formData.subtipo === 'Tacón') {
        miniatura_item.innerHTML = `<img src="./assets/Tarima-de-Tacon-reciclada.jpg" alt="" width="110px">`;
    };
        
    titulo_modal.insertAdjacentHTML('beforeend', `<p id="titulo_item1">Tarima de ${subtipo}, ${tipo} (${largo}" x ${ancho}" x ${grosor}")</p>`);
}

// Llamar a la función para insertar el producto guardado en localStorage en la card correspondiente
    crearItemLista(formData.subtipo, formData.tipo, formData.largoGral, formData.anchoGral, formData.grosorGral, formData.precioUnit);
