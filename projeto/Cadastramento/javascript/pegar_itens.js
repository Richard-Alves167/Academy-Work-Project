let novatag = document.createElement("li")

function cadastrar() {
    const iten = {
    nome: document.getElementById("nome_itens").value,
    preco: document.getElementById("preco_itens").value,
    imagem: document.getElementById("imagem_itens").value,
    tipoDeArtigo: document.getElementById("seletor_tipo_artigo").children[document.getElementById("seletor_tipo_artigo").selectedIndex].textContent,
    nivelPuericultura: document.querySelector('input[name="nivel"]:checked').value,
    localidade: document.getElementById("seletor_nacionalidade").children[document.getElementById("seletor_nacionalidade").selectedIndex].textContent,
    }

    let lista = document.getElementById("itens_cadastrados")
    
    let novotr = document.createElement("li")

    lista.appendChild(novotr)

    novotr.innerHTML = `
    <li class="card">
    <div class="itens_cadastrados">
    <img class="iten_imagem" src="${iten.imagem}">
    <div class="iten_nome">${iten.nome}</div>
    <div class="iten_preco"><span class="cifrao">R$</span>${iten.preco}</div>
    </div>
    </li>
    `

    document.getElementById("nome_itens").value = null
    document.getElementById("preco_itens").value = null
    document.getElementById("imagem_itens").value = null
}