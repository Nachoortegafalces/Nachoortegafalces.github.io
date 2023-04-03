function enviarDatos() {
	// Obtener los valores del formulario
	const nombre = document.getElementById("nombre").value;
	const apellido = document.getElementById("apellido").value;
  
	// Crear un objeto con los valores del formulario
	const usuario = {nombre, apellido};
  
	// Realizar una solicitud POST a la función postTask en el controlador de Spring
	fetch('/usuarios', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(usuario)
	})
	.then(response => {
	  if (response.ok) {
		console.log('Datos enviados correctamente');
	  } else {
		console.error('Error al enviar datos');
	  }
	})
	.catch(error => {
	  console.error('Error al enviar datos', error);
	});
  }