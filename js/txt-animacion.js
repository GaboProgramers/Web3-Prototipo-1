const text = document.querySelector(".segundo-texto");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Youtuber";
            }, 0);
            setTimeout(() => {
                text.textContent = "Programador";
            }, 4000);
            setTimeout(() => {
                text.textContent = "CreadorNFT";
            }, 8000); //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 12000);