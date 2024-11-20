let pedidos = []
let carrinhoDeProdutosParaPedido = []

const armazenamentoDeCarrinhoDeProdutos = localStorage.getItem("carrinhoDeProdutosLocal")
const armazenamentoDePedidos = localStorage.getItem("pedidosLocal")

if (armazenamentoDeCarrinhoDeProdutos !== null) {
    carrinhoDeProdutosParaPedido = JSON.parse(armazenamentoDeCarrinhoDeProdutos)
}

if (armazenamentoDePedidos !== null) {
    pedidos = JSON.parse(armazenamentoDePedidos)
}

function calcularPrecoTotalPedido() {
    if (armazenamentoDeCarrinhoDeProdutos !== null) {
    let soma = carrinhoDeProdutosParaPedido.reduce((acumulador,produto) => {
        let resultado = acumulador + Number(produto.preco)
    return resultado
    },0);

    return soma.toFixed(2)
    }
}

const totalDoPedido = calcularPrecoTotalPedido()

const carrinhoEspaco = document.getElementById("produtosTabela")

function adicionarPedido() {
    if (armazenamentoDeCarrinhoDeProdutos !== null) {
        let novoCliente = {
            cliente: "Richard De Jesus Cabral Alves",
            precoDoPedido: totalDoPedido,
        }
        carrinhoDeProdutosParaPedido.unshift(novoCliente)
        pedidos.push(carrinhoDeProdutosParaPedido)

        localStorage.setItem("pedidosLocal",JSON.stringify(pedidos))
        localStorage.removeItem("carrinhoDeProdutosLocal")
        carrinhoEspaco.innerHTML = ""
        alert("Pedido efetuado!! Obrigado pela compra :)")
    }
}

// function removerPedidoCarrinho(index) {
//     pedidos.splice(index,1)

//     localStorage.setItem("pedidos",JSON.stringify(pedidos))
//     renderizarCarrinho()
//     calcularPrecoTotalPedido()
// }

const tabelaDePedidos = document.getElementById("tabelaPedidosCadastrados")

function renderizarPedidos() {
    tabelaDePedidos.innerHTML = ""

    pedidos.forEach(array => {
        let pedido = document.createElement("tr")

        pedido.innerHTML = `
            <td><button class="tabelaBotao" onclick="removerProduto()">X</button></td>
            <td>${array[0].cliente}</td>
            <td>R$ ${array[0].precoDoPedido}</td>
            <td><button class="tabelaBotaoMostrarProdutos" onclick="removerProduto()"><img src="imagens/carrinhoCheio.png"></button>                   
        `
        tabelaDePedidos.appendChild(pedido)
    })
}

renderizarPedidos()