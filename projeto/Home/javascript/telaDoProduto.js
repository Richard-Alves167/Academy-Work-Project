const stringURL = window.location.search;
const parametrosURL = new URLSearchParams(stringURL);

const produtoDaURL = parametrosURL.get("mostrarProduto")

const armazenamentoProdutosLoja = localStorage.getItem("produtosLocal")

if (armazenamentoProdutosLoja != null) {
    produtosLoja = JSON.parse(armazenamentoProdutosLoja)
}

const paginaDoProduto = produtosLoja.filter((object) => 
    object.nome == produtoDaURL
)

console.log(paginaDoProduto)

const nomeParagrafo = document.getElementById("nomeProduto")
const imagemArea = document.getElementById("imagemProduto")
const descricaoParagrafo = document.getElementById("descricaoProduto")
const precoParagrafo = document.getElementById("precoProduto")
const nacionalidadeParagrafo = document.getElementById("nacionalidadeProduto")
const puericulturaNivelParagrafo = document.getElementById("puericulturaNivelProduto")

function mostrarProduto(produto) {
    nomeParagrafo.textContent = produto.nome
    imagemArea.setAttribute("src", produto.imagem)
    descricaoParagrafo.textContent = produto.descricao
    precoParagrafo.textContent = "R$ " + produto.preco
    nacionalidadeParagrafo.textContent = "* " + produto.localidade

    if (produto.nivelPuericultura == "puericultura_nivel_1") {
        puericulturaNivelParagrafo.textContent = "* Recomendado para crianças de 1 à 5 anos"
    }
    if (produto.nivelPuericultura == "puericultura_nivel_2") {
        puericulturaNivelParagrafo.textContent = "* Recomendado para crianças acima de 5 anos"
    }
    if (produto.nivelPuericultura == "puericultura_nivel_3") {
        puericulturaNivelParagrafo.textContent = "* Recomendado para crianças acima de 12 anos"
    }
}

mostrarProduto(paginaDoProduto[0])

let carrinhoDeProdutosTelaProduto = [] 
let armazenamentoDeProdutosTelaProduto = []

const armazenamentoProdutosTelaProduto = localStorage.getItem("produtosLocal")
const armazenamentoCarrinhoDeProdutosTelaProduto = localStorage.getItem("carrinhoDeProdutosLocal")

if (armazenamentoCarrinhoDeProdutosTelaProduto !== null) {
    carrinhoDeProdutosTelaProduto = JSON.parse(armazenamentoCarrinhoDeProdutosTelaProduto)
}

if (armazenamentoProdutosTelaProduto !== null) {
    armazenamentoDeProdutosTelaProduto = JSON.parse(armazenamentoProdutosTelaProduto)
}

const numeroCarrinhoTelaProduto = document.getElementById("quantidadeCarrinho")
function quantidadeProdutosCarrinhoTelaProduto() {
    if(carrinhoDeProdutosTelaProduto.length == 0) {
        numeroCarrinhoTelaProduto.style.display = "none"
    } else {
        numeroCarrinhoTelaProduto.style.display = "flex"
    numeroCarrinho.textContent = carrinhoDeProdutosTelaProduto.length
    }
}

function adicionarCarrinhoTelaProduto() {
    const produtoAdicionado = paginaDoProduto[0]
        if(carrinhoDeProdutosTelaProduto.includes(produtoAdicionado)) {
            alert("Esse item já foi adicionado ao carrinho")
            // carrinhoDeProdutosTelaProduto[produto].quantidade += 1
            // localStorage.setItem("carrinhoDeProdutosLocal",JSON.stringify(carrinhoDeProdutosTelaProduto))
        } else {
            carrinhoDeProdutosTelaProduto.push(paginaDoProduto[0])
            localStorage.setItem("carrinhoDeProdutosLocal",JSON.stringify(carrinhoDeProdutosTelaProduto))
        }
        quantidadeProdutosCarrinhoTelaProduto()
}
quantidadeProdutosCarrinho()

const quantidadeProduto = document.getElementById("quantidadeProduto")
function adicionarQuantidadeDeProduto() {
    paginaDoProduto[0].quantidade += 1
    quantidadeProduto.textContent = paginaDoProduto[0].quantidade
    precoTotalTelaProduto() 
}

function diminuirQuantidadeDeProdto() {
    if (paginaDoProduto[0].quantidade > 1) {
        paginaDoProduto[0].quantidade -= 1
        quantidadeProduto.textContent = paginaDoProduto[0].quantidade
        precoTotalTelaProduto() 
    }
}

const precoTotalProduto = document.getElementById("precoTotalProduto")
function precoTotalTelaProduto() {
    precoTotalProduto.textContent = " " + (paginaDoProduto[0].preco * paginaDoProduto[0].quantidade).toFixed(2)
}

precoTotalTelaProduto()
