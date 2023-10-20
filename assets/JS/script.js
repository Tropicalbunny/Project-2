console.log("hello world")
// info popup 

let infoOpen = document.getElementById('info-open');
let infoContainer = document.getElementById('info-container');
let infoClose = document.getElementById('info-close');

infoOpen.addEventListener('click', function(){
    infoContainer.style.display = 'block';
});

infoClose.addEventListener('click', function(){
    infoContainer.style.display = 'none';
})