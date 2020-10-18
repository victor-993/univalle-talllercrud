console.log('holaaa');

var formulario = document.getElementById('contact');

/*------------------ Actualizar ----------------*/

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  let datos = new FormData(formulario);
  let nombrepaciente = datos.get('nombre');
  let apellidopaciente = datos.get('apellido');
  let idpaciente = datos.get('identificacion');
  let id = datos.get('id');

  let myHeaders = new Headers();

  const options = {
    method: 'POST',
    headers: myHeaders,
    body: new URLSearchParams({
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente,
      'id': id
    }),
  }
  

  fetch('/basedatos/actualizarpaciente', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

