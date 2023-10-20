// info popup functions

//variables
let infoOpen = document.getElementById('info-open');
let infoContainer = document.getElementById('info-container');
let infoClose = document.getElementById('info-close');

//functions
infoOpen.addEventListener('click', function(){
    infoContainer.style.display = 'block';
})

infoClose.addEventListener('click', function(){
    infoContainer.style.display = 'none';
})

//page transition

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})

// game code

//variables
var lv = (4);

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
    var q = Math.floor(Math.random() * 3);
    myArray.push(q)
}}
/**
 * this increments the round counter
 */
function round(){
    let oldRound = parseInt(document.getElementById('roundCounter').innerText)
    document.getElementById('roundCounter').innterText = ++oldRound
}
console.log(myArray)
console.log(myArray[1])
console.log(myArray[2])
console.log(myArray[3])
console.log(myArray[4])