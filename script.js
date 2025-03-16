let darkMode = true;

document.getElementById("theme-toggle").addEventListener("click", function() {
    darkMode = !darkMode;
    document.body.classList.toggle("light-mode", !darkMode);
    document.body.classList.toggle("dark-mode", darkMode);
});

document.body.classList.add("dark-mode"); // İlk açılışda Dark Mode olsun

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
function playSound(type) {
    let sound;
    if (type === "click") sound = new Audio("click.mp3");
    else if (type === "success") sound = new Audio("success.mp3");
    else if (type === "error") sound = new Audio("error.mp3");
    
    sound.play();
}

function speakResult(text) {
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "az-AZ"; // Azərbaycan dili
    window.speechSynthesis.speak(speech);
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
        playSound("success");
        speakResult("Cavab " + result);
    } catch {
        document.getElementById("display").value = "Error";
        playSound("error");
        speakResult("Səhv baş verdi.");
    }
}
function calculate() {
    let startTime = performance.now();
    
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
        playSound("success");
    } catch {
        document.getElementById("display").value = "Error";
        playSound("error");
    }
    
    let endTime = performance.now();
    document.getElementById("speedometer").innerText = (endTime - startTime).toFixed(2) + " ms";
}
function show3DResult(result) {
    let canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    document.body.appendChild(canvas);
    let ctx = canvas.getContext('2d');
    
    ctx.font = '48px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(result, 50, 100);
    
    // 3D rendering
    canvas.style.transform = 'rotateY(30deg) rotateX(10deg)';
}
function speakResult(text) {
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "az-AZ"; // Azərbaycan dili
    window.speechSynthesis.speak(speech);
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
        playSound("success");
        speakResult("Cavab " + result);
    } catch {
        document.getElementById("display").value = "Error";
        playSound("error");
        speakResult("Səhv baş verdi.");
    }
}