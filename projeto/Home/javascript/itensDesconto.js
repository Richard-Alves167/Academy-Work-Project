let secaoDesconto = document.getElementById("produtosDesconto")
let arrayDesconto = []

const armazenamentoDescontoItens = localStorage.getItem("produtosLocal")

if (armazenamentoDescontoItens != null) {
    arrayDesconto = JSON.parse(armazenamentoDescontoItens)
}

const min = 0
const max = arrayDesconto.length - 1

const desconto1 = Math.floor(Math.random() * (max - min) + min)
const desconto2 = Math.floor(Math.random() * (max - min) + min)
const desconto3 = Math.floor(Math.random() * (max - min) + min)
const desconto4 = Math.floor(Math.random() * (max - min) + min)

function desconto(array) {
    const arrayNumerosTirados = []
    for (let i = 0; i < array.length - 1; i++) {
        if (i == desconto1 || i == desconto2 || i == desconto3 || i == desconto4)  {
            arrayNumerosTirados.push(array[i])
        }
    }
    return arrayNumerosTirados
}

const arraySecaoDescontos = desconto(arrayDesconto)

console.log(arrayDesconto)

function rederizarSecaoDesconto() {
    secaoDesconto.innerHTML = ""

    arraySecaoDescontos.forEach(object => {
        let novoCard = document.createElement("li")
        novoCard.classList.add("card")
    
        novoCard.innerHTML = `
        <a href="./telaDoProduto.html?mostrarProduto=${object.nome}">
            <div class="itens_cadastrados" onclick="adicionarCarrinho(${arrayDesconto.indexOf(object)})">
                <img class="iten_imagem" src="${object.imagem}">
                <div class="iten_nome">${object.nome}</div>
                <div class="iten_preco"><div class="iten_preco_desconto">
                <div class="desconto"><span class="cifrao">R$</span>${object.preco}</div>
                <div><span class="cifrao">R$</span>${Math.floor(object.preco-object.preco*0.20)}</div>
                </div>
                </div>
            </div>
            <button class="verProduto">Ver Produto</button>
            <div class="trianguloDesconto"></div>
            <div class="textoDesconto">-20%</div>
        </a>
        `
        secaoDesconto.appendChild(novoCard)
    });
}

rederizarSecaoDesconto()