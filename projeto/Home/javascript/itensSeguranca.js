let secaoSeguranca = document.getElementById("produtosSeguranca")
let arraySeguranca = []

const armazenamentoSegurancaItens = localStorage.getItem("produtosLocal")

if (armazenamentoSegurancaItens != null) {
    arraySeguranca = JSON.parse(armazenamentoSegurancaItens)
}

const arraySecaoSeguranca = arraySeguranca.filter((object) => 
    object.tipoDeArtigo == "Segurança"
)

console.log(arraySecaoSeguranca)

function rederizarSecaoSeguranca() {
    secaoSeguranca.innerHTML = ""

    arraySecaoSeguranca.forEach(object => {
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
            <button class="botaoAdicionarCarrinho" onclick="adicionarCarrinho(${arraySeguranca.indexOf(object)})">+<img src="./imagens/carrinhoCompras.png"></button>
        `
        secaoSeguranca.appendChild(novoCard)
    });
}

rederizarSecaoSeguranca()