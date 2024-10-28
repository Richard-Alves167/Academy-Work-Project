let novatag = document.createElement("li")

function cadastrar() {
    const nome_iten = document.getElementById("nome_itens").value
    const preco_iten = document.getElementById("preco_itens").value
    const tipo_de_artigo = document.getElementById("seletor_tipo_artigo").children[document.getElementById("seletor_tipo_artigo").selectedIndex].textContent
    const nivel_puericultura = document.querySelector('input[name="nivel"]:checked').value
    const nacional_internacional = document.getElementById("seletor_nacionalidade").children[document.getElementById("seletor_nacionalidade").selectedIndex].textContent

    let lista = document.getElementById("colocar_cadastro")
    
    let novotr = document.createElement("tr")

    lista.appendChild(novotr)

    novotr.innerHTML = `
    <td>${nome_iten}</td>
    <td>R$ ${preco_iten}</td>
    <td>${tipo_de_artigo}</td>
    <td>${nivel_puericultura}</td>
    <td>${nacional_internacional}</td>
    `

    document.getElementById("nome_itens").value = null
    document.getElementById("preco_itens").value = null
}
