console.log('holaaa');

var formulario = document.getElementById('contact');

document.getElementById('contact-submit').addEventListener('click',envar);
document.getElementById('borrar').addEventListener('click',borrar)
document.getElementById('actu').addEventListener('click',actua)


function envar(){
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

  console.log('vamos a enviar a la base de datos');
  fetch('/basedatos/insertarpaciente', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

/*--------------- borrar ---------------------------*/


function borrar (){
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
};


/*------------------ Actualizar ----------------*/

function actua(){
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
};


/*----------------consultar-------------------------*/


function genera_filas(datos) {

  var row=document.getElementById("cuerpotabla");
  var filas = "";
  for(var i=0;i<datos.length;i++){
      filas += "<tr>";
      filas += "<td>" + datos[i].id + "</td>";
      filas += "<td>" + datos[i].nombre + "</td>";
      filas += "<td>" + datos[i].apellido + "</td>";
      filas += "<td>" + datos[i].numid + "</td>";
      filas += "</tr>";
  }
  row.innerHTML=filas;
}


function cargartabla(){

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