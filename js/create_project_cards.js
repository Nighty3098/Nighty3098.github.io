const reposContainer = document.querySelector('.repos');
const git_username = 'Nighty3098';

async function fetchUserRepos(git_username) {
    const nc_repos_block = document.getElementById('nc_repos');
    const repos_block = document.getElementById('repos');

    try {
        const userReposUrl = `https://api.github.com/users/${git_username}/repos`;
        const userReposResponse = await fetch(userReposUrl);
        const userRepos = await userReposResponse.json();

        // Fetch organizations for the user
        const orgsUrl = `https://api.github.com/users/${git_username}/orgs`;
        const orgsResponse = await fetch(orgsUrl);
        const orgs = await orgsResponse.json();

        let allRepos = [...userRepos]; // Start with user's repos

        // Fetch repositories from each organization
        for (const org of orgs) {
            const orgReposUrl = `https://api.github.com/orgs/${org.login}/repos`;
            const orgReposResponse = await fetch(orgReposUrl);
            const orgRepos = await orgReposResponse.json();
            allRepos = allRepos.concat(orgRepos); // Combine user's and organization's repos
        }

        repos_block.style.display = "normal";
        nc_repos_block.style.display = "none";

        return allRepos;
    } catch (error) {
        repos_block.style.display = "none";
        nc_repos_block.style.display = "normal";

        console.error(error.message);
        return [];
    }
}

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
        console.error("repos element not found in the DOM");
        return;
    }

    const userReposAndOrgs = await fetchUserRepos(git_username);
    
    // Filter out repositories with names ending in .github or .git
    const filteredRepos = userReposAndOrgs.filter(repo => 
        !repo.name.endsWith('.github') && !repo.name.endsWith('.git')
    );

    // Sort repositories by stargazers_count in descending order
    filteredRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);

    for (const repo of filteredRepos) {
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
