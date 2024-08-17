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

function displayUserData(data) {
    document.getElementById('git_followers').textContent = `Followers: ${data.followers}`;
    document.getElementById('git_following').textContent = `Following: ${data.following}`;
    document.getElementById('git_repos').textContent = `Repos: ${data.public_repos}`;
    document.getElementById('git_avatar').src = data.avatar_url;
}

const username = 'Nighty3098';
fetchGitHubUserData(username);
fetchGitHubUserRepos(username);
