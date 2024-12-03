document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle'); // Или: document.querySelector('.button');
    const root = document.documentElement;

    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            root.classList.add(savedTheme);
        }
    }

    loadTheme();

    themeToggle.addEventListener('click', () => {
        root.classList.toggle('light');
        if (root.classList.contains('light')) {
            localStorage.setItem('theme', 'light');
            console.debug("Light theme");
        } else {
            localStorage.removeItem('theme');
            console.debug("Dark theme");
        }
    });
});
