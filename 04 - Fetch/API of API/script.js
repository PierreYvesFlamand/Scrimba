async function getAPIs() {
    const response = await fetch('https://api.publicapis.org/entries');
    const data = await response.json();
    return data.entries;
}

function getAPIhtml(myAPI) {
    return `
        <div class="my-api">
            <div class="my-api-name"><a href="${myAPI.Link}" target="_blank">${myAPI.API} (${
        myAPI.Category
    })</a></div>
            <div class="my-api-description">${myAPI.Description}</div>
            <div class="my-api-auth">${myAPI.auth ? myAPI.auth : 'None'}</div>
            <div class="my-api-https">HTTPS? ${myAPI.HTTPS}</div>
        </div>
    `;
}

function displayAPIs(myAPIs) {
    document.body.innerHTML = `
        <div class="my-apis">
            ${myAPIs.map(getAPIhtml).join('')}
        </div>
    `;
}

getAPIs()
    .then(displayAPIs)
    .catch((err) => console.error(`Error: ${err}`));
