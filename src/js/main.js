// Variables

let menuItemAll = document.querySelectorAll(".menu-item");

let buttonsItemAll;


let titleShop = document.querySelector("#titleShop");

let contentShop = document.querySelector(".content-right-items");


let itemShop = document.querySelector(".content-item");

let dataItems;

let id = 0;

let itemsLoaded = false;

let carrito = [];

// Hacemos una peticion fecht para obtener el JSON que contiene los datos de los objetos a vender.

fetch('src/js/object.json').then( response => response.json())
        .then( data => {
            dataItems = data;
        })


menuItemAll.forEach(menuItem => {
    menuItem.addEventListener("click",()=> {
        menuItemAll.forEach(menuItem => {
            menuItem.classList.remove("active");
            menuItem.classList.remove("no-hover");
            if (menuItem.querySelector("#cartMenu-number")){
                menuItem.querySelector("#cartMenu-number").style = "color: var(--color-primario); background-color: var(--color-secundario)";
            }
        })
        menuItem.classList.add("active");
        menuItem.classList.add("no-hover");
        if (menuItem.querySelector("#cartMenu-number")){
            menuItem.querySelector("#cartMenu-number").style = "color: var(--color-secundario); background-color: var(--color-primario)";
        }
        loadHTML(menuItem)
    })
        menuItem.addEventListener("mouseover",()=> {
        menuItem.querySelector(".menu-item-i").style = "margin-left: 10px;"

    })
})

function loadHTML (menuItemSelected){
    itemsLoaded = true;
    const nameItemsSelected = menuItemSelected.querySelector(".menu-item-name").textContent;
    contentShop.innerHTML = " "
    if (nameItemsSelected == "camisetas") {
        id = 0;
        dataItems.camisetas.forEach(dataItemSelect => {
            id++;
            titleShop.textContent = "Camisetas"
            let itemNewHTML =   `   
            <div class="content-item">
                <img class="content-item-image" src="${dataItemSelect.url}" alt="">
                <div class="content-item-text">   
                    <h3 class="content-item-name">${dataItemSelect.name} 0${id}</h3>                    
                    <h4 class="content-item-price">$${dataItemSelect.precio}</h4>
            <button class="content-item-button" onclick="saveItem(this)">AÑADIR</button>
                </div>
            </div>
            `  
                contentShop.innerHTML += itemNewHTML
        })
    }
    if (nameItemsSelected == "abrigos") {
        id = 0;
        dataItems.abrigos.forEach(dataItemSelect => {
            titleShop.textContent = "Abrigos"
            id++;
            let itemNewHTML =   `   
            <div class="content-item">
                <img class="content-item-image" src="${dataItemSelect.url}" alt="">
                <div class="content-item-text">   
                    <h3 class="content-item-name">${dataItemSelect.name} 0${id}</h3>                    <h4 class="content-item-price">$${dataItemSelect.precio}</h4>
            <button class="content-item-button" onclick="saveItem(this)">AÑADIR</button>
                </div>
            </div>
            `  
            contentShop.innerHTML += itemNewHTML     
        })
    }
    if (nameItemsSelected == "pantalones") {
        id = 0;
        dataItems.pantalones.forEach(dataItemSelect => {
            titleShop.textContent = "Pantalones"
            id++;
            let itemNewHTML =   `   
            <div class="content-item">
                <img class="content-item-image" src="${dataItemSelect.url}" alt="">
                <div class="content-item-text">   
                    <h3 class="content-item-name">${dataItemSelect.name} 0${id}</h3>                    
                    <h4 class="content-item-price">$${dataItemSelect.precio}</h4>
            <button class="content-item-button" onclick="saveItem(this)">AÑADIR</button>
                </div>
            </div>
            `  
            contentShop.innerHTML += itemNewHTML         
        })
    }

    else if (nameItemsSelected == "todos los productos") {
        id = 0;
        dataItems.abrigos.forEach(dataItemSelect => {
            titleShop.textContent = "Todos los productos";
            id++;
            let itemNewHTML =   `   
            <div class="content-item">
                <img class="content-item-image" src="${dataItemSelect.url}" alt="">
                <div class="content-item-text">   
                    <h3 class="content-item-name">${dataItemSelect.name} 0${id}</h3>                    
                    <h4 class="content-item-price">$${dataItemSelect.precio}</h4>
            <button class="content-item-button" onclick="saveItem(this)">AÑADIR</button>
                </div>
            </div>
            `  
            contentShop.innerHTML += itemNewHTML     
        })
        id = 0;
        dataItems.camisetas.forEach(dataItemSelect => {
            id++;
            let itemNewHTML =   `   
            <div class="content-item">
                <img class="content-item-image" src="${dataItemSelect.url}" alt="">
                <div class="content-item-text">   
                    <h3 class="content-item-name">${dataItemSelect.name} 0${id}</h3>                    
                    <h4 class="content-item-price">$${dataItemSelect.precio}</h4>
            <button class="content-item-button" onclick="saveItem(this)">AÑADIR</button>
                </div>
            </div>
            `  
            contentShop.innerHTML += itemNewHTML
        })
        id = 0;
        dataItems.pantalones.forEach(dataItemSelect => {
            id++;
            let itemNewHTML =   `   
            <div class="content-item">
                <img class="content-item-image" src="${dataItemSelect.url}" alt="">
                <div class="content-item-text">   
                    <h3 class="content-item-name">${dataItemSelect.name} 0${id}</h3>                    
                    <h4 class="content-item-price">$${dataItemSelect.precio}</h4>
            <button class="content-item-button" onclick="saveItem(this)">AÑADIR</button>
                </div>
            </div>
            `  
            contentShop.innerHTML += itemNewHTML         
        })
    }

    else if (nameItemsSelected == "Carrito"){
        titleShop.textContent = "Carrito"
        contentShop.innerHTML += `   
            <section class="cart">
                <div class="cartItem-container">

                </div>
                <div class="cartButtons">
                    <button>VACIAR CARRITO</button>
                    <div class="cartButtonsBuy">
                        <h3>Total: <span id="cartTotal">$0</span></h3>
                        <input type="submit" value="COMPRAR AHORA">
                    </div>
                </div>
            </section>
            `
        addCart(carrito);
    }
}

