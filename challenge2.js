// Store variables for 
// product name, 
// product price, 
// and a 15% discounted price.

var prodName = document.querySelector('div.product-name').innerText;
var prodPrice = document.querySelector('span.price-sales').innerText.replace('Sale Price:\n$','').trim()
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
document.getElementsByTagName('body')[0].appendChild(div);

//style shirt on left side

var prodImg = $('.primary-image')[1];
var prodImgLink = prodImg.src;
var bxProduct = document.createElement('img');
bxProduct.setAttribute('id', 'bx-product');
bxProduct.src = prodImgLink;
bxProduct.style.width = "49%";
bxProduct.style.float = "left";
bxProduct.style.borderRight = "1px solid #cbcbcb";
$('#bx-overlay').append($(bxProduct));

function styleShirt() {
  prodImg = $('.primary-image')[1];
  prodImgLink = prodImg.src;
  bxProduct.src = prodImgLink;
}



//style content of div
var bxText = document.createElement('p');
bxText.setAttribute('id', 'bx-text');
bxText.innerText = `Get this ${prodName} for ${discountPrice} with a 15% discount`;
div.appendChild(bxText);

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





function toggleOverlay() {
  var overlay = document.getElementById('bx-overlay');
  if (overlay.style.display === "none" && clickCount < 3) {
    console.log('overlay was display none, now is display block');
    styleShirt();
    overlay.style.display = "block";
    transparentDiv.style.display = "block";
    clickCount++;
    console.log('clickCount is ', clickCount);
  } else {
    overlay.style.display = "none";
    console.log('overlay was display block');
    transparentDiv.style.display = "none";
  }
}

$(document).on('click', '.size', function() {toggleOverlay()});
$(document).on('click', '#bx-close', function() {toggleOverlay()});



