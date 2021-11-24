let videoYoutube = document.querySelector('#youtube');
let videoPc = document.querySelector('#video');


let rigthRow = document.querySelector('#rigth');
let leftRow = document.querySelector('#left');
let text = document.querySelector('#tipoVideo');

rigthRow.addEventListener('click', () => {
    videoYoutube.style.visibility = "visible";
    videoPc.style.visibility = "hidden";
    text.innerHTML = "Video from Youtube";
});

leftRow.addEventListener('click', () => {
    videoPc.style.visibility = "visible";
    videoYoutube.style.visibility = "hidden";
    text.innerHTML  = "Local Video";
});