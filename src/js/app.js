const product1 = { price: 10, title: "JS od podstaw" };
const product2 = { price: "20", title: "PHP od podstaw" };
const discount = 20;

// add products to table
const itemsContainer = document.querySelector("#items");
let counter = 1;

function addItem(item) {
  itemsContainer.innerHTML += `
  <tr>
    <td>${counter++}</td>
    <td>${item.title}</td>
    <td>1</td>
    <td>${item.price}</td>
  </tr>`;
}

addItem(product1);
addItem(product2);

// dodaj znizke

if (discount > 0) {
  document.querySelector("#discount-amount").innerHTML = -discount;
  document.querySelector("#discount").classList.remove("hidden");
}

if (isNaN(+product2.price)) {
  console.log("Podano niepoprawny typ danych");
}

const total = Number(product1.price) + Number(product2.price);
const totalwithDiscount = total - discount;

// cena całkowita

document.querySelector("#total-price").innerHTML = totalwithDiscount;

console.log(
  `
    Cena przed znizka: ${total}
    Cena po znizce: ${totalwithDiscount}
    `
);
