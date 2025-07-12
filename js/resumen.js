// Crear evento al dar click en botón Regresar
document.getElementById('btn_regresar').addEventListener('click', function () {
  window.location.href = './index.html';
});

// Recuperar los datos del localStorage
const formDataJSON = localStorage.getItem('formData');
const formData = JSON.parse(formDataJSON);  // Convertir JSON string a un objeto
console.log(formDataJSON);

const lista_productos = document.getElementById('lista_productos');

// Verificar que el localStorage no esté vacio
if (!formData) {
  lista_productos.insertAdjacentHTML('beforeend',
    `<div id="item-cont1" class="card-body">
        No se ha agregado ningún producto.
    </div>`
);
}

// Definir tipo y subtipo de tarima
let tipoTexto;
let subtipoTexto;

if (formData.tipo === '1') {
    tipoTexto = 'Nueva';
} else {
    tipoTexto = 'Reciclada';
}

if (formData.subtipo === '2') {
    subtipoTexto = 'Barrote';
} else if (formData.subtipo === '3'){
    subtipoTexto = 'Tacón';
}

// Función para generar los elementos
function crearItemLista(subtipo, tipo, largo, ancho, grosor) {
    lista_productos.insertAdjacentHTML('beforeend', 
        `<div id="item_container_1" class="card-body">
            <p id="item1" class="item_lista">Tarima de ${subtipo}, ${tipo} (${largo}" x ${ancho}" x ${grosor}")</p>
            <div class="col-12 align-self-end text-end">
                <p class="costo"><strong>$830</strong></p>
            </div>
        </div>`
    );
}

// Llamar a la función para insertar el producto guardado en localStorage en la card correspondiente
    crearItemLista(subtipoTexto, tipoTexto, formData.largoGral, formData.anchoGral, formData.grosorGral);
