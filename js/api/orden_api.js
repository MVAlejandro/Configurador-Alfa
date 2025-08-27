
// Función adaptadora para convertir datos API a formato compatible con crearPdf
export async function adaptarDatosParaPdf(idOrden) {
    try {
        // 1. Obtener datos de la orden
        const responseOrden = await fetch(`http://localhost:8000/api/ordenes/${idOrden}`);
        if (!responseOrden.ok) throw new Error('Error al obtener orden');
        const ordenAPI = await responseOrden.json();
        
        // 2. Obtener cliente
        const responseCliente = await fetch(`http://localhost:8000/api/clientes/${ordenAPI.id_cliente}`);
        if (!responseCliente.ok) throw new Error('Error al obtener cliente');
        const clienteAPI = await responseCliente.json();
        
        // 3. Obtener productos de la orden
        const responseProductosOrden = await fetch(`http://localhost:8000/api/orden_productos?orden=${idOrden}`);
        if (!responseProductosOrden.ok) throw new Error('Error al obtener productos de orden');
        const productosOrdenAPI = await responseProductosOrden.json();
        
        // 4. Obtener carrito del localStorage para las imágenes
        const carritoLocal = JSON.parse(localStorage.getItem("carrito")) || [];
        console.log('Carrito local:', carritoLocal);
        
        // 5. Transformar cada producto a formato compatible
        const carritoAdaptado = await Promise.all(
            productosOrdenAPI.map(async (itemOrden) => {
                // Obtener producto completo
                const responseProducto = await fetch(`http://localhost:8000/api/productos/${itemOrden.id_producto}`);
                if (!responseProducto.ok) throw new Error('Error al obtener producto');
                const productoAPI = await responseProducto.json();
                
                // Obtener componentes
                const responseComponentes = await fetch(`http://localhost:8000/api/componentes?producto=${itemOrden.id_producto}`);
                if (!responseComponentes.ok) throw new Error('Error al obtener componentes');
                const componentesAPI = await responseComponentes.json();
                
                // Obtener servicios
                const responseServicios = await fetch(`http://localhost:8000/api/producto_servicios?producto=${itemOrden.id_producto}`);
                let serviciosAPI = [];
                if (responseServicios.ok) {
                    serviciosAPI = await responseServicios.json();
                }
                
                // Transformar servicios
                const serviciosAdaptados = {};
                for (const servicioRel of serviciosAPI) {
                    const responseServicio = await fetch(`http://localhost:8000/api/servicios/${servicioRel.id_servicio}`);
                    if (responseServicio.ok) {
                        const servicio = await responseServicio.json();
                        serviciosAdaptados[servicio.nombre] = "Sí";
                        
                        if (servicio.nombre === "Pintura" && servicioRel.color) {
                            serviciosAdaptados.Color = servicioRel.color;
                        }
                    }
                }
                
                // Transformar componentes al formato exacto que espera el PDF
                const componentesTransformados = {};
                
                // Tablas superiores (TS)
                componentesTransformados.componenteTS = componentesAPI
                    .filter(c => c.tipo === 'TS')
                    .map(comp => ({
                        cantidad_TS: comp.cantidad,
                        largo_TS: comp.largo,
                        ancho_TS: comp.ancho,
                        grosor_TS: comp.grosor,
                        tolerancia_TS: comp.tolerancia,
                        separacion_TS: comp.separacion_TS,
                        material_TS: comp.tipo_madera || 'Pino'
                    }));
                
                // Tablas inferiores (TI)
                componentesTransformados.componenteTI = componentesAPI
                    .filter(c => c.tipo === 'TI')
                    .map(comp => ({
                        cantidad_TI: comp.cantidad,
                        largo_TI: comp.largo,
                        ancho_TI: comp.ancho,
                        grosor_TI: comp.grosor,
                        tolerancia_TI: comp.tolerancia,
                        material_TI: comp.tipo_madera || 'Pino'
                    }));
                
                // Componentes específicos según subtipo
                if (productoAPI.subtipo === 'Barrote') {
                    const barrote = componentesAPI.find(c => c.tipo === 'B');
                    if (barrote) {
                        componentesTransformados.componenteB = {
                            cantidad_B: barrote.cantidad,
                            largo_B: barrote.largo,
                            ancho_B: barrote.ancho,
                            grosor_B: barrote.grosor,
                            tolerancia_B: barrote.tolerancia,
                            material_B: barrote.tipo_madera || 'Pino',
                            tipo_B: barrote.tipo_B,
                            dist_B: barrote.distancia_B
                        };
                    }
                } else if (productoAPI.subtipo === 'Tacón') {
                    // Tacón lateral (TAL)
                    const tal = componentesAPI.find(c => c.tipo === 'TAL');
                    if (tal) {
                        componentesTransformados.componenteTAL = {
                            cantidad_TAL: tal.cantidad,
                            largo_TAL: tal.largo,
                            ancho_TAL: tal.ancho,
                            grosor_TAL: tal.grosor,
                            tolerancia_TA: tal.tolerancia,
                            material_TA: tal.tipo_madera || 'Pino'
                        };
                    }
                    
                    // Tacón central (TAC)
                    const tac = componentesAPI.find(c => c.tipo === 'TAC');
                    if (tac) {
                        componentesTransformados.componenteTAC = {
                            cantidad_TAC: tac.cantidad,
                            largo_TAC: tac.largo,
                            ancho_TAC: tac.ancho,
                            grosor_TAC: tac.grosor,
                            tolerancia_TA: tac.tolerancia,
                            material_TA: tac.tipo_madera || 'Pino'
                        };
                    }
                    
                    // Tabla de carga (TC)
                    const tc = componentesAPI.find(c => c.tipo === 'TC');
                    if (tc) {
                        componentesTransformados.componenteTC = {
                            cantidad_TC: tc.cantidad,
                            largo_TC: tc.largo,
                            ancho_TC: tc.ancho,
                            grosor_TC: tc.grosor,
                            tolerancia_TC: tc.tolerancia,
                            material_TC: tc.tipo_madera || 'Pino'
                        };
                    }
                }
                
                // Buscar productos del localStorage
                const productoLocal = carritoLocal.find(item => 
                    item.id_producto == itemOrden.id_producto
                ) || carritoLocal.find(item => 
                    item.producto?.id_producto == itemOrden.id_producto
                );
                
                // Crear objeto con orden
                const productoAdaptado = {
                    producto: {
                        tipo: productoAPI.tipo,
                        subtipo: productoAPI.subtipo,
                        acomodo: productoAPI.acomodo,
                        largo_gral: productoAPI.largo_gral,
                        ancho_gral: productoAPI.ancho_gral,
                        grosor_gral: productoAPI.grosor_gral,
                        precio_unit: productoAPI.precio_unit,
                        cantidad: itemOrden.cantidad
                    },
                    servicios: serviciosAdaptados,
                    ...componentesTransformados,
                    imgPlano: productoLocal?.imgPlano || null
                };

                return productoAdaptado;
            })
        );
        
        // 6. Crear objeto orden compatible con PDF
        return {
            folio: `A-${ordenAPI.id_orden.toString().padStart(5, '0')}`,
            cliente: {
                razonSocial: clienteAPI.razon_social,
                rfc: clienteAPI.rfc,
                nombre: clienteAPI.nombre,
                direccion: clienteAPI.direccion,
                codigoPostal: clienteAPI.codigo_postal,
                numero: clienteAPI.numero_telefono,
                correo: clienteAPI.correo,
                destino: clienteAPI.destino
            },
            productos: carritoAdaptado,
            fechaCreacion: ordenAPI.fecha_creacion,
            totalEstimado: ordenAPI.total_estimado
        };
        
    } catch (error) {
        console.error('Error adaptando datos para PDF:', error);
        throw new Error('No se pudo generar el PDF: ' + error.message);
    }
}