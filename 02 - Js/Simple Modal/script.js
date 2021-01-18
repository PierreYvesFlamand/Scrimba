document.querySelector('#open-modal').addEventListener('click', () => {
    document.querySelector('#overlay').style.display = 'block';
});

document.querySelector('#close-modal').addEventListener('click', () => {
    document.querySelector('#overlay').style.display = 'none';
});
