// Store variables for 
// product name, 
// product price, 
// and a 15% discounted price.

var prodName = document.querySelector('div.product-name').innerText;
var prodPrice = document.querySelector('span.price-sales').innerText.replace('Sale Price:\n$','').trim()
var discountPrice = parseInt(prodPrice)*.85;
