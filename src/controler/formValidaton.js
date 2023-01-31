let checkName = (name) => {
    if (name.length < 3) {
        return false
    }
    return true
}
let checkEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
let checkMessage = (message) => {
    if (message.length < 10) {
        return false
    }
    return true
}
let formValidation = () => {
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let message = document.querySelector('#message').value
    let nameError = document.querySelector('#nameError')
    let emailError = document.querySelector('#emailError')
    let messageError = document.querySelector('#messageError')
    if (!checkName(name)) {
        nameError.classList.remove('hidden')
        return false
    }
    else
        nameError.classList.add('hidden')
    if (!checkEmail(email)) {
        emailError.classList.remove('hidden')
        return false
    }
    else
        emailError.classList.add('hidden')
    if (!checkMessage(message)) {
        messageError.classList.remove('hidden')
        return false
    }
    else
        messageError.classList.add('hidden')
    return true
}
export default formValidation
