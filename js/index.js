
// Crear evento al dar click al botón Siguiente
document.getElementById('btn-sig').addEventListener('click', function() {
  // Crear un objeto con todos los datos del formulario
  const formData = {
    estado: document.getElementById('estado').value,
    tipo: document.getElementById('tipo').value,
    cantidadTS: document.getElementById('cantidadTS').value,
    largoTS: document.getElementById('largoTS').value,
    anchoTS: document.getElementById('anchoTS').value,
    grosorTS: document.getElementById('grosorTS').value,
    cantidadTI: document.getElementById('cantidadTI').value,
    largoTI: document.getElementById('largoTI').value,
    anchoTI: document.getElementById('anchoTI').value,
    grosorTI: document.getElementById('grosorTI').value,
    cantidadTAG: document.getElementById('cantidadTAG').value,
    largoTAG: document.getElementById('largoTAG').value,
    anchoTAG: document.getElementById('anchoTAG').value,
    grosorTAG: document.getElementById('grosorTAG').value,
    cantidadTAC: document.getElementById('cantidadTAC').value,
    largoTAC: document.getElementById('largoTAC').value,
    anchoTAC: document.getElementById('anchoTAC').value,
    grosorTAC: document.getElementById('grosorTAC').value,
    cantidadTC: document.getElementById('cantidadTC').value,
    largoTC: document.getElementById('largoTC').value,
    anchoTC: document.getElementById('anchoTC').value,
    grosorTC: document.getElementById('grosorTC').value
  };

  // Convertir JSON a string
  const formDataJSON = JSON.stringify(formData);

  // Guardar JSON en el localStorage
  localStorage.setItem('formData', formDataJSON);

  // Redirigir a la página del resumen
  window.location.href = './resume.html';
});

