const passEl = document.querySelector("#generated-password")
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// function that generates the seucre password by randomly selecting 15 characters from the characters variable 
function generator() {
    let password = "" //Reset the password for each time the generate button 
    for(let i=0;i<15;i++) {
       password += characters[Math.floor(Math.random() * characters.length-1)] 
    }
    
    return password
}



// Update HTML
function assigner() {
    const password = generator() // Generate a new password each time
     passEl.textContent = password // Replace the exisiting content with new html
}


document.getElementById("btn-gen").addEventListener("click",assigner)