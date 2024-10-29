let tabela = document.getElementById("tabelaCadastrados")
let arrayTabelaItens = []

const armazenamentoTabelaItens = localStorage.getItem("produtosLocal")

if (armazenamentoTabelaItens !== null) {
    arrayTabelaItens = JSON.parse(armazenamentoTabelaItens)
}

function renderizarTabela() {
    tabela.innerHTML = ""

    arrayTabelaItens.forEach(object => {
        let novotr = document.createElement("tr")

        novotr.innerHTML =`
        <td><button class="tabelaBotao" onclick="removerProduto()">X</button></td>
        <td>${object.nome}</td>
        <td>R$${object.preco}</td>
        <td>${object.tipoDeArtigo}</td>
        <td>${object.nivelPuericultura}</td>
        <td>${object.localidade}</td>
        `
        tabela.appendChild(novotr)
    }); 
}

renderizarTabela()














