const menuIcon = document.getElementById("menu-icon");
const headerNav = document.getElementById("header-nav-list");
const headerNavItems = document.querySelectorAll(".header-nav-list li")

// toggle mobile menu show and hide 
menuIcon.addEventListener("click" , ()=> {
    headerNav.classList.toggle("open");

    // change menu icon 
    if(menuIcon.classList.contains("bx-grid-alt")){
        menuIcon.className = "bx bx-chevrons-right";

        // animated header nav list item 
        headerNavItems.forEach((item,index) => {
            item.classList.add("open");
            item.style.transitionDelay = `${index * 0.5}s`;
        })
    }else{
        menuIcon.className = "bx bx-grid-alt";
        headerNavItems.forEach((item,index) => {
            item.classList.remove("open");
            item.style.transitionDelay = "0s";
        })
    }
})