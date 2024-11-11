let secaoNovidades = document.getElementById("produtosNovidades")
let arrayNovidades = []

const armazenamentoNovidadesItens = localStorage.getItem("produtosLocal")

if (armazenamentoNovidadesItens != null) {
    arrayNovidades = JSON.parse(armazenamentoNovidadesItens)
}

function produtosNovos(array) {
    let arrayDeItens = []
    for (let i = 0; i < array.length - 1; i++) {
       if (i>array.length - 7) {
         arrayDeItens.push(array[i])
       } 
    }
    return arrayDeItens
}
const arraySecaoNovidades = produtosNovos(arrayNovidades)

console.log(arraySecaoNovidades)

function rederizarSecaoNovidades() {
    secaoNovidades.innerHTML = ""

    arraySecaoNovidades.forEach(object => {
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