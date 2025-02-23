// Function to fetch and display images
function loadImages() {
    const imageGallery = document.getElementById('image-gallery');
  
    // Fetch the list of images from the server
    fetch('images/')
      .then(response => response.text())
      .then(data => {
        // Parse the HTML response to extract image filenames
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, 'text/html');
        const imageLinks = htmlDoc.querySelectorAll('a');
  
        imageLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href.match(/\.(jpeg|jpg|png|gif)$/)) {
            // Create an image element and add it to the gallery
            const imgElement = document.createElement('img');
            imgElement.src = `images/${href}`;
            imgElement.alt = `Birthday Message for ${href.split('.')[0]}`;
            imageGallery.appendChild(imgElement);
          }
        });
      })
      .catch(error => console.error('Error loading images:', error));
  }
  
  // Load images when the page loads
  window.onload = loadImages;