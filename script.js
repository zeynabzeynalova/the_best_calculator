let darkMode = true;

document.getElementById("theme-toggle").addEventListener("click", function() {
    darkMode = !darkMode;
    document.body.style.background = darkMode ? "#1e1e1e" : "#ffffff";
});

function insertValue(value) {
    document.getElementById("display").value += value;
    playSound();
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function calculateAdvanced(operation) {
    let input = parseFloat(document.getElementById("display").value);
    switch (operation) {
        case "sqrt":
            document.getElementById("display").value = Math.sqrt(input);
            break;
        case "square":
            document.getElementById("display").value = Math.pow(input, 2);
            break;
    }
}

function playSound() {
    let audio = new Audio("click.mp3");
    audio.play();
}