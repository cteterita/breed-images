function fetchDogs(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(parsedResponse => displayDogs(parsedResponse, breed))
        .catch(e => alert(`Error: ${e}`));
}

function displayDogs(response, breed) {
    // Check that the breed was found
    if (response.code === 404) {
        throw 'Dog breed not found. Try something simpler.';
    }

    img = response.message;
    $('#image-list').html(`<h2>Behold, the majestic ${breed}</h2>`); // Removes content from previous searches
    $('#image-list').append(`<p><img src='${img}' alt='random ${breed}' width='300'></p>`);
}

function listenToForm() {
    $('form').submit(e => {
        e.preventDefault();
        let breed = $('#breed').val();
        fetchDogs(breed);
    });
}

$(listenToForm());