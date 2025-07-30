
export function modalBarrote() {
    const modal_form = document.getElementById('modal_form');
        modal_form.innerHTML = 
        `<form>
            <div class="col select-bar d-flex flex-column justify-content-center">
                <!-- Tolerancia TS -->
                <div class="row mb-3">
                    <div class="col-md-4">
                        <label for="tolerancia1" class="col-form-label">Tablas superiores:</label>
                    </div>
                    <div class="col">
                        <select id="tolerancia1" class="form-select" aria-label="Default select example">
                            <option value="1/4">+- 1/4</option>
                            <option value="1/8">+- 1/8</option>
                            <option value="1/2">+- 1/2</option>
                        </select>
                    </div>
                </div>

                <!-- Tolerancia TI -->
                <div class="row mb-3">
                    <div class="col-md-4">
                        <label for="tolerancia2" class="col-form-label">Tablas inferiores:</label>
                    </div>
                    <div class="col">
                        <select id="tolerancia2" class="form-select" aria-label="Default select example">
                            <option value="1/4">+- 1/4</option>
                            <option value="1/8">+- 1/8</option>
                            <option value="1/2">+- 1/2</option>
                        </select>
                    </div>
                </div>
    
                <!-- Tolerancia B -->
                <div class="row mb-3">
                    <div class="col-md-4">
                        <label for="tolerancia3" class="col-form-label">Barrotes:</label>
                    </div>
                    <div class="col">
                        <select id="tolerancia3" class="form-select" aria-label="Default select example">
                            <option value="1/4">+- 1/4</option>
                            <option value="1/8">+- 1/8</option>
                            <option value="1/2">+- 1/2</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>`;
}

export function modalTacon () {
    const modal_form = document.getElementById('modal_form');
    modal_form.innerHTML = 
    `<form>
        <div class="col select-bar d-flex flex-column justify-content-center">
            <!-- Tolerancia TS -->
            <div class="row mb-3">
                <div class="col-md-4">
                    <label for="tolerancia1" class="col-form-label">Tablas superiores:</label>
                </div>
                <div class="col">
                    <select id="tolerancia1" class="form-select" aria-label="Default select example">
                        <option value="1/4">+- 1/4</option>
                        <option value="1/8">+- 1/8</option>
                        <option value="1/2">+- 1/2</option>
                    </select>
                </div>
            </div>

            <!-- Tolerancia TI -->
            <div class="row mb-3">
                <div class="col-md-4">
                    <label for="tolerancia2" class="col-form-label">Tablas inferiores:</label>
                </div>
                <div class="col">
                    <select id="tolerancia2" class="form-select" aria-label="Default select example">
                        <option value="1/4">+- 1/4</option>
                        <option value="1/8">+- 1/8</option>
                        <option value="1/2">+- 1/2</option>
                    </select>
                </div>
            </div>

            <!-- Tolerancia TA -->
            <div class="row mb-3">
                <div class="col-md-4">
                    <label for="tolerancia3" class="col-form-label">Tacones:</label>
                </div>
                <div class="col">
                    <select id="tolerancia3" class="form-select" aria-label="Default select example">
                        <option value="1/4">+- 1/4</option>
                        <option value="1/8">+- 1/8</option>
                        <option value="1/2">+- 1/2</option>
                    </select>
                </div>
            </div>

            <!-- Tolerancia TC -->
            <div class="row mb-3">
                <div class="col-md-4">
                    <label for="tolerancia4" class="col-form-label">Tablas de carga:</label>
                </div>
                <div class="col">
                    <select id="tolerancia4" class="form-select" aria-label="Default select example">
                        <option value="1/4">+- 1/4</option>
                        <option value="1/8">+- 1/8</option>
                        <option value="1/2">+- 1/2</option>
                    </select>
                </div>
            </div>
        </div>
    </form>`;
}