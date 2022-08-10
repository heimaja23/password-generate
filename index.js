let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")
let savebutton = document.getElementById("savebutton")
const generatePassword = (len) => {
    const loweralpabet  = "abcdefghijklmnopqrstuvwxyz"
    const upperalpabet  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const number        = "0123456789"
    const symbol        = "!@#$%^&*()_-+={}:;'/?<>"

    const data = loweralpabet + upperalpabet + number + symbol
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)]; 
    }
    return generator
}

const getPassword = () => {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword 
    setTimeout(() => {
        alert('Password has been generated!')
    },1000)
   
}

const savePassword = () => {
    document.title = password.value
    savebutton.setAttribute ('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent('password saya : ' + document.title))
    savebutton.setAttribute('download', 'mypassword')
    setTimeout(() => {
        alert('Password has been save')
    },1000)
}

