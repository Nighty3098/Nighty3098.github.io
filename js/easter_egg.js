document.addEventListener("DOMContentLoaded", function () {
    let clickCount = 0;
    let clickTimeout;

    document.querySelector('.user_avatar').addEventListener('click', function () {
        clickCount++;

        if (clickCount === 1) {
            clickTimeout = setTimeout(function () {
                clickCount = 0;
            }, 300);
        } else if (clickCount === 2) {
            clearTimeout(clickTimeout);
            openModal();
            clickCount = 0;
        }
    });

    function openModal() {
        const modal = document.getElementById('modal');
        modal.style.display = 'flex';
    }

    const closeButton = document.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            const modal = document.getElementById('modal');
            modal.style.display = 'none';
        });
    } else {
        console.error("'close' Not found.");
    }

    window.addEventListener('click', function (event) {
        const modal = document.getElementById('modal');

        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
