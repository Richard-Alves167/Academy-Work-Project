let secaoFreteGratis = document.getElementById("produtosFreteGratis")
let arrayFreteGratis = []

const armazenamentoFreteGratisItens = localStorage.getItem("produtosLocal")

if (armazenamentoFreteGratisItens != null) {
    arrayFreteGratis = JSON.parse(armazenamentoFreteGratisItens)
}

const arraySecaoFreteGratis = arrayFreteGratis.filter((object) => 
    object.localidade == "Nacional"
)

console.log(arraySecaoFreteGratis)

function rederizarSecaoFreteGratis() {
    secaoFreteGratis.innerHTML = ""

    arraySecaoFreteGratis.forEach(object => {
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
        secaoFreteGratis.appendChild(novoCard)
    });
}

rederizarSecaoFreteGratis()