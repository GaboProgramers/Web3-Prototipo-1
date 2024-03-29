/* navegacion interna */

const navToggle = document.querySelector('.navToggle');
const listaInterna = document.querySelector('.lista-interna');
const conjuntoDesplegable = document.querySelector('.conjunto-desplegable');


navToggle.addEventListener('click', () => {
  listaInterna.classList.toggle('active');
});

conjuntoDesplegable.addEventListener('click', e => {

  let clickedElm = e.target;

  if(!clickedElm.classList.contains('navToggle') && !clickedElm.classList.contains('.lista-interna')){
      listaInterna.classList.remove('active')
  }
});

const icon = document.querySelector('.desplegable');

icon.addEventListener('click', function() {
  const icono = this.querySelector('i');

  if (this.querySelector('i').classList.contains('bx-menu')){
    icono.classList.remove('bx-menu');
    icono.classList.add('bx-x');
  } else {
    icono.classList.remove('bx-x');
    icono.classList.add('bx-menu');
   }
})


/* swetAlert */

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
        title: 'Ganaste - 150 WWC'
      })
});

//seccion ocultar mostrar

let button = document.getElementById('btn');
let textOcultar = document.getElementById('hideText');

button.addEventListener('click', toggleText);

function toggleText() {
  textOcultar.classList.toggle('show');

  if(textOcultar.classList.contains('show')) {
    function tiempoEspera() {
      textOcultar.innerHTML = 'Reclamo Exitoso Vuelve En 60min'
    }
  }

  setTimeout(tiempoEspera, 1);

  if(textOcultar.classList.contains('show')) {
    button.innerHTML = 'Ganaste';
  }
  else {
    button.innerHTML = 'Roll Now'
  }
}

// seccion hora y fecha

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