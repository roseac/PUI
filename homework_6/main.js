// Product Details - show selected color

function selectColor(element, color) {
    document.getElementById("colname").innerHTML = color;
    var colors = document.getElementsByClassName("col")
        for (var i=0; i<colors.length; i++){
            var elem = colors[i]
            elem.style.border = "none"
        }
    element.style.border = "2pt solid black";
    document.getElementById('img3').src= color + '.jpg'
    productDetails.color = color;
    productDetails.img = color + '.jpg'
}

// Product Details - show selected size

function selectSize(element, size) {
    var text = document.getElementsByClassName("sizesli");
        for (var i=0; i<text.length; i++){
            var elem = text[i]
            elem.style.color = "black"
        }
    var background = document.getElementsByClassName("sizesli");
        for (var i=0; i<background.length; i++){
            var elem = background[i]
            elem.style.backgroundColor = "white"
        }
    element.style.color = "white";
    element.style.backgroundColor = "black";
    productDetails.size = size;
}

// Track Selections + Add to Cart

var productDetails = {
    color: "null",
    size: "null",
    img: "null"
}


function addToCart() {
    var cartStr = localStorage.getItem("cart")
    if (cartStr){
    var cart = JSON.parse(cartStr);
    } else {
    var cart = [];
}
    cart.push(productDetails);
    var cartStr = JSON.stringify(cart);
    localStorage.setItem("cart", cartStr);
}

function update() {
    var setCart = JSON.parse(localStorage.getItem("cart"));
    if (setCart !== undefined) {
        for (var i=0; i<setCart.length; i++){
            var elem = setCart[i]
            var div = document.getElementById("rectcart");
            var newElement = document.createElement("div");
            newElement.setAttribute("id", "rectcart"+i);
            div.appendChild(newElement);
            document.getElementById("colname2").innerHTML = elem.color;
            document.getElementById("size2").innerHTML = elem.size;
            document.getElementById("imgcart").src = elem.img;
        }
    } else {
    var item = document.getElementById("rectcart");
    item.parentNode.removeChild(item);
}}


function deleteItem() {
    var item = document.getElementById("rectcart");
    item.parentNode.removeChild(item);
}
