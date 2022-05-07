const acordionContenedor = document.querySelectorAll(".acordion__contenedor");

acordionContenedor.forEach((item, index) => {
    let header = item.querySelector('header');
    header.addEventListener("click", () => {
        item.classList.toggle('open');

        let descripcion = item.querySelector('.descripcion__acordion');
        if (item.classList.contains('open')) {
            descripcion.style.height = `${descripcion.scrollHeight}px`;
            item.querySelector('i').classList.replace('fa-plus', 'fa-minus'); 
        }else {
            descripcion.style.height = '0px';
            item.querySelector('i').classList.replace('fa-minus', 'fa-plus');
        }

        removeOpen(index);

    })
})

function removeOpen (index1) {
    acordionContenedor.forEach((item2, index2) => {
        if (index1 != index2) {
            item2.classList.remove('open');

            let des = item2.querySelector('.descripcion__acordion');
            des.style.height = '0px';
            item2.querySelector('i').classList.replace('fa-minus', 'fa-plus');
        }
    })
}