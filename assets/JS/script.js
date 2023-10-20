console.log("hello world")
// info popup 

let infoOpen = document.getElementById('info-open');
let infoContainer = document.getElementById('info-container');
let infoClose = document.getElementById('info-close');
let infoOpen2 = document.getElementById('info-open2');

infoOpen.addEventListener('click', function(){
    infoContainer.style.display = 'block';
});
infoOpen2.addEventListener('click', function(){
    infoContainer.style.display = 'block';
});

infoClose.addEventListener('click', function(){
    infoContainer.style.display = 'none';
})