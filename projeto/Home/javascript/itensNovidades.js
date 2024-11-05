let secaoNovidades = document.getElementById("produtosNovidades")
let arrayNovidades = []

const armazenamentoNovidadesItens = localStorage.getItem("produtosLocal")

if (armazenamentoNovidadesItens != null) {
    arrayNovidades = JSON.parse(armazenamentoNovidadesItens)
}

function rederizarSecaoNovidades() {
    secaoNovidades.innerHTML = ""

    arrayNovidades.forEach(object => {
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
        secaoNovidades.appendChild(novoCard)
    });
}

rederizarSecaoNovidades()