const display = document.querySelector("#text-area");
const countButton = document.querySelectorAll(".count-btn");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
let audio = new Audio('click.wav');
let count = 0;

function updateCount(newCount) {
    count = newCount;
    display.textContent = count;
}

countButton.forEach(cButton => {
    cButton.addEventListener("click", function() {
        audio.play();
        switch(cButton) {
            case increase:
                updateCount(count + 1);
                break;
            case decrease:
                updateCount(count - 1);
                break;
            case reset:
                updateCount(0);
                break;
        }
    });
});