function saveItem(itemButton) {
    let contentItem = itemButton.parentElement.parentElement;
    let nameItem = contentItem.querySelector(".content-item-name").textContent;
    let priceItem = contentItem.querySelector(".content-item-price").textContent;
    let imageItem = contentItem.querySelector(".content-item-image").src;
    let saveItem = {
        "name" : nameItem,
        "price" : priceItem,
        "image" : imageItem,
        "quantity" : 1
    }
    carrito.forEach(item => {
        if (nameItem == item.name) {
            item.quantity = item.quantity + 1;
        }
    })
    if (carrito.length == 0){
        carrito.push(saveItem)
    } else {
        carrito.forEach(item => {
            if (nameItem == item.name) {
                item.quantity = item.quantity + 1;
            }
            if (nameItem != item.name) {
                carrito.push(saveItem)
            }
        })

    }
    document.getElementById("cartMenu-number").textContent = carrito.length;
    console.log(carrito)
}

function addCart(itemsSaveds) {
    itemsSaveds.forEach(itemSaved => {
        document.querySelector(".cartItem-container").innerHTML += `
                    
                    <div class="cartItem">
                        <img src="${itemSaved.image}" alt="">
                        <div class="cartItem-name">
                            <h6>Nombre</h6>
                            <h4>${itemSaved.name}</h4>

                        </div>
                        <div class="cartItem-quantity">
                            <h6>Cantidad</h6>
                            <h4>${itemSaved.quantity}</h4>
                        </div>
                        <div class="cartItem-price">
                            <h6>Precio</h6>
                            <h4>${itemSaved.price}</h4>
                        </div>
                        <div class="cartItem-totalPrice">
                            <div class="cartItem-price">
                                <h6>Precio Total</h6>
                                <h4>$4000</h4>
                            </div>
                        </div>
                        <div class="cartItem-btnDelete">
                            <i class="fa-solid fa-trash-can"></i>
                        </div>
                    </div>
        
        `
    })
}