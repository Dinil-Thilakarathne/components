const menuToggleIcon = document.querySelector(".menu-toggle-icon");
const dropDownMenu = document.querySelector('.drop-down-menu');

menuToggleIcon.addEventListener('click', () => {
    menuToggleIcon.classList.toggle('active');
    dropDownMenu.classList.toggle('active');
});