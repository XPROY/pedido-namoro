
// =====================================
// SELECIONANDO OS ELEMENTOS DO HTML
// =====================================

const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");
const mensagem = document.getElementById("mensagem");
const areaBotoes = document.querySelector(".botoes");

// =====================================
// FUNÇÃO PARA FAZER O BOTÃO NÃO FUGIR
// =====================================

function fugir() {

    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;

    const larguraBotao = botaoNao.offsetWidth;
    const alturaBotao = botaoNao.offsetHeight;

    const maxX = Math.max(0, larguraTela - larguraBotao);
    const maxY = Math.max(0, alturaTela - alturaBotao);

    const posicaoX = Math.random() * maxX;
    const posicaoY = Math.random() * maxY;

    botaoNao.style.position = "fixed";

    botaoNao.style.left = posicaoX + "px";

    botaoNao.style.top = posicaoY + "px";

    botaoNao.style.zIndex = "1000";
}

// =====================================
// EVENTO DO BOTÃO NÃO
// =====================================

botaoNao.addEventListener("mouseenter", fugir);

botaoNao.addEventListener("touchstart", function(event) {

    event.preventDefault();

    fugir();

});

// =====================================
// EVENTO DO BOTÃO SIM
// =====================================

botaoSim.addEventListener("click", function() {

    mensagem.style.display = "block";

    areaBotoes.style.display = "none";

    document.querySelector("h1").innerText =
        "Você disse SIM! ❤️";

});
