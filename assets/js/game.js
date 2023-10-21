// game code
// taken from Stackabuse
//setTimeout(() => {},1000);
//this will be used throught 


//variables
var lv = (2);
var gameArray = []
var guessArray = []
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

/**
 * this changes the images depending on the number in the Array
 */
function play(gameArray){
    console.log(gameArray)
    for (let i = 0; i < lv ; i++){
        setTimeout(() => {
        console.log(gameArray[i])
            
        if (gameArray[i] === 1){
            purple.style.background = 'url("assets/images/purplelit.png") no-repeat center center /cover';
            setTimeout(() => {
            purple.style.background = 'url("assets/images/purple.png") no-repeat center center /cover';  
            },2000)
        } else if (gameArray[i] === 2){
            green.style.background = 'url("assets/images/greenlit.png") no-repeat center center /cover';
            setTimeout(() => {
            green.style.background = 'url("assets/images/green.png") no-repeat center center /cover';  
            },2000)
        } else if (gameArray[i] === 3 ){
            red.style.background = 'url("assets/images/redlit.png") no-repeat center center /cover';
            setTimeout(() => {
            red.style.background = 'url("assets/images/red.png") no-repeat center center /cover';  
            },2000)
        } else {
            blue.style.background = 'url("assets/images/bluelit.png") no-repeat center center /cover';
            setTimeout(() => {
            blue.style.background = 'url("assets/images/blue.png") no-repeat center center /cover';  
            },2000)
        }

    },2500 * i)}
    setTimeout(() => {
        guesses()
        check(gameArray, guessArray)

},2000 * lv)
}



/**
 * function that listens for input from user
 */
function guesses(){
purple.addEventListener('click', function(){
    var q = 1
    console.log(q)
    guessArray.push(q)
    console.log(guessArray)
    purple.style.background = 'url("assets/images/purplelit.png") no-repeat center center /cover';
    setTimeout(() => {
    purple.style.background = 'url("assets/images/purple.png") no-repeat center center /cover';  
    },500)})
green.addEventListener('click', function(){
    var q = 2
    console.log(q)
    guessArray.push(q)
    console.log(guessArray)
    green.style.background = 'url("assets/images/greenlit.png") no-repeat center center /cover';
    setTimeout(() => {
    green.style.background = 'url("assets/images/green.png") no-repeat center center /cover';  
    },500)})
red.addEventListener('click', function(){
    var q = 3
    console.log(q)
    guessArray.push(q)
    console.log(guessArray)
    red.style.background = 'url("assets/images/redlit.png") no-repeat center center /cover';
    setTimeout(() => {
    red.style.background = 'url("assets/images/red.png") no-repeat center center /cover';  
    },500)})
blue.addEventListener('click', function(){
    var q = 4
    console.log(q)
    guessArray.push(q)
    console.log(guessArray)
    blue.style.background = 'url("assets/images/bluelit.png") no-repeat center center /cover';
    setTimeout(() => {
    blue.style.background = 'url("assets/images/blue.png") no-repeat center center /cover';  
    },500)})}

    /**
     * This function checks generated array to the guessed array from the user.
     */
 function check(array1, array2){
        console.log('gamearray', array1)
        console.log('guessarray', array2)
        if(array1.length = array2.length){
            console.log('good')
            if(array1 === array2){
                console.log('you won')
            }else {
                console.log('you lost')
            }
        }else{
            var one = gameArray
            var two = guessArray
            console.log('bad')
            window.setTimeout(check(), 1000);
        }}