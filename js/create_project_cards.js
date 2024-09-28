const reposContainer = document.querySelector('.repos');
const username = 'Nighty3098';
const token = 'your github token';

async function fetchUserRepos(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(url, {
        headers: {
            'Authorization': `token ${token}`
        }
    });
    return response.json();
}

async function fetchRepoData(repoUrl) {
    let retryCount = 0;
    const maxRetries = 3;

    while (retryCount < maxRetries) {
        try {
            const response = await fetch(repoUrl, {
                headers: {
                    'Authorization': `token ${token}`
                }
            });
            const data = await response.json();
            return data;
        } catch (error) {
            if (error.message.includes('net::ERR_NETWORK_CHANGED')) {
                retryCount++;
                console.log(`Retry ${retryCount} due to network change`);
                await new Promise(resolve => setTimeout(resolve, 1000));
            } else {
                throw error;
            }
        }
    }

    throw new Error(`Failed to fetch data after ${maxRetries} retries`);
}

function createRepoCard(repoData) {
    const card = document.createElement('div');
    card.classList.add('project_card');

    const repoName = repoData.name;

    const languages = repoData.language || 'Not specified';
    const stats = `<i class="fa-solid fa-earth-americas"></i> Languages: ${languages} <br><i class="fa-solid fa-code-branch"></i> Forks: ${repoData.forks_count} <br><i class="fa-solid fa-star"></i> Stars: ${repoData.stargazers_count}`;

    card.innerHTML = `
        <h1>${repoName}</h1>
        <h3>${repoData.description || 'No description available'}</h3>
        <h3 class="text-box">${stats}</h3>
        <a href="${repoData.html_url}" target="_blank">
            <button class="button">
                <i class="fa-solid fa-arrow-right"></i> Open page
                <i class="fa-solid fa-arrow-left"></i>
            </button>
        </a>
    `;

    console.debug(`Project: ${repoName} Stars: ${repoData.stargazers_count} Forks: ${repoData.forks_count} Language: ${languages}`);

    return card;
}

async function createRepoCards() {
    const reposContainer = document.querySelector('.repos');
    if (!reposContainer) {
        console.error('repos element not found in the DOM');
        return;
    }

    const userRepos = await fetchUserRepos(username);
    
    for (const repo of userRepos) {
        const repoData = await fetchRepoData(repo.url);
        const card = createRepoCard(repoData);
        if (card) {
            reposContainer.appendChild(card);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createRepoCards();
});
