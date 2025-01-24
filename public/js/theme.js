document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement;

    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            root.classList.add(savedTheme);
            updateButtonText(savedTheme);
        } else {
            updateButtonText('dark');
        }
    }

    function updateButtonText(theme) {
        if (theme === 'light') {
            themeToggle.innerHTML = '<i class="fa-solid fa-mountain-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }

    loadTheme();

    themeToggle.addEventListener('click', () => {
        root.classList.toggle('light');
        if (root.classList.contains('light')) {
            localStorage.setItem('theme', 'light');
            console.debug("Light theme");
            updateButtonText('light');
        } else {
            localStorage.removeItem('theme');
            console.debug("Dark theme");
            updateButtonText('dark');
        }
    });
});
