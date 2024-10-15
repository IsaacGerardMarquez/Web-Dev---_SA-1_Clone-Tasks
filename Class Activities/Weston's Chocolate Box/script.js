// This is a function that updates the main displayed chocolate image. This works by taking the image path as an argument and updates the property named "src".
const imgSlider = (image) => {
    document.querySelector('.Primary-Chocolate-Image').src = image;
};


// This is another function that is responsible to the background color change function. This works by accepting a color value and applies it to the property named "background".
const changeBgColor = (color) => {
    document.querySelector('section').style.background = color;
};

// This is the last function to enable the responsive menu's visibility. This works by either adding or removing the "active" class from both the menu button and links.
const menuToggle = () => {
    document.querySelector('.Website-Menu-Button').classList.toggle('active');
    document.querySelector('.Navigational-Links').classList.toggle('active');
};
