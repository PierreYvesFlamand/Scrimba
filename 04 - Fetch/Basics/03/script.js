const uploadForm = document.querySelector('#uploadForm');

uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();

    uploadFile(uploadForm);
});

async function uploadFile(uploadForm) {
    const formData = new FormData(uploadForm);
    const options = {
        method: 'POST',
        body: formData,
    };

    try {
        const responsePromise = await fetch('https://httpbin.org/post', options);
        const json = await responsePromise.json();
        console.log(json.files);
    } catch (err) {
        console.error(err);
    }
}
