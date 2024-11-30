let carrinhoDeProdutos = [] 
let armazenamentoDeProdutos = []

const armazenamentoProdutos = localStorage.getItem("produtosLocal")
const armazenamentoCarrinhoDeProdutos = localStorage.getItem("carrinhoDeProdutosLocal")

if (armazenamentoCarrinhoDeProdutos !== null) {
    carrinhoDeProdutos = JSON.parse(armazenamentoCarrinhoDeProdutos)
}

if (armazenamentoProdutos !== null) {
    armazenamentoDeProdutos = JSON.parse(armazenamentoProdutos)
}

function adicionarCarrinho(index) {
    try {
        if(carrinhoDeProdutos.includes(carrinhoDeProdutos[index])) {
            carrinhoDeProdutos[index].quantidade += 1
            localStorage.setItem("carrinhoDeProdutosLocal",JSON.stringify(carrinhoDeProdutos))
        } else {
            carrinhoDeProdutos.push(armazenamentoDeProdutos[index])
            localStorage.setItem("carrinhoDeProdutosLocal",JSON.stringify(carrinhoDeProdutos))
        }

        quantidadeProdutosCarrinho()
        renderizarCarrinho()
        calcularPrecoTotalPedido()
    } catch (error) {
        
    }
}

function retirarCarrinho(index) {
    if (carrinhoDeProdutos[index].quantidade > 1) {
        carrinhoDeProdutos[index].quantidade -= 1
        localStorage.setItem("carrinhoDeProdutosLocal",JSON.stringify(carrinhoDeProdutos))
    } else {
        carrinhoDeProdutos.splice(index,1)
        localStorage.setItem("carrinhoDeProdutosLocal",JSON.stringify(carrinhoDeProdutos))
    }
    
    renderizarCarrinho()
    quantidadeProdutosCarrinho()
    calcularPrecoTotalPedido()
}

function removerCarrinho(index) {
    carrinhoDeProdutos.splice(index,1)

    localStorage.setItem("carrinhoDeProdutosLocal",JSON.stringify(carrinhoDeProdutos))
    
    renderizarCarrinho()
    quantidadeProdutosCarrinho()
    calcularPrecoTotalPedido()
}

const carrinho = document.getElementById("produtosTabela")

function renderizarCarrinho() {
    try {
        carrinho.innerHTML = ""

        carrinhoDeProdutos.forEach(object => {
            let carrinhoProduto = document.createElement("tr")

            carrinhoProduto.innerHTML = `
                <td class="imagemTabela"><img src="${object.imagem}"></td>
                <td class="nomeTabela">${object.nome}<br>
                <button class="iconeTabela" onclick="removerCarrinho(${carrinhoDeProdutos.indexOf(object)})"><img src="./imagens/lixeira.jpg"></button></td>
                <td class="quantidadeTabela"><div class="mudarQuantidade"><button onclick="retirarCarrinho(${carrinhoDeProdutos.indexOf(object)})">-</button>${object.quantidade}<button onclick="adicionarCarrinho(${carrinhoDeProdutos.indexOf(object)})">+</button></div></td>
                <td class="precoTabela">R$ ${object.preco}</td>
                <td class="totalTabela">R$ ${(object.preco * object.quantidade).toFixed(2)}</td>
            `
            carrinho.appendChild(carrinhoProduto)
        });
    } catch {

    }
}

const PrecoTotalPedido = document.getElementById("precoTotalPedido")

function calcularPrecoTotalPedido() {
    try {
        let sum = 0
        sum = carrinhoDeProdutos.reduce((acumulador,produto) => {
            let resultado = acumulador + Number(produto.preco * produto.quantidade)
        return resultado
        },0);

        PrecoTotalPedido.innerText = sum.toFixed(2)
        return sum.toFixed(2)
    } catch (error) {
            
    }
}

const numeroCarrinho = document.getElementById("quantidadeCarrinho")
function quantidadeProdutosCarrinho() {
    if(carrinhoDeProdutos.length == 0) {
        numeroCarrinho.style.display = "none"
    } else {
        numeroCarrinho.style.display = "flex"
    numeroCarrinho.textContent = carrinhoDeProdutos.length
    }
}

quantidadeProdutosCarrinho()
renderizarCarrinho()
calcularPrecoTotalPedido()
