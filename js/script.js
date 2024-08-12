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


window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const mainImage = document.querySelector('.main_image');
    const blurAmount = Math.min(scrollPosition * 0.1, 10);
    mainImage.style.filter = `contrast(1.1) blur(${blurAmount}px)`;
});

window.addEventListener('scroll', function() {
    const slideIn = document.querySelector('.slide-in');
    const rect = slideIn.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2) {
        slideIn.style.transform = 'translateX(0)';
    }
});


window.addEventListener('load', function() {
    const slideIn = document.querySelector('.main-block');
    slideIn.style.transform = 'translateX(0)';

    const BtnSlideIn = document.querySelector('.button2');
    BtnSlideIn.style.transform = 'translateX(0)';

    const HeaderSlideIn = document.querySelector('header');
    HeaderSlideIn.style.transform = 'translateY(0)';
});
