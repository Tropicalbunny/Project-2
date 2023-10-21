// game code
// taken from Stackabuse
//setTimeout(() => {},1000);
//this will be used throught 


//variables
var lv = 2;
var gameArray = []
var guessArray = []
var on = false

let startButton = document.getElementById('startbutton')
let startButtonContainer = document.getElementById('startbutton-container')
let purple = document.getElementById('purple')
let green = document.getElementById('green')
let red = document.getElementById('red')
let blue = document.getElementById('blue')
let checkButton = document.getElementById('checkButton')
let trackerInner = document.getElementById('trackerinner')

let win = document.getElementById('win')
let lose = document.getElementById('lose')
let nextLevel = document.getElementById('nextlevel')
let home = document.getElementById('home1', 'home2')
let restart = document.getElementById('restart')

nextLevel.addEventListener('click', function(){
    win.style.display = 'none';
    startButtonContainer.style.display = 'block';
    $('#trackerinner').children().remove()

})

startButton.addEventListener('click', function(){
    startButtonContainer.style.display = 'none';
    resetArray()
    var gameArray = buildQuestion(lv)
    round()
    play(gameArray)

})
//functions

/**
 * this builds an array for the game, allowing to be random and incremented for each round
 */
function resetArray(array){
    array = []
    guessArray = array
    return guessArray
}
function buildQuestion(lv){
    var myArray = [];
    for (let i = 1; i <= lv ; i++ ) {
    var q = Math.floor(Math.random() * 4 ) + 1;
    myArray.push(q)
    }
console.log('build', myArray)
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
    console.log('play', gameArray)
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
        on = true;
        // guesses()
       
},2000 * lv)
}



/**
 * function that listens for input from user
 */
// function guesses(){
    if (on = true){
     /* this connects to the back button, to remove from the array and remove divs*/
     backButton.addEventListener('click', function(){
        guessArray.pop();
        console.log(guessArray)
        $('#trackerinner').children().last().remove()
        })
    /* this checks the two arrays to see if they match*/
    checkButton.addEventListener('click', function(){
        on = false;
        let array1 = gameArray
        let array2 = guessArray
        console.log('gamearray', array1)
        console.log('guessarray', array2)
        /* lines 100 and 101 taken from stack overflow */
        var matching = (array1.length == array2.length) && array1.every(function(element, index){
            return element === array2[index]
    })
        console.log(matching)
            if(matching === true){
                console.log('you won')
                win.style.display = 'block';
                var newLv = lv
                console.log('before', newLv)
                var newLv = ++newLv;
                console.log('after', newLv)
                lv = newLv
                return
            }else {
                console.log('you lost')
                lose.style.display = 'block';
                return
        }
        })    


    purple.addEventListener('click', function(){
        var q = 1
        console.log(q)
        guessArray.push(q)
        purple.style.background = 'url("assets/images/purplelit.png") no-repeat center center /cover';
        addBlock(q)
        setTimeout(() => {
        purple.style.background = 'url("assets/images/purple.png") no-repeat center center /cover';  
        },500)})
    green.addEventListener('click', function(){
        var q = 2
        console.log(q)
        guessArray.push(q)
        green.style.background = 'url("assets/images/greenlit.png") no-repeat center center /cover';
        addBlock(q)
        setTimeout(() => {
        green.style.background = 'url("assets/images/green.png") no-repeat center center /cover';  
        },500)})
    red.addEventListener('click', function(){
        var q = 3
        console.log(q)
        guessArray.push(q) 
        red.style.background = 'url("assets/images/redlit.png") no-repeat center center /cover';
        addBlock(q)
        setTimeout(() => {
        red.style.background = 'url("assets/images/red.png") no-repeat center center /cover';  
        },500)})
    blue.addEventListener('click', function(){
        var q = 4
        console.log(q)
        guessArray.push(q)
        blue.style.background = 'url("assets/images/bluelit.png") no-repeat center center /cover';
        addBlock(q)
        setTimeout(() => {
        blue.style.background = 'url("assets/images/blue.png") no-repeat center center /cover';  
        },500)})}
    

    /**
     * this function adds a block each time a guess is made 
     */
    function addBlock(color){
        console.log('color', color)
        if (color === 1){
            var block = document.createElement('div')
            block.classList.add('blockpurple')
            trackerInner.appendChild(block)
        } else if(color === 2){
            var block = document.createElement('div')
            block.classList.add('blockgreen')
            trackerInner.appendChild(block)            
        } else if(color === 3){
            var block = document.createElement('div')
            block.classList.add('blockred')
            trackerInner.appendChild(block)            
        } else if(color === 4){
            var block = document.createElement('div')
            block.classList.add('blockblue')
            trackerInner.appendChild(block)            
        } else {
            throw 'error, color ${color}. Abort!';
        }

    }