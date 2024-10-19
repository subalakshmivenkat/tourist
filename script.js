// script.js

// Function to filter places based on search input
function filterPlaces() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const places = document.querySelectorAll('.place');

    places.forEach((place) => {
        const placeText = place.innerText.toLowerCase();
        if (placeText.includes(searchQuery)) {
            place.style.display = 'block';
        } else {
            place.style.display = 'none';
        }
    });
}
