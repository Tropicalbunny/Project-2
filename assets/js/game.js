// game code

//variables
var lv = (4);
let startButton = document.getElementById('startbutton')
let startButtonContainer = document.getElementById('startbutton-container')

startButton.addEventListener('click', function(){
    startButtonContainer.style.display = 'none';
    var lv = lv++
    buildQuestion()
    round()
})
//functions

// testing for game array
/**
 * function to start the game
 */
function start(){
    var lv = lv++
    buildQuestion()
    round()
}
/**
 * this builds an array for the game, allowing to be random and incremented for each round
 */
function buildQuestion() {
var myArray = [];
for (let i = 1; i <= lv ; i++ ) {
    var q = Math.floor(Math.random() * 4 ) + 1;
    myArray.push(q)

console.log(myArray)
console.log(myArray[1])
console.log(myArray[2])
console.log(myArray[3])
console.log(myArray[4])
}}
/**
 * this increments the round counter
 */
function round(){
    let oldRound = parseInt(document.getElementById('roundCounter').innerText)
    document.getElementById('roundCounter').innterText = ++oldRound
}
