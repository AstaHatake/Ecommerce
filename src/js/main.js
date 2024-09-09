// Variables HTML

let menuItemAll = document.querySelectorAll(".menu-item");


let titleShop = document.querySelector("#titleShop");

let contentShop = document.querySelector(".content-right-items");


let itemShop = document.querySelector(".content-item");

let dataItems;

let id = 0;

// Hacemos una peticion fecht para obtener el JSON que contiene los datos de los objetos a vender.

fetch('src/js/object.json').then( response => response.json())
        .then( data => {
            dataItems = data;
            /* 
                data.pantalones.forEach(element => {
                console.log(element)
            });
            */
        })

// Variables para usar en el Javascript

let number = 1;

let itemHTML =   `   
            <div class="content-item">
                <img class="content-item-image"src="src/img/abrigos/01.jpg" alt="">
                <div class="content-item-text">   
                    <h3>Abrigo numero 1</h3>
                    <h3>$20</h3>
                    <button class="content-item-button">AÑADIR</button>
                </div>
            </div>
            `

let itemsHTML = "";
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
        console.log(menuItem)
        loadHTML(menuItem)
    })
        menuItem.addEventListener("mouseover",()=> {
        menuItem.querySelector(".menu-item-i").style = "margin-left: 10px;"
    })
})

function loadHTML (menuItemSelected){
    const nameItemsSelected = menuItemSelected.querySelector(".menu-item-name").textContent;
    contentShop.innerHTML = " "
    if (nameItemsSelected == "camisetas") {
        dataItems.camisetas.forEach(dataItemSelect => {
            let itemNewHTML =   `   
            <div class="content-item">
                <img class="content-item-image" src="${dataItemSelect.url}" alt="">
                <div class="content-item-text">   
                    <h3>${dataItemSelect.name}</h3>
                    <h3>${dataItemSelect.precio}</h3>
                    <button class="content-item-button">AÑADIR</button>
                </div>
            </div>
            `  
                contentShop.innerHTML += itemNewHTML
        })
    }
    if (nameItemsSelected == "abrigos") {
        dataItems.abrigos.forEach(dataItemSelect => {
            let itemNewHTML =   `   
            <div class="content-item">
                <img class="content-item-image" src="${dataItemSelect.url}" alt="">
                <div class="content-item-text">   
                    <h3>${dataItemSelect.name}</h3>
                    <h3>${dataItemSelect.precio}</h3>
                    <button class="content-item-button">AÑADIR</button>
                </div>
            </div>
            `  
            contentShop.innerHTML += itemNewHTML     
        })
    }
    if (nameItemsSelected == "pantalones") {
        dataItems.pantalones.forEach(dataItemSelect => {
            let itemNewHTML =   `   
            <div class="content-item">
                <img class="content-item-image" src="${dataItemSelect.url}" alt="">
                <div class="content-item-text">   
                    <h3>${dataItemSelect.name}</h3>
                    <h3>${dataItemSelect.precio}</h3>
                    <button class="content-item-button">AÑADIR</button>
                </div>
            </div>
            `  
            contentShop.innerHTML += itemNewHTML         
        })
    }

    else if (nameItemsSelected == "todos los productos") {
        dataItems.abrigos.forEach(dataItemSelect => {
            let itemNewHTML =   `   
            <div class="content-item">
                <img class="content-item-image" src="${dataItemSelect.url}" alt="">
                <div class="content-item-text">   
                    <h3>${dataItemSelect.name} </h3>
                    <h3>${dataItemSelect.precio}</h3>
                    <button class="content-item-button">AÑADIR</button>
                </div>
            </div>
            `  
            contentShop.innerHTML += itemNewHTML     
        })
        dataItems.camisetas.forEach(dataItemSelect => {
            let itemNewHTML =   `   
            <div class="content-item">
                <img class="content-item-image" src="${dataItemSelect.url}" alt="">
                <div class="content-item-text">   
                    <h3>${dataItemSelect.name}</h3>
                    <h3>${dataItemSelect.precio}</h3>
                    <button class="content-item-button">AÑADIR</button>
                </div>
            </div>
            `  
            contentShop.innerHTML += itemNewHTML
        })
        dataItems.pantalones.forEach(dataItemSelect => {
            let itemNewHTML =   `   
            <div class="content-item">
                <img class="content-item-image" src="${dataItemSelect.url}" alt="">
                <div class="content-item-text">   
                    <h3>${dataItemSelect.name}</h3>
                    <h3>${dataItemSelect.precio}</h3>
                    <button class="content-item-button">AÑADIR</button>
                </div>
            </div>
            `  
            contentShop.innerHTML += itemNewHTML         
        })
    }
}


