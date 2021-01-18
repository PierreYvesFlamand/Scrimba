const uploadForm = document.getElementById('uploadForm');

uploadForm.addEventListener('submit', function (e) {
    e.preventDefault();

    uploadFile(uploadForm);
});

async function uploadFile(data) {
    const formData = new FormData();
    const files = data.querySelector('input[type="file"]').files;

    for (let i = 0; i < files.length; i++) {
        formData.append(`fileInput_${i}`, files[i]);
    }

    const options = {
        method: 'POST',
        body: formData,
    };

    const uploadPromise = await fetch('https://httpbin.org/post', options);

    if (uploadPromise.ok) {
        const uploadResp = await uploadPromise.json();
        console.log(uploadResp.files);
    } else {
        console.error(uploadPromise.status);
    }
}
