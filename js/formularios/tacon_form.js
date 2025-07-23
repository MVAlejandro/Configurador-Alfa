
export function InsertarFormularioTacon () {
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
                                    <div class="col-md-3">
                                        <label for="variacionTS" class="col-form-label">Grosor:</label>
                                    </div>
                                    <div class="col-md-7">
                                        <select id="variacionTS" class="form-select nb">
                                        <option value="Único">Único</option>
                                        <option value="Variable">Variable</option>
                                        </select>
                                    </div>
                                </div>

                                <div id="tabla_superior">
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
                                            <input type="number" value="40" id="largoTS" class="form-control nb no-arrows">
                                            <p class="error invalid-feedback" id="error-lTS" style="color: red;"></p>
                                        </div>
                                    </div>

                                    <!-- Ancho -->
                                    <div class="row mb-2">
                                        <div class="offset-md-1 col-md-3 text-end">
                                            <label for="anchoTS" class="col-form-label">Ancho:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="number" value="3.5" id="anchoTS" class="form-control nb no-arrows">
                                            <p class="error invalid-feedback" id="error-aTS" style="color: red;"></p>
                                        </div>
                                    </div>

                                    <!-- Grosor -->
                                    <div class="row mb-2">
                                        <div class="offset-md-1 col-md-3 text-end">
                                            <label for="grosorTS" class="col-form-label">Espesor:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="number" value="0.62" id="grosorTS" class="form-control nb no-arrows">
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
                                <!-- Laterales -->
                                <h6>Tablas inferiores laterales</h6>
                                    <!-- Cantidad -->
                                    <div class="row mb-3">
                                        <div class="col-md-3">
                                            <label for="cantidadTIL" class="col-form-label">Cantidad:</label>
                                        </div>
                                        <div class="col-md-7">
                                            <input type="number" value="2" id="cantidadTIL" class="form-control nb no-arrows" disabled>
                                        </div>
                                    </div>

                                    <!-- Largo -->
                                    <div class="row mb-2">
                                        <div class="offset-md-1 col-md-3 text-end">
                                            <label for="largoTIL" class="col-form-label">Largo:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="number" value="40" id="largoTIL" class="form-control nb no-arrows">
                                            <p class="error invalid-feedback" id="error-lTIL" style="color: red;"></p>
                                        </div>
                                    </div>

                                    <!-- Ancho -->
                                    <div class="row mb-2">
                                        <div class="offset-md-1 col-md-3 text-end">
                                            <label for="anchoTIL" class="col-form-label">Ancho:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="number" value="3.5" id="anchoTIL" class="form-control nb no-arrows">
                                            <p class="error invalid-feedback" id="error-aTIL" style="color: red;"></p>
                                        </div>
                                    </div>

                                    <!-- Grosor -->
                                    <div class="row mb-2">
                                        <div class="offset-md-1 col-md-3 text-end">
                                            <label for="grosorTIL" class="col-form-label">Espesor:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="number" value="0.62" id="grosorTIL" class="form-control nb no-arrows">
                                            <p class="error invalid-feedback" id="error-gTIL" style="color: red;"></p>
                                        </div>
                                    </div>
                                                    
                                <!-- Centrales -->
                                <h6>Tablas inferiores centrales</h6>
                                    <!-- Cantidad -->
                                    <div class="row mb-3">
                                        <div class="col-md-3">
                                            <label for="cantidadTIC" class="col-form-label">Cantidad:</label>
                                        </div>
                                        <div class="col-md-7">
                                            <input type="number" value="3" id="cantidadTIC" class="form-control nb no-arrows" disabled>
                                        </div>
                                    </div>

                                    <!-- Largo -->
                                    <div class="row mb-2">
                                        <div class="offset-md-1 col-md-3 text-end">
                                            <label for="largoTIC" class="col-form-label">Largo:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="number" value="41" id="largoTIC" class="form-control nb no-arrows">
                                            <p class="error invalid-feedback" id="error-lTIC" style="color: red;"></p>
                                        </div>
                                    </div>

                                    <!-- Ancho -->
                                    <div class="row mb-2">
                                        <div class="offset-md-1 col-md-3 text-end">
                                            <label for="anchoTIC" class="col-form-label">Ancho:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="number" value="3.5" id="anchoTIC" class="form-control nb no-arrows">
                                            <p class="error invalid-feedback" id="error-aTIC" style="color: red;"></p>
                                        </div>
                                    </div>

                                    <!-- Grosor -->
                                    <div class="row mb-2">
                                        <div class="offset-md-1 col-md-3 text-end">
                                            <label for="grosorTIC" class="col-form-label">Espesor:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="number" value="0.62" id="grosorTIC" class="form-control nb no-arrows">
                                            <p class="error invalid-feedback" id="error-gTIC" style="color: red;"></p>
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
                                <!-- Distribución -->
                                <div class="row mb-3">
                                    <div class="col-md-3">
                                        <label for="distribucionTA" class="col-form-label">Distribución:</label>
                                    </div>
                                    <div class="col-md-7">
                                        <select id="distribucionTA" class="form-select nb">
                                        <option value="Estándar">Estándar</option>
                                        <option value="Lateral">Lateral</option>
                                        </select>
                                    </div>
                                </div>

                                <div id="tacones">
                                    <!-- Laterales -->
                                    <h6>Tacones laterales</h6>
                                    <!-- Cantidad -->
                                    <div class="row mb-3">
                                        <div class="col-md-3">
                                            <label for="cantidadTAL" class="col-form-label">Cantidad:</label>
                                        </div>
                                        <div class="col-md-7">
                                            <select id="cantidadTAL" class="form-select nb">
                                                <option value="6">6</option>
                                                <option value="4">4</option>
                                            </select>
                                        </div>
                                    </div>

                                    <!-- Largo -->
                                    <div class="row mb-2">
                                        <div class="offset-md-1 col-md-3 text-end">
                                            <label for="largoTAL" class="col-form-label">Largo:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="number" value="3.5" id="largoTAL" class="form-control nb no-arrows">
                                            <p class="error invalid-feedback" id="error-lTAL" style="color: red;"></p>
                                        </div>
                                    </div>

                                    <!-- Ancho -->
                                    <div class="row mb-2">
                                        <div class="offset-md-1 col-md-3 text-end">
                                            <label for="anchoTAL" class="col-form-label">Ancho:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="number" value="3.5" id="anchoTAL" class="form-control nb no-arrows">
                                            <p class="error invalid-feedback" id="error-aTAL" style="color: red;"></p>
                                        </div>
                                    </div>

                                    <!-- Grosor -->
                                    <div class="row mb-2">
                                        <div class="offset-md-1 col-md-3 text-end">
                                            <label for="grosorTAL" class="col-form-label">Espesor:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="number" value="3" id="grosorTAL" class="form-control nb no-arrows">
                                            <p class="error invalid-feedback" id="error-gTAL" style="color: red;"></p>
                                        </div>
                                    </div>
                                                    
                                    <!-- Centrales -->
                                    <h6>Tacones centrales</h6>
                                    <!-- Cantidad -->
                                    <div class="row mb-3">
                                        <div class="col-md-3">
                                            <label for="cantidadTAC" class="col-form-label">Cantidad:</label>
                                        </div>
                                        <div class="col-md-7">
                                            <select id="cantidadTAC" class="form-select nb">
                                                <option value="3">3</option>
                                                <option value="2">2</option>
                                                <option value="1">1</option>
                                            </select>
                                        </div>
                                    </div>

                                    <!-- Largo -->
                                    <div class="row mb-2">
                                        <div class="offset-md-1 col-md-3 text-end">
                                            <label for="largoTAC" class="col-form-label">Largo:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="number" value="3.5" id="largoTAC" class="form-control nb no-arrows">
                                            <p class="error invalid-feedback" id="error-lTAC" style="color: red;"></p>
                                        </div>
                                    </div>

                                    <!-- Ancho -->
                                    <div class="row mb-2">
                                        <div class="offset-md-1 col-md-3 text-end">
                                            <label for="anchoTAC" class="col-form-label">Ancho:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="number" value="3.5" id="anchoTAC" class="form-control nb no-arrows">
                                            <p class="error invalid-feedback" id="error-aTAC" style="color: red;"></p>
                                        </div>
                                    </div>

                                    <!-- Grosor -->
                                    <div class="row mb-2">
                                        <div class="offset-md-1 col-md-3 text-end">
                                            <label for="grosorTAC" class="col-form-label">Espesor:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="number" value="3" id="grosorTAC" class="form-control nb no-arrows">
                                            <p class="error invalid-feedback" id="error-gTAC" style="color: red;"></p>
                                        </div>
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
                                        <input type="number" value="3" id="cantidadTC" class="form-control nb no-arrows" disabled>
                                    </div>
                                </div>

                                <!-- Largo -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="largoTC" class="col-form-label">Largo:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" value="48" id="largoTC" class="form-control nb no-arrows">
                                        <p class="error invalid-feedback" id="error-lTC" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Ancho -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="anchoTC" class="col-form-label">Ancho:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" value="3.5" id="anchoTC" class="form-control nb no-arrows">
                                        <p class="error invalid-feedback" id="error-aTC" style="color: red;"></p>
                                    </div>
                                </div>

                                <!-- Grosor -->
                                <div class="row mb-2">
                                    <div class="offset-md-1 col-md-3 text-end">
                                        <label for="grosorTC" class="col-form-label">Espesor:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" value="0.62" id="grosorTC" class="form-control nb no-arrows">
                                        <p class="error invalid-feedback" id="error-gTC" style="color: red;"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br><br>`;
};
