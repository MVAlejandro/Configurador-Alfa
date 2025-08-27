
// IMPORTACIÓN DE FUNCIONES EXTERNAS
// Importar funciones de validación
import {validarInputs} from './validaciones/valida_campos.js';
// Importar funciones de creación de formularios
import {InsertarFormularioBarrote} from './formularios/barrote_form.js';
import {InsertarFormularioTacon} from './formularios/tacon_form.js';
import {insertarFormularioTSuperior} from './formularios/tablaSup_form.js';
// Importar funciones de los planos
import {dibujarBarrote} from './planos/plano_barrote.js';
import {dibujarTacon} from './planos/plano_tacon.js';
// Importar funciones de vinculación de campos
import {asociarActualizacion} from './valores.js';
import {sincronizarTI} from './valores.js';
// Importar funciones de los modales del configurador
import {modalGral, modalBarrote, modalTacon, modalServicios, modalRecic, modalPintura} from './formularios/modales_form.js'

// MOSTRAR EL FORMULARIO DE ACUERDO AL SUBTIPO DE TARIMA
// Identificar el subtipo y el contenedor principal
document.addEventListener('DOMContentLoaded', function () {
    const btn_siguiente = document.getElementById('btn_siguiente');
    const op_tamaño = document.getElementById('op_tamaño');
    const subtipo = document.getElementById('subtipo');
    const op_acomodo = document.getElementById('op_acomodo');
    const caracteristicas_tarima = document.getElementById('caracteristicas_tarima');
    const plano_tarima = document.getElementById('plano_tarima');

    subtipo.addEventListener('change', function () {
        if (subtipo.value === '1') {
            btn_siguiente.disabled = true;

            op_acomodo.innerHTML = ``;
            op_tamaño.innerHTML =
                `<div class="d-flex align-items-center responsive-flex">
                    <div class="me-2 text-center">
                        <input type="number" id="anchoGral" class="form-control no-arrows gral" placeholder="Ancho">
                    </div>
                    <span class="mx-2">x</span>
                    <div class="me-2 text-center">
                        <input type="number" id="largoGral" class="form-control no-arrows gral" placeholder="Largo">
                    </div>
                    <span class="mx-2">x</span>
                    <div class="text-center">
                        <input type="number" id="grosorGral" class="form-control no-arrows gral" placeholder="Grosor">
                    </div>
                </div>`;
            caracteristicas_tarima.innerHTML = ``;
            plano_tarima.innerHTML = `<img src="./assets/Logo-Letras-PNG-420x187.png" alt="Logo" id="logo_main" class="mt-4 img-fluid">`;
            const modal_form = document.getElementById('modal_form');
            modal_form.innerHTML = ``;
        } else if (subtipo.value === 'Barrote') {
            op_acomodo.innerHTML = 
                `<p class="titulo_opcion mb-0 me-3">Acomodo: </p>
                    <select id="acomodo" class="form-select" aria-label="Default select example">
                        <option value="Tradicional">Tradicional</option>
                        <option value="Invertido">Invertido</option>
                    </select>`;

            op_tamaño.innerHTML =
                `<div class="d-flex align-items-center responsive-flex">
                    <div class="me-2 text-center">
                        <input type="number" id="anchoGral" class="form-control no-arrows gral" value="40" data-rel="ancho_gral" placeholder="Ancho">
                        <small class="text-muted">Ancho</small>
                    </div>
                    <span class="mx-2">x</span>
                    <div class="me-2 text-center">
                        <input type="number" id="largoGral" class="form-control no-arrows gral" value="48" data-rel="largo_gral" placeholder="Largo">
                        <small class="text-muted">Largo</small>
                    </div>
                    <span class="mx-2">x</span>
                    <div class="text-center">
                        <input type="number" id="grosorGral" class="form-control no-arrows gral" value="5" data-rel="grosor_gral" placeholder="Grosor">
                        <small class="text-muted">Grosor</small>
                    </div>
                </div>`;

            // Insertar formulario inicial de barrote
            InsertarFormularioBarrote();
            // Llamar a la función de asociación de datos
            asociarActualizacion();

            // Si se elige variación de grosor en Tabla superior mostrar un formulario distinto
            insertarFormularioTSuperior();
            // Llamar a la función de asociación de datos
            asociarActualizacion();

            document.getElementById('acomodo').addEventListener('change', function() {
                const acomodo = this.value;
                const anchoGral = document.getElementById('anchoGral');
                const largoGral = document.getElementById('largoGral');
                    
                // Seleccionar solo los inputs con data-rel específicos
                const inputsAnchoLargo = document.querySelectorAll('[data-rel="ancho_gral"], [data-rel="largo_gral"]');
                    
                if (acomodo === "Invertido") {
                    // Cambiar los valores cuando la opción es "Invertido"
                    anchoGral.value = 48;
                    largoGral.value = 40;

                    // Actualizar otros inputs con data-rel correspondientes
                    inputsAnchoLargo.forEach(input => {
                        if (input.dataset.rel === 'ancho_gral') {
                            input.value = 48;  // Asignar el valor de Ancho
                        } else if (input.dataset.rel === 'largo_gral') {
                            input.value = 40;  // Asignar el valor de Largo
                        }
                    });
                } else {
                    // Para la opción "Tradicional", dejamos los valores por defecto
                    anchoGral.value = 40;
                    largoGral.value = 48;

                    inputsAnchoLargo.forEach(input => {
                        if (input.dataset.rel === 'ancho_gral') {
                            input.value = 40;  // Valor por defecto de Ancho
                        } else if (input.dataset.rel === 'largo_gral') {
                            input.value = 48;  // Valor por defecto de Largo
                        }
                    });
                }
                dibujarBarrote();
            });

            const tipoB = document.getElementById('tipoB');
            const inicio_saque = document.getElementById('inicio_saque');

            tipoB.addEventListener('change', function () {
                if (tipoB.value === 'Corrido') {
                    inicio_saque.style.display = 'none';
                } else if (tipoB.value === 'Con saque') {
                    inicio_saque.style.display = 'block';
                }
            });

            plano_tarima.innerHTML = `<canvas id="plano_barrote" width="700" height="400" style="border: 1px solid black"></canvas>`;

            // Llamar a la función de dibujar el plano
            dibujarBarrote();
            variacionTS.addEventListener('change', function () {
                dibujarBarrote();
            });
            
            // Llamar a la función de validaciones después de renderizar
            requestAnimationFrame(() => {
                validarInputs();
            });

            // Insertar modal de barrote
            modalGral()
            modalBarrote()
            modalServicios();

            // Insertar servicio de reparado a tipo reciclada
            const tipo = document.getElementById('tipo');
            const reparado_cont = document.getElementById("reparado_cont");
            tipo.addEventListener('change', function () {
                if (tipo.value === 'Reciclada'){
                    btn_siguiente.disabled = false;
                    modalRecic();
                } else if (tipo.value === 'Nueva'){
                    btn_siguiente.disabled = false;
                    reparado_cont.innerHTML = '';
                } else {
                    btn_siguiente.disabled = true;
                }
            });

            // Insertar opciones de color al servicio de pintura
            const pintura1 = document.getElementById('pintura1');
            const pintura2 = document.getElementById('pintura2');
            const serv_color = document.getElementById('serv_color');

            // Función para actualizar el contenido según la opción seleccionada
            pintura1.addEventListener('change', function () {
                if (pintura1.checked) {
                    modalPintura(); 
                }
            });

            pintura2.addEventListener('change', function () {
                if (pintura2.checked) {
                    serv_color.innerHTML = '';
                }
            });
            
        } else if (subtipo.value === 'Tacón') {
            op_acomodo.innerHTML = 
            `<p class="titulo_opcion mb-0 me-3">Acomodo: </p>
                <select id="acomodo" class="form-select" aria-label="Default select example">
                    <option value="Tradicional">Tradicional</option>
                    <option value="Invertido">Invertido</option>
                </select>`;

            op_tamaño.innerHTML =
                `<div class="d-flex align-items-center responsive-flex">
                    <div class="me-2 text-center">
                        <input type="number" id="anchoGral" class="form-control no-arrows gral" value="40" data-rel="ancho_gral" placeholder="Ancho">
                        <small class="text-muted">Ancho</small>
                    </div>
                    <span class="mx-2">x</span>
                    <div class="me-2 text-center">
                        <input type="number" id="largoGral" class="form-control no-arrows gral" value="48" data-rel="largo_gral" placeholder="Largo">
                        <small class="text-muted">Largo</small>
                    </div>
                    <span class="mx-2">x</span>
                    <div class="text-center">
                        <input type="number" id="grosorGral" class="form-control no-arrows gral" value="5" placeholder="Grosor">
                        <small class="text-muted">Grosor</small>
                    </div>
                </div>`;

            // Insertar formulario inicial de tacón
            InsertarFormularioTacon();
            // Llamar a la función de asociación de datos
            asociarActualizacion();
            sincronizarTI();

            // Si se elige variación de grosor en Tabla superior mostrar un formulario distinto
            insertarFormularioTSuperior();
            // Llamar a la función de asociación de datos
            asociarActualizacion();
            sincronizarTI();

            document.getElementById('acomodo').addEventListener('change', function() {
                const acomodo = this.value;
                const anchoGral = document.getElementById('anchoGral');
                const largoGral = document.getElementById('largoGral');
                const largoTI2 = document.getElementById('largoTI-2');
                    
                // Seleccionar solo los inputs con data-rel específicos
                const inputsAnchoLargo = document.querySelectorAll('[data-rel="ancho_gral"], [data-rel="largo_gral"]');
                    
                if (acomodo === "Invertido") {
                    // Cambiar los valores cuando la opción es "Invertido"
                    anchoGral.value = 48;
                    largoGral.value = 40;
                    largoTI2.value = 33;

                    // Actualizar otros inputs con data-rel correspondientes
                    inputsAnchoLargo.forEach(input => {
                        if (input.dataset.rel === 'ancho_gral') {
                            input.value = 48;  // Asignar el valor de Ancho
                        } else if (input.dataset.rel === 'largo_gral') {
                            input.value = 40;  // Asignar el valor de Largo
                        }
                    });
                } else {
                    // Para la opción "Tradicional", dejamos los valores por defecto
                    anchoGral.value = 40;
                    largoGral.value = 48;
                    largoTI2.value = 41;

                    inputsAnchoLargo.forEach(input => {
                        if (input.dataset.rel === 'ancho_gral') {
                            input.value = 40;  // Valor por defecto de Ancho
                        } else if (input.dataset.rel === 'largo_gral') {
                            input.value = 48;  // Valor por defecto de Largo
                        }
                    });
                }
                dibujarTacon();
            });

            plano_tarima.innerHTML= `<canvas id="plano_tacon" width="700" height="400" style="border: 1px solid black"></canvas>`;
            
            // Llamar a la función de dibujar el plano
            dibujarTacon();
            variacionTS.addEventListener('change', function () {
                dibujarTacon();
            });

            // Llamar a la función después de renderizar
            requestAnimationFrame(() => {
                validarInputs();
            });

            modalGral()
            modalTacon();
            modalServicios();

            // Insertar servicio de reparado a tipo reciclada
            const tipo = document.getElementById('tipo');
            const reparado_cont = document.getElementById("reparado_cont");
            tipo.addEventListener('change', function () {
                if (tipo.value === 'Reciclada'){
                    btn_siguiente.disabled = false;
                    modalRecic();
                } else if (tipo.value === 'Nueva'){
                    btn_siguiente.disabled = false;
                    reparado_cont.innerHTML = '';
                } else {
                    btn_siguiente.disabled = true;
                }
            });

            // Insertar opciones de color al servicio de pintura
            const pintura1 = document.getElementById('pintura1');
            const pintura2 = document.getElementById('pintura2');
            const serv_color = document.getElementById('serv_color');

            // Función para actualizar el contenido según la opción seleccionada
            pintura1.addEventListener('change', function () {
                if (pintura1.checked) {
                    modalPintura(); 
                }
            });

            pintura2.addEventListener('change', function () {
                if (pintura2.checked) {
                    serv_color.innerHTML = '';
                }
            });

        };
    });
});