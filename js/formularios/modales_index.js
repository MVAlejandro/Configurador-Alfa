export function modalGral () {
    const modal_form = document.getElementById('modal_form');
        modal_form.innerHTML = 
        `<div class="accordion" id="accordionModal">
            <!-- TABLA SUPERIOR -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
                    <p class="titulo_caracteristica mb-0 me-3">Tabla superior</p>
                </button>
                </h2>
                <div id="collapseOne2" class="accordion-collapse collapse" data-bs-parent="#accordionModal">
                    <div class="accordion-body ms-4">
                        <!-- Largo -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3">
                                <label for="toleranciaTS1" class="col-form-label">Largo:</label>
                            </div>
                            <div class="col-lg-6">
                                <select id="toleranciaTS1" class="form-select" aria-label="Default select example">
                                    <option value="1/4">+- 1/4</option>
                                    <option value="1/8">+- 1/8</option>
                                    <option value="1/2">+- 1/2</option>
                                </select>
                            </div>
                        </div>
                    
                        <!-- Ancho -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3">
                                <label for="toleranciaTS2" class="col-form-label">Ancho:</label>
                            </div>
                            <div class="col-lg-6">
                                <select id="toleranciaTS2" class="form-select" aria-label="Default select example">
                                    <option value="1/4">+- 1/4</option>
                                    <option value="1/8">+- 1/8</option>
                                    <option value="1/2">+- 1/2</option>
                                </select>
                            </div>
                        </div>
                    
                        <!-- Grosor -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3">
                                <label for="toleranciaTS3" class="col-form-label">Espesor:</label>
                            </div>
                            <div class="col-lg-6">
                                <select id="toleranciaTS3" class="form-select" aria-label="Default select example">
                                    <option value="1/4">+- 1/4</option>
                                    <option value="1/8">+- 1/8</option>
                                    <option value="1/2">+- 1/2</option>
                                </select>
                            </div>
                        </div>           
                    </div>
                </div>
            </div>
                    
            <!-- TABLA INFERIOR -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                    <p class="titulo_caracteristica mb-0 me-3">Tabla inferior</p>
                </button>
                </h2>
                <div id="collapseTwo2" class="accordion-collapse collapse" data-bs-parent="#accordionModal">
                    <div class="accordion-body ms-4">
                        <!-- Largo -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3">
                                <label for="toleranciaTI1" class="col-form-label">Largo:</label>
                            </div>
                            <div class="col-lg-6">
                                <select id="toleranciaTI1" class="form-select" aria-label="Default select example">
                                    <option value="1/4">+- 1/4</option>
                                    <option value="1/8">+- 1/8</option>
                                    <option value="1/2">+- 1/2</option>
                                </select>
                            </div>
                        </div>
                    
                        <!-- Ancho -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3">
                                <label for="toleranciaTI2" class="col-form-label">Ancho:</label>
                            </div>
                            <div class="col-lg-6">
                                <select id="toleranciaTI2" class="form-select" aria-label="Default select example">
                                    <option value="1/4">+- 1/4</option>
                                    <option value="1/8">+- 1/8</option>
                                    <option value="1/2">+- 1/2</option>
                                </select>
                            </div>
                        </div>
                    
                        <!-- Grosor -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3">
                                <label for="toleranciaTI3" class="col-form-label">Espesor:</label>
                            </div>
                            <div class="col-lg-6">
                                <select id="toleranciaTI3" class="form-select" aria-label="Default select example">
                                    <option value="1/4">+- 1/4</option>
                                    <option value="1/8">+- 1/8</option>
                                    <option value="1/2">+- 1/2</option>
                                </select>
                            </div>
                        </div>
                    </div>                            
                </div>
            </div>

            <div id="modal_tipo">
               
            </div>
        </div>`;
}

