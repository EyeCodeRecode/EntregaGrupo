const btnEntrar = document.querySelector("#entrar");
const btnRegistrar = document.querySelector("#registrar");

const corpo = document.querySelector("body");

btnEntrar.addEventListener("click", function () {
    corpo.className = "sign-in-js";
});

btnRegistrar.addEventListener("click", function () {
    corpo.className = "sign-up-js";
});