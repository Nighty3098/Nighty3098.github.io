async function fetchArticles(username) {
    const response = await fetch(
        `https://dev.to/api/articles?username=${username}`,
    );
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return await response.json();
}

function createArticleBlock(article) {
    const articleBlock = document.createElement("div");
    articleBlock.classList.add("article_card");

    const articleSubBlock = document.createElement("div");
    articleSubBlock.classList.add("article_sub_block");

    const title = document.createElement("h2");
    title.innerHTML = article.title;

    const date = document.createElement("p");
    date.innerHTML = '  <i class="fa-solid fa-clock"></i>  ' +
        new Date(article.published_at).toLocaleDateString();

    const reactions = document.createElement("p");
    const reactionCount = parseInt(article.public_reactions_count);
    reactions.innerHTML = '  <i class="fa-solid fa-heart"></i>  ' +
        (isNaN(reactionCount) ? "0" : reactionCount.toLocaleString());

    const comments = document.createElement("p");
    const commentsCount = parseInt(article.comments_count);
    comments.innerHTML = '  <i class="fa-solid fa-comment"></i>  ' +
        (isNaN(commentsCount) ? "0" : commentsCount.toLocaleString());

    const desc = document.createElement("p");
    desc.innerHTML = article.description;

    articleSubBlock.appendChild(date);
    articleSubBlock.appendChild(reactions);
    articleSubBlock.appendChild(comments);

    articleBlock.appendChild(title);
    articleBlock.appendChild(desc);
    articleBlock.appendChild(articleSubBlock);

    articleBlock.onclick = () => {
        window.open(article.url, "_blank");
    };

    return articleBlock;
}

async function displayArticles(username) {
    try {
        const articles = await fetchArticles(username);
        const blogSection = document.getElementById("blog");

        articles.forEach((article) => {
            const articleBlock = createArticleBlock(article);
            blogSection.appendChild(articleBlock);
        });
    } catch (error) {
        console.error("Error fetching articles:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    displayArticles("nighty3098");
});