export function modalBarrote() {
    const modal_tipo = document.getElementById('modal_tipo');
        modal_tipo.innerHTML =
        `<!-- BARROTES -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2">
                    <p class="titulo_caracteristica mb-0 me-3">Barrotes</p>
                </button>
                </h2>
                <div id="collapseThree2" class="accordion-collapse collapse" data-bs-parent="#accordionModal">
                    <div class="accordion-body ms-4">
                        <!-- Largo -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3">
                                <label for="toleranciaB1" class="col-form-label">Largo:</label>
                            </div>
                            <div class="col-lg-6">
                                <select id="toleranciaB1" class="form-select" aria-label="Default select example">
                                    <option value="1/4">+- 1/4</option>
                                    <option value="1/8">+- 1/8</option>
                                    <option value="1/2">+- 1/2</option>
                                </select>
                            </div>
                        </div>
                    
                        <!-- Ancho -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3">
                                <label for="toleranciaB2" class="col-form-label">Altura:</label>
                            </div>
                            <div class="col-lg-6">
                                <select id="toleranciaB2" class="form-select" aria-label="Default select example">
                                    <option value="1/4">+- 1/4</option>
                                    <option value="1/8">+- 1/8</option>
                                    <option value="1/2">+- 1/2</option>
                                </select>
                            </div>
                        </div>
                    
                        <!-- Grosor -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3">
                                <label for="toleranciaB3" class="col-form-label">Espesor:</label>
                            </div>
                            <div class="col-lg-6">
                                <select id="toleranciaB3" class="form-select" aria-label="Default select example">
                                    <option value="1/4">+- 1/4</option>
                                    <option value="1/8">+- 1/8</option>
                                    <option value="1/2">+- 1/2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
}

export function modalTacon () {
    const modal_tipo = document.getElementById('modal_tipo');
        modal_tipo.innerHTML =
        `<!-- TACONES -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2">
                    <p class="titulo_caracteristica mb-0 me-3">Tacones</p>
                </button>
                </h2>
                <div id="collapseThree2" class="accordion-collapse collapse" data-bs-parent="#accordionModal">
                    <div class="accordion-body ms-4">
                        <!-- Largo -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3">
                                <label for="toleranciaTA1" class="col-form-label">Largo:</label>
                            </div>
                            <div class="col-lg-6">
                                <select id="toleranciaTA1" class="form-select" aria-label="Default select example">
                                    <option value="1/4">+- 1/4</option>
                                    <option value="1/8">+- 1/8</option>
                                    <option value="1/2">+- 1/2</option>
                                </select>
                            </div>
                        </div>
                    
                        <!-- Ancho -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3">
                                <label for="toleranciaTA2" class="col-form-label">Ancho:</label>
                            </div>
                            <div class="col-lg-6">
                                <select id="toleranciaTA2" class="form-select" aria-label="Default select example">
                                    <option value="1/4">+- 1/4</option>
                                    <option value="1/8">+- 1/8</option>
                                    <option value="1/2">+- 1/2</option>
                                </select>
                            </div>
                        </div>
                    
                        <!-- Grosor -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3">
                                <label for="toleranciaTA3" class="col-form-label">Altura:</label>
                            </div>
                            <div class="col-lg-6">
                                <select id="toleranciaTA3" class="form-select" aria-label="Default select example">
                                    <option value="1/4">+- 1/4</option>
                                    <option value="1/8">+- 1/8</option>
                                    <option value="1/2">+- 1/2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- TABLAS DE CARGA -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour2" aria-expanded="false" aria-controls="collapseFour2">
                    <p class="titulo_caracteristica mb-0 me-3">Tablas de carga</p>
                </button>
                </h2>
                <div id="collapseFour2" class="accordion-collapse collapse" data-bs-parent="#accordionModal">
                    <div class="accordion-body ms-4">
                        <!-- Largo -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3">
                                <label for="toleranciaTC1" class="col-form-label">Largo:</label>
                            </div>
                            <div class="col-lg-6">
                                <select id="toleranciaTC1" class="form-select" aria-label="Default select example">
                                    <option value="1/4">+- 1/4</option>
                                    <option value="1/8">+- 1/8</option>
                                    <option value="1/2">+- 1/2</option>
                                </select>
                            </div>
                        </div>
                    
                        <!-- Ancho -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3">
                                <label for="toleranciaTC2" class="col-form-label">Ancho:</label>
                            </div>
                            <div class="col-lg-6">
                                <select id="toleranciaTC2" class="form-select" aria-label="Default select example">
                                    <option value="1/4">+- 1/4</option>
                                    <option value="1/8">+- 1/8</option>
                                    <option value="1/2">+- 1/2</option>
                                </select>
                            </div>
                        </div>
                    
                        <!-- Grosor -->
                        <div class="row mb-2">
                            <div class="offset-lg-1 col-lg-3">
                                <label for="toleranciaTC3" class="col-form-label">Espesor:</label>
                            </div>
                            <div class="col-lg-6">
                                <select id="toleranciaTC3" class="form-select" aria-label="Default select example">
                                    <option value="1/4">+- 1/4</option>
                                    <option value="1/8">+- 1/8</option>
                                    <option value="1/2">+- 1/2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
}

