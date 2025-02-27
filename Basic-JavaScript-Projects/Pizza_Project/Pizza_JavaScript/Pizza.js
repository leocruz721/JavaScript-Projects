function calculateTotal() {
    let sizePrice = parseInt(document.getElementById("size").value);
    let toppings = document.querySelectorAll(".topping:checked");
    let toppingPrice = toppings.length * 2;
    let total = sizePrice + toppingPrice;
        document.getElementById("total").innerText = total;
    }

function placeOrder() {
        alert("Your pizza order has been placed!");
    }
   