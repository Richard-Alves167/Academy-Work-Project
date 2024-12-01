let lista = document.getElementById("itens_cadastrados")     
let produtos = []

const armazenamentoCadastro = localStorage.getItem("produtosLocal")

if (armazenamentoCadastro !== null) {
    produtos = JSON.parse(armazenamentoCadastro)
}

function rederizarProdutos() {
    lista.innerHTML = ""

    produtos.forEach(object => {
        let novoCard = document.createElement("li")
        novoCard.classList.add("card")
        
        novoCard.innerHTML = `
        <a href="./telaDoProduto.html?mostrarProduto=${object.nome}">
            <div class="itens_cadastrados">
            <img class="iten_imagem" src="${object.imagem}">
            <div class="iten_nome">${object.nome}</div>
            <div class="iten_preco">
            <span class="cifrao">R$</span>${object.preco}
            </div>
        </div>
        <button class="verProduto">+<img src="./imagens/carrinhoCompras.png">Adicionar ao Carrinho</button>
        </a>
        `
        lista.appendChild(novoCard)
    });
}

rederizarProdutos()

//entretenimento

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
    lista.innerHTML = ""

    arraySecaoEntretenimento.forEach(object => {
        let novoCard = document.createElement("li")
        novoCard.classList.add("card")
    
        novoCard.innerHTML = `
        <a href="./telaDoProduto.html?mostrarProduto=${object.nome}">
            <div class="itens_cadastrados">
                <img class="iten_imagem" src="${object.imagem}">
                <div class="iten_nome">${object.nome}</div>
                <div class="iten_preco">
                <span class="cifrao">R$</span>${object.preco}
                </div>
            </div>
            <button class="verProduto" onclick="adicionarCarrinho(${arrayEntretenimento.indexOf(object)})">+<img src="./imagens/carrinhoCompras.png"></button>
        </a>
        `
        lista.appendChild(novoCard)
    });
}

//nacional

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
    lista.innerHTML = ""

    arraySecaoFreteGratis.forEach(object => {
        let novoCard = document.createElement("li")
        novoCard.classList.add("card")

        novoCard.innerHTML = `
        <a href="./telaDoProduto.html?mostrarProduto=${object.nome}">
            <div class="itens_cadastrados">
                <img class="iten_imagem" src="${object.imagem}">
                <div class="iten_nome">${object.nome}</div>
                <div class="iten_preco">
                <span class="cifrao">R$</span>${object.preco}
                </div>
            </div>
            <button class="verProduto" onclick="adicionarCarrinho(${arrayFreteGratis.indexOf(object)})">+<img src="./imagens/carrinhoCompras.png"></button>
        </a>
        `
        lista.appendChild(novoCard)
    });
}

//saude

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
    lista.innerHTML = ""

    arraySecaoSaude.forEach(object => {
        let novoCard = document.createElement("li")
        novoCard.classList.add("card")

        novoCard.innerHTML = `
        <a href="./telaDoProduto.html?mostrarProduto=${object.nome}">
            <div class="itens_cadastrados">
                <img class="iten_imagem" src="${object.imagem}">
                <div class="iten_nome">${object.nome}</div>
                <div class="iten_preco">
                <span class="cifrao">R$</span>${object.preco}
                </div>
            </div>
            <button class="verProduto" onclick="adicionarCarrinho(${arraySaude.indexOf(object)})">+<img src="./imagens/carrinhoCompras.png"></button>
        </a>
        `
        lista.appendChild(novoCard)
    });
}

//segurança

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
    lista.innerHTML = ""

    arraySecaoSeguranca.forEach(object => {
        let novoCard = document.createElement("li")
        novoCard.classList.add("card")

        novoCard.innerHTML = `
        <a href="./telaDoProduto.html?mostrarProduto=${object.nome}">
            <div class="itens_cadastrados">
                <img class="iten_imagem" src="${object.imagem}">
                <div class="iten_nome">${object.nome}</div>
                <div class="iten_preco">
                <span class="cifrao">R$</span>${object.preco}
                </div>
            </div>
            <button class="verProduto">Ver Produto</button>
        </a>
        `
        lista.appendChild(novoCard)
    });
}