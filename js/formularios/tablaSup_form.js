
export function insertarFormularioTSuperior () {
    const variacionTS = document.getElementById('variacionTS');
    const tabla_superior = document.getElementById('tabla_superior');
    
    variacionTS.addEventListener('change', function () {
        if (variacionTS.value === 'Único'){
            tabla_superior.innerHTML = 
                `<!-- Cantidad -->
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
                </div>`;
        } else if (variacionTS.value === 'Variable') {
            const num_variacion = 2;
            tabla_superior.innerHTML = ``;
            for (let i = 0; i < num_variacion; i++) {
                tabla_superior.innerHTML += 
                    `<h5>Variación ${i + 1}</h5>
                        <!-- Cantidad -->
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label for="cantidadTS-${i}" class="col-form-label">Cantidad:</label>
                            </div>
                            <div class="col-md-7">
                                <select id="cantidadTS-${i}" class="form-select nb">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>
    
                        <!-- Largo -->
                        <div class="row mb-2">
                            <div class="offset-md-1 col-md-3 text-end">
                                <label for="largoTS-${i}" class="col-form-label">Largo:</label>
                            </div>
                            <div class="col-md-6">
                                <input type="number" id="largoTS-${i}" class="form-control nb no-arrows">
                                <p class="error invalid-feedback" id="error-lTS-${i}" style="color: red;"></p>
                            </div>
                        </div>
    
                        <!-- Ancho -->
                        <div class="row mb-2">
                            <div class="offset-md-1 col-md-3 text-end">
                                <label for="anchoTS-${i}" class="col-form-label">Ancho:</label>
                            </div>
                            <div class="col-md-6">
                                <input type="number" id="anchoTS-${i}" class="form-control nb no-arrows">
                                <p class="error invalid-feedback" id="error-aTS-${i}" style="color: red;"></p>
                            </div>
                        </div>
    
                        <!-- Grosor -->
                        <div class="row mb-2">
                            <div class="offset-md-1 col-md-3 text-end">
                                <label for="grosorTS-${i}" class="col-form-label">Espesor:</label>
                            </div>
                            <div class="col-md-6">
                                <input type="number" id="grosorTS-${i}" class="form-control nb no-arrows">
                                <p class="error invalid-feedback" id="error-gTS-${i}" style="color: red;"></p>
                            </div>
                        </div>
    
                        <!-- Separación -->
                        <div class="row mb-2">
                            <div class="offset-md-1 col-md-3 text-end">
                            </div>
                            <div id="separacionTS-${i}" class="col-md-6">
                                                    
                            </div>
                        </div>
                        <hr>`;
            }

        }
    });
};