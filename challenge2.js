// Store variables for 
// product name, 
// product price, 
// and a 15% discounted price.

var prodName = document.querySelector('div.product-name').innerText;
var prodPrice = document.querySelector('span.price-sales').innerText.replace('Sale Price:\n$','').trim()
var discountPrice = parseInt(prodPrice)*.85;
var sizes = $(".size").find(".selectable");
var prodImg = $('.primary-image')[1]
var prodImgLink = prodImg.src

var div = document.createElement('div');
div.setAttribute('id', 'bx-overlay');
div.style.backgroundColor = "blue";
div.style.width = "300px";
div.style.height = "300px";
div.style.display = "none";
div.style.margin = "O auto";
div.style.position = "fixed";
div.style.top = "50%";
div.style.left = "50%";
div.style.transform = "translateX(-50%) translateY(-50%)";

div.innerText = `Get this ${prodName} for ${discountPrice} with a 15% discount`;

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

