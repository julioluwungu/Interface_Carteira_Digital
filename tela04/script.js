let listas = document.querySelectorAll('li')
let cartoes = document.querySelectorAll('div.card')
let icone = document.querySelector('span#icone')
let menu = document.querySelector('nav')
let body = document.body

window.addEventListener('resize', verificarTamanho)
icone.addEventListener('click', verificar)

listas.forEach ((elemento, indice) => elemento.addEventListener('mouseenter', () => destacar(indice)))
listas.forEach (elemento => elemento.addEventListener('mouseout', removerDestaque))

function destacar (i) {
    cartoes.forEach(card => card.classList.remove('ativo'))
    cartoes[i].classList.add('ativo')
}

function removerDestaque () {
    cartoes.forEach(card => card.classList.remove('ativo'))
}

function verificar () {
    menu.style.display = (menu.style.display === 'block')? 'none': 'block'
}

function verificarTamanho() {
    if (window.innerWidth >= 700) {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}
