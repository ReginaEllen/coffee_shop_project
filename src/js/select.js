document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.getElementById("dropdown");
    var customArrowDown = document.getElementById("custom-arrow-down");
    var customArrowUp = document.getElementById("custom-arrow-up");

    var inputs = document.querySelectorAll("input");
    var textarea =  document.querySelector("textarea");

    function updateArrow() {
        if (dropdown.getAttribute("data-open") === "true") {
            customArrowDown.style.display = "none";
            customArrowUp.style.display = "block";
        } else {
            customArrowDown.style.display = "block";
            customArrowUp.style.display = "none";
        }
    }

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

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", function() {
            customArrowDown.style.display = "block";
            customArrowUp.style.display = "none";
            dropdown.setAttribute("data-open", "false")
        });
    }

    textarea.addEventListener("click", function() {
        customArrowDown.style.display = "block";
        customArrowUp.style.display = "none";
        dropdown.setAttribute("data-open", "false")
    });

    updateArrow();
});
