function toggleMode() {
    const body = document.body 
    const switchButton = document.querySelector('#switch button')

    body.classList.toggle('light')
    switchButton.animate('animation', 'slideOut .2s ease')
}