// get uploaded video
document.getElementById("input").addEventListener("change", function() {
    var media = URL.createObjectURL(this.files[0]);
    var video = document.getElementById("video");
    video.src = media;
    video.style.display = "block";
    video.play();
});

// button functionality
const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
var video = document.querySelector("#video");

// finish annotation
playButton.disabled = true;
playButton.addEventListener('click', () => {
    pauseButton.disabled = false;
    playButton.disabled = true;
    video.play();
});

// annotation button
pauseButton.addEventListener('click', () => {
    playButton.disabled = false;
    pauseButton.disabled = true;

    video.pause()
    const ts = `<p><u>Timestamp</u>: ${video.currentTime}</p>`
    document.querySelector("#notes").insertAdjacentHTML('beforeend', ts)
});