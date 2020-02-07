const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__field');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}