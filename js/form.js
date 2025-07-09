// MOSTRAR EL FORMULARIO DE ACUERDO AL SUBTIPO DE TARIMA
// Identificar el subtipo y el contenedor principal
document.addEventListener('DOMContentLoaded', function () {
const subtipo = document.getElementById('subtipo');
const caracteristicas = document.getElementById('caracteristicas');
const plano = document.getElementById('plano');

subtipo.addEventListener('change', function () {
    const seleccion = subtipo.value;

    if (seleccion === '1') {
      caracteristicas.innerHTML = ``;
      plano.innerHTML = `<img src="./assets/Logo-Minimal.jpeg" alt="Logo" height="300px"></img>`;
    } else if (seleccion === '2') {
      caracteristicas.innerHTML = 
        `<div class="accordion" id="accordionCaracter">
            <!-- TABLA SUPERIOR -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <p class="car-des mb-0 me-3">Tabla superior</p>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
                    <div class="accordion-body ms-4">
                        <!-- Cantidad -->
                        <div class="cantidad d-flex align-items-center">
                            <label for="cantidadTS" class="col-form-label me-3">Cantidad: </label>
                            <input type="number" id="cantidadTS" class="form-control nb" min="1" max="10">
                        </div>
                        <!-- Separación -->   
                        <div class="grosor d-flex align-items-center">
                            <label for="separacionTS" class="col-form-label me-3">Separación: </label>
                            <input type="number" id="separacionTS" class="form-control nb no-arrows">
                        </div> 
                        <!-- Largo -->
                        <div class="largo d-flex align-items-center">
                            <label for="largoTS" class="col-form-label ms-4 me-3">Largo: </label>
                            <input type="number" id="largoTS" class="form-control nb no-arrows">
                        </div>
                        <!-- Ancho -->
                            <div class="ancho d-flex align-items-center">
                                <label for="anchoTS" class="col-form-label ms-4 me-3">Ancho: </label>
                                <input type="number" id="anchoTS" class="form-control nb no-arrows">
                            </div>
                        <!-- Grosor -->
                            <div class="grosor d-flex align-items-center">
                                <label for="grosorTS" class="col-form-label ms-4 me-3">Espesor: </label>
                                <input type="number" id="grosorTS" class="form-control nb no-arrows">
                            </div>                        
                    </div>
                </div>
            </div>
            <!-- TABLA INFERIOR -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    <p class="car-des mb-0 me-3">Tabla inferior</p>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                    <div class="accordion-body ms-4">
                        <!-- Cantidad -->
                        <div class="cantidad d-flex align-items-center">
                            <label for="cantidadTI" class="col-form-label me-3">Cantidad: </label>
                                <input type="number" id="cantidadTI" class="form-control nb" min="1" max="10">
                        </div>
                        <!-- Largo -->
                        <div class="largo d-flex align-items-center">
                            <label for="largoTI" class="col-form-label ms-4 me-3">Largo: </label>
                            <input type="number" id="largoTI" class="form-control nb no-arrows">
                        </div>
                        <!-- Ancho -->
                        <div class="ancho d-flex align-items-center">
                            <label for="anchoTI" class="col-form-label ms-4 me-3">Ancho: </label>
                            <input type="number" id="anchoTI" class="form-control nb no-arrows">
                        </div>
                        <!-- Grosor -->
                        <div class="grosor d-flex align-items-center">
                            <label for="grosorTI" class="col-form-label ms-4 me-3">Espesor: </label>
                            <input type="number" id="grosorTI" class="form-control nb no-arrows">
                        </div>
                    </div>                            
                </div>
            </div>
            <!-- BARROTES -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                    <p class="car-des mb-0 me-3">Barrotes</p>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                    <div class="accordion-body ms-4">
                        <!-- Cantidad -->
                        <div class="cantidad d-flex align-items-center">
                            <label for="cantidadB" class="col-form-label me-3">Cantidad: </label>
                            <input type="number" id="cantidadB" class="form-control nb" min="1" max="10">
                        </div>
                        <!-- Largo -->
                        <div class="largo d-flex align-items-center">
                            <label for="largoB" class="col-form-label ms-4 me-3">Largo: </label>
                            <input type="number" id="largoB" class="form-control nb no-arrows">
                        </div>
                        <!-- Ancho -->
                        <div class="ancho d-flex align-items-center">
                            <label for="anchoB" class="col-form-label ms-4 me-3">Ancho: </label>
                            <input type="number" id="anchoB" class="form-control nb no-arrows">
                        </div>
                        <!-- Grosor -->
                        <div class="grosor d-flex align-items-center">
                            <label for="grosorB" class="col-form-label ms-4 me-3">Espesor: </label>
                            <input type="number" id="grosorB" class="form-control nb no-arrows">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br><br>`;
        plano.innerHTML= `<img src="./assets/TC02N2.png" alt="Plano de la tarima" height="300px">`;
    } else if (seleccion === '3') {
      caracteristicas.innerHTML = 
        `<div class="accordion" id="accordionCaracter">
            <!-- TABLA SUPERIOR -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <p class="car-des mb-0 me-3">Tabla superior</p>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
                    <div class="accordion-body ms-4">
                        <!-- Cantidad -->
                        <div class="cantidad d-flex align-items-center">
                            <label for="cantidadTS" class="col-form-label me-3">Cantidad: </label>
                            <input type="number" id="cantidadTS" class="form-control nb" min="1" max="10">
                        </div>
                        <div class="grosor d-flex align-items-center">
                            <label for="separacionTS" class="col-form-label me-3">Separación: </label>
                            <input type="number" id="separacionTS" class="form-control nb no-arrows">
                        </div> 
                        <!-- Largo -->
                        <div class="largo d-flex align-items-center">
                            <label for="largoTS" class="col-form-label ms-4 me-3">Largo: </label>
                            <input type="number" id="largoTS" class="form-control nb no-arrows">
                        </div>
                        <!-- Ancho -->
                            <div class="ancho d-flex align-items-center">
                                <label for="anchoTS" class="col-form-label ms-4 me-3">Ancho: </label>
                                <input type="number" id="anchoTS" class="form-control nb no-arrows">
                            </div>
                        <!-- Grosor -->
                            <div class="grosor d-flex align-items-center">
                                <label for="grosorTS" class="col-form-label ms-4 me-3">Espesor: </label>
                                <input type="number" id="grosorTS" class="form-control nb no-arrows">
                            </div>
                        <!-- Separación -->                           
                    </div>
                </div>
            </div>
            <!-- TABLA INFERIOR -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    <p class="car-des mb-0 me-3">Tabla inferior</p>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                    <div class="accordion-body ms-4">
                        <!-- Cantidad -->
                        <div class="cantidad d-flex align-items-center">
                            <label for="cantidadTI" class="col-form-label me-3">Cantidad: </label>
                                <input type="number" id="cantidadTI" class="form-control nb" min="1" max="10">
                        </div>
                        <!-- Largo -->
                        <div class="largo d-flex align-items-center">
                            <label for="largoTI" class="col-form-label ms-4 me-3">Largo: </label>
                            <input type="number" id="largoTI" class="form-control nb no-arrows">
                        </div>
                        <!-- Ancho -->
                        <div class="ancho d-flex align-items-center">
                            <label for="anchoTI" class="col-form-label ms-4 me-3">Ancho: </label>
                            <input type="number" id="anchoTI" class="form-control nb no-arrows">
                        </div>
                        <!-- Grosor -->
                        <div class="grosor d-flex align-items-center">
                            <label for="grosorTI" class="col-form-label ms-4 me-3">Espesor: </label>
                            <input type="number" id="grosorTI" class="form-control nb no-arrows">
                        </div>
                    </div>                            
                </div>
            </div>
            <!-- TACON GRUESO -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    <p class="car-des mb-0 me-3">Tacón grueso</p>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                    <div class="accordion-body ms-4">
                        <!-- Cantidad -->
                        <div class="cantidad d-flex align-items-center">
                            <label for="cantidadTAG" class="col-form-label me-3">Cantidad: </label>
                            <input type="number" id="cantidadTAG" class="form-control nb" min="1" max="10">
                        </div>
                        <!-- Largo -->
                        <div class="largo d-flex align-items-center">
                            <label for="largoTAG" class="col-form-label ms-4 me-3">Largo: </label>
                            <input type="number" id="largoTAG" class="form-control nb no-arrows">
                        </div>
                        <!-- Ancho -->
                        <div class="ancho d-flex align-items-center">
                            <label for="anchoTAG" class="col-form-label ms-4 me-3">Ancho: </label>
                            <input type="number" id="anchoTAG" class="form-control nb no-arrows">
                        </div>
                        <!-- Grosor -->
                        <div class="grosor d-flex align-items-center">
                            <label for="grosorTAG" class="col-form-label ms-4 me-3">Espesor: </label>
                            <input type="number" id="grosorTAG" class="form-control nb no-arrows">
                        </div>
                    </div>
                </div>
            </div>
            <!-- TACON CHICO -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                    <p class="car-des mb-0 me-3">Tacón delgado</p>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                    <div class="accordion-body ms-4">
                        <!-- Cantidad -->
                        <div class="cantidad d-flex align-items-center">
                            <label for="cantidadTAC" class="col-form-label me-3">Cantidad: </label>
                            <input type="number" id="cantidadTAC" class="form-control nb" min="1" max="10">
                        </div>
                        <!-- Largo -->
                        <div class="largo d-flex align-items-center">
                            <label for="largoTAC" class="col-form-label ms-4 me-3">Largo: </label>
                            <input type="number" id="largoTAC" class="form-control nb no-arrows">
                        </div>
                        <!-- Ancho -->
                        <div class="ancho d-flex align-items-center">
                            <label for="anchoTAC" class="col-form-label ms-4 me-3">Ancho: </label>
                            <input type="number" id="anchoTAC" class="form-control nb no-arrows">
                        </div>
                        <!-- Grosor -->
                        <div class="grosor d-flex align-items-center">
                            <label for="grosorTAC" class="col-form-label ms-4 me-3">Espesor: </label>
                            <input type="number" id="grosorTAC" class="form-control nb no-arrows">
                       </div>                            
                    </div>
                </div>
            </div>
            <!-- TABLAS DE CARGA -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                    <p class="car-des mb-0 me-3">Tablas de carga</p>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                    <div class="accordion-body ms-4">
                        <!-- Cantidad -->
                        <div class="cantidad d-flex align-items-center">
                            <label for="cantidadTC" class="col-form-label me-3">Cantidad: </label>
                            <input type="number" id="cantidadTC" class="form-control nb" min="1" max="10">
                        </div>
                        <!-- Largo -->
                        <div class="largo d-flex align-items-center">
                            <label for="largoTC" class="col-form-label ms-4 me-3">Largo: </label>
                            <input type="number" id="largoTC" class="form-control nb no-arrows">
                        </div>
                        <!-- Ancho -->
                        <div class="ancho d-flex align-items-center">
                            <label for="anchoTC" class="col-form-label ms-4 me-3">Ancho: </label>
                            <input type="number" id="anchoTC" class="form-control nb no-arrows">
                        </div>
                        <!-- Grosor -->
                        <div class="grosor d-flex align-items-center">
                            <label for="grosorTC" class="col-form-label ms-4 me-3">Espesor: </label>
                            <input type="number" id="grosorTC" class="form-control nb no-arrows">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br><br>`;
        plano.innerHTML= `<img src="./assets/TC02N2.png" alt="Plano de la tarima" height="300px">`;
    };
  });
  });