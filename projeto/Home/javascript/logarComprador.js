let clientes = []
let logarUsuarioAoLocalStorage = []
let usuarioLogadoSite = []

const clienteLogadoSite = localStorage.getItem("clienteLogadoLocal")
const armazenamentoClientes = localStorage.getItem("clienteLocal")

if (armazenamentoClientes !== null) {
    clientes = JSON.parse(armazenamentoClientes)
}

if (clienteLogadoSite !== null) {
    usuarioLogadoSite = JSON.parse(clienteLogadoSite)
}

function logarUsuario() {
    const usernameColocada = document.getElementById("loginUsername").value
    const senhaColocada = document.getElementById("loginSenha").value
    const verificar = clientes.filter((element) => {
        if(usernameColocada == element.nome && senhaColocada == element.senha) {
            return element
        }
    })

    if (verificar[0] != null) {
        logarUsuarioAoLocalStorage = verificar
        localStorage.setItem("clienteLogadoLocal",JSON.stringify(logarUsuarioAoLocalStorage))
        window.location = "index.html"
    }

}

if (clienteLogadoSite !== null) {
    const ancora = document.getElementById("linkagemPaginaUsuario")
    const imagem = document.getElementById("user_login_Imagem")
    const nomePerfilUsuario = document.getElementById("nomePerfilUsuario")
    nomePerfilUsuario.textContent = "Bem Vindo " + usuarioLogadoSite[0].nome.split(" ")[0]
    ancora.setAttribute("href","../Home/telaDoUsuario.html")
    imagem.setAttribute("src",usuarioLogadoSite[0].imagem)
}