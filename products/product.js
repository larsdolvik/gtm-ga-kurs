// Her ligger en lenke til analyticsjs dokumentasjonen dersom det skulle være ønskelig
// https://developers.google.com/analytics/devguides/collection/analyticsjs/


function shoppingCart(product, price) {
    if(localStorage.getItem(product)){
        localStorage.removeItem(product)
        alert("Removed from shopping cart")
        document.getElementById("ShoppingCartButton").innerHTML = "Add to shopping cart";   
    } else {
        // trackAddToShoppingCart(product, price)
        localStorage.setItem(product, price)
        alert("Added to shopping cart") 
        document.getElementById("ShoppingCartButton").innerHTML = "Remove shopping cart";
    }  
}

// function trackAddToShoppingCart(product, price) {
//     ga('send', {
//         hitType: 'event',
//         eventCategory: 'Added to shopping cart',
//         eventAction: product,
//         eventLabel: price
//     });
// }

function getShoppingCartStatus(product) {
   if(localStorage.getItem(product)){
       document.getElementById("ShoppingCartButton").innerHTML = "Remove shopping cart";
   } else {
       document.getElementById("ShoppingCartButton").innerHTML = "Add to shopping cart"; 
   }
}