const screen = document.getElementById("screen");

function appendNumber(num) {
    screen.value += num;
}

function appendOperator(operator) {
    screen.value += operator;
}

function appendDot() {
    if (!screen.value.includes(".")) {
        screen.value += ".";
    }
}

function clearScreen() {
    screen.value = "";
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = "Error";
    }
}

// 🔬 Bilimsel Funksiyalar
function calculateSin() { screen.value = Math.sin(screen.value); }
function calculateCos() { screen.value = Math.cos(screen.value); }
function calculateTan() { screen.value = Math.tan(screen.value); }
function calculateSinh() { screen.value = Math.sinh(screen.value); }
function calculateCosh() { screen.value = Math.cosh(screen.value); }
function calculateTanh() { screen.value = Math.tanh(screen.value); }
function calculateLog() { screen.value = Math.log10(screen.value); }
function calculateLn() { screen.value = Math.log(screen.value); }
function calculateSqrt() { screen.value = Math.sqrt(screen.value); }
function calculateSquare() { screen.value = Math.pow(screen.value, 2); }
function calculateCube() { screen.value = Math.pow(screen.value, 3); }
function calculatePower() { screen.value += ""; }
function calculateExp() { screen.value = Math.exp(screen.value); }
function calculateInverse() { screen.value = 1 / screen.value; }
function calculateFactorial() {
    let num = parseInt(screen.value);
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    screen.value = fact;
}