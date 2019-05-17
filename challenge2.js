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
div.style.backgroundColor = "blue";
div.style.width = "300px";
div.style.height = "300px";
div.style.display = "none";
div.style.margin = "O auto";
div.style.position = "fixed";
div.style.top = "50%";
div.style.left = "50%";
div.style.transform = "translateX(-50%) translateY(-50%)";
div.style.zIndex = "4";
document.getElementsByTagName('body')[0].appendChild(div)


//style content of div
div.innerText = `Get this ${prodName} for ${discountPrice} with a 15% discount`;


// style x buttons
var xBtn = document.createElement('img');
xBtn.src = "https://image.flaticon.com/icons/svg/118/118741.svg";
xBtn.setAttribute('id', 'bx-close');
xBtn.style.maxWidth = "4em";
div.appendChild(xBtn);


function toggleOverlay() {
  console.log('running toggleOverlay function');
  var overlay = document.getElementById('bx-overlay');
  if (overlay.style.display === "none") {
    console.log('overlay was display none, now is display block');
    overlay.style.display = "block";
    transparentDiv.style.display = "block";
  } else {
    overlay.style.display = "none";
    console.log('overlay was display block');
    transparentDiv.style.display = "none";
  }
}

$(document).on('click', '.size', function() {toggleOverlay()});
$(document).on('click', '#bx-close', function() {toggleOverlay()});



