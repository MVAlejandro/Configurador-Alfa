
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
                    <img src="./assets/Logo-Color-PNG-62x51.png" alt="Pallets Alfa logo">
                </a>
                <ul class="nav justify-content-end">
                    <li class="nav-item nav-op" id="nav-op1">
                        <a style="color: #FFF;" class="nav-link" href="./resumen.html">Resumen</a>
                    </li>
                </ul>
            </div>
        </nav>`
    );
}

function crearFooter(){
    footer.insertAdjacentHTML("beforeend",
        `<div class="container">
            <hr>
            <div class="row align-items-center">
                <div id="iso_footer" class="col text-start">
                    <img src="./assets/iso-9001-150x46.png" alt="ISO 9001" width="120px">
                </div>
                <div id="texto_footer" class="col text-end">
                    <p>Pallets Alfa Texcoco</p>
                </div>
            </div>
            <br>
        </div>`
    );
}

