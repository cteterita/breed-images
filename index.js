function fetchDogs(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(parsedResponse => displayResults(parsedResponse, breed))
        .catch(e => alert(`Error: ${e}`));
}

function displayResults(responseJson, breed) {
    // Check that the breed was found
    if (responseJson.code === 404) {
        throw 'Dog breed not found. Try something simpler.';
    }

    $('.results-header').replaceWith(`<h2 class='results-header'>Behold, the majestic ${breed}</h2>`);
    $('.results-img').replaceWith(`<img src='${responseJson.message}' class='results-img' alt='random ${breed}'>`);
    $('.results').removeClass('hidden');
}

function listenToForm() {
    $('form').submit(e => {
        e.preventDefault();
        let breed = $('#breed').val().toLowerCase();
        fetchDogs(breed);
    });
}

$(listenToForm());