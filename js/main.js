const cart = document.querySelector("#nav-icons");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const addToCart = document.querySelector(".addtocart")

let check = false;
var qty = 0;

cart.addEventListener("click", dropMenu);
plus.addEventListener("click", addNum);
minus.addEventListener("click", subNum);
addToCart.addEventListener("click", addItem);

function dropMenu(){

    if (!check) {
        document.getElementById("drop-down").style.display = "block";

        check = true;
    } else {
        document.getElementById("drop-down").style.display = "none"

        check = false;
    }

}

var numb = document.getElementById("num");

function addNum(){

    qty += 1;

    if (qty >= 0) {
        numb.innerHTML = qty;
    }

}

function subNum(){

    qty -= 1;
    if (qty >= 0) {
        numb.innerHTML = qty;
    }

}

function addItem() {
    var itemName = document.getElementById("itemName-1").innerText;
    var price = parseInt(document.getElementsByClassName("price").innerText.replace(/[^0-9\.]+/g, ""));
    /*var elem = document.getElementsByClassName("product-pics-1");
    var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background");

    document.getElementsByClassName("thumbnail").style.background = theCSSprop;*/
    

    document.getElementById("itemName-2").innerHTML = itemName;
    document.getElementById("supplyQty").innerHTML = "$" + price + " * " + qty + " = ";
}