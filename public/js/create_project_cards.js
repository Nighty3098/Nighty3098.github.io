const reposContainer = document.getElementById("repos");
const users_repos = [
    "https://api.github.com/repos/Nighty3098/OWL_APP",
    "https://api.github.com/repos/Nighty3098/SDash",
    "https://api.github.com/repos/Nighty3098/CodeKeeper",
    "https://api.github.com/repos/Nighty3098/InvestingAssistant",
    "https://api.github.com/repos/DXS-GROUP/LogInsight",
    "https://api.github.com/repos/Nighty3098/nfetch",
    "https://api.github.com/repos/Nighty3098/DevDotfiles",
    "https://api.github.com/repos/Nighty3098/TechSupportBot",
    "https://api.github.com/repos/Nighty3098/TGSB",
    "https://api.github.com/repos/Nighty3098/FinanceTrackerBot",
];

const CACHE_KEY = "USER_REPOS";
const CACHE_EXPIRY_KEY = "USER_REPOS_EXPIRY";
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
            if (error.message.includes("net::ERR_NETWORK_CHANGED")) {
                retryCount++;
                console.log(`Retry ${retryCount} due to network change`);
                await new Promise((resolve) => setTimeout(resolve, 1000));
            } else {
                throw error;
            }
        }
    }

    throw new Error(`Failed to fetch data after ${maxRetries} retries`);
}

function createRepoCard(repoData) {
    const card = document.createElement("div");
    card.classList.add("project_card_block");

    const repoName = repoData.name;
    const languages = repoData.language || "None";

    const stats =
        `<i class="fa-solid fa-code"></i>${languages}<div class="text-spacer"></div><i class="fa-solid fa-code-branch"></i> ${repoData.forks_count}<div class="text-spacer"></div><i class="fa-solid fa-star"></i> ${repoData.stargazers_count}<div class="text-spacer"></div><i class="fa-solid fa-hammer"></i> ${repoData.open_issues_count}`;

    const is_archived = repoData.archived;
    let status = is_archived
        ? "<i class='fa-solid fa-box'></i> ! Archived ! "
        : "";

    card.innerHTML = `
        <a class="project_card" href="${repoData.html_url}" target="_blank">
        <h1>${repoName}</h1>
        <h3 style="color: #db3a3a;">${status}</h3>
        <h3>${repoData.description || "No description available"}</h3>
        </a>
        <h3 class="about_project">${stats}</h3>
    `;

    console.debug(
        `Loaded project: ${repoName} Stars: ${repoData.stargazers_count} Forks: ${repoData.forks_count} Language: ${languages}`,
    );

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
        console.log("Data restored from cache", repos);

        if (Array.isArray(repos)) {
            repos.forEach((repoData) => {
                const card = createRepoCard(repoData);
                reposContainer.appendChild(card);
            });
        } else {
            console.error("Cached data is not an array:", repos);
        }
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
        localStorage.setItem(CACHE_EXPIRY_KEY, currentTime + CACHE_DURATION);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    createRepoCards();
});
