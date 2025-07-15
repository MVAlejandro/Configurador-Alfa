
// IMPORTACIÓN DE FUNCIONES EXTERNAS
// Importar funciones de validación Barrote
import {inicializarValidaciones} from './index.js';
// Importar funciones de validación Tacón

// MOSTRAR EL FORMULARIO DE ACUERDO AL SUBTIPO DE TARIMA
// Identificar el subtipo y el contenedor principal
document.addEventListener('DOMContentLoaded', function () {
    const subtipo = document.getElementById('subtipo');
    const op_acomodo = document.getElementById('op_acomodo');
    const caracteristicas_tarima = document.getElementById('caracteristicas_tarima');
    const plano_tarima = document.getElementById('plano_tarima');

    subtipo.addEventListener('change', function () {
        const seleccion = subtipo.value;

        if (seleccion === '1') {
            op_acomodo.innerHTML = ``;
            caracteristicas_tarima.innerHTML = ``;
            plano_tarima.innerHTML = `<img src="./assets/Logo-Color-PNG-500x400-2.png" alt="Logo" height="230px" id="logo_main" class="mt-4">`;
        } else if (seleccion === '2') {
            op_acomodo.innerHTML = 
            `<p class="titulo_opcion mb-0 me-3">Acomodo: </p>
                <select id="acomodo" class="form-select" aria-label="Default select example">
                    <option value="1">Tradicional</option>
                    <option value="2">Invertido</option>
                </select>`;
            caracteristicas_tarima.innerHTML = 
                `<div class="accordion" id="accordionCaracter">
                    <!-- TABLA SUPERIOR -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <p class="titulo_caracteristica mb-0 me-3">Tabla superior</p>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
                            <div class="accordion-body ms-4">
                                <!-- Cantidad -->
                                <div class="row mb-3">
                                    <div class="col-md-3">
                                        <label for="cantidadTS" class="col-form-label">Cantidad:</label>
                                    </div>
                                    <div class="col-md-7">
                                        <select id="cantidadTS" class="form-select nb">
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        </select>
                                    </div>
                                </div>

                                <!-- Largo -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="largoTS" class="col-form-label">Largo:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="largoTS" class="form-control nb no-arrows">
                                        <p class="error" id="error-lTS" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Ancho -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="anchoTS" class="col-form-label">Ancho:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="anchoTS" class="form-control nb no-arrows">
                                        <p class="error" id="error-aTS" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Grosor -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="grosorTS" class="col-form-label">Espesor:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="grosorTS" class="form-control nb no-arrows">
                                        <p class="error" id="error-gTS" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Separación -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                    </div>
                                    <div id="separacion" class="col-md-6">
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- TABLA INFERIOR -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <p class="titulo_caracteristica mb-0 me-3">Tabla inferior</p>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                            <div class="accordion-body ms-4">
                                <!-- Cantidad -->
                                <div class="row mb-3">
                                    <div class="col-md-3">
                                        <label for="cantidadTI" class="col-form-label">Cantidad:</label>
                                    </div>
                                    <div class="col-md-7">
                                        <select id="cantidadTI" class="form-select nb">
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                                <!-- Largo -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="largoTI" class="col-form-label">Largo:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="largoTI" class="form-control nb no-arrows">
                                        <p class="error" id="error-lTI" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Ancho -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="anchoTI" class="col-form-label">Ancho:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="anchoTI" class="form-control nb no-arrows">
                                        <p class="error" id="error-aTI" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Grosor -->
                                    <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="grosorTI" class="col-form-label">Espesor:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="grosorTI" class="form-control nb no-arrows">
                                        <p class="error" id="error-gTI" style="color: red;"></p>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                    
                    <!-- BARROTES -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                            <p class="titulo_caracteristica mb-0 me-3">Barrotes</p>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                            <div class="accordion-body ms-4">
                                <!-- Cantidad -->
                                <div class="row mb-3">
                                    <div class="col-md-3">
                                        <label for="cantidadB" class="col-form-label">Cantidad:</label>
                                    </div>
                                    <div class="col-md-7">
                                        <select id="cantidadB" class="form-select nb">
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                                    <label class="form-check-label" for="inlineRadio1">1</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                    <label class="form-check-label" for="inlineRadio2">2</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
                                    <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
                                </div>


                                <!-- Largo -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="largoB" class="col-form-label">Largo:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="largoB" class="form-control nb no-arrows">
                                        <p class="error" id="error-lB" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Ancho -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="anchoB" class="col-form-label">Altura:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="anchoB" class="form-control nb no-arrows">
                                        <p class="error" id="error-aB" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Grosor -->
                                    <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="grosorB" class="col-form-label">Espesor:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="grosorB" class="form-control nb no-arrows">
                                        <p class="error" id="error-gB" style="color: red;"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br><br>`;
            plano_tarima.innerHTML= `<img src="./assets/ST02N.png" alt="Plano de la tarima" height="300px">`;
            // Llamar a la función después de renderizar
            requestAnimationFrame(() => {
                inicializarValidaciones();
            });
        } else if (seleccion === '3') {
            caracteristicas_tarima.innerHTML = 
                `<div class="accordion" id="accordionCaracter">
                    <!-- TABLA SUPERIOR -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <p class="titulo_caracteristica mb-0 me-3">Tabla superior</p>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
                            <div class="accordion-body ms-4">
                                <!-- Cantidad -->
                                <div class="row mb-3">
                                    <div class="col-md-3">
                                        <label for="cantidadTS" class="col-form-label">Cantidad:</label>
                                    </div>
                                    <div class="col-md-7">
                                        <select id="cantidadTS" class="form-select nb">
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        </select>
                                    </div>
                                </div>

                                <!-- Largo -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="largoTS" class="col-form-label">Largo:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="largoTS" class="form-control nb no-arrows">
                                        <p class="error" id="error-lTS" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Ancho -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="anchoTS" class="col-form-label">Ancho:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="anchoTS" class="form-control nb no-arrows">
                                        <p class="error" id="error-aTS" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Grosor -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="grosorTS" class="col-form-label">Espesor:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="grosorTS" class="form-control nb no-arrows">
                                        <p class="error" id="error-gTS" style="color: red;"></p>
                                    </div>
                                </div>
                                
                                <!-- Separación -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                    </div>
                                    <div id="separacion" class="col-md-6">
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- TABLA INFERIOR -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <p class="titulo_caracteristica mb-0 me-3">Tabla inferior</p>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                            <div class="accordion-body ms-4">
                                <!-- Cantidad -->
                                <div class="row mb-3">
                                    <div class="col-md-3">
                                        <label for="cantidadTI" class="col-form-label">Cantidad:</label>
                                    </div>
                                    <div class="col-md-7">
                                        <select id="cantidadTI" class="form-select nb">
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>

                                <!-- Largo -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="largoTI" class="col-form-label">Largo:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="largoTI" class="form-control nb no-arrows">
                                    </div>
                                </div>

                                <!-- Ancho -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="anchoTI" class="col-form-label">Ancho:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="anchoTI" class="form-control nb no-arrows">
                                    </div>
                                </div>

                                <!-- Grosor -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="grosorTI" class="col-form-label">Espesor:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="grosorTI" class="form-control nb no-arrows">
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                    <!-- TACON -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            <p class="titulo_caracteristica mb-0 me-3">Tacón</p>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                            <div class="accordion-body ms-4">
                                <!-- Cantidad -->
                                <div class="row mb-3">
                                    <div class="col-md-3">
                                        <label for="cantidadTA" class="col-form-label">Cantidad:</label>
                                    </div>
                                    <div class="col-md-7">
                                        <select id="cantidadTA" class="form-select nb">
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        </select>
                                    </div>
                                </div>

                                <!-- Largo -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="largoTA" class="col-form-label">Largo:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="largoTA" class="form-control nb no-arrows">
                                    </div>
                                </div>

                                <!-- Ancho -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="anchoTA" class="col-form-label">Ancho:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="anchoTA" class="form-control nb no-arrows">
                                    </div>
                                </div>

                                <!-- Grosor -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="grosorTA" class="col-form-label">Espesor:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="grosorTA" class="form-control nb no-arrows">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- TABLAS DE CARGA -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                            <p class="titulo_caracteristica mb-0 me-3">Tablas de carga</p>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                            <div class="accordion-body ms-4">
                                <!-- Cantidad -->
                                <div class="row mb-3">
                                    <div class="col-md-3">
                                        <label for="cantidadTC" class="col-form-label">Cantidad:</label>
                                    </div>
                                    <div class="col-md-7">
                                        <select id="cantidadTC" class="form-select nb">
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>

                                <!-- Largo -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="largoTC" class="col-form-label">Largo:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="largoTC" class="form-control nb no-arrows">
                                    </div>
                                </div>

                                <!-- Ancho -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="anchoTC" class="col-form-label">Ancho:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="anchoTC" class="form-control nb no-arrows">
                                    </div>
                                </div>

                                <!-- Grosor -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="grosorTC" class="col-form-label">Espesor:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="grosorTC" class="form-control nb no-arrows">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br><br>`;
            plano_tarima.innerHTML= `<img src="./assets/TC02N2.png" alt="Plano de la tarima" height="300px">`;
            // Llamar a la función después de renderizar
            requestAnimationFrame(() => {
                inicializarValidaciones();
            });
        };
    });
});