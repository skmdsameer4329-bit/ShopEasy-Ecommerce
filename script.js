// Shopping Cart
let cart = [];

// Products Data
const products = [
{
id:1,
name:"Wireless Headphones",
price:1999,
image:"https://via.placeholder.com/300x220?text=Headphones"
},
{
id:2,
name:"Smart Watch",
price:2999,
image:"https://via.placeholder.com/300x220?text=Smart+Watch"
},
{
id:3,
name:"Gaming Mouse",
price:899,
image:"https://via.placeholder.com/300x220?text=Gaming+Mouse"
},
{
id:4,
name:"Bluetooth Speaker",
price:1499,
image:"https://via.placeholder.com/300x220?text=Speaker"
},
{
id:5,
name:"Laptop Bag",
price:799,
image:"https://via.placeholder.com/300x220?text=Laptop+Bag"
},
{
id:6,
name:"Keyboard",
price:1299,
image:"https://via.placeholder.com/300x220?text=Keyboard"
}
];

// Display Products
const productList = document.getElementById("product-list");

function loadProducts(){

productList.innerHTML="";

products.forEach(product=>{

productList.innerHTML+=`

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p class="price">₹${product.price}</p>

<button onclick="addToCart(${product.id})">
Add to Cart
</button>

</div>

</div>

`;

});

}

loadProducts();

// Add To Cart
function addToCart(id){

const product=products.find(item=>item.id===id);

cart.push(product);

document.getElementById("cart-count").innerText=cart.length;

alert(product.name+" added to cart!");

}

// View Cart
function viewCart(){

if(cart.length===0){

alert("Your cart is empty.");

return;

}

let message="Your Shopping Cart\n\n";

let total=0;

cart.forEach(item=>{

message+=`${item.name} - ₹${item.price}\n`;

total+=item.price;

});

message+=`\nTotal = ₹${total}`;

alert(message);

}

// Open cart when clicked
document.querySelector(".cart").addEventListener("click",viewCart);