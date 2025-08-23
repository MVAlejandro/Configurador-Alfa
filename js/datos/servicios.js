
export function serviciosData() {
    // Obtener los datos de las tablas dependiendo el tipo de tarima
    // Función auxiliar para capturar el valor de los radios
    function capturarValorRadio(nombreGrupo) {
        const radios = document.querySelectorAll(`input[name="${nombreGrupo}"]`);
        for (let radio of radios) {
            if (radio.checked) {
                return radio.id;  // Retorna el id del radio seleccionado
            }
        }
    };
    // Crear un arreglo para los valores seleccionados
    let servicios = {};

    // Captura los valores de los radios de servicios
        const pinturaSeleccionada = capturarValorRadio("pintura");
        if (tipo === 'Nueva') {
            servicios = {
                Armado: capturarValorRadio("armado") === "armado1" ? "Sí" : "No",
                HT: capturarValorRadio("HT") === "HT1" ? "Sí" : "No",
                Pintura: capturarValorRadio("pintura") === "pintura1" ? "Sí" : "No",
                Fumigacion: capturarValorRadio("fumigacion") === "fumigacion1" ? "Sí" : "No",
                Transporte: capturarValorRadio("transporte") === "transporte1" ? "Sí" : "No"
            };
        } else {
            servicios = {
                Reparado: capturarValorRadio("reparado") === "reparado1" ? "Sí" : "No",
                Armado: capturarValorRadio("armado") === "armado1" ? "Sí" : "No",
                HT: capturarValorRadio("HT") === "HT1" ? "Sí" : "No",
                Pintura: capturarValorRadio("pintura") === "pintura1" ? "Sí" : "No",
                Fumigacion: capturarValorRadio("fumigacion") === "fumigacion1" ? "Sí" : "No",
                Transporte: capturarValorRadio("transporte") === "transporte1" ? "Sí" : "No"
            };
        }
        // Añadir el color de pintura si la opción es "Sí"
        if (pinturaSeleccionada === "pintura1") {
            const colorIn = document.getElementById("color");
            servicios.Color = colorIn.value;
        }
        
    return servicios;
}