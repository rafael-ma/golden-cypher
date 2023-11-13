function toggleMode() {
    const body = document.body 
    const switchButton = document.querySelector('#switch button')

    body.classList.toggle('light')
    switchButton.animate('animation', 'slideOut .2s ease')
}

function keyWordValidator(keyWord) {
    if (keyWord == '') {
        alert('Você deve inserir uma palavra chave')
        document.querySelector('#keyWord').focus()
        return true
    } else {
        return false
    }
}

function repositionKeyValidator(repositionKey) {
    if (repositionKey == '') {
        alert('Você deve inserir chave de reposição.')
        document.querySelector('#repositionKey').focus()
        return true
    } else {
        return false 
    }
}

function charactersNumberValidator(charactersNumber) {
    if (charactersNumber == '') {
        alert('Você deve inserir o número de caracteres.')
        document.querySelector('#charactersNumber').focus()
        return true
    } else 
    if ((charactersNumber < 4) || (charactersNumber > 24)) {
        alert('Você deve informar um número de caracteres entre 4 e 24.')
        document.querySelector('#charactersNumber').value = ''
        document.querySelector('#charactersNumber').focus()
        return true
    } else {
        return false
    }
}

function specialCharacterValidator(specialCharacter){
    let nonSpecial = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let error = false
    for (let i = 0; i < 36; i++) {
        if (specialCharacter == nonSpecial[i]) {
            alert('Você deve informar um caractere do tipo especial. \nExemplo: @ # % & _')
            document.querySelector('#specialCharacter').value = ''
            document.querySelector('#specialCharacter').focus()
            error = true
        }
    }
    if (specialCharacter == '') {
        document.querySelector('#specialCharacter').value = '-'
    }
    
    return error
}

function encript() {
    const keyWord = document.querySelector('#keyWord').value.toLowerCase()
    const repositionKey = document.querySelector('#repositionKey').value.toLowerCase()
    const charactersNumber = Number(document.querySelector('#charactersNumber').value)
    const specialCharacter = document.querySelector('#specialCharacter').value.toLowerCase()
    specialCharacterValidator(specialCharacter)
}