// The code runs when the page has fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // I created a click event listener to the sidebar menu button that shows or hides the sidebar when clicked
    document.querySelector(".SidebarMenuButton")?.addEventListener("click", () =>
        document.querySelector(".GridLayoutContainer")?.classList.toggle("active")
    );

    // I created another click event listener to the user profile icon that toggles the "active" class on the profile dropdown menu when clicked which either shows or hides the profile dropdown menu
    document.querySelector(".WebsiteHeader .bx-user-circle")?.addEventListener("click", () =>
        document.querySelector(".User-Profile-Menu-Button-Contents")?.classList.toggle("active")
    );
});
