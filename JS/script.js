{
    const welcome = () => {
        console.log("Cześć!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const background = document.querySelector(".js-header__background");

        body.classList.toggle("color");
        if (body.classList.contains("color")) {
            background.innerText = "jasny";
        }
        else {
            background.innerText = "zgniłoróżowy";
        }
    }

    const init = () => {
        const button = document.querySelector(".js-header__button");
        button.addEventListener("click", toggleBackground);

        welcome()
    }
}