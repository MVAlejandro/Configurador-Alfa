
const header = document.getElementById("site_header")
const footer = document.getElementById("site_footer")

window.addEventListener("load", function(event){
    crearHeader();
    crearFooter();
});

function crearHeader(){
    header.insertAdjacentHTML("afterbegin",
        `<nav id="nav_principal" class="navbar">
            <div class="container-fluid">
                <a id="nav_logo" class="navbar-brand" href="#">
                    <img src="./assets/Logo-Color-PNG-500x400-1.png" alt="Pallets Alfa logo" width="62px">
                </a>
                <div class="d-flex ms-auto">
                    <button id="btn_resumen" class="btn btn-outline-light me-3" type="button">Resumen</button>
                </div>
            </div>
        </nav>`
    );

    // Crear evento al dar click en botón Resumen
    document.getElementById('btn_resumen').addEventListener('click', function () {
        window.location.href = './resumen.html';
    });
}

function crearFooter(){
    footer.insertAdjacentHTML("beforeend",
        `<div class="container">
            <hr>
            <div class="row align-items-center">
                <div id="iso_footer" class="col text-start">
                    <img src="./assets/iso-9001-1536x476.png" alt="ISO 9001" width="198px">
                </div>
                <div id="texto_footer" class="col text-end">
                    <p>Pallets Alfa Texcoco</p>
                </div>
            </div>
            <br>
        </div>`
    );
}

