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
        lista.appendChild(novoCard)
    });
}

function cadastrar() {
    const iten = {
    nome: document.getElementById("nome_itens").value,
    preco: document.getElementById("preco_itens").value,
    imagem: document.getElementById("imagem_itens").value,
    tipoDeArtigo: document.getElementById("seletor_tipo_artigo").children[document.getElementById("seletor_tipo_artigo").selectedIndex].textContent,
    nivelPuericultura: document.querySelector('input[name="nivel"]:checked').value,
    localidade: document.getElementById("seletor_nacionalidade").children[document.getElementById("seletor_nacionalidade").selectedIndex].textContent,
    }

    produtos.push(iten)

    localStorage.setItem("produtosLocal", JSON.stringify(produtos))

    document.getElementById("nome_itens").value = null
    document.getElementById("preco_itens").value = null
    document.getElementById("imagem_itens").value = null

    rederizarProdutos()
}

rederizarProdutos()

