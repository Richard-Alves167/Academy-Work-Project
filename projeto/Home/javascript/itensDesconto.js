let secaoDesconto = document.getElementById("produtosDesconto")
let arrayDesconto = []

const armazenamentoDescontoItens = localStorage.getItem("produtosLocal")

if (armazenamentoDescontoItens != null) {
    arrayDesconto = JSON.parse(armazenamentoDescontoItens)
}

function rederizarSecaoDesconto() {
    secaoDesconto.innerHTML = ""

    arrayDesconto.forEach(object => {
        let novoCard = document.createElement("li")
    
        novoCard.innerHTML = `
        <li class="card">
        <div class="itens_cadastrados">
        <img class="iten_imagem" src="${object.imagem}">
        <div class="iten_nome">${object.nome}</div>
        <div class="iten_preco">
        <span class="cifrao">R$</span>${object.preco}
        </div>
        </div>
        </li>
        `
        secaoDesconto.appendChild(novoCard)
    });
}

rederizarSecaoDesconto()