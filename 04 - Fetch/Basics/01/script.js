// FETCH BASE
async function getPost() {
    const postPromise = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await postPromise.json();
    const html = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;

    document.body.innerHTML = html;
}
getPost();
