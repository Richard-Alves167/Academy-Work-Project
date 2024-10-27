let novatag = document.createElement("li")

function cadastrar() {
    const nome_comprador = document.getElementById("nome_comprador").value
    const email_comprador = document.getElementById("email_comprador").value
    const senha_comprador = document.getElementById("senha_comprador").value
    const telefone_comprador = document.getElementById("telefone_comprador").value
    const endereco_comprador = document.getElementById("endereco_comprador").value
    const classe_puericultura = document.getElementsByName("pueri_classe").value

    if (nome_comprador == "" || email_comprador == "" ||senha_comprador == "" || telefone_comprador == "" || endereco_comprador == "" || classe_puericultura == "") {

    } else {

    let lista = document.getElementById("colocar_cadastro")
    // let listagem = document.querySelector("#colocar_comprador")

    
    let novotr = document.createElement("tr")

    // let nome = document.createElement("td")
    // let email = document.createElement("td")
    // let senha = document.createElement("td")
    // let telefone = document.createElement("td")
    // let endereco = document.createElement("td")

    novotr.innerHTML = `
    <td>${nome_comprador}</td>
    <td>${email_comprador}</td>
    <td>${senha_comprador}</td>
    <td>${telefone_comprador}</td>
    <td>${endereco_comprador}</td>
    <td>${classe_puericultura}</td>
    `

    lista.appendChild(novotr)

    document.getElementById("nome_comprador").value = null
    document.getElementById("email_comprador").value = null
    document.getElementById("senha_comprador").value = null
    document.getElementById("telefone_comprador").value = null
    document.getElementById("endereco_comprador").value = null

    }
}