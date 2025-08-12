
// Crear evento al dar click en botón Regresar
document.getElementById('btn_regresar').addEventListener('click', function () {
    window.location.href = './resumen.html';
});

// Recuperar los datos del localStorage y guardar en la orden
const cliente = JSON.parse(localStorage.getItem("clienteActual"));
const carrito = JSON.parse(localStorage.getItem("carrito"));

// Calcular total
const total = carrito.reduce((sum, item) => sum + item.cantidad * item.precioUnit, 0);

// Generar folio
function generarIDUnico() {
  return 'A-' + Math.floor(Math.random() * 10000);
}

const orden = {
  folio: generarIDUnico(), 
  cliente: cliente,
  productos: carrito,
  fechaCreacion: new Date().toISOString(),
  totalEstimado: total,
};
console.log(orden);

const { jsPDF } = window.jspdf;

function crearPdf() {
    const doc = new jsPDF({
        format: 'letter'
    });

    function drawRect (x, y, w, h, m) {
        doc.setDrawColor(0);
        doc.setLineWidth(m); 
        doc.rect(x, y, w, h); 
    }

    function textCenter (texto, cont, y) {
        const txt = texto;
        const anchoTexto = doc.getStringUnitWidth(txt) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        const x = (cont / 2) - (anchoTexto / 2);
        doc.text(txt, x, y);
    }

    function formatoMoneda(monto) {
        return monto.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    const fecha = new Date().toLocaleDateString();

    // DOCUMENTO PDF //
    // Margen
    drawRect(10, 10, 215.9 - 2 * 10, 279.4 - 2 * 10, 0.5);

    // Imagen 
    doc.addImage('./assets/Logo-Color-PNG-396x324.png', 'PNG', 20, 20, 29, 23);

    // Encabezado centrado
    doc.setFontSize(10);
    textCenter("SUMINISTROS PALLETS Y EMBALAJES S.A. DE C.V.", 215.9, 25)
    textCenter("Francisco I Madero 7B, Int. Sin Número", 215.9, 30)
    textCenter("Col. San Bernardino, C.P. 56260, Texcoco, Estado de México", 215.9, 35)
    textCenter("Tel. 5959220372          RFC: SPE160311QI7", 215.9, 40)

    // Número de página
    doc.setFontSize(7);
    doc.text("Página 1", 190, 15)

    // Folio y fecha 
    doc.setFontSize(10);
    drawRect(175, 20, 25, 5, 0.1);
    drawRect(175, 25, 25, 5, 0.1);
    textCenter("Folio", 375, 24)
    textCenter(`${orden.folio}`, 375, 29)

    drawRect(175, 32, 25, 5, 0.1);
    drawRect(175, 37, 25, 5, 0.1);
    textCenter("Fecha", 375, 36)
    textCenter(fecha, 375, 41)

    // Texto
    doc.setFontSize(14);
    textCenter("Pedido de venta proforma", 215.9, 55)

    // Tabla cliente
    drawRect(15, 60, 186, 35, 0.1);
    drawRect(15, 60, 186, 5, 0.1);
    drawRect(15, 60, 116, 35, 0.1);

    // Insertar información del cliente
    doc.setFontSize(10);
    textCenter("Cliente", 140, 64)
    doc.setFontSize(9);
    doc.text(`${cliente.razonSocial}`, 17, 71);
    doc.text(`${cliente.rfc}`, 17, 76);
    doc.text(`${cliente.nombre}`, 17, 81);
    doc.text(`${cliente.direccion}`, 17, 86);
    doc.text(`CP: ${cliente.codigoPostal}, Tel: ${cliente.numero}, ${cliente.correo}`, 17, 91);

    // Insertar información del destino
    doc.setFontSize(10);
    textCenter("Entregar en:", 333, 64)
    doc.setFontSize(9);
    doc.text(`${cliente.destino}`, 133, 71);

    // Tabla presupuesto
    drawRect(15, 110, 186, 103, 0.1);
    drawRect(15, 110, 186, 5, 0.1);
    // Descripción
    doc.setFontSize(10);
    textCenter("Artículo", 142, 114)
    // Unidades
    drawRect(129, 110, 16.5, 103, 0.1);
    textCenter("Unid.", 275.5, 114)
    // Precio
    textCenter("Precio", 309, 114)
    // Descuento
    drawRect(163, 110, 16.5, 103, 0.1);
    textCenter("Desc.", 343.5, 114)
    // Total
    textCenter("Importe", 381, 114)


    // Insertar información en la tabla
    const columnWidths = [114, 16.5, 17, 16.5, 21.5]; // Ancho de las columnas (ajustar según sea necesario)
    let yPosition = 124; // La posición Y inicial del texto

    // Bucle para las filas de la tabla
    const descuento = 0;
    carrito.forEach(item => {
        const rowData = [
            `Tarima de ${item.subtipo}, ${item.tipo} (${item.largoGral}" x ${item.anchoGral}" x ${item.grosorGral}")`, 
            String(item.cantidad),  
            `$${formatoMoneda(item.precioUnit)}`,
            `$${formatoMoneda(descuento * item.cantidad)}`, 
            `$${formatoMoneda((item.cantidad * item.precioUnit)-(descuento*item.cantidad))}` 
        ];

        rowData.forEach((cell, index) => {
            const xPosition = 16.5 + (index === 0 ? 0 : columnWidths.slice(0, index).reduce((a, b) => a + b, 0));
            doc.text(cell, xPosition, yPosition);
        });

        yPosition += 8; // Espacio entre filas
    });


    // Tabla comentarios
    drawRect(15, 221, 129, 43, 0.1);
    // Información importante
    doc.text("INFORMACIÓN IMPORTANTE:", 17, 226)
    doc.setFontSize(7);
    doc.text("* Este documento no tiene validez oficial. El presente presupuesto es únicamente informativo y representa una", 17, 231)
    doc.text("  estimación aproximada del 90% del valor final. Los precios y especificaciones están sujetos a cambios sin previo", 17, 234)
    doc.text("  aviso. Para confirmación de precios, condiciones o aclaraciones, por favor consulte con su vendedor asignado.", 17, 237)
    doc.text("* Este documento no constituye un compromiso de venta ni una orden de compra vinculante.", 17, 240)

    // Tolerancias
    doc.setFontSize(10);
    doc.text("TOLERANCIAS:", 17, 246)

    let yPosition2 = 250; // La posición Y inicial del texto
    doc.setFontSize(8);
    carrito.forEach((item, index) => {
        const numero = index + 1;
        const tolerancias = item.tolerancias[0] || {};

        let texto = "";

        if (item.subtipo === "Barrote") {
            const ts1 = tolerancias.toleranciaTS1 || "-";
            const ti1 = tolerancias.toleranciaTI1 || "-";
            const b1  = tolerancias.toleranciaB1  || "-";

            texto = `- Tarima ${numero}: Tabla Sup = +-${ts1}", Tabla Inf = +-${ti1} y Barrote = +-${b1}"`;

        } else if (item.subtipo === "Tacón") {
            const ts1 = tolerancias.toleranciaTS1 || "-";
            const ti1 = tolerancias.toleranciaTI1 || "-";
            const ta1 = tolerancias.toleranciaTA1 || "-";
            const tc1 = tolerancias.toleranciaTC1 || "-";

            texto = `- Tarima ${numero}: Tabla Sup = +-${ts1}", Tabla Inf = +-${ti1}", Tacón = +-${ta1}" y Tabla Carga = +-${tc1}"`;
        } 

        // Imprimir el texto 
        doc.text(texto, 17, yPosition2);

        yPosition2 += 4; // Espacio entre filas
    });

    // Tabla total
    doc.setFontSize(10);
    drawRect(148.5, 221, 52.5, 43, 0.1);
    // Insertar subtotal
    doc.text("Subtotal", 150, 226)
    doc.text(`$${formatoMoneda(orden.totalEstimado)}`, 180.5, 226);
    // Insertar IVA
    doc.text("IVA al 16%", 150, 231)
    doc.text(`$${formatoMoneda(orden.totalEstimado * 0.16)}`, 180.5, 231);
    // Insertar total
    doc.setFontSize(11);
    doc.text("Total", 159, 262)
    doc.text(`$${formatoMoneda(orden.totalEstimado * 1.16)}`, 177, 262);

    // PLANOS POR PRODUCTO //
    carrito.forEach((item, index) => {
        // Si no es el primer producto, agregar nueva página
        doc.addPage();

        // Margen 
        drawRect(10, 10, 215.9 - 2 * 10, 279.4 - 2 * 10, 0.5);

        // Logo
        doc.addImage('./assets/Logo-Color-PNG-396x324.png', 'PNG', 20, 20, 29, 23);

        // Texto título
        doc.setFontSize(14);
        textCenter(`Ficha de requerimientos del producto ${index + 1}`, 215.9, 30);

        // Número de página
        doc.setFontSize(7);
        doc.text(`Página ${index + 2}`, 190, 15)

        // Tabla del plano
        drawRect(15, 55, 186, 100, 0.1);
        drawRect(15, 55, 186, 5, 0.1);

        doc.setFontSize(10);
        textCenter(`Tarima de ${item.subtipo}, ${item.tipo} (${item.largoGral}" x ${item.anchoGral}" x ${item.grosorGral}") - ${item.acomodo}`, 216, 59)
        // Plano 
        doc.addImage(item.imgPlano, "PNG", 29, 60, 160, 100);

        // Tabla de las características
        drawRect(15, 163, 186, 100, 0.1);
        drawRect(15, 163, 186, 5, 0.1);
        textCenter(`DESCRIPCIÓN`, 216, 167)
        //Insertar descripción
        let yPos = 176;
        let yPos2 = 176;
        doc.setFontSize(10);

        // Función de servicios
        function servicios() {
            // Verifica los servicios seleccionados
            const servicio = item.servicios;

            doc.setFontSize(10);
            doc.setFont("helvetica", "bold");
            doc.text(`SERVICIOS SOLICITADOS:`, 119, yPos2); yPos2 += 5;
            // Insertar el servicio a la lista
            doc.setFont("helvetica", "normal");
            for (let propiedad in servicio) {
                if (servicio[propiedad] === "Sí") {
                    doc.text(`- ${propiedad}`, 124, yPos2); yPos2 += 5;
                }
            }

            // Si existe la opción de color, mostrarla
            if (servicio.hasOwnProperty('Color') && servicio['Color']) {
                doc.text(`* Color: ${servicio['Color']}`, 129, yPos2); yPos2 += 5;
            }
        }

        // TARIMA DE BARROTE 
        if (item.subtipo === 'Barrote') {
            // Tabla superior
            item.tablaSuperior.forEach((tabla, i) => {
                const titulo = item.tablaSuperior.length > 1 ? `- Tabla superior ${i + 1}` : '- Tabla superior';
                doc.text(`${titulo}: Cant. ${tabla.cantidadTS}, L: ${tabla.largoTS}", A: ${tabla.anchoTS}", G: ${tabla.grosorTS}"`, 22, yPos);
                yPos += 6;
            });
            doc.setFontSize(9);
            doc.setFont("helvetica", "italic");
            doc.text(`* Tolerancia: L: ${item.tolerancias[0].toleranciaTS1}", A: ${item.tolerancias[0].toleranciaTS2}", G: ${item.tolerancias[0].toleranciaTS3}"`, 22, yPos);
            yPos += 6;
            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");
            doc.text(`- Separación: ${item.tablaSuperior[0].separacionTS}"`, 22, yPos); yPos += 6;
            
            // Tabla inferior
            doc.line(20, yPos, 100, yPos); yPos += 6;
            doc.text(`- Tabla inferior: Cant. ${item.cantidadTI}, L: ${item.largoTI}", A: ${item.anchoTI}", G: ${item.grosorTI}"`, 22, yPos);
            yPos += 6;
            doc.setFontSize(9);
            doc.setFont("helvetica", "italic");
            doc.text(`* Tolerancia: ${item.tolerancias[0].toleranciaTI1}", ${item.tolerancias[0].toleranciaTI2}", ${item.tolerancias[0].toleranciaTI3}"`, 22, yPos);
            yPos += 6;
            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");
            doc.text(`- Arreglo: ${item.arregloTI}`, 22, yPos); yPos += 6;

            // Barrote
            doc.line(20, yPos, 100, yPos); yPos += 6;
            doc.text(`- Barrote: Cant. ${item.cantidadB}, L: ${item.largoB}", A: ${item.anchoB}", G: ${item.grosorB}"`, 22, yPos); yPos += 6;
            doc.setFontSize(9);
            doc.setFont("helvetica", "italic");
            doc.text(`* Tolerancia: ${item.tolerancias[0].toleranciaB1}", ${item.tolerancias[0].toleranciaB2}", ${item.tolerancias[0].toleranciaB3}"`, 22, yPos);
            yPos += 6;
            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");
            doc.text(`- Tipo: ${item.tipoB}`, 22, yPos); yPos += 6;

            if (item.tipoB === 'Con saque') {
                doc.text(`- Inicio de saque: ${item.distB}"`, 22, yPos); yPos += 6;
                doc.text(`- Distribución saque: ${item.distBar}"`, 22, yPos); yPos += 6;
            }

            // Servicios
            servicios();

        // TARIMA DE TACÓN
        } else if (item.subtipo === 'Tacón') {
            // Tabla superior
            item.tablaSuperior.forEach((tabla, i) => {
                const titulo = item.tablaSuperior.length > 1 ? `- Tabla superior ${i + 1}` : '- Tabla superior';
                doc.text(`${titulo}: Cant. ${tabla.cantidadTS}, L: ${tabla.largoTS}", A: ${tabla.anchoTS}", G: ${tabla.grosorTS}"`, 22, yPos);
                yPos += 6;
            });
            doc.setFontSize(9);
            doc.setFont("helvetica", "italic");
            doc.text(`* Tolerancia: ${item.tolerancias[0].toleranciaTS1}", ${item.tolerancias[0].toleranciaTS2}", ${item.tolerancias[0].toleranciaTS3}"`, 22, yPos);
            yPos += 6;
            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");
            doc.text(`- Separación: ${item.tablaSuperior[0].separacionTS}"`, 22, yPos); yPos += 6;

            // Tabla inferior
            doc.line(20, yPos, 100, yPos); yPos += 6;
            item.tablaInferior.forEach((tabla, i) => {
                const titulo = item.tablaInferior.length > 1 ? `- Tabla inferior ${i + 1}` : '- Tabla inferior';
                doc.text(`${titulo}: Cant. ${tabla.cantidadTI}, L: ${tabla.largoTI}", A: ${tabla.anchoTI}", G: ${tabla.grosorTI}"`, 22, yPos);
                yPos += 6;
            });
            doc.setFontSize(9);
            doc.setFont("helvetica", "italic");
            doc.text(`* Tolerancia: ${item.tolerancias[0].toleranciaTI1}", ${item.tolerancias[0].toleranciaTI2}", ${item.tolerancias[0].toleranciaTI3}"`, 22, yPos);
            yPos += 6;
            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");

            // Tacón lateral y central
            doc.line(20, yPos, 100, yPos); yPos += 6;
            doc.text(`- Tacón lateral: Cant. ${item.cantidadTAL}, L: ${item.largoTAL}", A: ${item.anchoTAL}", G: ${item.grosorTAL}"`, 22, yPos); yPos += 6;
            doc.text(`- Tacón central: Cant. ${item.cantidadTAC}, L: ${item.largoTAC}", A: ${item.anchoTAC}", G: ${item.grosorTAC}"`, 22, yPos); yPos += 6;
            doc.setFontSize(9);
            doc.setFont("helvetica", "italic");
            doc.text(`* Tolerancia: ${item.tolerancias[0].toleranciaTA1}", ${item.tolerancias[0].toleranciaTA2}", ${item.tolerancias[0].toleranciaTA3}"`, 22, yPos);
            yPos += 6;

            // Tablas de carga
            doc.line(20, yPos, 100, yPos); yPos += 6;
            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");
            doc.text(`- Tablas carga: Cant. ${item.cantidadTC}, L: ${item.largoTC}", A: ${item.anchoTC}", G: ${item.grosorTC}"`, 22, yPos); yPos += 6;
            doc.setFontSize(9);
            doc.setFont("helvetica", "italic");
            doc.text(`* Tolerancia: ${item.tolerancias[0].toleranciaTC1}", ${item.tolerancias[0].toleranciaTC2}", ${item.tolerancias[0].toleranciaTC3}"`, 22, yPos);
            yPos += 6;

            // Servicios
            servicios();
        }

        drawRect(104, 221, 97, 42.1, 0.1);
        // Texto informativo
        doc.setFontSize(7);
        doc.text("* Las tablas y tacones de esta tarima no están exentas a tener nudillos macizos,", 107, 227)
        doc.text("  procurando siempre que no se afecte la funcionalidad de la tarima.", 107, 230)
        doc.text("* La presion del impacto del clavo puede ocasionar en algunas tarimas fisuras, sin", 107, 234)
        doc.text("  afectar la funcionaliad de la tarima.", 107, 237)
        doc.text("* Teniendo en cuenta que las imágenes mostradas son solo representativas y", 107, 241)
        doc.text("  pueden no reflejar exactamente las variaciones individuales en el grosor,", 107, 244)
        doc.text("  uniformidad y color ya que pueden estar construidas con diferentes tipos de", 107, 247)
        doc.text("  madera, que pueden variar en función del material utilizado. Esto puede dar lugar", 107, 250)
        doc.text("  a diferencias en su apariencia física, pero no afecta a su funcionalidad. Algunos", 107, 253)
        doc.text("  ejemplos de tipos de madera utilizados son: pino, oyamel, encino, cedro, aile,", 107, 256)
        doc.text("  melina, mango, hule, fresno, entre otros.", 107, 259)
    });


    return doc;
}

window.addEventListener("load", function(event){
    const doc = crearPdf();

    // // Convertir a URL y mostrarlo en el iframe
    const pdfBlob = doc.output("blob");
    const blobUrl = URL.createObjectURL(pdfBlob);

    document.getElementById("pdfPreview").src = blobUrl;
    //   window.open(blobUrl, '_blank');
});

document.getElementById('btn_final').addEventListener('click', function() {
    // Borrar todo el localStorage
    localStorage.clear();

    // Redirigir al inicio
    window.location.href = 'index.html';
});