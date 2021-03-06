console.log('holaaa');

var formulario = document.getElementById('contact');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('me diste un click');
  let datos = new FormData(formulario);
  let nombrepaciente = datos.get('nombre');
  let apellidopaciente = datos.get('apellido');
  let idpaciente = datos.get('identificacion');

  let myHeaders = new Headers();

  const options = {
    method: 'POST',
    headers: myHeaders,
    body: new URLSearchParams({
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente
    }),
  }


  fetch('/basedatos/insertarpaciente', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

/*--------------- borrar ---------------------------*/
/*
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


/*------------------ Actualizar ----------------*/
/*

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  let datos = new FormData(formulario);
  let nombrepaciente = datos.get('nombre');
  let apellidopaciente = datos.get('apellido');
  let idpaciente = datos.get('identificacion');
  let id = datos.get('id');

  let myHeaders = new Headers();

  const options = {
    method: 'PUT',
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


/*----------------consultar-------------------------*/


function genera_filas(x) {

  var row = document.getElementById("cuerpotabla");
  var filas = "";
  for (var i = 0; i < x.length; i++) {
    filas += "<tr>";
    filas += "<td>" + x[i].id + "</td>";
    filas += "<td>" + x[i].nombre + "</td>";
    filas += "<td>" + x[i].apellido + "</td>";
    filas += "<td>" + x[i].numid + "</td>";
    filas += "</tr>";
  }
  row.innerHTML = filas;
}


function cargartabla() {

  let myHeaders = new Headers();

  const options = {
    method: 'GET',
    headers: myHeaders,

  }


  fetch('/basedatos/consultatotalpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      genera_filas(data);
    });
};

window.onload = cargartabla;