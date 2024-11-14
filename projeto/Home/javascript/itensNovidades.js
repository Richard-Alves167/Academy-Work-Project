let secaoNovidades = document.getElementById("produtosNovidades")
let arrayNovidades = []

const armazenamentoNovidadesItens = localStorage.getItem("produtosLocal")

if (armazenamentoNovidadesItens != null) {
    arrayNovidades = JSON.parse(armazenamentoNovidadesItens)
}

function produtosNovos(array) {
    let arrayDeItensNovos = []
    for (let i = 0; i < array.length - 1; i++) {
       if (i>array.length - 7) {
         arrayDeItensNovos.push(array[i])
       } 
    }
    return arrayDeItensNovos
}
const arraySecaoNovidades = produtosNovos(arrayNovidades)

console.log(arraySecaoNovidades)

function rederizarSecaoNovidades() {
    secaoNovidades.innerHTML = ""

    arraySecaoNovidades.forEach(object => {
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
            <button class="botaoAdicionarCarrinho" onclick="adicionarCarrinho(${arrayNovidades.indexOf(object)})">+<img src="./imagens/carrinhoCompras.png"></button>
        `
        secaoNovidades.appendChild(novoCard)
    });
}

rederizarSecaoNovidades()