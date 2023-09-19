
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let shelfDone = false

let message = document.getElementById("main-heading")
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
let fruit_stack = document.getElementById("fruit-stack").textContent = "||" + fruit + "||"
let start_btn = document.getElementById("start-btn")
let playAgain_btn = document.getElementById("play-again-btn")
let bodyColor = document.getElementById("main-body")

function fruitShelf(){

    for(let i=0;i<5;i++){
        if(fruit[i] === "🍎"){
            appleShelf.textContent += fruit[i] + " "
        }else
        {
            orangeShelf.textContent += fruit[i] + " "
        }
    }
    shelfDone = true

}

start_btn.addEventListener("click",function(){

    if(shelfDone === false){
        fruitShelf()
    }else{
        message.textContent = "Oh! No More Fruits to Put on The Shelf."
        message.style.color = "#ffffff"
        bodyColor.style.backgroundColor = "#D0312D"
    }
    
})

playAgain_btn.addEventListener("click",function(){

    window.location.reload();

})
