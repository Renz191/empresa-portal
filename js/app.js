console.log('Renan Portfolio Loaded');

// Test Button Handler
const testBtn = document.getElementById('test-btn');
if (testBtn) {
    testBtn.addEventListener('click', () => {
        alert('Teste executado com sucesso! A integração está funcionando.');
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
