async function fetchArticles(username) {
    const response = await fetch(`https://dev.to/api/articles?username=${username}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

function createArticleBlock(article) {
    const articleBlock = document.createElement('div');
    articleBlock.classList.add('article_card');

    const title = document.createElement('h2');
    title.textContent = article.title;

    const date = document.createElement('p');
    date.textContent = new Date(article.created_at).toLocaleDateString();

    const desc = document.createElement('p');
    desc.textContent = article.description;

    articleBlock.appendChild(title);
    articleBlock.appendChild(desc);
    articleBlock.appendChild(date);

    articleBlock.onclick = () => {
        window.open(article.url, '_blank');
    };

    return articleBlock;
}

async function displayArticles(username) {
    try {
        const articles = await fetchArticles(username);
        const blogSection = document.getElementById('blog');

        articles.forEach(article => {
            const articleBlock = createArticleBlock(article);
            blogSection.appendChild(articleBlock);
        });

    } catch (error) {
        console.error('Error fetching articles:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayArticles('nighty3098');
});
