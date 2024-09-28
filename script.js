document.addEventListener("DOMContentLoaded", function() {
    const premiosClickButtons = document.querySelectorAll(".premios-click button");
    const secaoGanhou = document.querySelector(".ganhou");
    const secaoIndicacoes = document.querySelector(".indicacoes");
    const botaoIni = document.getElementById("gan")

    secaoIndicacoes.style.display = "none";
    botaoIni.classList.add("inferior");

    premiosClickButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.id === "gan") {
                secaoGanhou.style.display = "block";
                secaoIndicacoes.style.display = "none";
                button.classList.add("inferior");
                document.getElementById("con").classList.remove("inferior");
            } else if (button.id === "con") {
                secaoIndicacoes.style.display = "block";
                secaoGanhou.style.display = "none";
                button.classList.add("inferior");
                document.getElementById("gan").classList.remove("inferior");
            }
        });
    });

    const divsPremios = document.querySelectorAll(".ganhou div, .indicacoes div");
    divsPremios.forEach(div => {
        const expandButton = div.querySelector("button");
        const h4Element = div.querySelector("h4");

        h4Element.style.height = "0";
        h4Element.style.overflow = "hidden";
        h4Element.style.transition = "height 0.5s ease";

        expandButton.addEventListener("click", () => {
            if (h4Element.style.height === "0px") {
                h4Element.style.height = "150px";
            } else {
                h4Element.style.height = "0";
            }
        });
    });
});
