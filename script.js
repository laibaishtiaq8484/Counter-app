let display = document.getElementById("counter-display");
let btn = document.getElementById("my-btn");

let total = 0;

btn.addEventListener("click", () => {
    total++;

    if (total > 0) {
        display.style.color = "red";
        display.innerText = `${total} - these are special numbers!`;
    } else {
        display.innerText = total;
    }
});