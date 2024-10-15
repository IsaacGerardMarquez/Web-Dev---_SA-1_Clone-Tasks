// This runs when the HTML Document is loaded
document.addEventListener('DOMContentLoaded', () => {

    // This stores all of the product (or iPhone 16) images from the page in a variable named "iPhone16Images"
    const iPhone16Images = document.querySelectorAll('.Product-Page-Column-Image img');

    // This gets the element where the price will be shown
    const iPhone16Price = document.querySelector('.Product-Page-Price p');

    // This handles the color selection feature
    // This finds all of the input elements for the iPhone 16 color options and loop through each one of them
    document.querySelectorAll('.iPhone-16-Color-Variants input').forEach(input => {

        // This function will run when a color input is clicked by the user
        input.addEventListener('click', () => {

            // This loops through all of the iPhone 16 images
            iPhone16Images.forEach(image => {

                // This evaluates if the data-image attribute of the image matches the selected color's data-image attribute
                // If they match, it adds the "active" class to the image. If they don't match, it will remove it
                image.classList.toggle('active', image.dataset.image === input.dataset.image);

                // This is responsible for the opacity change or unveiling of the product image
                // If the image's class is "active", it sets the opacity to 1 or makes the product image visible
                // If the image's class isn't "active", it sets the opacity to 0 or hides the product image
                image.style.opacity = image.classList.contains('active') ? '1' : '0';
            });
        });
    });

    // This handles the storage capacity option selection to update or change the product's price
    // This finds all the buttons for storage capacity options and loop through each one of them
    document.querySelectorAll('.iPhone-16-Storage-Options button').forEach(button => {

         // This function will run when the user clicks on a storage option button
        button.addEventListener('click', () => {

            // This updates the price being display based on the matching price that was stored in the button's data-price attribute
            iPhone16Price.textContent = button.dataset.price;
        });
    });
});