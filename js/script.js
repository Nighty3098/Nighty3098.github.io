function showMessage(text) {
    const message = document.createElement('div');
    message.textContent = text;
    message.style.position = 'fixed';
    message.style.top = '20px';
    message.style.left = '50%';
    message.style.zIndex = '9999';
    message.style.transform = 'translateX(-50%)';
    message.style.backgroundColor = 'rgba(144, 172, 249, 0.6)';
    message.style.backdropFilter = 'blur(10px)';
    message.style.color = 'black';
    message.style.padding = '20px 20px';
    message.style.borderRadius = '5px';
    message.style.opacity = '0';
    message.style.transition = 'opacity 0.5s ease-in-out';

    document.body.appendChild(message);

    setTimeout(() => {
        message.style.opacity = '1';
    }, 10);

    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 2000);
}

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

    function switchImage() {
        imageContainer.innerHTML = `<img src="${images[currentIndex]}" alt="Image ${currentIndex + 1}" class="active">`;
    }

    toggle.addEventListener('change', function() {
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - lastClickTime;

        if (timeDiff < 400) { // 300 миллисекунд для определения "быстрого" клика
            clickCount++;
            if (clickCount >= 3) {
                showMessage("FBI: We're on our way!");
                currentIndex = 2; // Показываем 3.jpg
                clickCount = 0;
            }
        } else {
            clickCount = 1;
            currentIndex = (currentIndex + 1) % 2; // Переключаемся между 1.jpg и 2.jpg
        }

        lastClickTime = currentTime;
        switchImage();
    });

    // Инициализация первого изображения
    switchImage();
});


window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const content = document.body;

    loader.style.display = 'flex';
    content.style.display = 'none';

    setTimeout(function() {
      loader.style.display = 'none';
      content.style.display = 'block';
    }, 1000);
  });