
// IMPORTACIÓN DE FUNCIONES EXTERNAS
// Importar funciones de validación
import {inicializarValidacionesB, inicializarValidacionesT} from './validaciones/validacionCampos.js';
import {InsertarFormularioBarrote} from './formularios/barrote_form.js';
import {InsertarFormularioTacon} from './formularios/tacon_form.js';
import {insertarFormularioTSuperior} from './formularios/tablaSup_form.js';
import {insertarFormularioTaconesVar} from './formularios/tacones_form.js';
// Importar funciones de los planos
import {dibujarBarrote} from './planos/plano_barrote.js';
import {dibujarBarrote2} from './planos/plano_barrote2.js';
import {dibujarTacon} from './planos/plano_tacon.js';
import {dibujarTacon2} from './planos/plano_tacon2.js';
//
import {actualizarCampos, asociarActualizacion} from './valores.js';

// MOSTRAR EL FORMULARIO DE ACUERDO AL SUBTIPO DE TARIMA
// Identificar el subtipo y el contenedor principal
document.addEventListener('DOMContentLoaded', function () {
    const op_tamaño = document.getElementById('op_tamaño');

    const subtipo = document.getElementById('subtipo');
    const op_acomodo = document.getElementById('op_acomodo');
    const caracteristicas_tarima = document.getElementById('caracteristicas_tarima');
    const plano_tarima = document.getElementById('plano_tarima');

    subtipo.addEventListener('change', function () {

        if (subtipo.value === '1') {
            op_acomodo.innerHTML = ``;
            op_tamaño.innerHTML =
                `<div class="d-flex align-items-center">
                    <div class="me-2 text-center">
                        <input type="number" id="largoGral" class="form-control no-arrows gral" placeholder="Largo">
                    </div>
                    <span class="mx-2">x</span>
                    <div class="me-2 text-center">
                        <input type="number" id="anchoGral" class="form-control no-arrows gral" placeholder="Ancho">
                    </div>
                    <span class="mx-2">x</span>
                    <div class="text-center">
                        <input type="number" id="grosorGral" class="form-control no-arrows gral" placeholder="Grosor">
                    </div>
                </div>`;
            caracteristicas_tarima.innerHTML = ``;
            plano_tarima.innerHTML = `<img src="./assets/Logo-Color-PNG-500x400-2.png" alt="Logo" height="230px" id="logo_main" class="mt-4">`;
        } else if (subtipo.value === 'Barrote') {
            op_acomodo.innerHTML = 
                `<p class="titulo_opcion mb-0 me-3">Acomodo: </p>
                    <select id="acomodo" class="form-select" aria-label="Default select example">
                        <option value="Tradicional">Tradicional</option>
                        <option value="Invertido">Invertido</option>
                    </select>`;

            op_tamaño.innerHTML =
                `<div class="d-flex align-items-center">
                    <div class="me-2 text-center">
                        <input type="number" id="largoGral" class="form-control no-arrows gral" value="48" data-rel="largo_gral" placeholder="Largo">
                        <small class="text-muted">Largo</small>
                    </div>
                    <span class="mx-2">x</span>
                    <div class="me-2 text-center">
                        <input type="number" id="anchoGral" class="form-control no-arrows gral" value="40" data-rel="ancho_gral" placeholder="Ancho">
                        <small class="text-muted">Ancho</small>
                    </div>
                    <span class="mx-2">x</span>
                    <div class="text-center">
                        <input type="number" id="grosorGral" class="form-control no-arrows gral" value="5" data-rel="grosor_gral" placeholder="Grosor">
                        <small class="text-muted">Grosor</small>
                    </div>
                </div>`;

            // Insertar formulario inicial de barrote
            InsertarFormularioBarrote();

            // Si se elige variación de grosor en Tabla superior mostrar un formulario distinto
            insertarFormularioTSuperior();

            // Si se elige el arreglo especial, mostrar campo para describirlo
            const arreglo_especial = document.getElementById('arreglo_especial');
            const arregloTI = document.getElementById('arregloTI');

            arregloTI.addEventListener('change', function () {
                if (arregloTI.value === 'Distribuido'){
                    arreglo_especial.innerHTML = 
                    ``;
                } else if (arregloTI.value === 'Especial') {
                    arreglo_especial.innerHTML = 
                    `<input type="text" id="arregloEsp" class="form-control nb" placeholder="Describa su arreglo.">
                    <p class="error" id="error-esp" style="color: red;"></p>`;
                }
            });

            plano_tarima.innerHTML = `<canvas id="plano_barrote" width="700" height="400" style="border: 1px solid black"></canvas>`;

            // Llamar a la función de asociación de datos
            asociarActualizacion();

            const variacionTS = document.getElementById('variacionTS');
            dibujarBarrote();
            variacionTS.addEventListener('change', function () {
                if (variacionTS.value === 'Único') {
                    dibujarBarrote();
                } else if (variacionTS.value === 'Variable') {
                    dibujarBarrote2();
                } else {
                    return;
                }
            });
            
            // Llamar a la función después de renderizar
            requestAnimationFrame(() => {
                inicializarValidacionesB();
            });
            
            
        } else if (subtipo.value === 'Tacón') {
            op_acomodo.innerHTML = 
            `<p class="titulo_opcion mb-0 me-3">Acomodo: </p>
                <select id="acomodo" class="form-select" aria-label="Default select example">
                    <option value="Tradicional">Tradicional</option>
                    <option value="Invertido">Invertido</option>
                </select>`;

            op_tamaño.innerHTML =
                `<div class="d-flex align-items-center">
                    <div class="me-2 text-center">
                        <input type="number" id="largoGral" class="form-control no-arrows gral" value="48" data-rel="largo_gral" placeholder="Largo">
                        <small class="text-muted">Largo</small>
                    </div>
                    <span class="mx-2">x</span>
                    <div class="me-2 text-center">
                        <input type="number" id="anchoGral" class="form-control no-arrows gral" value="40" data-rel="ancho_gral" placeholder="Ancho">
                        <small class="text-muted">Ancho</small>
                    </div>
                    <span class="mx-2">x</span>
                    <div class="text-center">
                        <input type="number" id="grosorGral" class="form-control no-arrows gral" value="5" placeholder="Grosor">
                        <small class="text-muted">Grosor</small>
                    </div>
                </div>`;
            
            // Insertar formulario inicial de tacón
            InsertarFormularioTacon();

            // Si se elige variación de grosor en Tabla superior mostrar un formulario distinto
            insertarFormularioTSuperior();

            // Si se elige una distribución estándar de tacones mostrar formulario distinto
            insertarFormularioTaconesVar();

            plano_tarima.innerHTML= `<canvas id="plano_tacon" width="700" height="400" style="border: 1px solid black"></canvas>`;

            // Llamar a la función de asociación de datos
            asociarActualizacion();
            
            const variacionTS = document.getElementById('variacionTS');
            dibujarTacon();
            variacionTS.addEventListener('change', function () {
                if (variacionTS.value === 'Único') {
                    dibujarTacon();
                } else if (variacionTS.value === 'Variable') {
                    dibujarTacon2();
                } else {
                    return;
                }
            });

            // Llamar a la función después de renderizar
            requestAnimationFrame(() => {
                inicializarValidacionesT();
            });
        };
    });
});