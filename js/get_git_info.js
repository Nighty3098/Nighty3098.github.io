document.addEventListener('DOMContentLoaded', () => {
    const username = "Nighty3098";
    const cacheKey = `github-${username}`;
    const cacheTTL = 60 * 60 * 1000 * 1;

    function getCachedData() {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
            const {
                data,
                timestamp
            } = JSON.parse(cached);
            if (Date.now() - timestamp < cacheTTL) {
                return data;
            } else {
                localStorage.removeItem(cacheKey);
            }
        }
        return null;
    }

    function setCachedData(data) {
        localStorage.setItem(cacheKey, JSON.stringify({
            data,
            timestamp: Date.now()
        }));
    }

    async function fetchGitHubUserData(username) {
        const url = `https://api.github.com/users/${username}`;
        let data = getCachedData();

        if (data && data.user) {
            console.log('Returning cached user data');
            displayUserData(data.user);
        } else {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const userData = await response.json();

                data = {
                    ...data,
                    user: {
                        name: userData.name,
                        public_repos: userData.public_repos,
                        company: userData.company,
                        followers: userData.followers,
                        avatar_url: userData.avatar_url,
                        bio: userData.bio
                    }
                };

                setCachedData(data);
                displayUserData(data.user);
            } catch (error) {
                document.getElementById("git_profile_card").style.display = "None";
                console.error('Error:', error);
            }
        }
    }


    async function fetchGitHubUserRepos(username) {
        const url = `https://api.github.com/users/${username}/repos`;
        let totalStars = 0;

        let data = getCachedData();
        if (data && data.repos) {
            console.log('Returning cached repos data');
            totalStars = data.repos.totalStars;
            document.getElementById('git_stars').innerHTML = '<i class="fa-solid fa-star"></i> Stars: ' + totalStars;
        } else {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const repos = await response.json();
                if (!Array.isArray(repos)) {
                    throw new Error('Invalid response from GitHub API');
                }
                repos.forEach(repo => {
                    totalStars += repo.stargazers_count;
                });
                data = {
                    ...data,
                    repos: {
                        totalStars
                    }
                };
                setCachedData(data);
                document.getElementById('git_stars').innerHTML = '<i class="fa-solid fa-star"></i> Stars: ' + totalStars;
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }

    async function getTopUserLanguages(username) {
        const url = `https://api.github.com/users/${username}/repos`;

        let data = getCachedData();
        if (data && data.topLanguages) {
            console.log('Returning cached languages data');
            return data.topLanguages;
        } else {
            try {
                const response = await fetch(url);
                const repos = await response.json();
                if (!Array.isArray(repos)) {
                    throw new Error('Invalid response from GitHub API');
                }
                const languageCounts = {};

                repos.forEach(repo => {
                    const language = repo.language;
                    if (language) {
                        languageCounts[language] = (languageCounts[language] || 0) + 1;
                    }
                });

                const sortedLanguages = Object.entries(languageCounts)
                    .sort(([, a], [, b]) => b - a)
                    .map(([language]) => language);

                const topLanguages = sortedLanguages.slice(0, 10);
                data = {
                    ...data,
                    topLanguages
                };
                setCachedData(data);
                return topLanguages;
            } catch (error) {
                console.error('Error:', error);
                return [];
            }
        }
    }

    function displayUserData(data) {
        if (document.getElementById('git_name')) {
            document.getElementById('git_name').innerHTML = '<i class="fa-solid fa-user"></i> ' + (data.name || 'No name available');
        }
        if (document.getElementById('git_repos')) {
            document.getElementById('git_repos').innerHTML = '<i class="fa-solid fa-book"></i> Public repos: ' + data.public_repos;
        }
        if (document.getElementById('git_company')) {
            document.getElementById('git_company').innerHTML = '<i class="fa-solid fa-building"></i> Company: ' + (data.company || 'No company available');
        }
        if (document.getElementById('git_profile_card')) {
            document.getElementById('git_profile_card').style.display = "flex";
        }

        if (document.getElementById('top-languages')) {
            getTopUserLanguages(username).then(topLanguages => {
                document.getElementById('top-languages').innerHTML = '<i class="fa-solid fa-code"></i> ' + topLanguages.join(', ');
            });
        }

        if (document.getElementById('git_followers')) {
            document.getElementById('git_followers').innerHTML = '<i class="fa-solid fa-user"></i> Followers: ' + data.followers;
        }

        if (document.getElementById('git_profile_card')) {
            document.getElementById('git_profile_card').style.display = "flex";
        }

        if (document.getElementById('git_name')) {
            document.getElementById('git_name').innerHTML = data.name || 'No name available';
        }
        if (document.getElementById('git_bio')) {
            document.getElementById('git_bio').innerHTML = data.bio || 'No bio available';
        }
        if (document.getElementById('git_avatar')) {
            document.getElementById('git_avatar').src = data.avatar_url || 'default-avatar.png';
        }
    }

    fetchGitHubUserData(username);
    fetchGitHubUserRepos(username);
});
