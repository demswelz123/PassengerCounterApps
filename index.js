// //   document.getElementById("count-el").innerText = 5


let saveEl =  document.getElementById("save-el")  
let CountEl = document.getElementById("count-el")


let count = 0

function increment (){

     count += 1

     CountEl.innerText = count
}
function decrement(){

    count = count -1
    CountEl.innerText = count
}

function save(){
    let countAll = count + " - "
    
    saveEl.textContent += countAll
    CountEl.textContent = 0
    count = 0
}





// let username = " Noel"
// let message = " you have 3 notifications"


// let messageUser = username + " ," + message
// console.log(messageUser)

// let name = "Noel "
// let greeting = "Hi , my name is"

// let myGreeting = greeting +" " + name
// console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el")

// let nameP = "Noel"
// let greetingP = "welcome back "

// welcomeEl.innerText = greetingP + nameP
// welcomeEl.innerText += " good morning"