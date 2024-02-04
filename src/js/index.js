import myFunction, { multiply } from "./myModule";

myFunction();

const result = multiply(2, 5);

console.log(result);


var playButton = document.getElementById("play");

// Funktion hinzufügen, die beim Klicken auf das play-Element aufgerufen wird
playButton.addEventListener("click", function() {
    // Das Video-Element abrufen
    var video = document.getElementById("video").querySelector("video");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
