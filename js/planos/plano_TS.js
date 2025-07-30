
export function dibujarTS1(x, y, color) {
    const plano = document.getElementById('plano_barrote');
    const ctx = plano.getContext("2d");
    const canvasWidth = plano.width;

    function drawFullRect (x, y, w, h, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);

        ctx.lineWidth = "1";
        ctx.strokeStyle = "black";
        ctx.strokeRect(x, y, w, h);
    }

    const largoGral = parseFloat(document.getElementById('largoGral').value);

    const cantidadTS = parseFloat(document.getElementById('cantidadTS-1').value);
    const largoTS = parseFloat(document.getElementById('largoTS-1').value);
    const anchoTS = parseFloat(document.getElementById('anchoTS-1').value);
    const variacionTS = document.getElementById('variacionTS').value;

    let separacionTS = ((largoGral - (anchoTS * cantidadTS)) / (cantidadTS - 1)).toFixed(2)
    const escala = canvasWidth*0.0064;

    if (variacionTS === 'Único') {
        for (let i = 0; i < cantidadTS; i++) {
            const xTS = x + i * ((anchoTS * escala) + (separacionTS * escala));
            const yTS = y;
            drawFullRect(xTS, yTS, (anchoTS * escala), (largoTS * escala), color);
        }
    } else if (variacionTS === 'Variable') {
        const cantidadTS2 = parseFloat(document.getElementById('cantidadTS-2').value);
        const largoTS2 = parseFloat(document.getElementById('largoTS-2').value);
        const anchoTS2 = parseFloat(document.getElementById('anchoTS-2').value);

        let separacionTS2 = ((largoGral - (anchoTS2 * cantidadTS2)) / (cantidadTS2 - 1)).toFixed(2)

        // Tabla Superior 2
        for (let i = 0; i < cantidadTS2; i++) {
            const xTS = x + i * ((anchoTS2 * escala) + (separacionTS2 * escala));
            const yTS = y;
            drawFullRect(xTS, yTS, (anchoTS2 * escala), (largoTS2 * escala), color);
        }
        // Tabla superior 1
        let separacionTS1 = ((separacionTS2 - (anchoTS * cantidadTS/(cantidadTS2-1))) / ((cantidadTS/(cantidadTS2-1)) + 1)).toFixed(2)
            
        for (let j = 0; j < cantidadTS2 - 1; j++) {
            let xTS1 = x + ((anchoTS2 * escala) + (separacionTS1 * escala)) + j * ((anchoTS2 * escala) + (separacionTS2 * escala)); 
            for (let i = 0; i < cantidadTS / (cantidadTS2 - 1); i++) {
                let xTS = xTS1 + i * ((anchoTS * escala) + (separacionTS1 * escala)); 
                let yTS = y;
                drawFullRect(xTS, yTS, (anchoTS * escala), (largoTS * escala), color);
            }
        }
    }
}

export function dibujarTS2(x, y, color) {
    const plano = document.getElementById('plano_barrote');
    const ctx = plano.getContext("2d");
    const canvasWidth = plano.width;

    function drawFullRect (x, y, w, h, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);

        ctx.lineWidth = "1";
        ctx.strokeStyle = "black";
        ctx.strokeRect(x, y, w, h);
    }

    const largoGral = parseFloat(document.getElementById('largoGral').value);

    const cantidadTS = parseFloat(document.getElementById('cantidadTS-1').value);
    const grosorTS = parseFloat(document.getElementById('grosorTS-1').value);
    const anchoTS = parseFloat(document.getElementById('anchoTS-1').value);
    const variacionTS = document.getElementById('variacionTS').value;

    let separacionTS = ((largoGral - (anchoTS * cantidadTS)) / (cantidadTS - 1)).toFixed(2)
    const escala2 = canvasWidth*0.0093;

    if (variacionTS === 'Único') {
        for (let i = 0; i < cantidadTS; i++) {
            const xTS = x + i * ((anchoTS * escala2) + (separacionTS * escala2));
            const yTS = y;
            drawFullRect(xTS, yTS, (anchoTS * escala2), (grosorTS * escala2), color);
        }
    } else {
        const cantidadTS2 = parseFloat(document.getElementById('cantidadTS-2').value);
        const grosorTS2 = parseFloat(document.getElementById('grosorTS-2').value);
        const anchoTS2 = parseFloat(document.getElementById('anchoTS-2').value);

        let separacionTS2 = ((largoGral - (anchoTS2 * cantidadTS2)) / (cantidadTS2 - 1)).toFixed(2)

        // Tabla Superior 2
        for (let i = 0; i < cantidadTS2; i++) {
            const xTS = x + i * ((anchoTS2 * escala2) + (separacionTS2 * escala2));
            const yTS = y;
            drawFullRect(xTS, yTS, (anchoTS2 * escala2), (grosorTS * escala2), color);
        }
        // Tabla superior 1
        let separacionTS1 = ((separacionTS2 - (anchoTS * cantidadTS/(cantidadTS2-1))) / ((cantidadTS/(cantidadTS2-1)) + 1)).toFixed(2)
            
        for (let j = 0; j < cantidadTS2 - 1; j++) {
            let xTS1 = x + ((anchoTS2 * escala2) + (separacionTS1 * escala2)) + j * ((anchoTS2 * escala2) + (separacionTS2 * escala2)); 
            for (let i = 0; i < cantidadTS / (cantidadTS2 - 1); i++) {
                let xTS = xTS1 + i * ((anchoTS * escala2) + (separacionTS1 * escala2)); 
                let yTS = y;
                drawFullRect(xTS, yTS, (anchoTS * escala2), (grosorTS * escala2), color);
            }
        }
    }
}
