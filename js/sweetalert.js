/* navegacion interna */

const body = document.querySelector("body"),
      nav = document.querySelector(".lista-interna"),
      sidebarOpen = document.querySelector(".desplegable"),
      siderbarClose = document.querySelector(".siderbarClose");
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains(".sidebarClose")){
        nav.classList.remove("active");
    }
});

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