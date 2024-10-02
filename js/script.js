document.addEventListener('DOMContentLoaded', function() {
    const aboutMeButton = document.getElementById('about_me_btn');
    const projectsButton = document.getElementById('projects_btn');
    const blogButton = document.getElementById('my_blog_btn');

    const profileRepos = document.getElementById('profile_repos');
    const userBio = document.getElementById('user_bio');
    const blog = document.getElementById('blog');

    function switchTab(tab) {
        const tabs = [profileRepos, userBio, blog];
        tabs.forEach(t => {
            t.classList.remove('active');
            t.classList.add('hidden');
            t.style.opacity = '0';
        });

        setTimeout(() => {
            if (tab === 'profile_repos') {
                profileRepos.classList.remove('hidden');
                profileRepos.classList.add('active');
            } else if (tab === 'user_bio') {
                userBio.classList.remove('hidden');
                userBio.classList.add('active');
            } else if (tab === 'blog') {
                blog.classList.remove('hidden');
                blog.classList.add('active');
            }

            setTimeout(() => {
                const activeTab = document.querySelector('.active');
                if (activeTab) {
                    activeTab.style.opacity = '1';
                }
            }, 50);
        }, 300);
    }

    aboutMeButton.addEventListener('click', function() {
        switchTab('user_bio');
    });

    projectsButton.addEventListener('click', function() {
        switchTab('profile_repos');
    });

    blogButton.addEventListener('click', function() {
        switchTab('blog');
    });
});
