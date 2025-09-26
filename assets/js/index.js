// Criar a lista de imagens
let imagens = [
    'assets/img/bolo3.png',
    'assets/img/bolo2.png',
    'assets/img/bolo1.png'
]

let indiceAtualListaImagens = 0

function exibirImagem() {
    let imagemCarrosel = document.getElementById('img-carrosel')
    imagemCarrosel.src = imagens[indiceAtualListaImagens]
}

// Lógica para exibir as imagens a cada 5 segundos
setInterval(function() {
    exibirImagem()
    indiceAtualListaImagens++

    // verifique se chegou no fim das imagens ai volta pro começo
    if (indiceAtualListaImagens > 2) {
        indiceAtualListaImagens = 0
    }
    
}, 5000);



exibirImagem()
 indiceAtualListaImagens++
