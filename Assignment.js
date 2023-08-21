function toggleButtonHandler() {
    let toggleMenu = document.querySelector('.toggle-menu'); /* connecting to html */
    let toggleMenuDisplayStatus = window.getComputedStyle(toggleMenu).getPropertyValue('display'); /* connecting to css */
    let slider = document.querySelector('.slider');
    let main = document.querySelector('.main');
    let footer = document.querySelector('.footer');
    let cardNL = document.querySelector(".crd");

    if (toggleMenuDisplayStatus == "none") {
        toggleMenu.style.display = "block";
        cardNL.style.display = "none";
        slider.style.display = "none";
        main.style.display = "none";
        footer.style.display = "none";
    } else {
        toggleMenu.style.display = "none";
        slider.style.display = "block";
        main.style.display = "block";
        footer.style.display = "flex";
        cardNL.style.display = "block";
    }
}


