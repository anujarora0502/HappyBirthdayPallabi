// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  const yearSelect = document.getElementById('year-select');
  const displayedImage = document.getElementById('displayed-image');

  // Add event listener to the dropdown
  yearSelect.addEventListener('change', function () {
    const selectedYear = yearSelect.value;

    if (selectedYear) {
      // Update the image source based on the selected year
      displayedImage.src = `images/${selectedYear}.jpg`;
      displayedImage.alt = `Birthday Message for ${selectedYear}`;
      displayedImage.style.display = 'block'; // Show the image
    } else {
      // Hide the image if no year is selected
      displayedImage.style.display = 'none';
    }
  });
});