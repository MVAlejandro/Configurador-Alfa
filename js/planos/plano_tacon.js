
export function dibujarTacon () {
    const plano = document.getElementById('plano_tacon');
    const ctx = plano.getContext("2d");

    function redibujarPlano() {
        ctx.clearRect(0, 0, plano.width, plano.height); // Limpiar el canvas

        // Dimensiones del canvas
        const canvasWidth = plano.width;
        const canvasHeight = plano.height;

        // Volver a trazar la guía (ajustado según el tamaño del canvas)
        const xSup = canvasWidth / 2;
        const ySup = canvasHeight * 0.625; 
        const xInf = canvasWidth * 1.5;
        const yInf = canvasHeight * 0.625;
        const xLat = canvasWidth;
        const yLat = canvasHeight * 1.625;
    
        // // Volver a trazar la guía
        // ctx.beginPath();
        // ctx.moveTo(xSup, 0);
        // ctx.lineTo(xSup, canvasHeight);
        // ctx.stroke();

        // ctx.beginPath();
        // ctx.moveTo(0, ySup);
        // ctx.lineTo(canvasWidth, ySup);
        // ctx.stroke();

        function drawFullRect (x, y, w, h, color) {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, w, h);

            ctx.lineWidth = "1";
            ctx.strokeStyle = "black";
            ctx.strokeRect(x, y, w, h);
        }

        function drawLineRect (x, y, w, h) {
            ctx.lineWidth = "1";
            ctx.strokeStyle = "black";
            ctx.strokeRect(x, y, w, h);
        }

        function drawCotaLineH(startX, startY, endX, endY, cota) {
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(startX, startY-cota);
            ctx.lineTo(startX, endY+cota);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(endX, startY-cota);
            ctx.lineTo(endX, endY+cota);
            ctx.stroke();
        }

        function drawCotaLineV(startX, startY, endX, endY, cota) {
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(startX-cota, startY);
            ctx.lineTo(endX+cota, startY);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(startX-cota, endY);
            ctx.lineTo(endX+cota, endY);
            ctx.stroke();
        }

        function drawTextH (text, startX, y, endX) {
            // Calcular el centro de la línea en X
            let centerX = (startX + endX) / 2;

            ctx.font = "11px Arial";
            ctx.fillStyle = "black";
            ctx.fillText(text, centerX - ctx.measureText(text).width / 2, y);
        }

        function drawTextV(text, x, startY, endY) {
            // Calcular el centro de la línea en Y
            let centerY = (startY + endY) / 2;

            ctx.font = "11px Arial";
            ctx.fillStyle = "black";
            ctx.fillText(text, x - (ctx.measureText(text).width), centerY);
        }

        // Obtener los valores de los campos
        const largoGral = parseFloat(document.getElementById('largoGral').value);
        const anchoGral = parseFloat(document.getElementById('anchoGral').value);
        const grosorGral = parseFloat(document.getElementById('grosorGral').value);

        const cantidadTS = parseFloat(document.getElementById('cantidadTS-1').value);
        const largoTS = parseFloat(document.getElementById('largoTS-1').value);
        const anchoTS = parseFloat(document.getElementById('anchoTS-1').value);
        const grosorTS = parseFloat(document.getElementById('grosorTS-1').value);

        const cantidadTI = parseFloat(document.getElementById('cantidadTI-1').value);
        const largoTI = parseFloat(document.getElementById('largoTI-1').value);
        const anchoTI = parseFloat(document.getElementById('anchoTI-1').value);
        const grosorTI = parseFloat(document.getElementById('grosorTI-1').value);

        const cantidadTI2 = parseFloat(document.getElementById('cantidadTI-2').value);
        const largoTI2 = parseFloat(document.getElementById('largoTI-2').value);
        const anchoTI2 = parseFloat(document.getElementById('anchoTI-2').value);
        const grosorTI2 = parseFloat(document.getElementById('grosorTI-2').value);

        const largoTAL = parseFloat(document.getElementById('largoTAL').value);
        const anchoTAL = parseFloat(document.getElementById('anchoTAL').value);
        const grosorTAL = parseFloat(document.getElementById('grosorTAL').value);

        const largoTAC = parseFloat(document.getElementById('largoTAC').value);
        const anchoTAC = parseFloat(document.getElementById('anchoTAC').value);
        const grosorTAC = parseFloat(document.getElementById('grosorTAC').value);

        const cantidadTC = parseFloat(document.getElementById('cantidadTC').value);
        const largoTC = parseFloat(document.getElementById('largoTC').value);
        const anchoTC = parseFloat(document.getElementById('anchoTC').value);
        const grosorTC = parseFloat(document.getElementById('grosorTC').value);

        let separacionTS = ((largoGral - (anchoTS * cantidadTS)) / (cantidadTS - 1)).toFixed(2)
        let separacionTC = ((anchoGral - (anchoTC * cantidadTC)) / (cantidadTC - 1)).toFixed(2)

        const escala = canvasWidth*0.0064;

        // Vista superior
        const offsetX1 = (xSup - (largoGral*escala)) / 2;
        const offsetY1 = (ySup - (anchoGral*escala)) / 2;

        drawLineRect(offsetX1, offsetY1, (largoGral*escala), (anchoGral*escala))
        drawCotaLineH(offsetX1, offsetY1+(15+anchoGral*escala), offsetX1+(largoGral*escala), offsetY1+(15+anchoGral*escala), 1*escala)
        drawTextH(largoGral, offsetX1, offsetY1+(15+anchoGral*escala)+(3*escala), offsetX1+(largoGral*escala))
        drawCotaLineV(offsetX1-(3*escala),offsetY1, offsetX1-(3*escala), offsetY1+(anchoGral*escala), 1*escala)
        drawTextV(anchoGral, offsetX1-(4*escala), offsetY1, offsetY1+(anchoGral*escala));

            // Tablas de carga
        for (let i = 0; i < cantidadTC; i++) {
            const x = offsetX1;
            const y = offsetY1 + i * ((anchoTC * escala) + (separacionTC * escala));
            drawFullRect(x, y, (largoTC * escala), (anchoTC * escala), "#787878");
        }
            // Tablas superiores
        for (let i = 0; i < cantidadTS; i++) {
            const x = offsetX1 + i * ((anchoTS * escala) + (separacionTS * escala));
            const y = offsetY1;
            drawFullRect(x, y, (anchoTS * escala), (largoTS * escala), "#e5e5e5");
        }

        // Vista inferior
        const offsetX2 = (xInf - (largoGral * escala)) / 2;
        const offsetY2 = (yInf - (anchoGral * escala)) / 2;

        drawLineRect(offsetX2, offsetY2, (largoGral * escala), (anchoGral * escala));
            // Tablas superiores
        for (let i = 0; i < cantidadTS; i++) {
            const x = offsetX2 + i * ((anchoTS * escala) + (separacionTS * escala));
            const y = offsetY2;
            drawFullRect(x, y, (anchoTS * escala), (largoTS * escala), "#bdbdbd");
        }
            // Tablas inferiores 
        const xCentro = offsetX2 + (largoGral * escala) / 2 - (largoTI2 * escala) / 2;
        const yCentro = offsetY2 + (anchoGral * escala) / 2 - (anchoTI2 * escala) / 2;

        // Tablas laterales
        drawFullRect(offsetX2, offsetY2, (anchoTI * escala), (largoTI * escala), "#c0cbff"); // izquierda
        drawFullRect(offsetX2 + (largoGral * escala) - (anchoTI * escala), offsetY2, (anchoTI * escala), (largoTI * escala), "#c0cbff"); // derecha

        drawFullRect(xCentro, offsetY2, (largoTI2 * escala), (anchoTI2 * escala), "#c0cbff"); // arriba
        drawFullRect(xCentro, offsetY2 + anchoGral * escala - (anchoTI2 * escala), (largoTI2 * escala), (anchoTI2 * escala), "#c0cbff"); // abajo
        // Tabla central
        drawFullRect(xCentro, yCentro, (largoTI2 * escala), (anchoTI2 * escala), "#c0cbff");
        
        // Vista lateral
        const escala2 = canvasWidth*0.0093;
        const offsetX3 = (xLat - (largoGral * escala2)) / 2;
        const offsetY3 = (yLat - (grosorGral * escala2)) / 2;

        // drawLineRect(offsetX3, offsetY3, (largoGral * escala2), (grosorGral * escala2));
        drawCotaLineH(offsetX3, offsetY3-(2*escala2), offsetX3+(largoGral*escala2), offsetY3-(2*escala2), 0.6*escala2)
        drawTextH(largoGral, offsetX3, offsetY3-(2.5*escala2), offsetX3+(largoGral*escala2))
        drawCotaLineV(offsetX3-(2*escala2), offsetY3, offsetX3-(2*escala2), offsetY3+(grosorGral*escala2), 0.6*escala2)
        drawTextV(grosorGral, offsetX3-(2.5*escala2), offsetY3, offsetY3+(1.1*grosorGral*escala2));

            // Tablas superiores
        for (let i = 0; i < cantidadTS; i++) {
            const x = offsetX3 + i * ((anchoTS * escala2) + (separacionTS * escala2));
            const y = offsetY3;
            drawFullRect(x, y, (anchoTS * escala2), (grosorTS * escala2), "#bdbdbd");
        }

            // Tablas de carga
        const xTC = offsetX3 + ((largoGral * escala2) - (largoTC * escala2)) / 2; // Coordenadas centradas
        const yTC = offsetY3 + (grosorTS * escala2);
        drawFullRect(xTC, yTC, (largoTC * escala2), (grosorTC * escala2), "#787878");

            // Tacones
        const xTADer = offsetX3 + largoGral * escala2 - (largoTAL * escala2);
        // Tacones colocados horizontalmente en 3
        const xTA = offsetX3 + (largoGral * escala2) / 2 - (largoTAC * escala2) / 2;
        const yTA = offsetY3 + (grosorTS * escala2) + (grosorTC * escala2);

        drawFullRect(offsetX3, yTA, (largoTAL * escala2), (grosorTAL * escala2), "#787878");
        drawFullRect(xTA, yTA, (largoTAC * escala2), (grosorTAC * escala2), "#787878");
        drawFullRect(xTADer, yTA, (largoTAL * escala2), (grosorTAL* escala2), "#787878");

            // Tablas inferiores
        const xTI = offsetX3 + ((largoGral * escala2) - (largoTI2 * escala2)) / 2; // Coordenadas centradas
        const xTIDer = offsetX3 + largoGral * escala2 - (anchoTI * escala2);
        const yTI = offsetY3 + (grosorTS * escala2) + (grosorTC * escala2) + (grosorTAL * escala2);

        // Tablas laterales
        drawFullRect(offsetX3, yTI, (anchoTI * escala2), (grosorTI * escala2), "#c0cbff");
        drawFullRect(xTIDer, yTI, (anchoTI * escala2), (grosorTI * escala2), "#c0cbff");
        // Tabla central
        drawFullRect(xTI, yTI, (largoTI2 * escala2), (grosorTI2 * escala2), "#c0cbff");

    }

    // Agregar eventos a los campos de entrada para redibujar el plano cuando cambie cualquier valor
    const inputs = document.querySelectorAll('#largoGral, #anchoGral, #grosorGral, #cantidadTS-1, #largoTS-1, #anchoTS-1, #grosorTS-1, #cantidadTI-1, #largoTI-1, #anchoTI-1, #grosorTI-1, #cantidadTI-2, #largoTI-2, #anchoTI-2, #grosorTI-2, #cantidadTAL, #distribucionTA, #largoTAL, #anchoTAL, #grosorTAL, #cantidadTAC, #largoTAC, #anchoTAC, #grosorTAC, #cantidadTC, #largoTC, #anchoTC, #grosorTC');

    // Para cada input, agregar un event listener para ejecutar la función redibujarPlano cuando el valor cambie
    inputs.forEach(input => {
        input.addEventListener('input', redibujarPlano);
    });

    // Llamar a la función una vez al cargar para dibujar el plano inicialmente
    redibujarPlano();
};