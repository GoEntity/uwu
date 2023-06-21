document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = document.getElementById('posts');

    let posts = [
        { title: 'rando post', content: 'GoEntity' },
        { title: 'rando 2', content: 'hi' },
    ];

    posts.forEach(function(post) {
        let postElement = document.createElement('article');
        let titleElement = document.createElement('h2');
        let contentElement = document.createElement('p');

        titleElement.textContent = post.title;
        contentElement.textContent = post.content;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);

        blogPosts.appendChild(postElement);
    });
});
