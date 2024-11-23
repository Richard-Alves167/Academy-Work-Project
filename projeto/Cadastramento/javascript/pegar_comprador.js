let clientes = []

const armazenamentoClientes = localStorage.getItem("clienteLocal")

if (armazenamentoClientes !== null) {
    clientes = JSON.parse(armazenamentoClientes)
}

function cadastrarComprador() {
    class Cliente {
        constructor(nome, email, senha, telefone, endereco) {
          this.nome = nome;
          this.email = email;
          this.senha = senha;
          this.telefone = telefone;
          this.endereco = endereco;
        }
    }

    const nomeComprador = document.getElementById("nomeComprador").value
    const emailComprador = document.getElementById("emailComprador").value
    const senhaComprador = document.getElementById("senhaComprador").value
    const telefoneComprador = document.getElementById("telefoneComprador").value
    const enderecoComprador = document.getElementById("enderecoComprador").value

    if (nomeComprador != "" || emailComprador != "" ||senhaComprador != "" || telefoneComprador != "" || enderecoComprador != "") {

    const cliente = new Cliente(nomeComprador, emailComprador, senhaComprador, telefoneComprador, enderecoComprador)

    clientes.push(cliente)

    localStorage.setItem("clienteLocal",JSON.stringify(clientes))

    document.getElementById("nomeComprador").value = null
    document.getElementById("emailComprador").value = null
    document.getElementById("senhaComprador").value = null
    document.getElementById("telefoneComprador").value = null
    document.getElementById("enderecoComprador").value = null

    window.location = "../Home/loginDeCliente.html"
    }
}

const tabela = document.getElementById("tabelaCompradoresCadastrados")

function renderizarTabela() {
    tabela.innerHTML = ""

    clientes.forEach(object => {
        let novotr = document.createElement("tr")

        novotr.innerHTML =`
        <td><button class="tabelaBotao" onclick="removerProduto(${clientes.indexOf(object)})">X</button></td>
        <td>${object.nome}</td>
        <td>${object.email}</td>
        <td>${object.telefone}</td>
        <td>${object.endereco}</td>
        `
        tabela.appendChild(novotr)
    }); 
}

function removerProduto(index) {
    clientes.splice(index,1)

    localStorage.setItem("clienteLocal", JSON.stringify(clientes))

    renderizarTabela()
}

renderizarTabela()