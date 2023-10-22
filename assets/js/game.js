// game code
// taken from Stackabuse
//setTimeout(() => {},1000);
//this will be used throught 


//variables
var lv = 3;
var gameArray = [];
var guessArray = [];

const startButton = document.getElementById('startbutton')
const startButtonContainer = document.getElementById('startbutton-container')
const purple = document.getElementById('purple')
const green = document.getElementById('green')
const red = document.getElementById('red')
const blue = document.getElementById('blue')
const checkButton = document.getElementById('checkButton')
const trackerInner = document.getElementById('trackerinner')
const win = document.getElementById('win')
const lose = document.getElementById('lose')
const nextLevel = document.getElementById('nextlevel')
const home = document.getElementById('home1', 'home2')
const restart = document.getElementById('restart')

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
function play(playArray){
    for (let i = 0; i < lv ; i++){
        setTimeout(() => {
            
        if (playArray[i] === 1){
            var context = new AudioContext()
            var o = context.createOscillator()
            var  g = context.createGain()
            o.connect(g)
            g.connect(context.destination)
            o.start(0)
            var frequency = 261.6
            o.frequency.value = frequency
            g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 2)
            purple.style.background = 'url("assets/images/purplelit.png") no-repeat center center /cover';
            setTimeout(() => {
            purple.style.background = 'url("assets/images/purple.png") no-repeat center center /cover';  
            },2000)
        } else if (playArray[i] === 2){
            var context = new AudioContext()
            var o = context.createOscillator()
            var  g = context.createGain()
            o.connect(g)
            g.connect(context.destination)
            o.start(0)
            var frequency =  293.7
            o.frequency.value = frequency
            g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 2)
            green.style.background = 'url("assets/images/greenlit.png") no-repeat center center /cover';
            setTimeout(() => {
            green.style.background = 'url("assets/images/green.png") no-repeat center center /cover';  
            },2000)
        } else if (playArray[i] === 3 ){
            var context = new AudioContext()
            var o = context.createOscillator()
            var  g = context.createGain()
            o.connect(g)
            g.connect(context.destination)
            o.start(0)
            var frequency =  329.6
            o.frequency.value = frequency
            g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 2)
            red.style.background = 'url("assets/images/redlit.png") no-repeat center center /cover';
            setTimeout(() => {
            red.style.background = 'url("assets/images/red.png") no-repeat center center /cover';  
            },2000)
        } else {
            var context = new AudioContext()
            var o = context.createOscillator()
            var  g = context.createGain()
            o.connect(g)
            g.connect(context.destination)
            o.start(0)
            var frequency = 392.0
            o.frequency.value = frequency
            g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 2)
            blue.style.background = 'url("assets/images/bluelit.png") no-repeat center center /cover';
            setTimeout(() => {
            blue.style.background = 'url("assets/images/blue.png") no-repeat center center /cover';  
            },2000)
        }

    },2500 * i)}
    setTimeout(() => {
    guesses()
    gameArray = playArray
    return gameArray
    /* this checks the two arrays to see if they match*/
 
},2000 * lv)
}
    /**
     * this function adds a block each time a guess is made 
     */
    function addBlock(color){
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

      /* test code */
    /**
     * function to remove event listeners from running.
     */
    function remove(){
        purple.removeEventListener('click', purpleF)
        green.removeEventListener('click', greenF)
        red.removeEventListener('click', redF)
        blue.removeEventListener('click', blueF)
        backButton.removeEventListener('click', backF)
        checkButton.removeEventListener('click', checkF)
    }
    /**
     * function to add listeners
     */
    function guesses(){
        purple.addEventListener('click', purpleF)
        green.addEventListener('click', greenF)
        red.addEventListener('click', redF)
        blue.addEventListener('click', blueF)
        backButton.addEventListener('click', backF)
        checkButton.addEventListener('click', checkF)

    }

    /*functions to tell listeners what to do*/
    function purpleF(){
        var q = 1
        guessArray.push(q)
        var context = new AudioContext()
        var o = context.createOscillator()
        var  g = context.createGain()
        o.connect(g)
        g.connect(context.destination)
        o.start(0)
        var frequency = 261.6
        o.frequency.value = frequency
        g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
        purple.style.background = 'url("assets/images/purplelit.png") no-repeat center center /cover';
        addBlock(q)
        setTimeout(() => {
        purple.style.background = 'url("assets/images/purple.png") no-repeat center center /cover';  
        },500)
    }
    function greenF(){
        var q = 2
        guessArray.push(q)
        var context = new AudioContext()
        var o = context.createOscillator()
        var  g = context.createGain()
        o.connect(g)
        g.connect(context.destination)
        o.start(0)
        var frequency =  293.7
        o.frequency.value = frequency
        g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
        green.style.background = 'url("assets/images/greenlit.png") no-repeat center center /cover';
        addBlock(q)
        setTimeout(() => {
        green.style.background = 'url("assets/images/green.png") no-repeat center center /cover';  
        },500)
    }
    function redF(){
        var q = 3
        guessArray.push(q) 
        var context = new AudioContext()
        var o = context.createOscillator()
        var  g = context.createGain()
        o.connect(g)
        g.connect(context.destination)
        o.start(0)
        var frequency =  329.6
        o.frequency.value = frequency
        g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
        red.style.background = 'url("assets/images/redlit.png") no-repeat center center /cover';
        addBlock(q)
        setTimeout(() => {
        red.style.background = 'url("assets/images/red.png") no-repeat center center /cover';  
        },500)
    }
    function blueF(){
        var q = 4
        guessArray.push(q)
        var context = new AudioContext()
        var o = context.createOscillator()
        var  g = context.createGain()
        o.connect(g)
        g.connect(context.destination)
        o.start(0)
        var frequency = 392.0
        o.frequency.value = frequency
        g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
        blue.style.background = 'url("assets/images/bluelit.png") no-repeat center center /cover';
        addBlock(q)
        setTimeout(() => {
        blue.style.background = 'url("assets/images/blue.png") no-repeat center center /cover';  
        },500)
    }
    function backF(){
        guessArray.pop();
        $('#trackerinner').children().last().remove()
    }
function checkF(){
    let array1 = gameArray
    let array2 = guessArray
    /* lines 100 and 101 taken from stack overflow */
    var matching = (array1.length == array2.length) && array1.every(function(element, index){
        return element === array2[index]
    })
    if(matching === true){
        win.style.display = 'block';
        var newLv = lv
        var newLv = ++newLv;
        lv = newLv
        remove()
        return
    }else {
        lose.style.display = 'block';
        var newLv = 3
        lv = newLv
        remove()
        return
    }
}