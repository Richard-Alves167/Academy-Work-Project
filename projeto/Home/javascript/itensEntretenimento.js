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
        secaoEntretenimento.appendChild(novoCard)
    });
}

rederizarSecaoEntretenimento()