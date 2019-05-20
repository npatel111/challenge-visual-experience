
var prodName = $('div.product-name')[0].innerText;
var prodPrice = $('span.price-sales')[0].innerText.split('$')[1];
var discountPrice = (parseInt(prodPrice)*.85).toFixed(2);
var sizes = $(".size").find(".selectable");
var clickCount = 0;

// style transparent background, append to body
var curtain = document.createElement('div');
$(curtain).css('width', '100vw');
$(curtain).css('height', '100vh');
$(curtain).css('display', "none");
$(curtain).css('position', "fixed");
$(curtain).css('backgroundColor', "black");
$(curtain).css('left', '0');
$(curtain).css('top', '0');
$(curtain).css('zIndex', '3');
$(curtain).css('opacity', "0.5");
$('body')[0].append(curtain);

// style overlay
var overlay = document.createElement('div');
$(overlay).attr('id', 'bx-overlay');
$(overlay).css('backgroundColor', "white");
$(overlay).css('width', "auto");
$(overlay).css('height', "auto");
$(overlay).css('display', "none");
$(overlay).css('margin', "O auto");
$(overlay).css('padding', "30px");
$(overlay).css('position', "fixed");
$(overlay).css('top', "50%");
$(overlay).css('left', "50%");
$(overlay).css('transform', "translateX(-50%) translateY(-50%)");
$(overlay).css('zIndex', "4");
$('body')[0].append(overlay);

//style left side
var left = document.createElement('div');
$(left).attr('id', 'bx-left');
left.style.float = "left";
$(left).css('width', "50%");
$(left).css('display', "flex");
$(left).css('height', "30em");
$(left).css('justifyContent', "center");
$(left).css('alignItems', "center");

// style product image on left side
var prodImgLink = $('.primary-image')[1].src;
var bxProduct = document.createElement('img');
$(bxProduct).attr('id', 'bx-product');
$(bxProduct).attr('src', prodImgLink);
$(bxProduct).css('borderRight', "1px solid #cbcbcb");
$(bxProduct).css('paddingRight', "30px");
$(left).append(bxProduct);
$(overlay).append(left);

//style right side 
var right = document.createElement('div');
$(right).attr('id', 'bx-right');
$(right).css('float', "right");
$(right).css('width', "50%");
$(right).css('display', "flex");
$(right).css('flexDirection', "column");
$(right).css('height', "30em");
$(right).css('justifyContent', "center");
$(right).css('alignItems', "center");

// style text on right side
var bxText = document.createElement('p');
$(bxText).attr('id', 'bx-text');
$(bxText).text(`Get this ${prodName} for $${discountPrice} with a 15% discount`);
$(bxText).css('font', "1.2em ars_maquette_promedium,sans-serif");
$(bxText).css('fontWeight', "400");
$(bxText).css('padding', "30px");
$(bxText).css('textRendering', "optimizeLegibility");
$(bxText).css('letterSpacing', "-.02em");
$(bxText).css('textAlign', "center");
$(right).append(bxText);
$(overlay).append(right);

// style x button
var bxClose = document.createElementNS('http://www.w3.org/2000/svg','svg');
$(bxClose).attr('id', 'bx-close');
$(bxClose).attr('height', '20');
$(bxClose).attr('width', '20');
$(bxClose).attr('viewBox', '0 0 20 22');
$(bxClose).css('height', "20");
$(bxClose).css('width', "20");
$(bxClose).css('margin', "2%");
$(bxClose).css('position', "absolute");
$(bxClose).css('top', "0");
$(bxClose).css('right', "0");
var bxPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
bxPath.setAttributeNS(null, 'd', "M1.143 22L10 12.257 18.857 22 20 20.743 11.143 11 20 1.257 18.857 0 10 9.743 1.143 0 0 1.257 8.857 11 0 20.743z");
$(bxClose).append(bxPath);
$(overlay).append(bxClose);

//style Add To Cart button
var addToCart = document.createElement('button');
$(addToCart).attr('id', 'bx-add-to-cart');
$(addToCart).attr('className', 'add-to-cart add-to-cart-button');
$(addToCart).css('background', "#cc0001");
$(addToCart).css('color', "#fff");
$(addToCart).css('padding', "12px 0");
$(addToCart).css('fontSize', "18px");
$(addToCart).css('margin', "30px 0");
$(addToCart).css('width', "80%");
$(addToCart).attr('value', "Add to cart");

// style Add To Cart button (text)
var spanCart = document.createElement('span');
$(spanCart).css('lineHeight', "29px");
$(spanCart).css('fontWeight', "bold");
$(spanCart).text("Add to Cart");
addToCart.appendChild(spanCart);

// style Add To Cart button (SVG)
var cartSVG = document.createElementNS('http://www.w3.org/2000/svg','svg');
$(cartSVG).attr('className', 'svg-icon svg-icon-bag');
$(cartSVG).attr('height', '23');
$(cartSVG).attr('width', '20');
$(cartSVG).css('fill', "currentColor");
$(cartSVG).css('marginLeft', "10px");
$(cartSVG).css('paddingTop', "5px");
$(cartSVG).css('overflow', "visible");
var cartPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
cartPath.setAttributeNS(null, 'd', "M1.348 22.906C.905 22.74.238 22.07.062 21.612c-.292-.756.52-16.77.88-17.38.485-.818 1.222-1.052 3.32-1.052H6.13l.45-.948c1.45-3.04 5.778-2.955 6.96.138l.308.81h1.888c3.74 0 3.545-.476 4.01 9.784.393 8.674.39 8.755-.438 9.525l-.485.45-8.602.03c-4.73.02-8.72-.01-8.87-.07zM18.31 20.73c.003-1.068-.55-13.554-.648-14.617l-.102-1.128H13.8v1.86c0 1.968-.12 2.29-.84 2.29-.718 0-.965-.633-.965-2.476V4.98H7.843v1.86c0 1.952-.12 2.29-.812 2.29-.69 0-.81-.338-.81-2.29V4.98H2.46l-.097.947c-.094.897-.66 13.74-.655 14.8l.003.494h16.6l.003-.493zM11.823 2.833c-.765-1.428-2.86-1.428-3.624 0l-.19.347h3.993l-.185-.347z");
$(cartSVG).append(cartPath);
$(addToCart).append(cartSVG);
$(right).append(addToCart);


// JS functions
//change Shirt Color before showing overlay
function changeShirtColor() {
  prodImgLink = $('.primary-image')[1].src;
  $(bxProduct).attr('src', prodImgLink);
}

//activate overlay
function toggleOverlay() {
  if (overlay.style.display === "none" && clickCount < 3) {
    changeShirtColor();
    $(overlay).css('display', "block");
    $(curtain).css('display', "block");
    clickCount++;
  } 
}

// remove overlay
function removeOverlay() {
    $(overlay).css('display', "none");
    $(curtain).css('display', "none");
}

// go to cart
$('#bx-add-to-cart').click(function() {
  window.location='https://www.marmot.com/cart';
});

// show overlay
$(document).on('click', '.size', function() {toggleOverlay()});

// remove overlay
$(document).on('click', '#bx-close', function() {removeOverlay()});



