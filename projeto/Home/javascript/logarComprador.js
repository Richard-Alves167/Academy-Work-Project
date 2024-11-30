let clientes = []
let logarUsuarioAoLocalStorage = []
let usuarioLogadoSite = []

let Admin = {
    nome: "Zoe Admin",
    senha: 2018,
    imagem: "https://i.pinimg.com/736x/b2/51/1d/b2511d14b09210441c2fc4ea5e4eace0.jpg",
    telefone: "/-------/",
    endereco: "/-------/",
    email: "/-------/",
}

const clienteLogadoSite = localStorage.getItem("clienteLogadoLocal")
const armazenamentoClientes = localStorage.getItem("clienteLocal")

if (armazenamentoClientes !== null) {
    clientes = JSON.parse(armazenamentoClientes)
    const adminStorage = clientes.filter((element) => {
        element.nome == "Zoe Admin"

    })
        if (adminStorage.length == 0) {
            clientes.push(Admin)
        }
}
if (clienteLogadoSite !== null) {
    usuarioLogadoSite = JSON.parse(clienteLogadoSite)
}

function logarUsuario() {
    const usernameColocada = document.getElementById("loginUsername")
    const senhaColocada = document.getElementById("loginSenha")
    const verificar = clientes.filter((element) => {
        if(usernameColocada.value == element.nome && senhaColocada.value == element.senha) {
            const nomeSpan = document.getElementById("preencherLoginNome")
            nomeSpan.style.display = "none"
            usernameColocada.style.border = "none"
            usernameColocada.style.borderBottom = "1px solid black"
            const senhaSpan = document.getElementById("preencherLoginSenha")
            senhaSpan.style.display = "none"
            senhaColocada.style.border = "none"
            senhaColocada.style.borderBottom = "1px solid black"
            return element
        } else {
            if (!(usernameColocada.value != element.nome && senhaColocada.value == element.senha)) {
                const nomeSpan = document.getElementById("preencherLoginNome")
                nomeSpan.style.display = "block"
                usernameColocada.style.border = "1px red solid"
                } else {
                    const nomeSpan = document.getElementById("preencherLoginNome")
                    nomeSpan.style.display = "none"
                    usernameColocada.style.border = "none"
                    usernameColocada.style.borderBottom = "1px solid black"
                }
        
            if (!(usernameColocada == element.nome && senhaColocada != element.senha)) {
                    const senhaSpan = document.getElementById("preencherLoginSenha")
                    senhaSpan.style.display = "block"
                    senhaColocada.style.border = "1px red solid"
                }else {
                    const senhaSpan = document.getElementById("preencherLoginSenha")
                    senhaSpan.style.display = "none"
                    senhaColocada.style.border = "none"
                    senhaColocada.style.borderBottom = "1px solid black"
                }
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

if (JSON.parse(clienteLogadoSite)[0].nome == Admin.nome) {
    try {
    let cadastrar = document.getElementById("cadastros")
    cadastrar.style.display = "flex"
    } catch (error) {
        
    }
}