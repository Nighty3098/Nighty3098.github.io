document.addEventListener('DOMContentLoaded', function() {
    let blocks = document.querySelectorAll('.animated');

    function checkBlocksVisibility() {
        let windowHeight = window.innerHeight;

        blocks.forEach(block => {
            let blockPosition = block.getBoundingClientRect().top;

            if (blockPosition < windowHeight - 200) {
                block.style.opacity = "1";
                block.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener('scroll', checkBlocksVisibility);
});

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('imageToggle');
    const imageContainer = document.querySelector('.image-container');
    const labelText = document.querySelector('.label-text');
    const images = ['imgs/1.jpg', 'imgs/2.jpg', 'imgs/3.jpg'];
    let currentIndex = 0;
    let clickCount = 0;
    let lastClickTime = 0;
    let holdTimer;

    function switchImage(index) {
        imageContainer.innerHTML = `<img src="${images[index]}" alt="Image ${index + 1}" class="active">`;
    }

    function handleHoldStart() {
        holdTimer = setTimeout(() => {
            switchImage(2); // Показываем 3.jpg
        }, 500); // Задержка в 500 мс перед показом 3.jpg
    }

    function handleHoldEnd() {
        clearTimeout(holdTimer);
        if (currentIndex === 2) {
            currentIndex = toggle.checked ? 1 : 0;
            switchImage(currentIndex);
        }
    }

    toggle.addEventListener('change', function() {
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - lastClickTime;

        if (timeDiff < 400) {
            clickCount++;
            if (clickCount >= 3) {
                currentIndex = 2; // Показываем 3.jpg
                clickCount = 0;
            }
        } else {
            clickCount = 1;
            currentIndex = (currentIndex + 1) % 2; // Переключаемся между 1.jpg и 2.jpg
        }

        lastClickTime = currentTime;
        switchImage(currentIndex);
    });

    toggle.addEventListener('mousedown', handleHoldStart);
    toggle.addEventListener('touchstart', handleHoldStart);

    toggle.addEventListener('mouseup', handleHoldEnd);
    toggle.addEventListener('mouseleave', handleHoldEnd);
    toggle.addEventListener('touchend', handleHoldEnd);
    toggle.addEventListener('touchcancel', handleHoldEnd);

    // Инициализация первого изображения
    switchImage(currentIndex);
});