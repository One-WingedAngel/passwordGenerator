const passEl = document.querySelector("#generated-password")
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// function that generates the seucre password by randomly selecting 15 characters from the characters variable 
function generator() {
    let password = ""

    for(let i=0;i<15;i++) {
       password += characters[Math.floor(Math.random() * characters.length-1)] 
    }
    
    return password
}



// updates the html of the page with the generated password
function assigner() {
    const password =generator()
     passEl.textContent = password
}


document.getElementById("btn-gen").addEventListener("click",assigner)