let botaoLadoEsquerdo = document.getElementsByClassName("buttomLeftSecao")[0]
let botaoLadoDireito = document.getElementsByClassName("buttomRightSecao")[0]

const secaoProdutosNovidades = document.getElementById("produtosNovidades")
const secaoProdutosFreteGratis = document.getElementById("produtosFreteGratis")
const secaoProdutosSaude = document.getElementById("produtosSaude")
const secaoProdutosSeguranca = document.getElementById("produtosSeguranca")
const secaoProdutosEntretenimento = document.getElementById("produtosEntretenimento")

let andarSecaoNovidades = 0
let andarSecaoFretegratis = 0
let andarSecaoSaude = 0
let andarSecaoSeguranca = 0
let andarSecaoEntretenimento = 0

function andarCarrosselEsquerdaNovidades() {
    andarSecaoNovidades++
    if(andarSecaoNovidades>0) {
        andarSecaoNovidades = 0
    }
    secaoProdutosNovidades.style.marginLeft = 5*andarSecaoNovidades + "00px"
}

function andarCarrosselDireitaNovidades() {
    andarSecaoNovidades--
    if(andarSecaoNovidades>0) {
        andarSecaoNovidades = 0
    }
    secaoProdutosNovidades.style.marginLeft = 5*andarSecaoNovidades + "00px"
}

function andarCarrosselEsquerdaFreteGratis() {
    andarSecaoFretegratis++
    if(andarSecaoFretegratis>0) {
        andarSecaoFretegratis = 0
    }
    secaoProdutosFreteGratis.style.marginLeft = 5*andarSecaoFretegratis + "00px"
}

function andarCarrosselDireitaFreteGratis() {
    andarSecaoFretegratis--
    if(andarSecaoFretegratis>0) {
        andarSecaoFretegratis = 0
    }
    secaoProdutosFreteGratis.style.marginLeft = 5*andarSecaoFretegratis + "00px"
}

function andarCarrosselEsquerdaSaude() {
    andarSecaoSaude++
    if(andarSecaoSaude>0) {
        andarSecaoSaude = 0
    }
    secaoProdutosSaude.style.marginLeft = 5*andarSecaoSaude + "00px"
}

function andarCarrosselDireitaSaude() {
    andarSecaoSaude--
    if(andarSecaoSaude>0) {
        andarSecaoSaude = 0
    }
    secaoProdutosSaude.style.marginLeft = 5*andarSecaoSaude + "00px"
}

function andarCarrosselEsquerdaSeguranca() {
    andarSecaoSeguranca++
    if(andarSecaoSeguranca>0) {
        andarSecaoSeguranca = 0
    }
    secaoProdutosSeguranca.style.marginLeft = 5*andarSecaoSeguranca + "00px"
}

function andarCarrosselDireitaSeguranca() {
    andarSecaoSeguranca--
    if(andarSecaoSeguranca>0) {
        andarSecaoSeguranca = 0
    }
    secaoProdutosSeguranca.style.marginLeft = 5*andarSecaoSeguranca + "00px"
}

function andarCarrosselEsquerdaEntretenimento() {
    andarSecaoEntretenimento++
    if(andarSecaoEntretenimento>0) {
        andarSecaoEntretenimento = 0
    }
    secaoProdutosEntretenimento.style.marginLeft = 5*andarSecaoEntretenimento + "00px"
}

function andarCarrosselDireitaEntretenimento() {
    andarSecaoEntretenimento--
    if(andarSecaoEntretenimento>0) {
        andarSecaoEntretenimento = 0
    }
    secaoProdutosEntretenimento.style.marginLeft = 5*andarSecaoEntretenimento + "00px"
}