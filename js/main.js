
const header = document.getElementById("site-header")
const footer = document.getElementById("site-footer")

window.addEventListener("load", function(event){
    crearHeader();
    crearFooter();
});

function crearHeader(){
    header.insertAdjacentHTML("afterbegin",
        `<nav id="nav-pr" class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a id="nav-logo" class="navbar-brand" href="#">
                <img src="./assets/Logo-Color-PNG-500x400-1.png" alt="Pallets Alfa logo" width="62px">
                </a>
                <ul class="nav justify-content-end">
                    <li class="nav-item nav-op" id="nav-op1">
                        <a style="color: #FFF;" class="nav-link" href="#">Inicio</a>
                    </li>
                    <li class="nav-item nav-op" id="nav-op2">
                        <a style="color: #FFF;" class="nav-link" href="#">Nosotros</a>
                    </li>
                    <li class="nav-item nav-op" id="nav-op3">
                        <a style="color: #FFF;" class="nav-link" href="#">Contacto</a>
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
                <div id="footer-iso" class="col text-start">
                    <img src="./assets/iso-9001-1536x476.png" alt="ISO 9001" width="198px">
                </div>
                <div id="foot-txt" class="col text-end">
                    <p>Pallets Alfa Texcoco</p>
                </div>
            </div>
            <br>
        </div>`
    );
}
