{
    const welcome = () => {
        console.log("Cześć!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const background = document.querySelector(".js-header__background");

        body.classList.toggle("color");
        switch (body) {
            case body.classList.contains("color"): background.inneText = "jasny"
                break;
            case body.classList.contains("body"): background.innerText = "zgniłoróżowy"
                break;
        }
    }

    const init = () => {
        const button = document.querySelector(".js-header__button");
        button.addEventListener("click", toggleBackground);

        welcome();
    }

    init();
}