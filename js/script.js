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
    const images = document.querySelectorAll('.image-container img');

    toggle.addEventListener('change', function() {
        images.forEach(img => img.classList.toggle('active'));
    });
});