const passEl = document.querySelector("#generated-password")
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// function that generates the seucre password by randomly selecting 15 characters from the characters variable 
function generator() {
    let password = "" //Reset the password for each time the generate button 
    for(let i=0;i<15;i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length)) 
    }
    return password 
}



// Update HTML
function assigner() {
    const password = generator() // Generate a new password each time
     passEl.textContent = password // Replace the exisiting content with new html
}

function copy() {
    navigator.clipboard.writeText(passEl.textContent)
}


document.getElementById("btn-gen").addEventListener("click",assigner)
document.getElementById("btn-copy").addEventListener("click",copy)