export function modalServicios() {
    const modal_serv = document.getElementById("modal_serv");
    modal_serv.innerHTML = 
        `<!-- Reparado -->
        <div id="reparado_cont" class="d-flex justify-content-center">
            
        </div>

        <!-- Armado -->
        <div class="d-flex justify-content-center">
            <div class="col-6 ms-5">
                <p>Armado</p>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="radio" id="armado1" name="armado" checked>
                <label class="form-check-label" for="armado1">
                    Sí
                </label>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="radio" id="armado2" name="armado">
                <label class="form-check-label" for="armado2">
                    No
                </label>
            </div>
        </div>

        <!-- Tratamiento térmico -->
        <div class="d-flex justify-content-center">
            <div class="col-6 ms-5">
                <p>Tratamiento térmico</p>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="radio" id="HT1" name="HT">
                <label class="form-check-label" for="HT1">
                    Sí
                </label>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="radio" id="HT2" name="HT" checked>
                <label class="form-check-label" for="HT2">
                    No
                </label>
            </div>
        </div>

        <!-- Pintura -->
        <div class="d-flex justify-content-center">
            <div class="col-6 ms-5">
                <p>Pintura</p>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="radio" id="pintura1" name="pintura">
                <label class="form-check-label" for="pintura1">
                    Sí
                </label>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="radio" id="pintura2" name="pintura" checked>
                <label class="form-check-label" for="pintura2">
                    No
                </label>
            </div>
        </div>

        <!-- Fumigación -->
        <div class="d-flex justify-content-center">
            <div class="col-6 ms-5">
                <p>Fumigación</p>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="radio" id="fumigacion1" name="fumigacion">
                <label class="form-check-label" for="fumigacion1">
                    Sí
                </label>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="radio" id="fumigacion2" name="fumigacion" checked>
                <label class="form-check-label" for="fumigacion2">
                    No
                </label>
            </div>
        </div>

        <!-- Transporte -->
        <div class="d-flex justify-content-center">
            <div class="col-6 ms-5">
                <p>Transporte</p>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="radio" id="transporte1" name="transporte">
                <label class="form-check-label" for="transporte1">
                    Sí
                </label>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="radio" id="transporte2" name="transporte" checked>
                <label class="form-check-label" for="transporte2">
                    No
                </label>
            </div>
        </div>`;
}

export function modalRecic() {
    const reparado_cont = document.getElementById("reparado_cont");
    reparado_cont.innerHTML = 
    `<div class="col-6 ms-5">
        <p>Reparado</p>
    </div>
    <div class="form-check col-3">
        <input class="form-check-input" type="radio" id="reparado1" name="reparado" checked>
        <label class="form-check-label" for="reparado1">
            Sí
        </label>
    </div>
    <div class="form-check col-3">
        <input class="form-check-input" type="radio" id="reparado2" name="reparado">
        <label class="form-check-label" for="reparado2">
            No
        </label>
    </div>`;
}