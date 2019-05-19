// Store variables for 
// product name, 
// product price, 
// and a 15% discounted price.

var prodName = document.querySelector('div.product-name').innerText;
var prodPrice = document.querySelector('span.price-sales').innerText.split('$')[1];
var discountPrice = parseInt(prodPrice)*.85;
var sizes = $(".size").find(".selectable");

var clickCount = 0;

// style transparent div
var transparentDiv = document.createElement('div');
transparentDiv.style.width =  '100vw'
transparentDiv.style.height = '100vh';
transparentDiv.style.display = "none";
transparentDiv.style.position = "fixed";
transparentDiv.style.backgroundColor = "black";
transparentDiv.style.left = '0';
transparentDiv.style.top = '0';
transparentDiv.style.zIndex = '3';
transparentDiv.style.opacity="0.5";
document.getElementsByTagName('body')[0].appendChild(transparentDiv);

// style overlay
var div = document.createElement('div');
div.setAttribute('id', 'bx-overlay');
div.style.backgroundColor = "white";
div.style.width = "auto";
div.style.height = "auto";
div.style.display = "none";
div.style.margin = "O auto";
div.style.position = "fixed";
div.style.top = "50%";
div.style.left = "50%";
div.style.transform = "translateX(-50%) translateY(-50%)";
div.style.zIndex = "4";
// document.getElementsByTagName('body')[0].appendChild(div);
$('.pdp-main').append($(div));

//style shirt on left side

var left = document.createElement('div');
left.setAttribute('id', 'bx-left');
left.style.float = "left";
left.style.width = "50%";
left.style.display = "flex";
left.style.height = "30em";
left.style.justifyContent = "center";
left.style.alignItems = "center";
var prodImg = $('.primary-image')[1];
var prodImgLink = prodImg.src;
var bxProduct = document.createElement('img');
bxProduct.setAttribute('id', 'bx-product');
bxProduct.src = prodImgLink;
bxProduct.style.padding = "30px";
bxProduct.style.borderRight = "1px solid #cbcbcb";
left.appendChild(bxProduct);
div.appendChild(left);

function styleShirt() {
  prodImg = $('.primary-image')[1];
  prodImgLink = prodImg.src;
  bxProduct.src = prodImgLink;
}



//style right side text
var right = document.createElement('div');
right.setAttribute('id', 'bx-right');
right.style.float = "right";
right.style.width = "50%";
right.style.display = "flex";
right.style.flexDirection = "column";
right.style.height = "30em";
right.style.justifyContent = "center";
right.style.alignItems = "center";
var bxText = document.createElement('p');
bxText.setAttribute('id', 'bx-text');
bxText.innerText = `Get this ${prodName} for $${discountPrice} with a 15% discount`;
bxText.style.font = "1.2em ars_maquette_promedium,sans-serif";
// bxText.style.fontSize = "2em";
bxText.style.fontWeight = "400";
bxText.style.padding = "30px";
bxText.style.textRendering = "optimizeLegibility";
bxText.style.letterSpacing = "-.02em";
bxText.style.textAlign = "center";
right.appendChild(bxText);
div.appendChild(right);

// style x buttons
var bxClose = document.createElementNS('http://www.w3.org/2000/svg','svg');
bxClose.style.height = "20";
bxClose.style.width = "20";
bxClose.setAttribute('id', 'bx-close');
bxClose.setAttribute('height', '20');
bxClose.setAttribute('width', '20');
bxClose.setAttribute('viewBox', '0 0 20 22');
bxClose.style.position = "absolute";
bxClose.style.top = "0";
bxClose.style.right = "0";
var bxPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
bxPath.setAttributeNS(null, 'd', "M1.143 22L10 12.257 18.857 22 20 20.743 11.143 11 20 1.257 18.857 0 10 9.743 1.143 0 0 1.257 8.857 11 0 20.743z");
bxClose.appendChild(bxPath);

$('#bx-overlay').append($(bxClose));

//style Add To Cart button
var addToCart = document.createElement('button');
addToCart.setAttribute('id', 'bx-add-to-cart');
addToCart.setAttribute('className', 'add-to-cart add-to-cart-button');
addToCart.style.background = "#cc0001";
addToCart.style.color = "#fff";
addToCart.style.padding = "12px 0";
addToCart.style.fontSize = "18px";
addToCart.style.margin = "30px 0";
addToCart.style.width = "80%";
addToCart.value = "Add to cart";
var spanCart = document.createElement('span');
spanCart.style.lineHeight = "29px";
spanCart.style.fontWeight = "bold";
spanCart.innerText = "Add to Cart";
addToCart.appendChild(spanCart);
var cartSVG = document.createElementNS('http://www.w3.org/2000/svg','svg');
cartSVG.setAttribute('className', 'svg-icon svg-icon-bag');
cartSVG.setAttribute('height', '23');
cartSVG.setAttribute('width', '20');
cartSVG.style.fill = "currentColor";
cartSVG.style.marginLeft= "10px";
var cartPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
cartPath.setAttributeNS(null, 'd', "M1.348 22.906C.905 22.74.238 22.07.062 21.612c-.292-.756.52-16.77.88-17.38.485-.818 1.222-1.052 3.32-1.052H6.13l.45-.948c1.45-3.04 5.778-2.955 6.96.138l.308.81h1.888c3.74 0 3.545-.476 4.01 9.784.393 8.674.39 8.755-.438 9.525l-.485.45-8.602.03c-4.73.02-8.72-.01-8.87-.07zM18.31 20.73c.003-1.068-.55-13.554-.648-14.617l-.102-1.128H13.8v1.86c0 1.968-.12 2.29-.84 2.29-.718 0-.965-.633-.965-2.476V4.98H7.843v1.86c0 1.952-.12 2.29-.812 2.29-.69 0-.81-.338-.81-2.29V4.98H2.46l-.097.947c-.094.897-.66 13.74-.655 14.8l.003.494h16.6l.003-.493zM11.823 2.833c-.765-1.428-2.86-1.428-3.624 0l-.19.347h3.993l-.185-.347z");
cartSVG.appendChild(cartPath);
addToCart.appendChild(cartSVG);
right.appendChild(addToCart);





function toggleOverlay() {
  var overlay = document.getElementById('bx-overlay');
  if (overlay.style.display === "none" && clickCount < 3) {
    styleShirt();
    overlay.style.display = "block";
    transparentDiv.style.display = "block";
    clickCount++;
  } else {
    overlay.style.display = "none";
    transparentDiv.style.display = "none";
  }
}

$(document).on('click', '.size', function() {toggleOverlay()});
$(document).on('click', '#bx-close', function() {toggleOverlay()});



