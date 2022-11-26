function getBrewery(){
    axios.request({
        url: "https://api.openbrewerydb.org/breweries/random",
        method: "GET"
    }).then(brewSuccess).catch(apiFailure)
}

function brewSuccess(response){
        let brewery = response.data[0];
        resultContainer.innerHTML = `<h3>${brewery.name}</h3>`;
        resultContainer.innerHTML += `<h5>${brewery.street}</h5>`;

}

function apiFailure(error){
    resultContainer.innerHTML = `<h2>there was an error</h2>`
    console.log(error);
}

function getCryptoRates(){
    axios.request({
        url: "https://api2.binance.com/api/v3/ticker/24hr"
    }).then(cryptoSuccess).catch(apiFailure)
}

function cryptoSuccess(response){
    let rates = response.data;
    for (rate of rates){
        resultContainer.insertAdjacentHTML(`beforeend`, `<p>${rate.symbol}: $${rate.lastPrice}</p>`)
}
}

function clearResults(){
    resultContainer.innerHTML = "";
}


const resultContainer = document.getElementById(`results`);

document.getElementById(`getBrew`).addEventListener(`click`, getBrewery);
document.getElementById(`getCrypto`).addEventListener(`click`, getCryptoRates);
document.getElementById(`clearResults`).addEventListener(`click`, clearResults);