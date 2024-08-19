
const username = 'Nighty3098';

async function fetchGitHubUserData(username) {
    const url = `https://api.github.com/users/${username}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        displayUserData(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function fetchGitHubUserRepos(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    let totalStars = 0;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const repos = await response.json();

        repos.forEach(repo => {
            totalStars += repo.stargazers_count;
        });

        document.getElementById('git_stars').textContent = 'Stars: ' + totalStars;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getTopUserLanguages(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await response.json();  
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
    
    return sortedLanguages.slice(0, 5);
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

function displayUserData(data) {
    getTopUserLanguages(username).then(topLanguages => {
        console.log(`Top langs ${username}:`, topLanguages);
        const topLanguagesText = topLanguages.join(', ');
        document.getElementById('top-languages').textContent = 'Top langs: ' + topLanguagesText;
    });

    document.getElementById('git_followers').textContent = `Followers: ${data.followers}`;
    console.log(`Followers ${username}:`, data.followers);
    document.getElementById('git_following').textContent = `Following: ${data.following}`;
    console.log(`Following ${username}:`, data.following);
    document.getElementById('git_repos').textContent = `Repos: ${data.public_repos}`;
    console.log(`Repos ${username}:`, data.public_repos);
    document.getElementById('git_avatar').src = data.avatar_url;
    console.log(`git_avatar ${username}:`, data.avatar_url);
}

fetchGitHubUserData(username);
fetchGitHubUserRepos(username);
getTopUserLanguages(username);
