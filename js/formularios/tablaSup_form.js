// IMPORTACIÓN DE FUNCIONES EXTERNAS
import {asociarActualizacion} from '../valores.js';

export function insertarFormularioTSuperior () {
    const variacionTS = document.getElementById('variacionTS');
    const tabla_superior = document.getElementById('tabla_superior');
    
    variacionTS.addEventListener('change', function () {
        if (variacionTS.value === 'Único'){
            tabla_superior.innerHTML = 
                `<!-- Cantidad -->
                <div class="row mb-3">
                    <div class="col-md-3">
                        <label for="cantidadTS-1" class="col-form-label">Cantidad:</label>
                    </div>
                    <div class="col-md-7">
                        <select id="cantidadTS-1" class="form-select nb">
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
                        <label for="largoTS-1" class="col-form-label">Largo:</label>
                    </div>
                    <div class="col-md-6">
                        <input type="number" value="40" id="largoTS-1" class="form-control nb no-arrows" data-rel="ancho_gral">
                        <p class="error invalid-feedback" id="error-lTS-1" style="color: red;"></p>
                    </div>
                </div>
    
                <!-- Ancho -->
                <div class="row mb-2">
                    <div class="offset-md-1 col-md-3 text-end">
                        <label for="anchoTS-1" class="col-form-label">Ancho:</label>
                    </div>
                    <div class="col-md-6">
                        <input type="number" value="3.5" id="anchoTS-1" class="form-control nb no-arrows">
                        <p class="error invalid-feedback" id="error-aTS-1" style="color: red;"></p>
                    </div>
                </div>
    
                <!-- Grosor -->
                <div class="row mb-2">
                    <div class="offset-md-1 col-md-3 text-end">
                        <label for="grosorTS-1" class="col-form-label">Espesor:</label>
                    </div>
                    <div class="col-md-6">
                        <input type="number" value="0.62" id="grosorTS-1" class="form-control nb no-arrows">
                        <p class="error invalid-feedback" id="error-gTS-1" style="color: red;"></p>
                    </div>
                </div>
    
                <!-- Separación -->
                <div class="row mb-2">
                    <div class="offset-md-1 col-md-3 text-end">
                    </div>
                    <div id="separacionTS-1" class="col-md-6">
                                        
                    </div>
                </div>`;

            // Llamar a la función de asociación de datos
            asociarActualizacion();
        } else if (variacionTS.value === 'Variable') {
            tabla_superior.innerHTML = ``;
                tabla_superior.innerHTML += 
                    `<h5>Variación 1</h5>
                        <!-- Cantidad -->
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label for="cantidadTS-1" class="col-form-label">Cantidad:</label>
                            </div>
                            <div class="col-md-7">
                                <select id="cantidadTS-1" class="form-select nb">
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
                                <label for="largoTS-1" class="col-form-label">Largo:</label>
                            </div>
                            <div class="col-md-6">
                                <input type="number" id="largoTS-1" class="form-control nb no-arrows" value="40" data-rel="ancho_gral">
                                <p class="error invalid-feedback" id="error-lTS-1" style="color: red;"></p>
                            </div>
                        </div>
    
                        <!-- Ancho -->
                        <div class="row mb-2">
                            <div class="offset-md-1 col-md-3 text-end">
                                <label for="anchoTS-1" class="col-form-label">Ancho:</label>
                            </div>
                            <div class="col-md-6">
                                <input type="number" id="anchoTS-1" class="form-control nb no-arrows" value="3.5">
                                <p class="error invalid-feedback" id="error-aTS-1" style="color: red;"></p>
                            </div>
                        </div>
    
                        <!-- Grosor -->
                        <div class="row mb-2">
                            <div class="offset-md-1 col-md-3 text-end">
                                <label for="grosorTS-1" class="col-form-label">Espesor:</label>
                            </div>
                            <div class="col-md-6">
                                <input type="number" id="grosorTS-1" class="form-control nb no-arrows" value="0.62">
                                <p class="error invalid-feedback" id="error-gTS-1" style="color: red;"></p>
                            </div>
                        </div>
    
                        <!-- Separación -->
                        <div class="row mb-2">
                            <div class="offset-md-1 col-md-3 text-end">
                            </div>
                            <div id="separacionTS-1" class="col-md-6">
                                                    
                            </div>
                        </div>
                        <hr>
                        

                        <h5>Variación 2</h5>
                        <!-- Cantidad -->
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label for="cantidadTS-2" class="col-form-label">Cantidad:</label>
                            </div>
                            <div class="col-md-7">
                                <select id="cantidadTS-2" class="form-select nb">
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>
    
                        <!-- Largo -->
                        <div class="row mb-2">
                            <div class="offset-md-1 col-md-3 text-end">
                                <label for="largoTS-2" class="col-form-label">Largo:</label>
                            </div>
                            <div class="col-md-6">
                                <input type="number" id="largoTS-2" class="form-control nb no-arrows" value="40" data-rel="ancho_gral">
                                <p class="error invalid-feedback" id="error-lTS-2" style="color: red;"></p>
                            </div>
                        </div>
    
                        <!-- Ancho -->
                        <div class="row mb-2">
                            <div class="offset-md-1 col-md-3 text-end">
                                <label for="anchoTS-2" class="col-form-label">Ancho:</label>
                            </div>
                            <div class="col-md-6">
                                <input type="number" id="anchoTS-2" class="form-control nb no-arrows" value="5">
                                <p class="error invalid-feedback" id="error-aTS-2" style="color: red;"></p>
                            </div>
                        </div>
    
                        <!-- Grosor -->
                        <div class="row mb-2">
                            <div class="offset-md-1 col-md-3 text-end">
                                <label for="grosorTS-2" class="col-form-label">Espesor:</label>
                            </div>
                            <div class="col-md-6">
                                <input type="number" id="grosorTS-2" class="form-control nb no-arrows" value="0.62">
                                <p class="error invalid-feedback" id="error-gTS-2" style="color: red;"></p>
                            </div>
                        </div>
    
                        <!-- Separación -->
                        <div class="row mb-2">
                            <div class="offset-md-1 col-md-3 text-end">
                            </div>
                            <div id="separacionTS-2" class="col-md-6">
                                                    
                            </div>
                        </div>
                        <hr>`;

            // Llamar a la función de asociación de datos
            asociarActualizacion();

        }
    });
};