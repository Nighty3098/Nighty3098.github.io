document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById('scrollButton');
    if (scrollButton) {
        scrollButton.addEventListener('click', function() {
            const section = document.getElementById('user_bio');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error("Element with id 'user_bio' not found.");
            }
        });
    } else {
        console.error("Element with id 'scrollButton' not found.");
    }

    const animatedElements = document.querySelectorAll('.git_profile_card, .profile_card, .user_bio, .rights');

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationClass = entry.target.getAttribute('data-animation');
                entry.target.classList.add('animate__animated', `${animationClass}`);
                observer.unobserve(entry.target);
                console.debug("Animated", entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
