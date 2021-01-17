const API = "https://corebiz-test.herokuapp.com/api/v1/products";
let showcase = document.querySelector(".showcase");

function makeShowcase(products) {
    for(var i = 0; i < products.length ; i++) {
        const productName = products[i].productName;
        const image = products[i].imageUrl;
        const stars = products[i].stars;
        const lastPrice = products[i].listPrice;
        const price = products[i].price;
        const quatity = products[i].installments["quantity"];
        const value = products[i].installments.value;
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
         <a href="#" target="_blank">
            <img src="${image}" alt="${productName}">
         </a>
         <h3 class="title">${productName}</h3>
         <p>stars: ${stars}</p>
         <p class"lastPrice"> de R$ ${lastPrice}</p>
         <h2 class"price">Por R$ ${price}</h2>
         <p>ou em ${quatity} de R$ ${value} `;
        showcase.append(div);
    }
}

function lastPriceisValid(){
    
}

async function getProducts() {
    const request = await fetch(API);
    const response = await request.json();
    const products = response;
    makeShowcase(products);
}

getProducts();