const button = document.querySelector('.hamburger')
const menu = document.querySelector('#mobile')

button.addEventListener('click', () => {
    button.classList.toggle('hamburger_active')
    menu.classList.toggle('clicked')
})