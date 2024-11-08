const reposContainer = document.getElementById("repos");
const users_repos = [
    "https://api.github.com/repos/Nighty3098/SDash",
    "https://api.github.com/repos/Nighty3098/CodeKeeper",
    "https://api.github.com/repos/DXS-GROUP/LogInsight",
    "https://api.github.com/repos/Nighty3098/InvestingAssistant",
    "https://api.github.com/repos/Nighty3098/TechSupportBot",
    "https://api.github.com/repos/Nighty3098/TGSB",
    "https://api.github.com/repos/Nighty3098/FinanceTrackerBot",
    "https://api.github.com/repos/Nighty3098/Nighty3098.github.io",
];

const CACHE_KEY = 'REPOS_CACHE_KEY';
const CACHE_EXPIRY_KEY = 'REPOS_CACHE_EXPIRY';
const CACHE_DURATION = 60 * 60 * 1000;

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

    const is_archived = repoData.archived;
    let status = is_archived ? "<i class='fa-solid fa-box'></i> ! Archived ! " : "";

    card.innerHTML = `
        <h1>${repoName}</h1>
        <h3 style="color: #db3a3a;">${status}</h3>
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
    if (!reposContainer) {
        console.error("repos element not found in the DOM");
        return;
    }

    const cachedData = localStorage.getItem(CACHE_KEY);
    const cacheExpiry = localStorage.getItem(CACHE_EXPIRY_KEY);
    const currentTime = new Date().getTime();

    if (cachedData && cacheExpiry && currentTime < cacheExpiry) {
        const repos = JSON.parse(cachedData);
        console.log("Data restored from cache");
        repos.forEach(repoData => {
            const card = createRepoCard(repoData);
            reposContainer.appendChild(card);
        });
    } else {
        const fetchedRepos = [];
        for (const repoUrl of users_repos) {
            const repoData = await fetchRepoData(repoUrl);
            if (repoData) {
                fetchedRepos.push(repoData);
                const card = createRepoCard(repoData);
                reposContainer.appendChild(card);
            }
        }
        localStorage.setItem(CACHE_KEY, JSON.stringify(fetchedRepos));
        localStorage.setItem (CACHE_EXPIRY_KEY, currentTime + CACHE_DURATION);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createRepoCards();
});
