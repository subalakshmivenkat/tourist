function filterByContinent() {
    // Get the selected continent
    const selectedContinent = document.getElementById('continentSelect').value;
    
    // Get all country items
    const countryItems = document.querySelectorAll('.country-item');
    
    // Get the search input value
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    
    // Flag to check if any items are found
    let hasResults = false;
    
    countryItems.forEach(item => {
        // Get the country name and continent
        const countryName = item.querySelector('p').textContent.toLowerCase();
        const itemContinent = item.getAttribute('data-continent');
        
        // Check if the item matches the selected continent and search query
        const matchesContinent = selectedContinent === 'All' || itemContinent === selectedContinent;
        const matchesSearch = countryName.includes(searchQuery);
        
        if (matchesContinent && matchesSearch) {
            item.style.display = 'block'; // Show item
            hasResults = true;
        } else {
            item.style.display = 'none'; // Hide item
        }
    });
    
    // Show or hide the "No results found!" message
    document.querySelector('.no-results').style.display = hasResults ? 'none' : 'block';
}

// Attach the filter function to the search input's 'input' event
document.getElementById('searchInput').addEventListener('input', filterByContinent);

// Attach the filter function to the 'Apply Filter' button
document.querySelector('.filter button').addEventListener('click', filterByContinent);