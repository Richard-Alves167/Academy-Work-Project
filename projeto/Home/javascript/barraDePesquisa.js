const barraPesquisa = document.getElementById("pesquisar")

let armazenamentoDeProdutosPesquisar = []

const armazenamentoCarrinhoDeProdutosPesquisar = localStorage.getItem("barraPesquisarLocal")

if (armazenamentoProdutos !== null) {
    pesquisaArmazenamento = JSON.parse(armazenamentoProdutos)
}

let listaPesquisada = document.getElementById("itens_cadastrados")   

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const filtroDaURL = urlParams.get("PesquisarProduto")

if (filtroDaURL) {
    barraPesquisa.value = filtroDaURL
    filtrarProdutos(filtroDaURL)
}

function pesquisarProduto() {  

    if (barraPesquisa.value !== "") {
        filtrarProdutos(barraPesquisa.value)
//      window.location = "telaTodosProdutos.html"
        // const arrayPesquisado = pesquisaArmazenamento.filter((element)=> {
        //     if (((element.nome).toLocaleUpperCase()).includes((barraPesquisa.value).toLocaleUpperCase())) {
        //         return element
        //     }
        // }) 
        // listaPesquisada.innerHTML = ""
        // arrayPesquisado.forEach(object => {
        //     let novoCard = document.createElement("li")
        //     novoCard.classList.add("card")
            
        //     novoCard.innerHTML = `
        //         <div class="itens_cadastrados">
        //         <img class="iten_imagem" src="${object.imagem}">
        //         <div class="iten_nome">${object.nome}</div>
        //         <div class="iten_preco">
        //         <span class="cifrao">R$</span>${object.preco}
        //         </div>
        //     </div>
        //     <button class="botaoAdicionarCarrinho" onclick="adicionarCarrinho(${arrayPesquisado.indexOf(object)})">+<img src="./imagens/carrinhoCompras.png"></button>
        //     `
        //     listaPesquisada.appendChild(novoCard)
        // });
        // if (listaPesquisada.firstElementChild == null) {
        //     const imagemNotFound = document.createElement("img")
        //     imagemNotFound.setAttribute("src","./imagens/pageNotFound.jpg")
        //     imagemNotFound.classList.add("imagemNotFound")
        //     listaPesquisada.appendChild(imagemNotFound)
        //     const textoNotFound = document.createElement("p")
        //     textoNotFound.classList.add("textoNotFound")
        //     textoNotFound.textContent = "Produto não encontrado."
        //     listaPesquisada.appendChild(textoNotFound)
        // }
    }
}

function filtrarProdutos(nomeProduto) {
    const arrayPesquisado = pesquisaArmazenamento.filter((element)=> {
        if (((element.nome).toLocaleUpperCase()).includes((nomeProduto).toLocaleUpperCase())) {
            return element
        }
    }) 
    listaPesquisada.innerHTML = ""
    arrayPesquisado.forEach(object => {
        let novoCard = document.createElement("li")
        novoCard.classList.add("card")
        
        novoCard.innerHTML = `
            <div class="itens_cadastrados">
            <img class="iten_imagem" src="${object.imagem}">
            <div class="iten_nome">${object.nome}</div>
            <div class="iten_preco">
            <span class="cifrao">R$</span>${object.preco}
            </div>
        </div>
        <button class="verProduto" onclick="adicionarCarrinho(${arrayPesquisado.indexOf(object)})">+<img src="./imagens/carrinhoCompras.png"></button>
        `
        listaPesquisada.appendChild(novoCard)
    });
    if (listaPesquisada.firstElementChild == null) {
        const imagemNotFound = document.createElement("img")
        imagemNotFound.setAttribute("src","./imagens/pageNotFound.jpg")
        imagemNotFound.classList.add("imagemNotFound")
        listaPesquisada.appendChild(imagemNotFound)
        const textoNotFound = document.createElement("p")
        textoNotFound.classList.add("textoNotFound")
        textoNotFound.textContent = "Produto não encontrado."
        listaPesquisada.appendChild(textoNotFound)
    } 
}

function pesquisarProdutoPorOutraPagina() {
    window.location =`telaTodosProdutos.html?PesquisarProduto=${barraPesquisa.value}`
}