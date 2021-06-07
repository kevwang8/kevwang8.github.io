
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
{
  name: "Organic Brocoli",
  lactoseFree: true,
  nutFree: true,
  organic: true,
  price: 1.99,
  image: "assets/broccoli.png"
},
{
  name: "White Bread",
  lactoseFree: true,
  nutFree: true,
  organic: false,
  price: 2.35,
  image: "assets/whiteBread.jpg"
},
{
  name: "Whole Wheat Bread",
  lactoseFree: true,
  nutFree: false,
  organic: false,
  price: 2.35,
  image: "assets/wholeBread.jpg"
},
{
  name: "Organic Salmon",
  lactoseFree: true,
  nutFree: true,
  organic: true,
  price: 10.00,
  image: "assets/salmon.jpg"
},
{
  name: "Frozen Yogurt",
  lactoseFree: false,
  nutFree: true,
  organic: false,
  price: 3.35,
  image: "assets/yogurt.jpg"
},
{
  name: "Organic Milk",
  lactoseFree: false,
  nutFree: true,
  organic: true,
  price: 1.99,
  image: "assets/milk.jpg"
},
{
  name: "Lactose-Free Milk",
  lactoseFree: true,
  nutFree: true,
  organic: false,
  price: 2.99,
  image: "assets/lacFreeMilk.jpg"
},
{
  name: "Organic Apples",
  lactoseFree: true,
  nutFree: true,
  organic: true,
  price: 1.99,
  image: "assets/apple.png"
},
{
  name: "Almond Cookies",
  lactoseFree: true,
  nutFree: false,
  organic: false,
  price: 4.99,
  image: "assets/almondCookies.jpg"
},
{
  name: "Organic Walnuts",
  lactoseFree: true,
  nutFree: false,
  organic: true,
  price: 3.99,
  image: "assets/walnuts.jpg"
},
{
  name: "Orange Juice",
  lactoseFree: true,
  nutFree: true,
  organic: false,
  price: 2.99,
  image: "assets/orangeJuice.png"
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
