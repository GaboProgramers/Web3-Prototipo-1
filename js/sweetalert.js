var btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Roll Seleccionado'
      })
})

// seccion prueba

/* let numero = 5;
function conteo(){
  console.log(`lanzamiento en ${numero}  segundos`);
  numero--;
  if (numero == -1){
    clearInterval(lanzamiento);
  }
}

let lanzamiento = setInterval(conteo, 1000); */

let fechaLocal = document.getElementById('fechaLocal');
let horaLocal = document.getElementById('hora');

let fecha = new Date();

let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

let mesAnyo = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',];

 fechaLocal.innerHTML = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} De ${mesAnyo[fecha.getMonth()]} De ${fecha.getFullYear()}`;



setInterval(() => {
  let hora = new Date();
  horaLocal.innerHTML = hora.toLocaleTimeString();
}, 1000);