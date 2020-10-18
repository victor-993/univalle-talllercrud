console.log('holaaa');

/*----------------consultar-------------------------*/


function filitas(datos) {

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
  headers: myHeaders

}


fetch('/basedatos/consultatotalpacientes', options)
  .then((res) => res.json())
  .then((data) => {
    console.log(data[0].id)
    filitas(data);
  });
};

window.onload = cargartabla;