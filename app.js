const passEl = document.querySelector("#generated-password")
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let password = ""

function generator() {
    for(let i=0;i<15;i++) {
       password += characters[Math.floor(Math.random() * characters.length-1)] 
    }
    
    return password
}

generator()


function assigner() {
     passEl.textContent += password
}

function reset() {
    location.reload()
}


