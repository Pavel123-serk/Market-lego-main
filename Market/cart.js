let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-items");

const totalEl = document.getElementById("total");

function renderCart(){

    container.innerHTML = "";

    let total = 0;

    if(cart.length === 0){

        container.innerHTML =
        "<h2>Cart is empty 😢</h2>";

        totalEl.innerHTML = "";

        return;
    }

    cart.forEach((item,index) => {

        const priceNumber =
        parseFloat(item.price.replace("$",""));

        total += priceNumber;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
        
            <img src="${item.img}">

            <div>
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            </div>

            <button onclick="removeItem(${index})">
                ❌
            </button>
        `;

        container.appendChild(div);

    });

    totalEl.innerHTML =
    "Total: $" + total.toFixed(2);
}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    renderCart();
}

function clearCart(){

    localStorage.removeItem("cart");

    cart = [];

    renderCart();
}

function checkout(){

    alert("✅ Order placed!");

    clearCart();
}

renderCart();

