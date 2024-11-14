let secaoEntretenimento = document.getElementById("produtosEntretenimento")
let arrayEntretenimento = []

const armazenamentoEntretenimentoItens = localStorage.getItem("produtosLocal")

if (armazenamentoEntretenimentoItens != null) {
    arrayEntretenimento = JSON.parse(armazenamentoEntretenimentoItens)
}

const arraySecaoEntretenimento = arrayEntretenimento.filter((object) => 
    object.tipoDeArtigo == "Entretenimento"
)

function rederizarSecaoEntretenimento() {
    secaoEntretenimento.innerHTML = ""

    arraySecaoEntretenimento.forEach(object => {
        let novoCard = document.createElement("li")
        novoCard.classList.add("card")
    
        novoCard.innerHTML = `
            <div class="itens_cadastrados">
                <img class="iten_imagem" src="${object.imagem}">
                <div class="iten_nome">${object.nome}</div>
                <div class="iten_preco">
                <span class="cifrao">R$</span>${object.preco}
                </div>
            </div>
            <button class="botaoAdicionarCarrinho" onclick="adicionarCarrinho(${arrayEntretenimento.indexOf(object)})">+<img src="./imagens/carrinhoCompras.png"></button>
        `
        secaoEntretenimento.appendChild(novoCard)
    });
}

rederizarSecaoEntretenimento()