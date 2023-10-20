// game code
// taken from Stackabuse
//setTimeout(() => {},1000);
//this will be used throught 


//variables
var lv = (3);
var gameArray = []
let startButton = document.getElementById('startbutton')
let startButtonContainer = document.getElementById('startbutton-container')
let purple = document.getElementById('purple')
let green = document.getElementById('green')
let red = document.getElementById('red')
let blue = document.getElementById('blue')

startButton.addEventListener('click', function(){
    startButtonContainer.style.display = 'none';
    var lv = lv++;
    var gameArray = buildQuestion()
    round()
    play(gameArray)
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
function buildQuestion(){
    var myArray = [];
    for (let i = 1; i <= lv ; i++ ) {
    var q = Math.floor(Math.random() * 4 ) + 1;
    myArray.push(q)
    }
console.log(myArray)
var gameArray = myArray
return gameArray
}

/**
 * this increments the round counter
 */
function round(){
    let oldRound = parseInt(document.getElementById('roundNumber').innerText);
    document.getElementById("roundNumber").innerText = ++oldRound;
}

function play(gameArray){
    console.log(gameArray)
    for (let i = 0; i < lv ; i++){
        setTimeout(() => {
        console.log(gameArray[i])

        if (gameArray[i] = 1){
            purple.style.background = 'url("assets/images/purplelit.png") no-repeat center center';
            setTimeout(() => {
            purple.style.background = 'url("assets/images/purple.png") no-repeat center center';  
            },2000)
        } else if (gameArray[i] = 2){
            green.style.background = 'url("assets/images/greenlit.png") no-repeat center center';
            setTimeout(() => {
            green.style.background = 'url("assets/images/green.png") no-repeat center center';  
            },2000)
        } else if (gameArray = 3 ){
            red.style.background = 'url("assets/images/redlit.png") no-repeat center center';
            setTimeout(() => {
            red.style.background = 'url("assets/images/red.png") no-repeat center center';  
            },2000)
        } else {
            blue.style.background = 'url("assets/images/bluelit.png") no-repeat center center';
            setTimeout(() => {
            blue.style.background = 'url("assets/images/blue.png") no-repeat center center';  
            },2000)
        }

    },3000 * i)}
}