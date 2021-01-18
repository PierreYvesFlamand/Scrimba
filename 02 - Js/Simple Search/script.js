document.querySelector('#searchInput').addEventListener('keyup', ({ target }) => {
    const searchQuery = target.value.toLowerCase();
    const allNamesDOMCollection = document.querySelectorAll('.name');

    allNamesDOMCollection.forEach((name) => {
        const currentName = name.textContent.toLowerCase();

        if (currentName.includes(searchQuery)) {
            name.style.display = 'block';
        } else {
            name.style.display = 'none';
        }
    });
});
