const product1 = { price: 10 };
const product2 = { price: "20" };
const discount = 10;

if (isNaN(+product2.price)) {
  console.log("Podano niepoprawny typ danych");
}

const total = Number(product1.price) + Number(product2.price);
const totalwithDiscount = total - 10;

console.log(
  `
    Cena przed znizka: ${total}
    Cena po znizce: ${totalwithDiscount}
    `
);
