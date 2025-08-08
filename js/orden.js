
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

    // Folio y fecha 
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
    doc.text("INFORMACIÓN IMPORTANTE:", 16.5, 226)
    doc.setFontSize(8);
    doc.text("Este documento no tiene validez oficial. El presente presupuesto es únicamente informativo y", 16.5, 231)
    doc.text("representa una estimación aproximada del 90% del valor final. Los precios y especificaciones están", 16.5, 234)
    doc.text("sujetos a cambios sin previo aviso. Para confirmación de precios, condiciones o aclaraciones, por", 16.5, 237)
    doc.text("favor consulte con su vendedor asignado.", 16.5, 240)
    doc.text("Este documento no constituye un compromiso de venta ni una orden de compra vinculante.", 16.5, 243)

    // Tolerancias
    doc.setFontSize(10);
    doc.text("TOLERANCIAS:", 16, 249)

    let yPosition2 = 253; // La posición Y inicial del texto
    doc.setFontSize(8);
    carrito.forEach((item, index) => {
        const numero = index + 1;
        const tolerancias = item.tolerancias[0] || {};

        let texto = "";

        if (item.subtipo === "Barrote") {
            const ts1 = tolerancias.toleranciaTS1 || "-";
            const ti1 = tolerancias.toleranciaTI1 || "-";
            const b1  = tolerancias.toleranciaB1  || "-";

            texto = `Tarima ${numero}: Tabla Sup = +-${ts1}", Tabla Inf = +-${ti1} y Barrote = +-${b1}"`;

        } else if (item.subtipo === "Tacón") {
            const ts1 = tolerancias.toleranciaTS1 || "-";
            const ti1 = tolerancias.toleranciaTI1 || "-";
            const ta1 = tolerancias.toleranciaTA1 || "-";
            const tc1 = tolerancias.toleranciaTC1 || "-";

            texto = `Tarima ${numero}: Tabla Sup = +-${ts1}", Tabla Inf = +-${ti1}", Tacón = +-${ta1}" y Tabla Carga = +-${tc1}"`;
        } 

        // Imprimir el texto 
        doc.text(texto, 18, yPosition2);

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