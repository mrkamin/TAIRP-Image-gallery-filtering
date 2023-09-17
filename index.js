// Add an event listener to each filtering button
const filteringButtons = document.querySelectorAll('.filtering-btn');
const cards = document.querySelectorAll('.card');
const filterTitle = document.getElementById('filter-title');

filteringButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    // Set the filter title based on the selected category
    if (category === 'all') {
      filterTitle.textContent = '';
    } else if (category === 'car') {
      filterTitle.textContent = 'The Greatest V-10-Powered Cars Ever Made';
    } else if (category === 'people') {
      filterTitle.textContent = '15 Most Famous People Named Michael';
    } else if (category === 'nature') {
      filterTitle.textContent = '12 Incredibly Beautiful Natural Places In World In Pictures';
    }

    // Loop through all cards and hide/show them based on the selected category
    cards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category');

      if (category === 'all' || category === cardCategory) {
        card.style.display = 'block'; // Show the card
      } else {
        card.style.display = 'none'; // Hide the card
      }
    });
  });
});