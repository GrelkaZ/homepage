{
    const welcome = () => {
        console.log("Cześć!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const background = document.querySelector(".js-sectionBackground");

        body.classList.toggle("color");
        switch (body) {
            case body.classList.contains("color"): background.inneText = "jasny"
                break;
            case body.classList.contains("js-body"): background.innerText = "zgniłoróżowy"
                break;
        }
    }

    const init = () => {
        const button = document.querySelector(".js-sectionButton");
        button.addEventListener("click", toggleBackground);

        welcome();
    }

    init();
}