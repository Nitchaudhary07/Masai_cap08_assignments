document.addEventListener('DOMContentLoaded', () => {
    fetchData(apiUrl);
});

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Data:', data); // Add this line to log the data
        displayCountries(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayCountries(countries) {
    const appDiv = document.getElementById('app');
    if (!Array.isArray(countries)) {
        console.error('Invalid data format');
        return;
    }
    appDiv.innerHTML = '';

    countries.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.classList.add('country-card');

        const name = document.createElement('h2');
        name.textContent = country.name;

        const population = document.createElement('p');
        population.textContent = `Population: ${country.population}`;

        const capital = document.createElement('p');
        capital.textContent = `Capital: ${country.capital}`;

        countryCard.appendChild(name);
        countryCard.appendChild(population);
        countryCard.appendChild(capital);

        appDiv.appendChild(countryCard);
    });
}

function sortCountriesByPopulation(order) {
    const sortedUrl = `${apiUrl}?sort=population&order=${order}`;
    fetchData(sortedUrl);
}
