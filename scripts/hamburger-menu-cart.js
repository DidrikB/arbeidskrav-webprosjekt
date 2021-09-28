const hamburgerMenu = document.querySelector(".hamburger-menu-cart");
const headerContainer = document.querySelector(".header-nav-cart");

const changeDisplay = () => {

    const display = headerContainer.style.display;

    if(display === "none" || display == ""){
        headerContainer.style.display = "flex";
    }else {
        headerContainer.style.display = "none";
    }
    
}

hamburgerMenu.addEventListener("click",changeDisplay);