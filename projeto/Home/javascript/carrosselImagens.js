let radio = document.querySelector(".manualBotao")
let contador = 1

document.getElementById("radio1").checked = true

setInterval(() => {
    proximaImg()
}, 3500);

function proximaImg() {
    contador++

    if(contador>4) {
        contador = 1
    }

    document.getElementById("radio" + contador).checked = true
}
