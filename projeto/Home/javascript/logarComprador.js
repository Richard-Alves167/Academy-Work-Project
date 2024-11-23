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
    console.log(usernameColocada)
    console.log(senhaColocada)
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
    ancora.setAttribute("href","../Home/telaDoUsuario.html")
}
