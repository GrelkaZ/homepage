console.log("Cześć!");

let button = document.querySelector(".js-header__button");
let body = document.querySelector(".body");
let background = document.querySelector(".js-header__background");


button.addEventListener("click", () => {
    body.classList.toggle("color");
    if (body.classList.contains("color")) {
        background.innerText = "jasny";
    }
    else {
        background.innerText = "zgniłoróżowy";
    }
});