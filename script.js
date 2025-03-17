const screen = document.ge// Kalkulyator və Pul Çevirici arasında keçid funksiyası
function switchMode(mode) {
    const calculatorSection = document.getElementById('calculator');
    const currencySection = document.getElementById('currency');

    // Hər ikisini gizlət
    calculatorSection.style.display = 'none';
    currencySection.style.display = 'none';

    // İstədiyinizi göstər
    if (mode === 'calculator') {
        calculatorSection.style.display = 'block';
    } else if (mode === 'currency') {
        currencySection.style.display = 'block';
    }
}

// Kalkulyator və Pul Çevirici üçün əvvəlki JavaScript kodları buraya əlavə edilir