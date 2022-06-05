const movilElement = document.getElementById("movilFlags");

const textosToCharge = document.querySelectorAll("[data-section]");


const cargarLenguaje = async (language) => {
    const cargarJson = await fetch(`./lenguajes/${language}.json`);
    const textos = await cargarJson.json();

    for( const textoToCharge of textosToCharge) {
        const section = textoToCharge.dataset.section;
        const value = textoToCharge.dataset.value;

        textoToCharge.innerHTML = textos[section][value];
    }
};

movilElement.addEventListener('click', (e) => {
    cargarLenguaje(e.target.parentElement.dataset.language);
});