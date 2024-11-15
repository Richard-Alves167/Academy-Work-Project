let socilitacoesDePedidos = []
let armazenamentoDeSolicitacao = []

const armazenamentoCarrinhoDeProdutos = localStorage.getItem("carrinhoDeProdutosLocal")
const armazenamentoDePedidosSolicitados = localStorage.getItem("pedidosSolicitadosLocal")

if (armazenamentoCarrinhoDeProdutos !== null) {
    carrinhoDeProdutos = JSON.parse(armazenamentoCarrinhoDeProdutos)
}

if (armazenamentoProdutos !== null) {
    armazenamentoDeSolicitacao = JSON.parse(armazenamentoProdutos)
}

function adicionarPedido(index) {
    socilitacoesDePedidos.push(armazenamentoDeSolicitacao[index])

    localStorage.setItem("carrinhoDeProdutosLocal",JSON.stringify(carrinhoDeProdutos))
}

function removerPedido(index) {
    carrinhoDeProdutos.splice(index,1)

    localStorage.setItem("carrinhoDeProdutosLocal",JSON.stringify(carrinhoDeProdutos))
}


const carrinho = document.getElementById("produtosTabela")

// function renderizarCarrinho() {
//     carrinho.innerHTML = ""

//     carrinhoDeProdutos.forEach(object => {
//         let carrinhoProduto = document.createElement("tr")

//         carrinhoProduto.innerHTML = `
//             <td class="imagemTabela"><img src="${object.imagem}"></td>
//             <td class="nomeTabela">${object.nome}<br>
//             <button class="iconeTabela" onclick="removerCarrinho(${carrinhoDeProdutos.indexOf(object)})"><img src="./imagens/lixeira.jpg"></button></td>
//             <td class="quantidadeTabela"><div class="mudarQuantidade"><button>-</button>1<button>+</button></div></td>
//             <td class="precoTabela">R$ ${object.preco}</td>
//             <td class="totalTabela">R$ ${object.preco * 1}</td>
//         `
//         carrinho.appendChild(carrinhoProduto)
//     });
// }

// const PrecoTotalPedido = document.getElementById("precoTotalPedido")

// function calcularPrecoTotalPedido() {
//     let sum = carrinhoDeProdutos.reduce((acumulador,produto) => {
//         let resultado = acumulador + Number(produto.preco)
//     return resultado
//     },0);

//     PrecoTotalPedido.innerText = sum.toFixed(2)
// }

// renderizarCarrinho()
// calcularPrecoTotalPedido()
