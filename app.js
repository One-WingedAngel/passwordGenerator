const passEl = document.querySelector("#generated-password")
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let password = ""

function generator() {
    for(let i=0;i<15;i++) {
       password += characters[Math.floor(Math.random() * characters.length-1)] 
    }
    console.log(password)
    return password
}


function assigner() {
    passEl.textContent += "Hello" 
}
