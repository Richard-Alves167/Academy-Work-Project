let lista = document.getElementById("itens_cadastrados")     
let produtos = []

const armazenamentoCadastro = localStorage.getItem("produtosLocal")

if (armazenamentoCadastro !== null) {
    produtos = JSON.parse(armazenamentoCadastro)
}

function rederizarProdutos() {
    lista.innerHTML = ""

    produtos.forEach(object => {
        let novoCard = document.createElement("li")
    
        novoCard.innerHTML = `
        <li class="card">
        <div class="itens_cadastrados">
        <img class="iten_imagem" src="${object.imagem}">
        <div class="iten_nome">${object.nome}</div>
        <div class="iten_preco">
        <span class="cifrao">R$</span>${object.preco}
        </div>
        </div>
        </li>
        `
        lista.appendChild(novoCard)
    });
}

function cadastrar() {
    const nomeIten = document.getElementById("nome_itens")
    const precoIten = document.getElementById("preco_itens")
    const imagemIten = document.getElementById("imagem_itens")
    const descricaoIten = document.getElementById("descricao_iten")
    if (nomeIten.value != "" && precoIten.value != "" && imagemIten.value != "" && descricaoIten.value != "") {
        const iten = {
            nome: nomeIten.value,
            preco: precoIten.value,
            imagem: imagemIten.value,
            tipoDeArtigo: document.getElementById("seletor_tipo_artigo").children[document.getElementById("seletor_tipo_artigo").selectedIndex].textContent,
            nivelPuericultura: document.querySelector('input[name="nivel"]:checked').value,
            localidade: document.getElementById("seletor_nacionalidade").children[document.getElementById("seletor_nacionalidade").selectedIndex].textContent,
            descricao: descricaoIten.value,
            quantidade: 1,
        }

        produtos.push(iten)

        localStorage.setItem("produtosLocal", JSON.stringify(produtos))

        nomeIten.value = null
        precoIten.value = null
        imagemIten.value = null
        descricaoIten.value = null
        alert("cadastro de produto Bem Sucedido!")
    } else {
        if (nomeIten.value == "") {
            const nomeSpan = document.getElementById("preencherCampoCadastroNome")
            nomeSpan.style.display = "block"
            nomeIten.style.border = "1px red solid"
            } else {
                const nomeSpan = document.getElementById("preencherCampoCadastroNome")
                nomeSpan.style.display = "none"
                nomeIten.style.border = "none"
                nomeIten.style.borderBottom = "1px solid black"
            }
    
            if (precoIten.value == "") {
                const precoSpan = document.getElementById("preencherCampoCadastroPreco")
                precoSpan.style.display = "block"
                precoIten.style.border = "1px red solid"
                precoSpan.textContent = "Todos os campos devem ser preenchidos."
            } else {
                const precoSpan = document.getElementById("preencherCampoCadastroPreco")
                precoSpan.style.display = "none"
                precoIten.style.border = "none"
                precoIten.style.borderBottom = "1px solid black"
            }
    
            if (imagemIten.value == "") {
                const imagemSpan = document.getElementById("preencherCampoCadastroImagem")
                imagemSpan.style.display = "block"
                imagemIten.style.border = "1px red solid"
            }else {
                const imagemSpan = document.getElementById("preencherCampoCadastroImagem")
                imagemSpan.style.display = "none"
                imagemIten.style.border = "none"
                imagemIten.style.borderBottom = "1px solid black"
            }
    
            if (descricaoIten.value == "" && descricaoIten.value.length >= 25) {
                const descricaoSpan = document.getElementById("preencherCampoCadastroDescricao")
                descricaoSpan.style.display = "block"
                descricaoIten.style.border = "1px red solid"
            } else if (descricaoIten.value.length < 25) {
                const descricaoSpan = document.getElementById("preencherCampoCadastroDescricao")
                descricaoSpan.style.display = "block"
                descricaoIten.style.border = "1px red solid"
                descricaoSpan.textContent = "Não é uma descricao válida, coloque uma descrição maior."
            } else {
                const descricaoSpan = document.getElementById("preencherCampoCadastroDescricao")
                descricaoSpan.style.display = "none"
                descricaoIten.style.border = "none"
                descricaoIten.style.borderBottom = "1px solid black"
            }
    }

    rederizarProdutos()
}

rederizarProdutos()

