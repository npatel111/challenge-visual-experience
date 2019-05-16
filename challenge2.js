// Store variables for 
// product name, 
// product price, 
// and a 15% discounted price.

var prodName = document.querySelector('div.product-name').innerText;
var prodPrice = document.querySelector('span.price-sales').innerText.replace('Sale Price:\n$','').trim()
var discountPrice = parseInt(prodPrice)*.85;
var sizes = $(".size").find(".selectable");

var div = document.createElement('div');
div.setAttribute('id', 'bx-overlay');
div.style.backgroundColor = "blue";
div.style.height = "100px";
div.style.display = "none";
document.getElementsByTagName('body')[0].appendChild(div)


function toggleOverlay() {
  console.log('running toggleOverlay function');
  var overlay = document.getElementById('bx-overlay');
  if (overlay.style.display === "none") {
    overlay.style.display = "block"
  } else {
    overlay.style.display = "none";
  }
}

// https://stackoverflow.com/questions/16310423/addeventlistener-calls-the-function-without-me-even-asking-it-to
// function addClickListener() {
//   for (var i = 0; i < sizes.length; i++) {
//     console.log(sizes[i]);
//     sizes[i].addEventListener('click', function() {
//       toggleOverlay()
//     }); 
//   };
// }  

// function addClickListener() {
//   for (var i = 0; i < sizes.length; i++) {
//     console.log(sizes[i]);
//     sizes[i].addEventListener('click', function() {
//       toggleOverlay()
//     }); 
//   };
// }  

// $(document).on('click', '.size .selectable', function() {alert('hi')})
$(document).on('click', '.size', function() {toggleOverlay()})



// addClickListener();

