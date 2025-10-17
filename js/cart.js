// const aangemaakt om producten in de aside, na de h3-tag te kunnen toevoegen
const cartTitle = document.getElementsByTagName("aside")[0].getElementsByTagName("h3")[0];
const cartItems = document.getElementsByClassName("cart-item");
const cartItemName = document.getElementsByClassName("cart-item-name");
const cartQuantityField = document.getElementsByClassName("cart-item-quantity");
const cartTotal = document.getElementById("cart-total-price");
const products = document.getElementsByClassName("product-card");
const deleteButtons = document.getElementsByClassName("btn-cart-delete");
const buttonAddToCart = document.getElementsByClassName("btn-cart-add");

//array maken met objecten van product info
let productInformation = [];
for (let i = 0; i < products.length; i++) {
    let product = {
        name: document.getElementsByClassName("product-name-card")[i].textContent,
        imagesrc: document.getElementsByClassName("product-img")[i].src,
        price: parseFloat(document.getElementsByClassName("product-price-card")[i].textContent.replace("€ ", "").replace(",", ".")),
    }
    productInformation.push(product);
}

// Klikken op eender welke winkelmand knop, voegt een product toe aan het winkelmandje
for (let i = 0; i < buttonAddToCart.length; i++) {
    let button = buttonAddToCart[i];
    let productName = productInformation[i].name;
    let imageSource = productInformation[i].imagesrc;
    let productPrice = productInformation[i].price.toFixed(2).replace(".", ",");
    button.addEventListener("click", function() {
        addCartItem(productName, imageSource, productPrice);        
    });
}

deleteCartItem();

function addCartItem(product, source, price) {
    let productsInCart = [];

    // array opvullen met alle items in winkelmand
    for (let i = 0; i < cartItemName.length; i++) {
        productsInCart.push(cartItemName[i].textContent);
    }
    
    // Check of product in de array zit
    if(productsInCart.includes(product)) {
        // index van product bepalen waar qty opgeteld moet worden
        let indexOfItemInCart = productsInCart.indexOf(product);
        let cartItemQuantity = cartQuantityField[indexOfItemInCart].textContent;
        cartItemQuantity++;
        cartQuantityField[indexOfItemInCart].textContent = cartItemQuantity;
    } else {
        createCartItem(product, source, price);
    }
    // Array leegmaken zodat de check telkens vanaf 0 kan beginnen
    productsInCart.length = 0;
    
    // Prijs opnieuw berekenen
    calculateCartTotal();
    // Functie opnieuw oproepen zodat de items verwijderd kunnen worden na het toevoegen
    deleteCartItem();
}

// Cart item aanmaken en toevoegen aan lijst
function createCartItem(product, source, price) {
    let cartItem = `
        <article class="cart-item">
            <h4 class="cart-item-name">${product}</h4>
            <section class="cart-item-info">
                <img src="${source}" alt="Product in winkelmandje" class="cart-item-image" width="100px" height="auto">
                <p><span class="cart-item-price">&euro; </span><span class="cart-item-price">${price}</span><br>
                Aantal: <span class="cart-item-quantity">1</span></p>           
                <button class="btn-cart-delete">
                    <img src="./assets/images/icons/icon-trash.png" alt="icoon verwijderen">
                </button>
            </section>            
        </article>`;

    cartTitle.insertAdjacentHTML("afterend", cartItem);
}

// Totaal berekenen van producten in het winkelmandje
function calculateCartTotal() {
    let cartItemsTotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
        let cartItemPrice = parseFloat(cartItems[i].getElementsByClassName("cart-item-price")[1].textContent.replace(",", "."));
        let cartItemQuantity = parseInt(cartItems[i].getElementsByClassName("cart-item-quantity")[0].textContent);
        let cartItemSubtotal = cartItemPrice * cartItemQuantity;
        cartItemsTotal += cartItemSubtotal;
    }    
    cartTotal.textContent = cartItemsTotal.toFixed(2).replace(".", ",");
}

// Producten verwijderen uit het winkelmandje
function deleteCartItem() {
    for (let i = 0; i < deleteButtons.length; i++) {
        let button = deleteButtons[i];
        button.addEventListener("click", function() {
            button.parentElement.parentElement.remove();
            calculateCartTotal();
        });
    }

}