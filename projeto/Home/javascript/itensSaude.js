let secaoSaude = document.getElementById("produtosSaude")
let arraySaude = []

const armazenamentoSaudeItens = localStorage.getItem("produtosLocal")

if (armazenamentoSaudeItens != null) {
    arraySaude = JSON.parse(armazenamentoSaudeItens)
}

const arraySecaoSaude = arraySaude.filter((object) => 
    object.tipoDeArtigo == "Saúde"
)

console.log(arraySecaoSaude)

function rederizarSecaoSaude() {
    secaoSaude.innerHTML = ""

    arraySecaoSaude.forEach(object => {
        let novoCard = document.createElement("li")
    
        novoCard.innerHTML = `
        <li class="card">
        <button class="botaoAdicionarCarrinho">+<img src="./imagens/carrinhoCompras.png"></button>
        <div class="itens_cadastrados">
        <img class="iten_imagem" src="${object.imagem}">
        <div class="iten_nome">${object.nome}</div>
        <div class="iten_preco">
        <span class="cifrao">R$</span>${object.preco}
        </div>
        </div>
        </li>
        `
        secaoSaude.appendChild(novoCard)
    });
}

rederizarSecaoSaude()