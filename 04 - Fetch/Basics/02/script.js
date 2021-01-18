const userForm = document.querySelector('#userForm');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(userForm);
    const options = {
        method: 'POST',
        body: formData,
    };

    fetch('https://httpbin.org/post', options)
        .then((response) => response.json())
        .then((json) => console.log(json.form))
        .catch((err) => console.error(err));
});
