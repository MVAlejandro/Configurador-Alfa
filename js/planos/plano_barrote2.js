
export function dibujarBarrote2() {
    const plano = document.getElementById('plano_barrote');
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
        const variacionTS = document.getElementById('variacionTS').value;

        const cantidadTI = parseFloat(document.getElementById('cantidadTI').value);
        const largoTI = parseFloat(document.getElementById('largoTI').value);
        const anchoTI = parseFloat(document.getElementById('anchoTI').value);
        const grosorTI = parseFloat(document.getElementById('grosorTI').value);

        const cantidadB = parseFloat(document.getElementById('cantidadB').value);
        const largoB = parseFloat(document.getElementById('largoB').value);
        const anchoB = parseFloat(document.getElementById('anchoB').value);
        const grosorB = parseFloat(document.getElementById('grosorB').value);
        const tipoB = document.getElementById('tipoB').value;
        const distBar = document.getElementById('distBar').value;

        // Calcular las separaciones
        let separacionTS = ((largoGral - (anchoTS * cantidadTS)) / (cantidadTS - 1)).toFixed(2)
        let separacionTI = ((largoGral - (anchoTI * cantidadTI)) / (cantidadTI - 1)).toFixed(2)
        let separacionB = ((anchoGral - (grosorB * cantidadB)) / (cantidadB - 1)).toFixed(2)

        const escala = canvasWidth*0.0064;

        // Vista superior
        const offsetX1 = (xSup - (largoGral*escala)) / 2;
        const offsetY1 = (ySup - (anchoGral*escala)) / 2;

        drawLineRect(offsetX1, offsetY1, (largoGral*escala), (anchoGral*escala))
        drawCotaLineH(offsetX1, offsetY1+(15+anchoGral*escala), offsetX1+(largoGral*escala), offsetY1+(15+anchoGral*escala), 1*escala)
        drawTextH(largoGral, offsetX1, offsetY1+(15+anchoGral*escala)+(3*escala), offsetX1+(largoGral*escala))
        drawCotaLineV(offsetX1-(3*escala),offsetY1, offsetX1-(3*escala), offsetY1+(anchoGral*escala), 1*escala)
        drawTextV(anchoGral, offsetX1-(4*escala), offsetY1, offsetY1+(anchoGral*escala));

            // Dibujar Barrotes
        if (distBar === 'Estándar') {
            const y = offsetY1+anchoGral*escala/2 // Centro y del contenedor
            if (cantidadB === 3) {
                drawFullRect(offsetX1, offsetY1, (largoB * escala), (grosorB * escala), "#787878"); 
                drawFullRect(offsetX1, y-((grosorB*escala)/2), (largoB * escala), (grosorB * escala), "#787878");
                drawFullRect(offsetX1, offsetY1 + (cantidadB - 1) * ((grosorB * escala) + (separacionB * escala)), (largoB * escala), (grosorB * escala), "#787878"); 
            } else if (cantidadB === 4) {
                drawFullRect(offsetX1, offsetY1, (largoB * escala), (grosorB * escala), "#787878"); 
                drawFullRect(offsetX1, y-(3*escala), (largoB * escala), (grosorB * escala), "#787878");
                drawFullRect(offsetX1, y+(3*escala), (largoB * escala), (grosorB * escala), "#787878");
                drawFullRect(offsetX1, offsetY1 + (cantidadB - 1) * ((grosorB * escala) + (separacionB * escala)), (largoB * escala), (grosorB * escala), "#787878");
            } else {
                const alto = grosorB * escala;
                const separacion = 6 * escala;
                drawFullRect(offsetX1, offsetY1, (largoB * escala), alto, "#787878"); 
                const y2 = y - (3 * alto / 2) - separacion;
                drawFullRect(offsetX1, y2, largoB * escala, alto, "#787878");
                const y3 = y - alto / 2;
                drawFullRect(offsetX1, y3, largoB * escala, alto, "#787878");
                const y4 = y + alto / 2 + separacion;
                drawFullRect(offsetX1, y4, largoB * escala, alto, "#787878");
                drawFullRect(offsetX1, offsetY1 + (cantidadB - 1) * ((alto) + (separacionB * escala)), (largoB * escala), alto, "#787878");
            }
        } else {
            for (let i = 0; i < cantidadB; i++) {
                const x = offsetX1;
                const y = offsetY1 + i * ((grosorB * escala) + (separacionB * escala));
                drawFullRect(x, y, (largoB * escala), (grosorB * escala), "#787878");
            }
        }

            // Dibujar Tablas superiores
        if (variacionTS === 'Único') {
            for (let i = 0; i < cantidadTS; i++) {
                const x = offsetX1 + i * ((anchoTS * escala) + (separacionTS * escala));
                const y = offsetY1;
                drawFullRect(x, y, (anchoTS * escala), (largoTS * escala), "#e5e5e5");
            }
        } else if (variacionTS === 'Variable'){
            const cantidadTS2 = parseFloat(document.getElementById('cantidadTS-2').value);
            const largoTS2 = parseFloat(document.getElementById('largoTS-2').value);
            const anchoTS2 = parseFloat(document.getElementById('anchoTS-2').value);
            const grosorTS2 = parseFloat(document.getElementById('grosorTS-2').value);

            let separacionTS2 = ((largoGral - (anchoTS2 * cantidadTS2)) / (cantidadTS2 - 1)).toFixed(2)

            // Tabla Superior 2
            for (let i = 0; i < cantidadTS2; i++) {
                const x = offsetX1 + i * ((anchoTS2 * escala) + (separacionTS2 * escala));
                const y = offsetY1;
                drawFullRect(x, y, (anchoTS2 * escala), (largoTS2 * escala), "#e5e5e5");
            }
            // Tabla superior 1
            let separacionTS1 = ((separacionTS2 - (anchoTS * cantidadTS/(cantidadTS2-1))) / ((cantidadTS/(cantidadTS2-1)) + 1)).toFixed(2)
            
            for (let j = 0; j < cantidadTS2 - 1; j++) {
                let xTS1 = offsetX1 + ((anchoTS2 * escala) + (separacionTS1 * escala)) + j * ((anchoTS2 * escala) + (separacionTS2 * escala)); 
                for (let i = 0; i < cantidadTS / (cantidadTS2 - 1); i++) {
                    let x = xTS1 + i * ((anchoTS * escala) + (separacionTS1 * escala)); 
                    let y = offsetY1;
                    drawFullRect(x, y, (anchoTS * escala), (largoTS * escala), "#e5e5e5");
                }
            }
        }

        // Vista lateral
        const offsetX4 = xSup - ((grosorGral*escala) / 2);
        const offsetY4 = offsetY1;

        // drawLineRect(offsetX4, offsetY4, (grosorGral*escala), (anchoGral*escala));
        drawCotaLineH(offsetX4, offsetY4-(2*escala), offsetX4+(grosorGral*escala), offsetY4-(2*escala), 1*escala)
        drawTextH(grosorGral, offsetX4, offsetY4-(2.7*escala), offsetX4+(grosorGral*escala))

            // Dibujar Tablas superiores
        drawFullRect(offsetX4, offsetY4, (grosorTS*escala), (largoTS*escala), "#e5e5e5")

            // Dibujar Barrotes
        if (distBar === 'Estándar') {
            const x = offsetX4+(grosorTS*escala);
            const y = offsetY4+anchoGral*escala/2 // Centro y del contenedor
            if (cantidadB === 3) {
                drawFullRect(x, offsetY4, (anchoB * escala), (grosorB * escala), "#787878"); 
                drawFullRect(x, y-((grosorB*escala)/2), (anchoB * escala), (grosorB * escala), "#787878");
                drawFullRect(x, offsetY4 + (cantidadB - 1) * ((grosorB * escala) + (separacionB * escala)), (anchoB * escala), (grosorB * escala), "#787878"); 
            } else if (cantidadB === 4) {
                drawFullRect(x, offsetY4, (anchoB * escala), (grosorB * escala), "#787878"); 
                drawFullRect(x, y-(3*escala), (anchoB * escala), (grosorB * escala), "#787878");
                drawFullRect(x, y+(3*escala), (anchoB * escala), (grosorB * escala), "#787878");
                drawFullRect(x, offsetY4 + (cantidadB - 1) * ((grosorB * escala) + (separacionB * escala)), (anchoB * escala), (grosorB * escala), "#787878");
            } else {
                const alto = grosorB * escala;
                const separacion = 6 * escala;
                drawFullRect(x, offsetY4, (anchoB * escala), alto, "#787878"); 
                const y2 = y - (3 * alto / 2) - separacion;
                drawFullRect(x, y2, anchoB * escala, alto, "#787878");
                const y3 = y - alto / 2;
                drawFullRect(x, y3, anchoB * escala, alto, "#787878");
                const y4 = y + alto / 2 + separacion;
                drawFullRect(x, y4, anchoB * escala, alto, "#787878");
                drawFullRect(x, offsetY4 + (cantidadB - 1) * ((alto) + (separacionB * escala)), (anchoB * escala), alto, "#787878");
            }
        } else {
            for (let i = 0; i < cantidadB; i++) {
                const x = offsetX4+(grosorTS*escala);
                const y = offsetY4 + i * ((grosorB * escala) + (separacionB * escala));
                drawFullRect(x, y, (anchoB * escala), (grosorB * escala), "#787878");
            }
        }

            // Dibujar Tablas inferiores
        drawFullRect(offsetX4+((grosorTS+anchoB)*escala), offsetY4, (grosorTI*escala), (largoTI*escala), "#ffc0c0")

        // Vista inferior
        const offsetX2 = (xInf - (largoGral*escala)) / 2;
        const offsetY2 = (yInf - (anchoGral*escala)) / 2;

        drawLineRect(offsetX2, offsetY2, (largoGral*escala), (anchoGral*escala))

            // Dibujar Tablas superiores
        if (variacionTS === 'Único') {
            for (let i = 0; i < cantidadTS; i++) {
                const x = offsetX2 + i * ((anchoTS * escala) + (separacionTS * escala));
                const y = offsetY2;
                drawFullRect(x, y, (anchoTS * escala), (largoTS * escala), "#bdbdbd");
            }
        } else if (variacionTS === 'Variable'){
            const cantidadTS2 = parseFloat(document.getElementById('cantidadTS-2').value);
            const largoTS2 = parseFloat(document.getElementById('largoTS-2').value);
            const anchoTS2 = parseFloat(document.getElementById('anchoTS-2').value);
            const grosorTS2 = parseFloat(document.getElementById('grosorTS-2').value);

            let separacionTS2 = ((largoGral - (anchoTS2 * cantidadTS2)) / (cantidadTS2 - 1)).toFixed(2)

            // Tabla Superior 2
            for (let i = 0; i < cantidadTS2; i++) {
                const x = offsetX2 + i * ((anchoTS2 * escala) + (separacionTS2 * escala));
                const y = offsetY2;
                drawFullRect(x, y, (anchoTS2 * escala), (largoTS2 * escala), "#bdbdbd");
            }
            // Tabla superior 1
            let separacionTS1 = ((separacionTS2 - (anchoTS * cantidadTS/(cantidadTS2-1))) / ((cantidadTS/(cantidadTS2-1)) + 1)).toFixed(2)
            
            for (let j = 0; j < cantidadTS2 - 1; j++) {
                let xTS1 = offsetX2 + ((anchoTS2 * escala) + (separacionTS1 * escala)) + j * ((anchoTS2 * escala) + (separacionTS2 * escala)); 
                for (let i = 0; i < cantidadTS / (cantidadTS2 - 1); i++) {
                    let x = xTS1 + i * ((anchoTS * escala) + (separacionTS1 * escala)); 
                    let y = offsetY2;
                    drawFullRect(x, y, (anchoTS * escala), (largoTS * escala), "#bdbdbd");
                }
            }
        }

            // Barrotes
        if (distBar === 'Estándar') {
            const y = offsetY2+anchoGral*escala/2 // Centro y del contenedor
            if (cantidadB === 3) {
                drawFullRect(offsetX2, offsetY2, (largoB * escala), (grosorB * escala), "#787878"); 
                drawFullRect(offsetX2, y-((grosorB*escala)/2), (largoB * escala), (grosorB * escala), "#787878");
                drawFullRect(offsetX2, offsetY2 + (cantidadB - 1) * ((grosorB * escala) + (separacionB * escala)), (largoB * escala), (grosorB * escala), "#787878"); 
            } else if (cantidadB === 4) {
                drawFullRect(offsetX2, offsetY2, (largoB * escala), (grosorB * escala), "#787878"); 
                drawFullRect(offsetX2, y-(3*escala), (largoB * escala), (grosorB * escala), "#787878");
                drawFullRect(offsetX2, y+(3*escala), (largoB * escala), (grosorB * escala), "#787878");
                drawFullRect(offsetX2, offsetY2 + (cantidadB - 1) * ((grosorB * escala) + (separacionB * escala)), (largoB * escala), (grosorB * escala), "#787878");
            } else {
                const alto = grosorB * escala;
            const separacion = 6 * escala;
            drawFullRect(offsetX2, offsetY1, (largoB * escala), alto, "#787878"); 
            const y2 = y - (3 * alto / 2) - separacion;
            drawFullRect(offsetX2, y2, largoB * escala, alto, "#787878");
            const y3 = y - alto / 2;
            drawFullRect(offsetX2, y3, largoB * escala, alto, "#787878");
            const y4 = y + alto / 2 + separacion;
            drawFullRect(offsetX2, y4, largoB * escala, alto, "#787878");
            drawFullRect(offsetX2, offsetY1 + (cantidadB - 1) * ((alto) + (separacionB * escala)), (largoB * escala), alto, "#787878");
            }
        } else {
            for (let i = 0; i < cantidadB; i++) {
                const x = offsetX2;
                const y = offsetY2 + i * ((grosorB * escala) + (separacionB * escala));
                drawFullRect(x, y, (largoB * escala), (grosorB * escala), "#787878");
            }
        }

            // Dibujar Tablas inferiores
        if (tipoB === "Con saque") {
            const distB = parseFloat(document.getElementById('distB').value);
            let separacionSaque = (largoGral-(2*(distB+9)))*escala;

            drawFullRect(offsetX2, offsetY2, (anchoTI * escala), (largoTI * escala), "#ffc0c0"); 
            drawFullRect(offsetX2 + ((largoGral-anchoTI)*escala), offsetY2, (anchoTI * escala), (largoTI * escala), "#ffc0c0");

            const espacio = (separacionSaque - (cantidadTI - 2) * (anchoTI * escala)) / (cantidadTI - 1);

            // Punto inicial del área central
            const xInicio = offsetX2 + (distB + 9) * escala;

            for (let i = 0; i < (cantidadTI - 2); i++) {
                const x = xInicio + espacio * (i + 1) + (anchoTI * escala) * i;
                const y = offsetY2;

                drawFullRect(x, y, (anchoTI * escala), largoTI * escala, "#ffc0c0");
            }

        } else {
            for (let i = 0; i < cantidadTI; i++) {
                const x = offsetX2 + i * ((anchoTI * escala) + (separacionTI * escala));
                const y = offsetY2;
                drawFullRect(x, y, (anchoTI * escala), (largoTI * escala), "#ffc0c0");
            }
        }

        // Vista frontal
        const escala2 = canvasWidth*0.0093;
        const offsetX3 = (xLat - (largoGral*escala2)) / 2;
        const offsetY3 = (yLat - (grosorGral*escala2)) / 2;

        // drawLineRect(offsetX3, offsetY3, (largoGral*escala2), (grosorGral*escala2))
        drawCotaLineH(offsetX3, offsetY3-(2*escala2), offsetX3+(largoGral*escala2), offsetY3-(2*escala2), 0.6*escala2)
        drawTextH(largoGral, offsetX3, offsetY3-(2.5*escala2), offsetX3+(largoGral*escala2))
        drawCotaLineV(offsetX3-(2*escala2), offsetY3, offsetX3-(2*escala2), offsetY3+(grosorGral*escala2), 0.6*escala2)
        drawTextV(grosorGral, offsetX3-(2.5*escala2), offsetY3, offsetY3+(1.1*grosorGral*escala2));

            // Dibujar Tablas superiores
        if (variacionTS === 'Único') {
            for (let i = 0; i < cantidadTS; i++) {
                const x = offsetX3 + i * ((anchoTS * escala2) + (separacionTS * escala2));
                const y = offsetY3;
                drawFullRect(x, y, (anchoTS * escala2), (grosorTS * escala2), "#bdbdbd");
            }
        } else if (variacionTS === 'Variable'){
            const cantidadTS2 = parseFloat(document.getElementById('cantidadTS-2').value);
            const largoTS2 = parseFloat(document.getElementById('largoTS-2').value);
            const anchoTS2 = parseFloat(document.getElementById('anchoTS-2').value);
            const grosorTS2 = parseFloat(document.getElementById('grosorTS-2').value);

            let separacionTS2 = ((largoGral - (anchoTS2 * cantidadTS2)) / (cantidadTS2 - 1)).toFixed(2)

            // Tabla Superior 2
            for (let i = 0; i < cantidadTS2; i++) {
                const x = offsetX3 + i * ((anchoTS2 * escala2) + (separacionTS2 * escala2));
                const y = offsetY3;
                drawFullRect(x, y, (anchoTS2 * escala2), (grosorTS2 * escala2), "#bdbdbd");
            }
            // Tabla superior 1
            let separacionTS1 = ((separacionTS2 - (anchoTS * cantidadTS/(cantidadTS2-1))) / ((cantidadTS/(cantidadTS2-1)) + 1)).toFixed(2)
            
            for (let j = 0; j < cantidadTS2 - 1; j++) {
                let xTS1 = offsetX3 + ((anchoTS2 * escala2) + (separacionTS1 * escala2)) + j * ((anchoTS2 * escala2) + (separacionTS2 * escala2)); 
                for (let i = 0; i < cantidadTS / (cantidadTS2 - 1); i++) {
                    let x = xTS1 + i * ((anchoTS * escala2) + (separacionTS1 * escala2)); 
                    let y = offsetY3;
                    drawFullRect(x, y, (anchoTS * escala2), (grosorTS * escala2), "#bdbdbd");
                }
            }
        }

            // Dibujar Barrotes
        const xB = offsetX3 + ((largoGral * escala2) - (largoB * escala2)) / 2; // Coordenadas centradas
        const yB = offsetY3 + ((grosorGral * escala2) - (anchoB * escala2)) / 2;

        drawFullRect(xB, yB, (largoB * escala2), (anchoB * escala2), "#787878");

            // Dibujar Saque
        if (tipoB === "Con saque") {
            let hSaque = anchoB * 0.40
            function drawSaque(x, y, w, h, r) {
                ctx.beginPath();
                ctx.moveTo(x, y + r);
                ctx.quadraticCurveTo(x, y, x + r, y);
                ctx.lineTo(x + w - r, y);
                ctx.quadraticCurveTo(x + w, y, x + w, y + r);
                ctx.lineTo(x + w, y + h);
                ctx.lineTo(x, y + h);
                ctx.closePath();
                ctx.fillStyle = "white";
                ctx.fill();
            }

            const margen = 6 * escala2;

            // Coordenadas X
            const xMedio1 = xB + margen; 
            const xMedio2 = xB + (largoB * escala2) - margen - (8.3*escala2); 

            drawSaque(xMedio1, (yB+((anchoB-hSaque) * escala2)), 8.3*escala2, (hSaque * escala2), 5);
            drawSaque(xMedio2, (yB+((anchoB-hSaque) * escala2)), 8.3*escala2, (hSaque * escala2), 5);
        }

            // Dibujar Tablas inferiores
        if (tipoB === "Con saque") {
            const distB = parseFloat(document.getElementById('distB').value);
            let separacionSaque = (largoGral-(2*(distB+9)))*escala2;

            drawFullRect(offsetX3, yB + (anchoB * escala2), (anchoTI * escala2), (grosorTI * escala2), "#ffc0c0"); 
            drawFullRect(offsetX3 + ((largoGral-anchoTI)*escala2), yB + (anchoB * escala2), (anchoTI * escala2), (grosorTI * escala2), "#ffc0c0");

            const espacio = (separacionSaque - (cantidadTI - 2) * (anchoTI * escala2)) / (cantidadTI - 1);

            // Punto inicial del área central
            const xInicio = offsetX3 + (distB + 9) * escala2;

            for (let i = 0; i < (cantidadTI - 2); i++) {
                const x = xInicio + espacio * (i + 1) + (anchoTI * escala2) * i;
                const y = yB + (anchoB * escala2);

                drawFullRect(x, y, (anchoTI * escala2), grosorTI * escala2, "#ffc0c0");
            }

        } else {
            for (let i = 0; i < cantidadTI; i++) {
                const x = offsetX3 + i * ((anchoTI * escala2) + (separacionTI * escala2));
                const y = yB + (anchoB * escala2);
                drawFullRect(x, y, (anchoTI * escala2), (grosorTI * escala2), "#ffc0c0");
            }
        }
    }

    // Agregar eventos a los campos de entrada para redibujar el plano cuando cambie cualquier valor
    const inputs = document.querySelectorAll('#largoGral, #anchoGral, #grosorGral, #cantidadTS-1, #largoTS-1, #anchoTS-1, #grosorTS-1,#cantidadTS-2, #largoTS-2, #anchoTS-2, #grosorTS-2, #cantidadTI, #largoTI, #anchoTI, #grosorTI, #cantidadB, #largoB, #anchoB, #grosorB, #tipoB, #distBar');

    // Para cada input, agregar un event listener para ejecutar la función redibujarPlano cuando el valor cambie
    inputs.forEach(input => {
        input.addEventListener('input', redibujarPlano);
    });

    // Llamar a la función una vez al cargar para dibujar el plano inicialmente
    redibujarPlano();
};