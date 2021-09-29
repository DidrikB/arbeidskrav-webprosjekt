const hamburgerMenu = document.querySelector(".hamburger-menu");
const headerContainer = document.querySelector(".header-nav");

const changeDisplay = () => {

    const display = headerContainer.style.display;

    if(display === "none" || display == ""){
        headerContainer.style.display = "flex";
    }else {
        headerContainer.style.display = "none";
    }
    
}

hamburgerMenu.addEventListener("click",changeDisplay);

const checkResize = () => {
    const display = headerContainer.style.display;
    if(window.innerWidth > 768 && display === "none"){
        headerContainer.style.display= "block";
    }
    
}
window.addEventListener("resize", checkResize);
