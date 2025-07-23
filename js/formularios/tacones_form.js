
export function insertarFormularioTaconesVar () {
    const distribucionTA = document.getElementById('distribucionTA');
    const tacones = document.getElementById('tacones');

    distribucionTA.addEventListener('change', function () {
        if (distribucionTA.value === 'Lateral'){
            tacones.innerHTML = 
            `<!-- Laterales -->
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
            </div>`;
        } else {
            tacones.innerHTML = 
            `<!-- Laterales -->
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
            </div>`;
        }
    })
};