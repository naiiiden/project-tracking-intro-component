document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav-ul").classList.toggle("show");
    if (document.getElementById("menu_open").getAttribute("src") === "images/icon-hamburger.svg") {
        document.getElementById("menu_open").setAttribute("src", "images/icon-close.svg");
        document.querySelector("#hamburger").ariaLabel = "Close menu";
        document.querySelector("#hamburger").ariaExpanded = "true";
    } else {
        document.getElementById("menu_open").setAttribute("src", "images/icon-hamburger.svg");
        document.querySelector("#hamburger").ariaLabel = "Open menu";
        document.querySelector("#hamburger").ariaExpanded = "false";
    }
});