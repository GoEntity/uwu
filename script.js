document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = document.getElementById('posts');

    let posts = [
        { title: 'hihihihihihihihihihihihihihihi', content: 'hi....hi....hi...............hi..................' },
        // { title: 'rando 2', content: 'hi' },
    ];

    posts.forEach(function(post) {
        let postElement = document.createElement('article');
        
        let titleElement = document.createElement('h3');
        let contentElement = document.createElement('h5');

        titleElement.textContent = post.title;
        contentElement.textContent = post.content;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);

        blogPosts.appendChild(postElement);
    });
});
