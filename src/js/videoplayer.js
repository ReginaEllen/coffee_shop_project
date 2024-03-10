var playButton = document.getElementById("play");

// Funktion hinzufügen, die beim Klicken auf das play-Element aufgerufen wird
playButton.addEventListener("click", function() {
    // Das Video-Element abrufen
    var video = document.getElementById("video").querySelector("video");
    if (video.paused) {
        video.play();
        playButton.style.display = "none";
    } else {
        video.pause();
        playButton.style.display = "block";
    }
});

