
/* JS ProgresBar*/

var container = document.getElementById('container');
var body = document.getElementById('hidden');

var dashboar = document.getElementById('dashboar');

dashboar.classList.add('dashboarClear');

setTimeout(function() {
    container.classList.add('cerrar');
    body.classList.remove('hidden');
    dashboar.classList.remove('dashboarClear');
}, 4000)