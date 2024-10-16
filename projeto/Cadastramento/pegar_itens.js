let novatag = document.createElement("li")

function cadastrar() {
    const nome_iten = document.getElementById("nome_itens").value
    const preco_iten = document.getElementById("preco_itens").value
    const tipo_de_artigo = document.getElementsByName("tipo_artigo").value
    const nivel_puericultura = document.getElementsByName("nivel").value
    const nacional_internacional = document.getElementsByName("nacionalidade").value

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

// inputSelectSocio.options[inputSelectSocio.selectedIndex].text