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
          this.imagem = "../assets/images/iconUser.png"
        }
    }

    const nomeComprador = document.getElementById("nomeComprador")
    const emailComprador = document.getElementById("emailComprador")
    const senhaComprador = document.getElementById("senhaComprador")
    const telefoneComprador = document.getElementById("telefoneComprador")
    const enderecoComprador = document.getElementById("enderecoComprador")

    if (nomeComprador.value != "" && emailComprador.value != "" && senhaComprador.value != "" && telefoneComprador.value != "" && enderecoComprador.value != "") {

    const cliente = new Cliente(nomeComprador.value, emailComprador.value, senhaComprador.value, telefoneComprador.value, enderecoComprador.value)

    clientes.push(cliente)

    localStorage.setItem("clienteLocal",JSON.stringify(clientes))

    document.getElementById("nomeComprador").value = null
    document.getElementById("emailComprador").value = null
    document.getElementById("senhaComprador").value = null
    document.getElementById("telefoneComprador").value = null
    document.getElementById("enderecoComprador").value = null

    alert("cadastro Bem Sucedido")
    window.location = "../pages/loginDeCliente.html"
    } else {
        if (nomeComprador.value == "") {
        const nomeSpan = document.getElementById("preencherCampoCadastroNome")
        nomeSpan.style.display = "block"
        nomeComprador.style.border = "1px red solid"
        } else {
            const nomeSpan = document.getElementById("preencherCampoCadastroNome")
            nomeSpan.style.display = "none"
            nomeComprador.style.border = "none"
            nomeComprador.style.borderBottom = "1px solid black"
        }

        if (emailComprador.value == "") {
            const emailSpan = document.getElementById("preencherCampoCadastroEmail")
            emailSpan.style.display = "block"
            emailComprador.style.border = "1px red solid"
            emailSpan.textContent = "Todos os campos devem ser preenchidos."
        } else if (!(emailComprador.value).includes("@")) {
            const emailSpan = document.getElementById("preencherCampoCadastroEmail")
            emailSpan.style.display = "block"
            emailComprador.style.border = "1px red solid"
            emailSpan.textContent = "Não é um Email válido."
        } else {
            const emailSpan = document.getElementById("preencherCampoCadastroEmail")
            emailSpan.style.display = "none"
            emailComprador.style.border = "none"
            emailComprador.style.borderBottom = "1px solid black"
        }

        if (senhaComprador.value == "") {
            const senhaSpan = document.getElementById("preencherCampoCadastroSenha")
            senhaSpan.style.display = "block"
            senhaComprador.style.border = "1px red solid"
        }else {
            const senhaSpan = document.getElementById("preencherCampoCadastroSenha")
            senhaSpan.style.display = "none"
            senhaComprador.style.border = "none"
            senhaComprador.style.borderBottom = "1px solid black"
        }

        if (telefoneComprador.value == "") {
            const telefoneSpan = document.getElementById("preencherCampoCadastroTelefone")
            telefoneSpan.style.display = "block"
            telefoneComprador.style.border = "1px red solid"
        } else {
            const telefoneSpan = document.getElementById("preencherCampoCadastroTelefone")
            telefoneSpan.style.display = "none"
            telefoneComprador.style.border = "none"
            telefoneComprador.style.borderBottom = "1px solid black"
        }

        if (enderecoComprador.value == "") {
            const enderecoSpan = document.getElementById("preencherCampoCadastroEndereco")
            enderecoSpan.style.display = "block"
            enderecoComprador.style.border = "1px red solid"
        } else {
            const enderecoSpan = document.getElementById("preencherCampoCadastroEndereco")
            enderecoSpan.style.display = "none"
            enderecoComprador.style.border = "none"
            enderecoComprador.style.borderBottom = "1px solid black"
        }
    }
}

const tabela = document.getElementById("tabelaCompradoresCadastrados")

function renderizarTabela() {
        tabela.innerHTML = ""

        clientes.forEach(object => {
            let novotr = document.createElement("tr")

            novotr.innerHTML =`
            <td><button class="tabelaBotao" onclick="removerProduto(${clientes.indexOf(object)})">X</button></td>
            <td><img class="iconeUsuario" src="${object.imagem}"></td>
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