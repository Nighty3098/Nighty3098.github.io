document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll('.git_profile_card, .profile_card, .user_bio');

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
});
