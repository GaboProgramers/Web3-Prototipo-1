addEventListener('DOMContentLoaded', () => {
    const botonArriba = document.querySelector('#ir-arriba')
    const barraIndicador = document.querySelector('.indicador__scroll')

    const obtenerPixeles = () => document.documentElement.scrollTop || document.body.scrollTop

    const irArriba = () => {
        if (obtenerPixeles() > 0 ) {
            scrollTo(0,0)
        }
    }

    const indicarScroll = () => {
        if (obtenerPixeles() > 50) {
            botonArriba.className = 'mostrar'
        } else {
            botonArriba.className = 'ocultar'
        }

        let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight
        let avanceScroll = (obtenerPixeles() / alto) * 100

        barraIndicador.style.width = `${avanceScroll}%`
    }

    botonArriba.addEventListener('click', irArriba)
    window.addEventListener('scroll', indicarScroll)
});