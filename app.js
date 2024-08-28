const passEl = document.querySelector("#generated-password")
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let password = ""

// function that generates the seucre password by randomly selecting 15 characters from the characters variable 
function generator() {
    for(let i=0;i<15;i++) {
       password += characters[Math.floor(Math.random() * characters.length-1)] 
    }
    
    return password
}

generator()

// updates the html of the page with the generated password
function assigner() {
     passEl.textContent += password
}

//resets the password and html by reloading the page
function reset() {
    location.reload()
}


