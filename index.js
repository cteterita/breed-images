
function fetchDogs(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(parsedResponse => displayDogs(parsedResponse, breed))
        //.catch(e => alert('Unknown error. Try again later!'));
}

function displayDogs(response, breed) {
    console.log(response);
    img = response.message;
    if (img.includes('Breed not found')) {
        alert ('Dog breed not found. Try something simpler.');
        return;
    }

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