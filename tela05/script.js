let botao = document.querySelectorAll('button')
let oculto = document.querySelectorAll('p.oculto')

botao.forEach((elemento, indice) => elemento.addEventListener('click', () => verificar(elemento, indice)))

function verificar (btn, i) {
    const mostrando = btn.textContent === 'Ver mais detalhes'
    oculto[i].style.display = mostrando ? 'block' : 'none'
    btn.textContent = mostrando ? 'Ver menos detalhes' : 'Ver mais detalhes'
}