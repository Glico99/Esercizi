const video = document.querySelector('.hover');
video.addEventListener('hover',play);

function play(){
    video.muted = false;
}
