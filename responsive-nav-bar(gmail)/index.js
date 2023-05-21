//menu toggle
const menuIcon = document.querySelector('.menu-toggle');
const sideMenu = document.querySelector('.side-nav');

menuIcon.addEventListener(('click'), () => {
    sideMenu.classList.toggle('active');
});

//secondary nav toggle
const moreBtn = document.querySelector('.more-toggle');
const secondaryNav = document.querySelector('.secondary-nav');

moreBtn.addEventListener(('click'), () => {
    const itemIcon = document.querySelector('.more-toggle .item-icon i');
    const itemTxt = document.querySelector('.more-toggle .item-txt');

    if(itemIcon.classList.contains('bx-chevron-down')){
        itemIcon.classList.remove('bx-chevron-down');
        itemIcon.classList.add('bx-chevron-up');
        itemTxt.textContent = 'Less';
    }else{
        itemIcon.classList.remove('bx-chevron-up');
        itemIcon.classList.add('bx-chevron-down');
        itemTxt.textContent = 'More';
    }
    secondaryNav.classList.toggle('active');
});


// mode change 
const modeChangeIcon = document.querySelector(".mode-change-icon");

modeChangeIcon.addEventListener("click" , () => {
    if(modeChangeIcon.classList.contains("bx-sun")){
        document.body.classList.toggle("light-mode");
        modeChangeIcon.classList.remove("bx-sun");
        modeChangeIcon.classList.add("bx-moon");
    }else{
        document.body.classList.toggle("light-mode");
        modeChangeIcon.classList.remove("bx-moon");
        modeChangeIcon.classList.add("bx-sun");
    }
})