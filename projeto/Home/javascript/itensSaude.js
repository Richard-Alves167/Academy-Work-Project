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
        novoCard.classList.add("card")

        novoCard.innerHTML = `
            <div class="itens_cadastrados" onclick="adicionarCarrinho(${arraySaude.indexOf(object)})">
                <img class="iten_imagem" src="${object.imagem}">
                <div class="iten_nome">${object.nome}</div>
                <div class="iten_preco">
                <span class="cifrao">R$</span>${object.preco}
                </div>
            </div>
            <button class="botaoAdicionarCarrinho">+<img src="./imagens/carrinhoCompras.png">Adicionar ao Carrinho</button>
        `
        secaoSaude.appendChild(novoCard)
    });
}

rederizarSecaoSaude()
