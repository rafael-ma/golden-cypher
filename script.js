function toggleMode() {
    const body = document.body 
    const switchButton = document.querySelector('#switch button')

    body.classList.toggle('light')
    switchButton.animate('animation', 'slideOut .2s ease')
}

function encript() {
    const keyWord = document.querySelector('#keyWord').value
    const repositionKey =document.querySelector('#repositionKey').value
    const caractersNumber = document.querySelector('#charactersNumber').value
    const specialCaracter = document.querySelector('#specialCharacter').value
}