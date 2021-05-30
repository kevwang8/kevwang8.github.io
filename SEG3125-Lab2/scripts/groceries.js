
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
{
  name: "Brocoli",
  lactoseFree: true,
  nutFree: true,
  organic: true,
  price: 1.99
},
{
  name: "White bread",
  lactoseFree: true,
  nutFree: true,
  organic: false,
  price: 2.35
},
{
  name: "Whole wheat bread",
  lactoseFree: true,
  nutFree: false,
  organic: false,
  price: 2.35
},
{
  name: "Salmon",
  lactoseFree: true,
  nutFree: true,
  organic: true,
  price: 10.00
},
{
  name: "Yogurt",
  lactoseFree: false,
  nutFree: true,
  organic: false,
  price: 3.35
},
{
  name: "Milk",
  lactoseFree: false,
  nutFree: true,
  organic: true,
  price: 1.99
},
{
  name: "Lactose-Free Milk",
  lactoseFree: true,
  nutFree: true,
  organic: true,
  price: 2.99
},
{
  name: "Apples",
  lactoseFree: true,
  nutFree: true,
  organic: true,
  price: 1.99
},
{
  name: "Almond Cookies",
  lactoseFree: true,
  nutFree: false,
  organic: false,
  price: 4.99
},
{
  name: "Walnuts",
  lactoseFree: true,
  nutFree: false,
  organic: true,
  price: 3.99
},
{
  name: "Orange Juice",
  lactoseFree: true,
  nutFree: true,
  organic: false,
  price: 2.99
}
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {

let product_names = [];
for (let i=0; i<prods.length; i+=1) {
  let flag = true;
  for (let j=0; j<restrictions.length; j+=1) {
    if ((restrictions[j] == "Lactose-intolerant") && (prods[i].lactoseFree == false)){
      flag = false;
    }
    else if ((restrictions[j] == "Nut Allergies") && (prods[i].nutFree == false)){
      flag = false;
    }
    else if ((restrictions[j] == "Prefer Organic Foods") && (prods[i].organic == false)){
      flag = false;
    }
  }
  if (flag == true){
    product_names.push(prods[i]);
  }
}
//Sorting code learned from https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
product_names.sort((a,b) => (a.price > b.price) ? 1 : -1);

return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
totalPrice = 0;
for (let i=0; i<products.length; i+=1) {
  if (chosenProducts.indexOf(products[i].name) > -1){
    totalPrice += products[i].price;
  }
}
return totalPrice.toFixed(2);
}
