const flagsElement = document.getElementById("flags");

const textsToCharge = document.querySelectorAll("[data-section]");


const chargeLenguaje = async (language) => {
    const requestJson = await fetch(`./lenguajes/${language}.json`);
    const texts = await requestJson.json();

    for( const textToCharge of textsToCharge) {
        const section = textToCharge.dataset.section;
        const value = textToCharge.dataset.value;

        textToCharge.innerHTML = texts[section][value];
    }
};

flagsElement.addEventListener('click', (e) => {
    chargeLenguaje(e.target.parentElement.dataset.language);
});