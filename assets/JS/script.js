// info popup functions

let infoOpen = document.getElementById('info-open');
let infoContainer = document.getElementById('info-container');
let infoClose = document.getElementById('info-close');

console.log(infoOpen)

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
