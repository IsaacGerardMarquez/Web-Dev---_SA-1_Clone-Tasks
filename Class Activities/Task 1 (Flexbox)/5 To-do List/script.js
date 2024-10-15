// This selects the ul tag or unordered list
const ul = document.querySelector("ul");

// This selects the input field of type "text"
const input = document.querySelector("input[type='text']");

// I created an event listener for task actions (such as clicking on the list items)
ul.addEventListener("click", (event) => {

    // This finds the closest "li" tag or list item that was clicked
    const li = event.target.closest("li");

    // If a list item was clicked by the player
    if (li) {

        // This checks or validates if the clicked element is a span or delete button
        if (event.target.closest("span")) {

            // This applies a fade-out animation by setting the opacity to 0 over 0.5 seconds
            li.style.transition = "opacity 0.5s";
            li.style.opacity = "0";

            // This removes the list item right after the fade-out animation
            setTimeout(() => li.remove(), 500);
        } else {
            li.classList.toggle("CheckOrDash"); 
        }
    }
});

// This is to add a new To-do activity
// I created an event listener used to add a new To-do activity when the Enter key (key code 13) is pressed
input.addEventListener("keypress", (event) => {

    // This checks or validates if the "Enter" key was pressed by the user and if the input field is not empty
    if (event.which === 13 && input.value.trim()) {

        // This inserts a new list item at the end of the unordered list (ul)
        ul.insertAdjacentHTML("beforeend", `<li><i class='bx bx-pin'></i><span><i class='bx bx-x-circle' ></i></span>${input.value}</li>`);

        // This is to clear the input field right after adding the To-do activity
        input.value = ""; 
    }
});
