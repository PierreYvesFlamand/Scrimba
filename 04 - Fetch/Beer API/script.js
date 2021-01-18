// variables
const urlBase = 'https://api.punkapi.com/v2/beers?page=';
const filterABV = document.querySelector('#filterABV');
const filterIBU = document.querySelector('#filterIBU');
const pageText = document.querySelector('#pageNumber');
const prevPage = document.querySelector('#prevPage');
const nextPage = document.querySelector('#nextPage');
let options = {
    ABV: '',
    IBU: '',
    page: 1,
};

// filters
filterABV.addEventListener('change', (e) => {
    const value = e.target.value;

    switch (value) {
        case 'all':
            options.ABV = '';
            break;

        case 'weak':
            options.ABV = '&abv_lt=4.6';
            break;

        case 'medium':
            options.ABV = '&abv_gt=4.5&abv_lt=7.6';
            break;

        case 'strong':
            options.ABV = '&abv_gt=7.5';
            break;
    }

    options.page = 1;
    getBeers();
});

filterIBU.addEventListener('change', (e) => {
    const value = e.target.value;

    switch (value) {
        case 'all':
            options.IBU = '';
            break;

        case 'weak':
            options.IBU = '&ibu_lt=35';
            break;

        case 'medium':
            options.IBU = '&ibu_gt=34&ibu_lt=75';
            break;

        case 'strong':
            options.IBU = '&ibu_gt=74';
            break;
    }

    options.page = 1;
    getBeers();
});

async function getBeers() {
    const url = `${urlBase}${options.page}${options.ABV}${options.IBU}`;

    // fetch
    const beerPromise = await fetch(url);
    const beers = await beerPromise.json();

    // pagination
    pageText.textContent = options.page;
    if (options.page == 1) {
        prevPage.disabled = true;
    } else {
        prevPage.disabled = false;
    }
    if (beers.length < 25) {
        nextPage.disabled = true;
    } else {
        nextPage.disabled = false;
    }

    // render data
    const beersDiv = document.querySelector('.beers');
    let beerHtml = '';
    const genericBottle = 'https://cdn.pixabay.com/photo/2014/12/22/00/04/bottle-576717_960_720.png';

    beers.forEach((beer) => {
        beerHtml += `
            <div class="beer-wrapper card">
                <div class="beer">
                    <img class="beer__img" src="${beer.image_url ? beer.image_url : genericBottle}" />
                    <h3>${beer.name}</h3>
                    <span class='beer__info'>
                        <span>ABV: ${beer.abv}%</span>
                        <span>IBU: ${beer.ibu}</span>
                    </span>
                </div>
                <div class="beer__content">
                    <div class="beer__name">${beer.name}</div>
                    <div class='beer__tagline'>${beer.tagline}</div>
                    <div class='beer__description'>${beer.description}</div>
                    <div class='beer__food-pairing'>
                        Pair with: ${beer.food_pairing.join(', ')}
                    </div>
                </div>
            </div>
        `;
    });

    beersDiv.innerHTML = beerHtml;
}

// pagination
prevPage.addEventListener('click', () => {
    options.page--;
    getBeers();
});

nextPage.addEventListener('click', () => {
    options.page++;
    getBeers();
});

// initial get
getBeers();
