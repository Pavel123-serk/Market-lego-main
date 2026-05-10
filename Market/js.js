let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cart-count");

cartCount.innerText = cart.length;

function changeText(){

    const text = document.getElementById("text");

    if(text.innerHTML.includes("amazing")){

        text.innerHTML =
        "Start building your Lego world today!";

    }else{

        text.innerHTML =
        "Create amazing Lego creations with endless possibilities!";
    }
}

const buttons = document.querySelectorAll(".buy");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        const card = btn.closest(".card");

        const item = {

            name: card.querySelector("h3").innerText,

            price: card.querySelector(".price").innerText,

            img: card.querySelector("img").src
        };

        cart.push(item);

        localStorage.setItem("cart", JSON.stringify(cart));

        cartCount.innerText = cart.length;

        btn.innerHTML = "Added ✔";

        setTimeout(() => {

            btn.innerHTML = "Buy Now";

        },1000);

    });

});