
export function InsertarFormularioBarrote () {
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
                        <!-- Variación -->
                        <div class="row mb-3">
                            <div class="col-lg-3">
                                <label for="variacionTS" class="col-form-label">Ancho:</label>
                            </div>
                            <div class="col-lg-7">
                                <select id="variacionTS" class="form-select nb">
                                <option value="Único">Único</option>
                                <option value="Variable">Variable</option>
                                </select>
                            </div>
                        </div>
    
                        <div id="tabla_superior">
                            <!-- Cantidad -->
                            <div class="row mb-3">
                                <div class="col-lg-3">
                                    <label for="cantidadTS-1" class="col-form-label">Cantidad:</label>
                                </div>
                                <div class="col-lg-7">
                                    <select id="cantidadTS-1" class="form-select nb">
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </select>
                                </div>
                            </div>
                            <hr>
    
                            <!-- Largo -->
                            <div class="row mb-2">
                                <div class="offset-lg-1 col-lg-3 text-end">
                                    <label for="largoTS-1" class="col-form-label">Largo:</label>
                                </div>
                                <div class="col-lg-6">
                                    <input type="number" value="40" id="largoTS-1" class="form-control nb no-arrows" data-rel="ancho_gral">
                                    <p class="error invalid-feedback" id="error-lTS-1" style="color: red;"></p>
                                </div>
                            </div>
    
                            <!-- Ancho -->
                            <div class="row mb-2">
                                <div class="offset-lg-1 col-lg-3 text-end">
                                    <label for="anchoTS-1" class="col-form-label">Ancho:</label>
                                </div>
                                <div class="col-lg-6">
                                    <input type="number" value="3.5" id="anchoTS-1" class="form-control nb no-arrows">
                                    <p class="error invalid-feedback" id="error-aTS-1" style="color: red;"></p>
                                </div>
                            </div>
    
                            <!-- Grosor -->
                            <div class="row mb-2">
                                <div class="offset-lg-1 col-lg-3 text-end">
                                    <label for="grosorTS-1" class="col-form-label">Espesor:</label>
                                </div>
                                <div class="col-lg-6">
                                    <input type="number" value="0.62" id="grosorTS-1" class="form-control nb no-arrows">
                                    <p class="error invalid-feedback" id="error-gTS-1" style="color: red;"></p>
                                </div>
                            </div>
    
                            <!-- Separación -->
                            <div class="row mb-2">
                                <div class="offset-lg-1 col-lg-3 text-end">
                                </div>
                                <div id="separacionTS-1" class="col-lg-6">
                                                        
                                </div>
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
                            <div class="col-lg-3">
                                <label for="cantidadTI" class="col-form-label">Cantidad:</label>
                            </div>
                            <div class="col-lg-7">
                                <select id="cantidadTI" class="form-select nb">
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <hr>
    
                        <!-- Largo -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3 text-end">
                                <label for="largoTI" class="col-form-label">Largo:</label>
                            </div>
                            <div class="col-lg-6">
                                <input type="number" value="40" id="largoTI" class="form-control nb no-arrows" data-rel="ancho_gral">
                                <p class="error invalid-feedback" id="error-lTI" style="color: red;"></p>
                            </div>
                        </div>
    
                        <!-- Ancho -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3 text-end">
                                <label for="anchoTI" class="col-form-label">Ancho:</label>
                            </div>
                            <div class="col-lg-6">
                                <input type="number" value="3.5" id="anchoTI" class="form-control nb no-arrows">
                                <p class="error invalid-feedback" id="error-aTI" style="color: red;"></p>
                            </div>
                        </div>
    
                        <!-- Grosor -->
                            <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3 text-end">
                                <label for="grosorTI" class="col-form-label">Espesor:</label>
                            </div>
                            <div class="col-lg-6">
                                <input type="number" value="0.62" id="grosorTI" class="form-control nb no-arrows">
                                <p class="error invalid-feedback" id="error-gTI" style="color: red;"></p>
                            </div>
                        </div>
    
                        <!-- Arreglo -->
                        <div class="row mb-3">
                            <div class="col-lg-3">
                                <label for="arregloTI" class="col-form-label">Arreglo:</label>
                            </div>
                            <div class="col-lg-7 mb-3">
                                <select id="arregloTI" class="form-select nb">
                                    <option value="Distribuido">Distribuido</option>
                                    <option value="Especial">Especial</option>
                                </select>
                            </div>
                            <div id="arreglo_especial" class="col-lg-10">
                                            
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
                            <div class="col-lg-3">
                                <label for="cantidadB" class="col-form-label">Cantidad:</label>
                            </div>
                            <div class="col-lg-7">
                                <select id="cantidadB" class="form-select nb">
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
    
                        <!-- Tipo de barrote -->
                        <div class="row mb-3">
                            <div class="col-lg-3 text-end">
                                <label for="tipoB" class="col-form-label">Tipo:</label>
                            </div>
                            <div class="col-lg-7">
                                <select id="tipoB" class="form-select nb">
                                    <option value="Con saque">Con saque</option>
                                    <option value="Corrido">Corrido</option>
                                </select>
                            </div>                         
                        </div>
                        <div id="inicio_saque" style="display: block;">
                            <div class="row mb-3">
                                <div class="col-lg-4 text-end">
                                    <label for="distB" class="col-form-label">Inicio saque:</label>
                                </div>
                                <div class="col-lg-6">
                                    <input type="number" value="6" id="distB" class="form-control nb no-arrows">
                                    <p class="error invalid-feedback" id="error-distB" style="color: red;"></p>
                                </div>  
                            </div>
                        </div>
                        <hr>

                        <!-- Largo -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3 text-end">
                                <label for="largoB" class="col-form-label">Largo:</label>
                            </div>
                            <div class="col-lg-6">
                                <input type="number" value="48" id="largoB" class="form-control nb no-arrows" data-rel="largo_gral">
                                <p class="error invalid-feedback" id="error-lB" style="color: red;"></p>
                            </div>
                        </div>
    
                        <!-- Ancho -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3 text-end">
                                <label for="anchoB" class="col-form-label">Altura:</label>
                            </div>
                            <div class="col-lg-6">
                                <input type="number" value="3.5" id="anchoB" class="form-control nb no-arrows">
                                <p class="error invalid-feedback" id="error-aB" style="color: red;"></p>
                            </div>
                        </div>
    
                        <!-- Grosor -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3 text-end">
                                <label for="grosorB" class="col-form-label">Espesor:</label>
                            </div>
                            <div class="col-lg-6">
                                <input type="number" value="1.25" id="grosorB" class="form-control nb no-arrows">
                                <p class="error invalid-feedback" id="error-gB" style="color: red;"></p>
                            </div>
                        </div>

                        <!-- Distribución de barrotes -->
                        <div id="distribucion_barrote" class="row mb-3">
                            <div class="col-lg-3">
                                <label for="distBar" class="col-form-label">Distribución:</label>
                            </div>
                            <div class="col-lg-7">
                                <select id="distBar" class="form-select nb">
                                    <option value="Estándar">Estándar</option>
                                    <option value="Distribuido">Distribuido</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br><br>`;
};