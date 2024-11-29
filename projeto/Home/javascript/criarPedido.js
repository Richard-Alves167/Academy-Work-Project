let pedidos = []
let carrinhoDeProdutosParaPedido = []
let usuarioLogado = []
let carrinhoDeProdutosPedidosFeitosLocal = []

const clienteLogado = localStorage.getItem("clienteLogadoLocal")
const armazenamentoDeCarrinhoDeProdutos = localStorage.getItem("carrinhoDeProdutosLocal")
const armazenamentoDePedidos = localStorage.getItem("pedidosLocal")
const armazenamentoCarrinhoDeProdutosSolicitados = localStorage.getItem("carrinhoPedidosFeitosLocal")

if (armazenamentoDeCarrinhoDeProdutos !== null) {
    carrinhoDeProdutosParaPedido = JSON.parse(armazenamentoDeCarrinhoDeProdutos)
}

if (armazenamentoDePedidos !== null) {
    pedidos = JSON.parse(armazenamentoDePedidos)
}

if (clienteLogado !== null) {
    usuarioLogado = JSON.parse(clienteLogado)
}

if (armazenamentoCarrinhoDeProdutosSolicitados !== null) {
    carrinhoDeProdutosPedidosFeitosLocal = JSON.parse(armazenamentoCarrinhoDeProdutosSolicitados)
}

function calcularPrecoTotalPedidoTabela() {
    if (armazenamentoDeCarrinhoDeProdutos !== null) {
    let soma = carrinhoDeProdutosParaPedido.reduce((acumulador,produto) => {
        let resultado = acumulador + Number(produto.preco*produto.quantidade)
    return resultado
    },0);

    return soma.toFixed(2)
    }
}

const totalDoPedido = calcularPrecoTotalPedidoTabela()

const carrinhoEspaco = document.getElementById("produtosTabela")

function adicionarPedido() {
    const armazenamentoDeCarrinhoDeProdutos = localStorage.getItem("carrinhoDeProdutosLocal")
    if (armazenamentoDeCarrinhoDeProdutos !== null) {
        carrinhoDeProdutosParaPedido = JSON.parse(armazenamentoDeCarrinhoDeProdutos)
    }
    
    if (armazenamentoDeCarrinhoDeProdutos !== null && clienteLogado !== null) {
        carrinhoDeProdutosPedidosFeitosLocal.push(carrinhoDeProdutosParaPedido)
        localStorage.setItem("carrinhoPedidosFeitosLocal",JSON.stringify(carrinhoDeProdutosPedidosFeitosLocal))

        let novoCliente = {
            cliente: usuarioLogado[0].nome,
            precoDoPedido: totalDoPedido,
        }
        carrinhoDeProdutosParaPedido.unshift(novoCliente)
        pedidos.push(carrinhoDeProdutosParaPedido)

        localStorage.setItem("pedidosLocal",JSON.stringify(pedidos))
        localStorage.removeItem("carrinhoDeProdutosLocal")
        carrinhoEspaco.innerHTML = ""
        alert("Pedido efetuado!! Obrigado pela compra :)")
    } else {
        alert("Você não está logado em nenhuma conta. Por favor, Faça seu login!")
    }
}

function removerPedidoCarrinho(index) {
    pedidos.splice(index,1)
    carrinhoDeProdutosPedidosFeitosLocal.splice(index,1)

    localStorage.setItem("pedidosLocal",JSON.stringify(pedidos))
    localStorage.setItem("carrinhoPedidosFeitosLocal",JSON.stringify(carrinhoDeProdutosPedidosFeitosLocal))
    renderizarPedidos()
}

const tabelaDePedidos = document.getElementById("tabelaPedidosCadastrados")

function renderizarPedidos() {
    tabelaDePedidos.innerHTML = ""
    pedidos.forEach((value,index,array) => {
        let pedido = document.createElement("tr")

        pedido.innerHTML = `
            <td><button class="tabelaBotao" onclick="removerPedidoCarrinho(${index})">X</button></td>
            <td>${array[index][0].cliente}</td>
            <td>R$ ${array[index][0].precoDoPedido}</td>
            <td class="tdCarrinhoSolicitado"><button class="tabelaBotaoMostrarProdutos" onclick="removerProduto()"><img src="imagens/carrinhoCheio.png"></button>
                <div class="divCarrinhoSolicitado">
                    <div class="trianguloProdutosDoCarrinhoSolicitado"></div>
                            <div class="produtosDoCarrinhoSolicitado">
                                <p>Produtos</p>
                                <hr>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Img</td>
                                            <td>Nome</td>
                                            <td>Quant.</td>
                                        </tr>
                                    </thead>
                                    <tbody class="tabelaDoCarrinhoSolicitado" id="numeroPedido-${index}">
                                    </tbody>
                                </table>
                    </div>
            </td>                   
        `
        tabelaDePedidos.appendChild(pedido)

        let tdCarrinhoSolicitado = document.getElementById("numeroPedido-"+index)
        
        carrinhoDeProdutosPedidosFeitosLocal[index].forEach ((element) => {
            let pedidoCarrinhoSolicitado = document.createElement("tr")
            pedidoCarrinhoSolicitado.innerHTML = `
            <td class="tabelaDoCarrinhoSolicitadoIcone"><img src="${element.imagem}"></td>
            <td class="tabelaDoCarrinhoSolicitadoNome">${element.nome}</td>
            <td>${element.quantidade}</td>
            `
            tdCarrinhoSolicitado.appendChild(pedidoCarrinhoSolicitado)
        })
    })
    
}

renderizarPedidos()