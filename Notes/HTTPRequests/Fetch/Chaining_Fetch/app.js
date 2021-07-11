const checkStatusAndParse = (response) => {
    if(!response.ok) {
		throw new Error(`Status Code Error:${response.status}`)
	}
    return response.json();
};

const printPlanets = (data) => {
    for(let planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
};

const print10MorePlanets = (url) => {
    return fetch(url);
};

fetch('https://swapi.dev/api/planets/')
    .then(checkStatusAndParse)
    .then(printPlanets)
    .then(print10MorePlanets)
    .then(checkStatusAndParse)
    .then(printPlanets)
    .catch((err) => {
        console.log('SOMETHING WENT WRONG WITH FETCH!');
        console.log(err);
    });