
// Función adaptadora para convertir datos API a formato del modal
export async function abrirModalDesdeAPI(productoId, cantidadActual) {
    try {
        // Obtener datos completos desde API
        const [producto, componentes, serviciosAPI] = await Promise.all([
            fetch(`http://localhost:8000/api/productos/${productoId}`).then(r => r.json()),
            fetch(`http://localhost:8000/api/componentes?producto=${productoId}`).then(r => r.json()),
            fetch(`http://localhost:8000/api/producto_servicios?producto=${productoId}`).then(r => r.json())
        ]);

        // Transformar servicios
        const serviciosData = {};
        for (const servicioRel of serviciosAPI) {
            const servicioResponse = await fetch(`http://localhost:8000/api/servicios/${servicioRel.id_servicio}`);
            if (servicioResponse.ok) {
                const servicio = await servicioResponse.json();
                serviciosData[servicio.nombre] = "Sí";
                
                if (servicio.nombre === "Pintura" && servicioRel.color) {
                    serviciosData.Color = servicioRel.color;
                }
            }
        }

        // Transformar componentes al formato que espera el modal
        const componentesTransformados = {
            componenteTS: componentes.filter(c => c.tipo === 'TS').map(comp => ({
                cantidad_TS: comp.cantidad,
                largo_TS: comp.largo,
                ancho_TS: comp.ancho,
                grosor_TS: comp.grosor,
                tolerancia_TS: comp.tolerancia,
                separacion_TS: comp.separacion_TS,
                material_TS: comp.costo?.tipo_madera || 'Pino'
            })),
            
            componenteTI: componentes.filter(c => c.tipo === 'TI').map(comp => ({
                cantidad_TI: comp.cantidad,
                largo_TI: comp.largo,
                ancho_TI: comp.ancho,
                grosor_TI: comp.grosor,
                tolerancia_TI: comp.tolerancia,
                material_TI: comp.costo?.tipo_madera || 'Pino'
            }))
        };

        // Agregar componentes específicos según subtipo
        if (producto.subtipo === 'Barrote') {
            // Barrote
            const barrote = componentes.find(c => c.tipo === 'B');
            if (barrote) {
                componentesTransformados.componenteB = {
                    cantidad_B: barrote.cantidad,
                    largo_B: barrote.largo,
                    ancho_B: barrote.ancho,
                    grosor_B: barrote.grosor,
                    tolerancia_B: barrote.tolerancia,
                    material_B: barrote.costo?.tipo_madera || 'Pino',
                    tipo_B: barrote.tipo_B,
                    dist_B: barrote.distancia_B
                };
            }
        } else if (producto.subtipo === 'Tacón') {
            // Tacón lateral
            const tal = componentes.find(c => c.tipo === 'TAL');
            if (tal) {
                componentesTransformados.componenteTAL = {
                    cantidad_TAL: tal.cantidad,
                    largo_TAL: tal.largo,
                    ancho_TAL: tal.ancho,
                    grosor_TAL: tal.grosor,
                    tolerancia_TA: tal.tolerancia,
                    material_TA: tal.costo?.tipo_madera || 'Pino'
                };
            }
            
            // Tacón central
            const tac = componentes.find(c => c.tipo === 'TAC');
            if (tac) {
                componentesTransformados.componenteTAC = {
                    cantidad_TAC: tac.cantidad,
                    largo_TAC: tac.largo,
                    ancho_TAC: tac.ancho,
                    grosor_TAC: tac.grosor,
                    tolerancia_TA: tac.tolerancia,
                    material_TA: tac.costo?.tipo_madera || 'Pino'
                };
            }
            
            // Tabla de carga
            const tc = componentes.find(c => c.tipo === 'TC');
            if (tc) {
                componentesTransformados.componenteTC = {
                    cantidad_TC: tc.cantidad,
                    largo_TC: tc.largo,
                    ancho_TC: tc.ancho,
                    grosor_TC: tc.grosor,
                    tolerancia_TC: tc.tolerancia,
                    material_TC: tc.costo?.tipo_madera || 'Pino'
                };
            }
        }

        // Crear objeto formData compatible con el modal
        const formDataParaModal = {
            producto: {
                tipo: producto.tipo,
                subtipo: producto.subtipo,
                acomodo: producto.acomodo,
                largo_gral: producto.largo_gral,
                ancho_gral: producto.ancho_gral,
                grosor_gral: producto.grosor_gral,
                precio_unit: producto.precio_unit,
                cantidad: cantidadActual
            },
            servicios: serviciosData,
            ...componentesTransformados
        };

        // Llamar a la función del modal
        abrirModalItem(formDataParaModal);

    } catch (error) {
        console.error('Error al cargar modal:', error);
        alert('Error al cargar los detalles del producto');
    }
}