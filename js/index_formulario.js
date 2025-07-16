
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

        if (subtipo.value === '1') {
            op_acomodo.innerHTML = ``;
            caracteristicas_tarima.innerHTML = ``;
            plano_tarima.innerHTML = `<img src="./assets/Logo-Color-PNG-500x400-2.png" alt="Logo" height="230px" id="logo_main" class="mt-4">`;
        } else if (subtipo.value === 'Barrote') {
            op_acomodo.innerHTML = 
            `<p class="titulo_opcion mb-0 me-3">Acomodo: </p>
                <select id="acomodo" class="form-select" aria-label="Default select example">
                    <option value="Tradicional">Tradicional</option>
                    <option value="Invertido">Invertido</option>
                </select>`;
            caracteristicas_tarima.innerHTML = 
                `<div class="accordion" id="accordionCaracter">
                    <!-- TABLA SUPERIOR -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <p class="titulo_caracteristica mb-0 me-3">Tabla superior</p>
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionCaracter">
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
                                        <p class="error invalid-feedback" id="error-lTS" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Ancho -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="anchoTS" class="col-form-label">Ancho:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="anchoTS" class="form-control nb no-arrows">
                                        <p class="error invalid-feedback" id="error-aTS" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Grosor -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="grosorTS" class="col-form-label">Espesor:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="grosorTS" class="form-control nb no-arrows">
                                        <p class="error invalid-feedback" id="error-gTS" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Separación -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                    </div>
                                    <div id="separacionTS" class="col-md-6">
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- TABLA INFERIOR -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <p class="titulo_caracteristica mb-0 me-3">Tabla inferior</p>
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionCaracter">
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
                                        <p class="error invalid-feedback" id="error-lTI" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Ancho -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="anchoTI" class="col-form-label">Ancho:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="anchoTI" class="form-control nb no-arrows">
                                        <p class="error invalid-feedback" id="error-aTI" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Grosor -->
                                    <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="grosorTI" class="col-form-label">Espesor:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="grosorTI" class="form-control nb no-arrows">
                                        <p class="error invalid-feedback" id="error-gTI" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Arreglo -->
                                <div class="row mb-3">
                                    <div class="col-md-3">
                                        <label for="arregloTI" class="col-form-label">Arreglo:</label>
                                    </div>
                                    <div class="col-md-7 mb-3">
                                        <select id="arregloTI" class="form-select nb">
                                            <option value="Distribuido">Distribuido</option>
                                            <option value="Especial">Especial</option>
                                        </select>
                                    </div>
                                    <div id="arreglo_especial" class="col-md-10">
                                        
                                    </div>
                                </div>

                            </div>                            
                        </div>
                    </div>
                    
                    <!-- BARROTES -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <p class="titulo_caracteristica mb-0 me-3">Barrotes</p>
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionCaracter">
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

                                <!-- Tipo de barrote -->
                                <div class="row mb-3">
                                    <div class="col-md-3">
                                        <label for="tipoB" class="col-form-label"></label>
                                    </div>
                                    <div class="col-md-7">
                                        <select id="tipoB" class="form-select nb">
                                            <option value="Con saque">Con saque</option>
                                            <option value="Corrido">Corrido</option>
                                        </select>
                                    </div>
                                </div>

                                <!-- Largo -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="largoB" class="col-form-label">Largo:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="largoB" class="form-control nb no-arrows">
                                        <p class="error invalid-feedback" id="error-lB" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Ancho -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="anchoB" class="col-form-label">Altura:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="anchoB" class="form-control nb no-arrows">
                                        <p class="error invalid-feedback" id="error-aB" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Grosor -->
                                    <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="grosorB" class="col-form-label">Espesor:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="grosorB" class="form-control nb no-arrows">
                                        <p class="error invalid-feedback" id="error-gB" style="color: red;"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br><br>`;

            const arreglo_especial = document.getElementById('arreglo_especial');
            const arregloTI = document.getElementById('arregloTI');

            arregloTI.addEventListener('change', function () {
                if (arregloTI.value === 'Especial'){
                    arreglo_especial.innerHTML = 
                    `<input type="text" id="arregloEsp" class="form-control nb">
                    <p class="error" id="error-esp" style="color: red;"></p>`;
                }
            });
            plano_tarima.innerHTML = `<img src="./assets/ST02N.png" alt="Plano de la tarima" height="300px">`;
            // Llamar a la función después de renderizar
            requestAnimationFrame(() => {
                inicializarValidaciones();
            });
        } else if (subtipo.value === 'Tacón') {
            op_acomodo.innerHTML = 
            `<p class="titulo_opcion mb-0 me-3">Acomodo: </p>
                <select id="acomodo" class="form-select" aria-label="Default select example">
                    <option value="Tradicional">Tradicional</option>
                    <option value="Invertido">Invertido</option>
                </select>`;
            caracteristicas_tarima.innerHTML = 
                `<div class="accordion" id="accordionCaracter">
                    <!-- TABLA SUPERIOR -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <p class="titulo_caracteristica mb-0 me-3">Tabla superior</p>
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionCaracter">
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
                                        <p class="error invalid-feedback" id="error-lTS" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Ancho -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="anchoTS" class="col-form-label">Ancho:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="anchoTS" class="form-control nb no-arrows">
                                        <p class="error invalid-feedback" id="error-aTS" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Grosor -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="grosorTS" class="col-form-label">Espesor:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" id="grosorTS" class="form-control nb no-arrows">
                                        <p class="error invalid-feedback" id="error-gTS" style="color: red;"></p>
                                    </div>
                                </div>
                                
                                <!-- Separación -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                    </div>
                                    <div id="separacionTS" class="col-md-6">
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- TABLA INFERIOR -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <p class="titulo_caracteristica mb-0 me-3">Tabla inferior</p>
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionCaracter">
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
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <p class="titulo_caracteristica mb-0 me-3">Tacón</p>
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionCaracter">
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
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <p class="titulo_caracteristica mb-0 me-3">Tablas de carga</p>
                        </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionCaracter">
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