const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__field');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    console.log('Update the button')
}


video.addEventListener('click', togglePlay);
video.addEventListener('play', togglePlay);
video.addEventListener('pause', togglePlay);

toggle.addEventListener('click', togglePlay);