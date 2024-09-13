// Variables

let menuItemAll = document.querySelectorAll(".menu-item");

let buttonsItemAll;

let menuCartNumber = document.getElementById("cartMenu-number");


let titleShop = document.querySelector("#titleShop");

let contentShop = document.querySelector(".content-right-items");


let itemShop = document.querySelector(".content-item");

let alertContainer = document.querySelector(".alerts-container");

let dataItems;

let id = 0;

let itemsLoaded = false;

let carrito = [];

let totalPrice = 0;

// Hacemos una peticion fecht para obtener el JSON que contiene los datos de los objetos a vender.

fetch('src/js/object.json').then( response => response.json())
        .then( data => {
            dataItems = data;
            id =  0;
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
                    <button onclick="clearCart()">VACIAR CARRITO</button>
                    <div class="cartButtonsBuy">
                        <h3>Total: <span id="cartTotal">$${totalPrice}</span></h3>
                        <input type="submit" onclick="buyCart()" value="COMPRAR AHORA">
                    </div>
                </div>
            </section>
            `
        addCart(carrito);
    }
}

function clearAlert(){
    setTimeout(() => {
        let allAlerts = alertContainer.querySelectorAll(".alert");
        allAlerts = Array.from(allAlerts);
        for (let i = allAlerts.length - 1; i >= 0; i--) {
            allAlerts[i].remove();

        }
    }, 2300);
}

function createAlert(action) {
    let newAlert = `
    <div class="alert">
        <h4>${action}</h4>
    </div>
    `
    alertContainer.innerHTML += newAlert;
    clearAlert();
}

function saveItem(itemButton) {
    let contentItem = itemButton.parentElement.parentElement;
    let nameItem = contentItem.querySelector(".content-item-name").textContent;
    let priceItem = contentItem.querySelector(".content-item-price").textContent;
    priceItem = priceItem.replace("$", "");
    let imageItem = contentItem.querySelector(".content-item-image").src;
    let saveItem = {
        "name" : nameItem,
        "price" : priceItem,
        "totalPrice" : priceItem,
        "image" : imageItem,
        "quantity" : 1
    }

    totalPrice = parseInt(totalPrice);

    // Verificar si el elemento ya existe en el carrito
    let existsInCart = carrito.some(item => item.name === nameItem);

    if (existsInCart) {
        // Si el elemento ya existe, incrementar la cantidad
        carrito.forEach(item => {
            if (item.name === nameItem) {
                item.quantity = item.quantity + 1;
                item.totalPrice = parseInt(item.totalPrice) + parseInt(item.price);
                totalPrice = parseInt(totalPrice) + parseInt(item.price);

            }
        })
    } else {
        // Si el elemento no existe, agregarlo al carrito
        totalPrice = parseInt(totalPrice) + parseInt(saveItem.price);
        carrito.push(saveItem);
    }

    document.getElementById("cartMenu-number").textContent = carrito.length;
    createAlert('¡Guardado en carrito!')
}

function addCart(itemsSaveds) {
    itemsSaveds.forEach(itemSaved => {
        document.querySelector(".cartItem-container").innerHTML += `
                    
                    <div class="cartItem">
                        <img class="cartItem-image" src="${itemSaved.image}" alt="">
                        <div class="cartItem-name">
                            <h6>Nombre</h6>
                            <h4 class="cartItem-name-h4">${itemSaved.name}</h4>

                        </div>
                        <div class="cartItem-quantity">
                            <h6>Cantidad</h6>
                            <h4 class="cartItem-quantity-h4">${itemSaved.quantity}</h4>
                        </div>
                        <div class="cartItem-price">
                            <h6>Precio</h6>
                            <h4 class="cartItem-price-h4">${itemSaved.price}</h4>
                        </div>
                        <div class="cartItem-totalPrice">
                            <div class="cartItem-price">
                                <h6>Precio Total</h6>
                                <h4 class="cartItem-totalPrice-h4">$${itemSaved.totalPrice}</h4>
                            </div>
                        </div>
                        <div class="cartItem-btnDelete">
                            <i class="fa-solid fa-trash-can" onclick="removeItem(this)"></i>
                        </div>
                    </div>
        
        `
    })
}

function removeItem(itemButton){
    let contentItem = itemButton.parentElement.parentElement;
    let nameItem = contentItem.querySelector(".cartItem-name-h4").textContent;
    let priceTotalItem = contentItem.querySelector(".cartItem-totalPrice-h4").textContent;
    priceTotalItem = priceTotalItem.replace("$", " ")
    let imageItem = contentItem.querySelector(".cartItem-image").src;
    
    document.getElementById("cartMenu-number").textContent = parseInt(document.getElementById("cartMenu-number").textContent) - 1;

    carrito.forEach(itemCarritoArray => {
        if (itemCarritoArray.name == nameItem) {
            carrito = carrito.filter(itemCarrito => itemCarrito.name !== nameItem); 
            document.querySelector(".cartItem-container").innerHTML = " "
            carrito.forEach(carritoItem => {
                document.querySelector(".cartItem-container").innerHTML += `
                            
                            <div class="cartItem">
                                <img class="cartItem-image" src="${carritoItem.image}" alt="">
                                <div class="cartItem-name">
                                    <h6>Nombre</h6>
                                    <h4 class="cartItem-name-h4">${carritoItem.name}</h4>
        
                                </div>
                                <div class="cartItem-quantity">
                                    <h6>Cantidad</h6>
                                    <h4 class="cartItem-quantity-h4">${carritoItem.quantity}</h4>
                                </div>
                                <div class="cartItem-price">
                                    <h6>Precio</h6>
                                    <h4 class="cartItem-price-h4">${carritoItem.price}</h4>
                                </div>
                                <div class="cartItem-totalPrice">
                                    <div class="cartItem-price">
                                        <h6>Precio Total</h6>
                                        <h4 class="cartItem-totalPrice-h4">$${carritoItem.totalPrice}</h4>
                                    </div>
                                </div>
                                <div class="cartItem-btnDelete">
                                    <i class="fa-solid fa-trash-can" onclick="removeItem(this)"></i>
                                </div>
                            </div>
                
                `
            })
            totalPrice = parseInt(totalPrice) - parseInt(priceTotalItem);
            document.getElementById("cartTotal").textContent = "$" + totalPrice;
        }
    })
    createAlert('¡Se ha eliminado del carrito!')
}

function clearCart(){
    if (carrito.length == 0 ){
        createAlert("¡El carrito esta vacio!")
    } else {
        carrito = [];
        totalPrice = 0;
        document.getElementById("cartTotal").textContent = "$0";
        contentShop.innerHTML = `   
        <section class="cart">
            <div class="cartItem-container">

            </div>
            <div class="cartButtons">
                <button onclick="clearCart()">VACIAR CARRITO</button>
                <div class="cartButtonsBuy">
                    <h3>Total: <span id="cartTotal">$${totalPrice}</span></h3>
                    <input type="submit" value="COMPRAR AHORA">
                </div>
            </div>
        </section>
        `
        menuCartNumber.textContent = 0;
        createAlert("¡Se ha vaciado el carrito!")
    }
}

function buyCart(){
    if (carrito.length == 0) {
        createAlert("¡Debes tener articulos para comprar!")
    }
    else {
        clearCart();
        createAlert("¡Gracias por su compra!")
    }
}

