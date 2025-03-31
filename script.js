// Ekranı təmizlə
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Sonuncu simvolu sil
function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Ekrana simvol əlavə et
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Nəticəni hesabla
function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

// Tünd və açıq mod dəyişimi
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    // Günəş və Ay simvolunu dəyiş
    if (document.body.classList.contains("dark-mode")) {
        this.textContent = "☀";
    } else {
        this.textContent = "🌙";
    }
});