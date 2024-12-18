async function getUserRepositories(username) {
    const cacheKey = `repos_${username}`;
    const cacheTimeKey = `${cacheKey}_time`;
    
    const cachedData = localStorage.getItem(cacheKey);
    const cacheTime = localStorage.getItem(cacheTimeKey);

    if (cachedData && cacheTime && (Date.now() - cacheTime < 60 * 60 * 10000)) {
        return JSON.parse(cachedData);
    }

    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
        throw new Error('Error fetching repositories');
    }
    
    const repositories = await response.json();

    localStorage.setItem(cacheKey, JSON.stringify(repositories));
    localStorage.setItem(cacheTimeKey, Date.now());

    return repositories;
}

function analyzeSkills(repositories) {
    const skills = new Set();

    repositories.forEach(repo => {
        const language = repo.language;
        if (language) {
            // Frontend
            if (['JavaScript', 'HTML', 'CSS', 'TypeScript', 'React', 'Vue', 'Angular', 'Sass', 'Bootstrap'].includes(language)) {
                skills.add('FRONTEND');
            }
            // Backend
            if (['Python', 'Java', 'Ruby', 'PHP', 'C#', 'Go', 'Node.js', 'Rust', 'Elixir'].includes(language)) {
                skills.add('BACKEND');
            }
            // Full-stack
            if (['Node.js', 'React', 'Angular', 'Vue', 'Django', 'Ruby on Rails', 'Spring Boot'].includes(language)) {
                skills.add('FULL-STACK');
            }
            // Deep Learning
            if (['Python', 'R', 'Java'].includes(language)) {
                skills.add('DEEP LEARNING');
            }
            // Mobile Development
            if (['Swift', 'Kotlin', 'Dart', 'React Native'].includes(language)) {
                skills.add('MOBILE');
            }
            // DevOps
            if (['Docker', 'Kubernetes', 'Ansible', 'Terraform', 'Jenkins'].includes(language)) {
                skills.add('DevOps');
            }
            // Game Development
            if (['C#', 'Unity', 'Unreal Engine', 'Java'].includes(language)) {
                skills.add('GAME DEV');
            }
            // Data Science
            if (['Python', 'R'].includes(language)) {
                skills.add('DATA SCIENCE');
            }
            // Cloud Computing
            if (['AWS', 'Azure', 'Google Cloud'].includes(language)) {
                skills.add('CLOUD');
            }
            // Cybersecurity
            if (['Python', 'C++'].includes(language)) {
                skills.add('CYBERSEC');
            }
            // Telegram Bot Development
            if (['Python', 'JavaScript'].includes(language) || 
                repo.description && /telegram/i.test(repo.description)) {
                skills.add('TG BOT DEV');
            }
        }
    });

    return Array.from(skills);
}

async function main(username) {
    try {
        const block = document.getElementById('skills_categories');
        const repositories = await getUserRepositories(username);
        const skills = analyzeSkills(repositories);

        console.log(`User  ${username}: ${skills.join(', ')}`);
        
        block.innerHTML = `<i class='fa-solid fa-compass'></i> ${skills.join(', ')}`;
    } catch (error) {
        console.error('Error:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    main('Nighty3098');
});
