const username = "Nighty3098"
const cache = {};

async function fetchGitHubUserData(username) {
    const url = `https://api.github.com/users/${username}`;

    if (cache[url]) {
        console.log('Returning cached user data');
        displayUserData(cache[url]);
        return;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        cache[url] = data;
        displayUserData(data);
    } catch (error) {
        document.getElementById("git_profile_card").style.display = "None";
        console.error('Error:', error);
    }
}

async function fetchGitHubUserRepos(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    let totalStars = 0;

    if (cache[url]) {
        console.log('Returning cached repos data');
        totalStars = cache[url].totalStars;
        document.getElementById('git_stars').textContent = 'Stars: ' + totalStars;
        return;
    }

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
        cache[url] = { totalStars };
        document.getElementById('git_stars').innerHTML = '<i class="fa-solid fa-star"></i> Stars: ' + totalStars;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getTopUserLanguages(username) {
    const url = `https://api.github.com/users/${username}/repos`;

    if (cache[url]) {
        console.log('Returning cached languages data');
        return cache[url].topLanguages;
    }

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

        cache[url] = { topLanguages: sortedLanguages.slice(0, 10) };
        return cache[url].topLanguages;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

function displayUserData(data) {
    getTopUserLanguages(username).then(topLanguages => {
        console.log(`Top langs ${username}:`, topLanguages);
        const topLanguagesText = topLanguages.join(' | ');
        document.getElementById('top-languages').innerHTML = '<i class="fa-solid fa-earth-americas"></i>  ' + topLanguagesText;
    });

    document.getElementById('git_followers').innerHTML = `<i class="fa-solid fa-user-plus"></i> Followers: ${data.followers}`;
    console.log(`Followers ${username}:`, data.followers);
    document.getElementById('git_following').innerHTML = `<i class="fa-solid fa-user"></i> Following: ${data.following}`;
    console.log(`Following ${username}:`, data.following);
    document.getElementById('git_repos').innerHTML = `<i class="fa-solid fa-diagram-project"></i> Repos: ${data.public_repos}`;
    console.log(`Repos ${username}:`, data.public_repos);
}


fetchGitHubUserData(username);
fetchGitHubUserRepos(username);
getTopUserLanguages(username);
