
var products = ["product1", "product2", "product3"];
var totalPrice = 0;
function updateCheckoutList(){
    products.forEach(function (product, value) {
        if(localStorage.getItem(product)){
            var productValue = localStorage.getItem(product);
            totalPrice = +totalPrice + +productValue;
            var node = document.createElement("LI");
            var textnode = document.createTextNode(product + ": " + productValue);
            node.appendChild(textnode);
            document.getElementById("ProductsList").appendChild(node);
        }
    });
    document.getElementById("TotalPrice").innerHTML = "Total cost: " + totalPrice; 
}

function CompleteTransaction() {
    alert("Your transaction has been completed")
    localStorage.clear();
    location.reload();
}