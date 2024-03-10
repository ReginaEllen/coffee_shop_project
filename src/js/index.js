import myFunction, { multiply } from "./myModule";

myFunction();

const result = multiply(2, 5);

console.log(result);

// mein Code //


var burgermenu = document.getElementById("open"); 

burgermenu.addEventListener("click", function() {
    var overlay = document.getElementById("overlay");     
    overlay.style.display = "block"
});

var close_button = document.getElementById("close-button");

close_button.addEventListener("click", function() {
    var overlay = document.getElementById("overlay"); 
    overlay.style.display = "none"
});




