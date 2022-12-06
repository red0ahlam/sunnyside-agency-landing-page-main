
const menu_button = document.getElementById("menu-button");
const nav_items = document.getElementById("nav-items");
const arrow_icon = document.getElementById("arrow-icon");
const main_navigation = document.querySelector(".main-navigation");
let x = true;


function display () {
    nav_items.classList.toggle("display");
    arrow_icon.classList.toggle("icon-display");
    menu_button.setAttribute("aria-expanded",x);
    (x) ? x = false : x = true ;
}

document.onclick = function (e) {

    let nav_list = e.target.parentNode;
    let nav_child = e.target;

    if(e.target.matches("#menu-button")) {
        display();
    }
    else if( (x == false) && !(nav_child.classList.contains("nav-items")) && !(nav_list.classList.contains("nav-items"))) {
        display();
    }
}
