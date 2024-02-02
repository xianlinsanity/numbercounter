let countEl = document.getElementById ("count-el")
let count = 0
let saveEL = document.getElementById ("save-el")

function increment() {
    count += 1
    countEl.textContent =count
}

function save() {
    let counter = count + " - "
    saveEL.textContent += counter
    countEl.textContent = 0
    count = 0
}



// let name = "Cristian"
// let greeting = "Hi, my name is: "

// let myGreeting = greeting + name

// console.log (myGreeting)

// let greetings = "Welcome back "
// let name = "Cristian Omana"

// let welcomeEl = document.getElementById ("welcome-el")
//     welcomeEl.innerText = greetings + name

//     welcomeEl.innerText += "😘"