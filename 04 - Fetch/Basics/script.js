// * FETCH
// fetch('exemple.txt')
//     .then((response) => response.text())
//     .then((text) => {
//         const div = document.createElement('div');
//         div.innerHTML = text;
//         document.body.appendChild(div);
//     });

// * JSON
// const user = {
//     name: 'Jesse',
//     age: 25,
// };

// const json = JSON.stringify(user, null, 4);
// console.log(json);

// * Ex Fetch - Json
// fetch('people.json')
//     .then((response) => response.json())
//     .then((json) => {
//         json.forEach(({ name, age }) => {
//             const div = document.createElement('div');
//             div.textContent = `${name} is ${age}`;
//             document.body.appendChild(div);
//         });
//     });

// * Fetch from API
// fetch('https://jsonplaceholder.typicode.com/photos/45')
//     .then((response) => response.json())
//     .then((data) => {
//         const img = document.createElement('img');
//         img.src = data.url;
//         document.body.appendChild(img);
//     });

// * Error handling
// fetch('exemple.txt')
// .then((response) => response.text())
// .then((text) => {
//     const div = document.createElement('div');
//     div.innerHTML = text;
//     document.body.appendChild(div);
// })
// .catch((error) => console.error(error));

// * Async/Await
// const getData = async () => {
//     const response = await fetch('people.json');
//     const data = await response.json();

//     data.forEach((person) => {
//         const div = document.createElement('div');
//         div.innerHTML = person.name;
//         document.body.appendChild(div);
//     });
// };

// getData();

// * Async/Await exemple
async function getPosts() {
    const postsPromise = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (postsPromise.ok) {
        const posts = await postsPromise.json();

        let html = '';

        posts.slice(0, 5).forEach((post) => {
            const title = post.title;
            const body = post.body;
            html += `
            <div class='post'>
                <h3>${title}</h3>
                <p>${body}</p>
            </div>  
        `;
            document.body.innerHTML = html;
        });
    } else {
        console.error(`Error : ${postsPromise.status}`);
    }
}

getPosts();
