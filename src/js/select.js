document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.getElementById("dropdown");
    var customArrowDown = document.getElementById("custom-arrow-down");
    var customArrowUp = document.getElementById("custom-arrow-up");

    dropdown.addEventListener("click", function() {
        if (dropdown.getAttribute("data-open") === "true") {
            dropdown.setAttribute("data-open", "false");
            customArrowDown.style.display = "block";
            customArrowUp.style.display = "none";
        } else {
            dropdown.setAttribute("data-open", "true");
            customArrowDown.style.display = "none";
            customArrowUp.style.display = "block";
        }
    });
});
