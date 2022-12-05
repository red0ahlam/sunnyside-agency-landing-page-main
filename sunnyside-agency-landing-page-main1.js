
const menu_button = document.getElementById("menu-button");
const nav_items = document.getElementById("nav-items");
const arrow_icon = document.getElementById("arrow-icon");
let x = true;


menu_button.addEventListener('click', () => {
    nav_items.classList.toggle("display");
    arrow_icon.classList.toggle("icon-display");
    menu_button.setAttribute("aria-expanded",x);
    if(x) {
        x = false;
    }else {
        x = true;
    }
})