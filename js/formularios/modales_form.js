export function modalGral () {
    const modal_form = document.getElementById('modal_form');
        modal_form.innerHTML = 
        `<!-- TABLA SUPERIOR -->
        <div class="row mb-3">
            <div class="offset-lg-1 col-lg-4">
                <label for="toleranciaTS" class="col-form-label">Tablas superiores:</label>
            </div>
            <div class="col-lg-6">
                <select id="toleranciaTS" class="form-select" aria-label="Default select example">
                    <option value="1/4">+- 1/4</option>
                    <option value="1/8">+- 1/8</option>
                    <option value="1/2">+- 1/2</option>
                </select>
            </div>
        </div>         

        <!-- TABLA INFERIOR -->
        <div class="row mb-3">
            <div class="offset-lg-1 col-lg-4">
                <label for="toleranciaTI" class="col-form-label">Tablas inferiores:</label>
            </div>
            <div class="col-lg-6">
                <select id="toleranciaTI" class="form-select" aria-label="Default select example">
                    <option value="1/4">+- 1/4</option>
                    <option value="1/8">+- 1/8</option>
                    <option value="1/2">+- 1/2</option>
                </select>
            </div>
        </div>

        <div id="modal_tipo">
               
        </div>`;
}

export function modalBarrote() {
    const modal_tipo = document.getElementById('modal_tipo');
        modal_tipo.innerHTML =
        `<!-- BARROTES -->
        <div class="row mb-3">
            <div class="offset-lg-1 col-lg-4">
                <label for="toleranciaB" class="col-form-label">Barrotes:</label>
            </div>
            <div class="col-lg-6">
                <select id="toleranciaB" class="form-select" aria-label="Default select example">
                    <option value="1/4">+- 1/4</option>
                    <option value="1/8">+- 1/8</option>
                    <option value="1/2">+- 1/2</option>
                </select>
            </div>
        </div>`;
}

export function modalTacon () {
    const modal_tipo = document.getElementById('modal_tipo');
        modal_tipo.innerHTML =
        `<!-- TACONES -->
        <div class="row mb-3">
            <div class="offset-lg-1 col-lg-4">
                <label for="toleranciaTA" class="col-form-label">Tacones:</label>
            </div>
            <div class="col-lg-6">
                <select id="toleranciaTA" class="form-select" aria-label="Default select example">
                    <option value="1/4">+- 1/4</option>
                    <option value="1/8">+- 1/8</option>
                    <option value="1/2">+- 1/2</option>
                </select>
            </div>
        </div>
            
        <!-- TABLAS DE CARGA -->
        <div class="row mb-3">
            <div class="offset-lg-1 col-lg-4">
                <label for="toleranciaTC" class="col-form-label">Tablas de carga:</label>
            </div>
            <div class="col-lg-6">
                <select id="toleranciaTC" class="form-select" aria-label="Default select example">
                    <option value="1/4">+- 1/4</option>
                    <option value="1/8">+- 1/8</option>
                    <option value="1/2">+- 1/2</option>
                </select>
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
        <!-- Color de pintado -->
        <div id="serv_color" class="container ms-3">
            
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

export function modalPintura() {
    const serv_color = document.getElementById("serv_color");
    serv_color.innerHTML =
    `<div class="row mb-3">
        <div class=" col-md-3">
            <label for="color" class="col-form-label">Color:</label>
        </div>
        <div class="col-11 col-md-7 offset-md-1">
            <select id="color" class="form-select nb">
                <option value="No">-----</option>
                <option value="Azul">Azul</option>
                <option value="Rojo">Rojo</option>
                <option value="Verde">Verde</option>
                <option value="Naranja">Naranja</option>
                <option value="Gris">Gris</option>
            </select>
        </div>
    </div>`;
}