const API = "https://corebiz-test.herokuapp.com/api/v1/products";
let showcase = document.querySelector(".showcase");

function starRate(star) {
    var starInline = `<i class="far fa-star red"></i>`;
    var starSolid = `<i class="fas fa-star red"></i>`;
    if(star == 5) {
        return [starSolid, starSolid, starSolid, starSolid, starSolid];
    } if(star == 4) {
        return [starSolid, starSolid, starSolid, starSolid, starInline];
    } if(star == 3) {
        return [starSolid, starSolid, starSolid, starInline, starInline];
    }if(star == 2) {
        return [starSolid, starSolid, starInline, starInline, starInline];

    }if(star == 1) {
        return [starSolid, starInline, starInline, starInline, starInline];
    } else {
        return "Sem Avaliação";
    }
}

function checkNull(quantity, value) {
    var p = `<p class"quantity">ou ${quantity} em ${value} de R$ </>`;
    var pNone = `<p class"quantity"></>`;
    if(quantity == null || value == null || quantity == undefined || value == undefined) {
        return pNone;
    } else {
        return p;
    }
}

function makeShowcase(products) {
    for(var i = 0; i < products.length ; i++) {
        const productName = products[i].productName;
        const image = products[i].imageUrl;
        const stars = products[i].stars;
        const lastPrice = products[i].listPrice;
        const price = products[i].price; 
        let quantity = products[i].installments[0].quantity;
        let value = products[i].installments[0].value;
        if(quantity == null || quantity == undefined || value == null || value == undefined){
            alert("oi");
            value = products[i].installments[0];
            quantity = products[i].installments[0];
        }
        console.log("quantidade " + quantity);
        console.log("valor " + value);
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
        <ul>
            <li>
                <a href="#" target="_blank">
                    <img src="${image}" alt="${productName}">
                </a>
                <h3 class="title">${productName}</h3>
                ${starRate(stars)}
                <p class"lastPrice"> de R$ ${lastPrice}</p>
                <h2 class"price">Por R$ ${price}</h2>
                ${checkNull(quantity, value)}
            </li>
         </ul>`;
        showcase.append(div);
    }
}

async function getProducts() {
    const request = await fetch(API);
    const response = await request.json();
    const products = response;
    makeShowcase(products);
}

getProducts();