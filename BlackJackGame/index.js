
let cards = []
let sum =0;
let hasBlackJack = false
let isAlive = false
let message = ""
let player={
    name : "Per $:",
    chips : 20
}


let playerEl = document.getElementById("player-el")
playerEl.textContent=player.name+player.chips


let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    let ans=Math.floor(Math.random()*13)+1
    if(ans>10){
        return 10
    }
    else if(ans===1){
        return 11;
    }
    return ans
}

function startGame(){
    cards=[]
    sum=0
    hasBlackJack=false
    let firstCard =getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum=firstCard+secondCard
    isAlive=true
    renderGame();
}

function renderGame(){
    sumEl.innerText="Sum: "+sum
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    if(sum<21){
        message="Do you want to draw a new card?😶"
    }
    else if(sum===21){
        message= "Yeah!! you got a BlackJack!!🥳"
        hasBlackJack = true
    }
    else{
        message="You are out of the game>>>>>😭"
        isAlive = false
    }
    messageEl.textContent=message
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
    let newCard1=getRandomCard()
    cards.push(newCard1)
    sum+=newCard1
    renderGame()
    }
}