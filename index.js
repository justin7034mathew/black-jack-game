

// if...else condition

// let firstCard = 10;
// let secondCard = 11;
// let sum = firstCard + secondCard;

// if(sum < 21){
//     console.log("Do you want draw a new card ? 😕");
// }else if(sum === 21){
//     console.log("Wohoo! You've got Blackjack! 🥳");
// }else {
//     console.log("You're out of the game! 🥲");
// }

// cHALLENGE 

// let age = 19;
// if (age < 21){
//     console.log("you can not enter the club");
// }else{
//     console.log("Welcome!");
// }

// Challenge

// let age = 100;

// if(age <100){
//     console.log("Not Elegible");
// }else if(age === 100){
//     console.log("here ia your birthday card from the king");
// }else{
//     console.log("Not Elegible, you have alredy gotten one ");
// }


// let firstCard = 10;
// let secondCard = 11;
// let sum = firstCard + secondCard ;
// let isAlive = true;
// let message = " ";

// if(sum <= 20){
//     message = ("Do you want draw a new card ? 😕");
    
// }else if(sum === 21){
//     message = ("Wohoo! You've got Blackjack! 🥳");
// }else {
//     message = ("You're out of the game! 🥲");
//     isAlive = false
// }

// console.log(message);
   
// Challenge
// console.log(4 === 3); // false
// console.log(5 > 2); //true
// console.log(12 > 12); // false
// console.log(3 < 0);// false
// console.log(3 >= 3);//true
// console.log(11 <=11);//true
// console.log(3 <= 2);//false

// let firstCard = 6;
// let secondCard =  1;
// let sum = firstCard + secondCard ;
// let isAlive = true;
// let message = " ";
//  let messageEl = document.getElementById("message-el")
//  let sumEl = document.getElementById("sum-el")
//  let cardsEl = document.getElementById("cards-el")
 

// function renderGame(){
//     cardsEl.textContent = "Cards :" + firstCard +" "+ secondCard
//     sumEl.textContent=  "Sum : " + sum;
//     if(sum <= 20){
//     message = "Do you want draw a new card ? "; 
// }else if(sum === 21){
//     message = "You've got Blackjack! ";
// }else {
//     message = "You're out of the game! ";
//     isAlive = false
// }
// messageEl.textContent = message

// }

// function startGame(){
//     renderGame()
// }


// // const gameE = document.querySelector('#game').addEventListener('click', startGame)

// function newCard(){
//     console.log("Drawing a new card from the deck");

//     card = 10;
//     sum += card;
//     renderGame()
// }

// ARRAY

// let skills = ["c-programing","c++-programing","HTML","css","javascript"]

// console.log(skills[4]);
// console.log(skills[0]);
// console.log(skills[2]);
// console.log(skills[1]);

// let mySelf = ["Justin mathew",19,true]

// let message =[
//     "Hey, how's  it going?",
//     "I'm greate,tank you! How about you?",
//     "All good.Been working on my portfolio lately."
// ]
// let newMessage = "same here"

// message.push(newMessage)
// console.log(message);
// message.pop(newMessage)
// console.log(message);

// let firstCard = getRandomCard();
// let secondCard =  getRandomCard();
// let cards = [firstCard,secondCard]
// let sum = firstCard + secondCard ;
// let isAlive = true;
// let message = " ";
//  let messageEl = document.getElementById("message-el")
//  let sumEl = document.getElementById("sum-el")
//  let cardsEl = document.getElementById("cards-el")
// function getRandomCard(){
//     return 5
// }
  
// function renderGame(){
//     cardsEl.textContent = "Cards :"

//     for(let i = 0; i < cards.length ; i++){
//         cardsEl.textContent += cards[i] + " "
//     }
//     sumEl.textContent=  "Sum : " + sum;
//     if(sum <= 20){
//     message = "Do you want draw a new card ? "; 
// }else if(sum === 21){
//     message = "You've got Blackjack! ";
// }else {
//     message = "You're out of the game! ";
//     isAlive = false
// }
// messageEl.textContent = message

// }

// function startGame(){
//     renderGame()
// }

// function newCard(){
//      let card = getRandomCard();
//     sum += card;
//     cards.push(card)
//     console.log(cards);
//     renderGame()
// }


//geneerating Random numbers with math.random()

// what does math.random()  do?

//taking any random numbers using maths keyword between 0 and 1 (not inclusive of one)


    


    //Random number can hold
//   0,1,2,3,4,5

// From :0.
// To :4

// let flooredNumber = Math.floor(3.45632)

// console.log(flooredNumber);

// my Answer : take out the floting numbers

// function rollDice(){
//     let randomNumber = Math.floor(Math.random()  * 14) 
//     return randomNumber
// }

// console.log(rollDice());
let player = { 
    name: "justin",
    chips: 200
}

let cards = []
let sum = 0;
let hasBlackjack = false;
let isAlive = true;
let message = " ";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEL= document.getElementById("player-el")

playerEL.textContent = player.name +" : $" + player.chips 

function getRandomCard(){
  let randomNumber = Math.floor(Math.random()  * 13) + 1;
  if(randomNumber > 10){
        return 10;
  }else if(randomNumber === 1){
        return 11
  }else{
    return randomNumber
  }
}
console.log(getRandomCard());  
function renderGame(){
    cardsEl.textContent = "Cards :"
    for(let i = 0; i < cards.length ; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent=  "Sum : " + sum;
    if(sum <= 20){
    message = "Do you want draw a new card ? "; 
}else if(sum === 21){
    message = "You've got Blackjack! ";
    hasBlackjack = true
}else {
    message = "You're out of the game! ";
    isAlive = false
}
messageEl.textContent = message

}

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard;
    renderGame()
}
function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        
        renderGame()
    }
}