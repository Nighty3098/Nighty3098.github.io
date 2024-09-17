const repos = document.querySelector('.repos');

const repoLinks = [
    'https://api.github.com/repos/Nighty3098/CodeKeeper',
    'https://api.github.com/repos/SDashS/SDash'
];

const repoDataCache = {};

async function fetchRepoData(repoUrl) {
    let retryCount = 0;
    const maxRetries = 3;

    while (retryCount < maxRetries) {
        try {
            const response = await fetch(repoUrl);
            const data = await response.json();
            return data;
        } catch (error) {
            if (error.message.includes('net::ERR_NETWORK_CHANGED')) {
                retryCount++;
                console.log(`Retry ${retryCount} due to network change`);
                await new Promise(resolve => setTimeout(resolve, 1000)); // wait 1 second before retrying
            } else {
                throw error;
            }
        }
    }

    throw new Error(`Failed to fetch data after ${maxRetries} retries`);
}

function createRepoCard(repoData, repoUrl) {
    const card = document.createElement('div');
    card.classList.add('repo_card');

    card.innerHTML = `
    <h3><i class="fa-solid fa-diagram-project"></i> ${repoUrl.split('/').pop()}</h3>
    <p><i class="fa-solid fa-star"></i> Stars: ${repoData.stargazers_count}</p>
    <p><i class="fa-solid fa-code-fork"></i> Forks: ${repoData.forks_count}</p>
    <p><i class="fa-solid fa-globe"></i> Language: ${repoData.language}</p>
    <p><i class="fa-solid fa-message"></i> Issues: ${repoData.open_issues_count}</p>
    `;

    console.debug(`Project: ${repoUrl.split('/').pop()} Stars: ${repoData.stars} Forks: ${repoData.forks_count} Language: ${repoData.language}`)

    return card;
}

async function createRepoCards() {
    const repos = document.querySelector('.repos');
    if (!repos) {
        console.error('repos element not found in the DOM');
        return;
    }

    for (const link of repoLinks) {
        const repoData = await fetchRepoData(link);
        const card = createRepoCard(repoData, link);
        if (card) {
            repos.appendChild(card);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new MutationObserver(() => {
        const repos = document.querySelector('.repos');
        if (repos) {
            createRepoCards('Nighty3098');
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
