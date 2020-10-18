console.log('holaaa');

var formulario = document.getElementById('contact');

/*--------------- borrar ---------------------------*/

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  let datos = new FormData(formulario);
  let idpaciente = datos.get('identificacion');

  let myHeaders = new Headers();

  const options = {
    method: 'DELETE',
    headers: myHeaders,
    body: new URLSearchParams({
      'numid': idpaciente
    }),
  }


  fetch('/basedatos/eliminarpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

