// Variables HTML

let menuItemAll = document.querySelectorAll(".menu-item");
let number = 1;
/*



*/

menuItemAll.forEach(menuItem => {
    menuItem.addEventListener("click",()=> {
        menuItemAll.forEach(menuItem => {
            menuItem.classList.remove("active");
            menuItem.classList.remove("no-hover");

        })
        menuItem.classList.add("active");
        menuItem.classList.add("no-hover");
    })
        menuItem.addEventListener("mouseover",()=> {
        console.log("aa")
        menuItem.querySelector(".menu-item-i").style = "margin-left: 10px;"
    })
})

