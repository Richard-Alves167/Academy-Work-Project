function renderizarInformacoesUsuario() {
    const imagemUsuario = document.getElementById("imagemUsuario")
    imagemUsuario.setAttribute("src",usuarioLogadoSite[0].imagem)
    const nomeUsuario = document.getElementById("nomeUsuario")
    nomeUsuario.textContent = usuarioLogadoSite[0].nome
    const emailUsuario = document.getElementById("emailUsario")
    emailUsuario.textContent = usuarioLogadoSite[0].email
    const enderecoUsuario = document.getElementById("enderecoUsario")
    enderecoUsuario.textContent = usuarioLogadoSite[0].endereco
    const telefoneUsuario = document.getElementById("telefoneUsario")
    telefoneUsuario.textContent = usuarioLogadoSite[0].telefone
}

renderizarInformacoesUsuario()

function sairConta() {
    localStorage.removeItem("clienteLogadoLocal")
    window.location = "loginDeCliente.html"
}

function removerConta() {
    const contaLogada = usuarioLogadoSite
    const contaRetirada = clientes.map((element) => {
        return element.nome == contaLogada[0].nome
    })
    clientes.splice(contaRetirada.indexOf(true),1)
    localStorage.setItem("clienteLocal",JSON.stringify(clientes))
    sairConta()
}

function mudarIcone() {
    const mudarIcone = document.getElementById("iconeEscolhidoUsuario")
    if (mudarIcone.value !== "") {
        usuarioLogadoSite[0].imagem = mudarIcone.value
       localStorage.setItem("clienteLogadoLocal",JSON.stringify(usuarioLogadoSite))
     //   localStorage.setItem("clienteLocal",JSON.stringify(logarUsuarioAoLocalStorage))
       renderizarInformacoesUsuario()
    }
}