
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

openInfo("Client");

function openInfo(tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";

}

//document.getElementById("defaultOpen").click();

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct2) {
    var allPersonal = document.getElementsByName("personal");
    var chosenPersonal = [];
    for (i = 0; i < allPersonal.length; i++) {
      if(allPersonal[i].checked){
        chosenPersonal.push(allPersonal[i].value);
      }
    }

    var s2 = document.getElementById(slct2);

	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
	s2.innerHTML = '';

	// obtain a reduced list of products based on restrictions
  var optionArray = restrictListProducts(products, chosenPersonal);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
	for (i = 0; i < optionArray.length; i++) {

		var productName = optionArray[i].name;

		let li = document.createElement("li");

		var image = document.createElement("img");
		//image.class = "image";
		image.src = optionArray[i].image;
		image.alt = "Food image"
		li.appendChild(image);
		li.appendChild(document.createElement("br"));

		var prod = document.createElement('p');
		prod.appendChild(document.createTextNode(" "+productName));
		li.appendChild(prod);

		var price = document.createElement('p');
		price.appendChild(document.createTextNode("$"+optionArray[i].price.toString()));
		li.appendChild(price);

		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
    checkbox.id = productName;
		checkbox.value = productName;
		li.appendChild(checkbox);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode("ADD TO CART"));
		li.appendChild(label);
		s2.appendChild(li);
		// create a breakline node and add in HTML DOM
		//s2.appendChild(document.createElement("br"));
	}
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){

	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	// build list of selected item
	var list = document.createElement('ul');

	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			var item = document.createElement('li');
			item.appendChild(document.createTextNode(ele[i].value));
			chosenProducts.push(ele[i].value);
			list.appendChild(item);
		}
	}

	// add paragraph and total price
	c.appendChild(list);
  var para2 = document.createElement("P");
  para2.appendChild(document.createTextNode("Total Price: $" + getTotalPrice(chosenProducts)))
	c.appendChild(para2);

}

//Code learned from https://stackoverflow.com/questions/22574344/how-to-make-a-button-that-will-uncheck-all-checkboxes/22574416
function uncheckAll() {
  document.querySelectorAll('input[type="checkbox"]')
    .forEach(el => el.checked = false);
}

function nextProducts() {
	document.getElementById('c1').style.backgroundColor = '#0ba800'; /*green*/
	document.getElementById('line1').style.backgroundColor = '#0ba800';
	document.getElementById('line2').style.backgroundColor = '#e0eaff'; /*orange*/
	document.getElementById('c2').style.backgroundColor = '#e0a722';
	document.getElementById('c2').style.color = 'white';
	document.getElementById('title1').style.fontWeight = "500";
	document.getElementById('title2').style.fontWeight = "700";

}

function backProfile() {
  if (confirm("Your product selections and cart will be cleared!")) {
		document.getElementById('c1').style.backgroundColor = '#e0a722';
		document.getElementById('line1').style.backgroundColor = '#e0eaff';
		document.getElementById('line2').style.backgroundColor = '#e0eaff'; /*grey*/
		document.getElementById('c2').style.backgroundColor = '#e0eaff';
		document.getElementById('c2').style.color = 'black';
		document.getElementById('title1').style.fontWeight = "700";
		document.getElementById('title2').style.fontWeight = "500";
		openInfo("Client");
  }

}

function nextCart() {
	document.getElementById('c2').style.backgroundColor = '#0ba800';
	document.getElementById('line2').style.backgroundColor = '#0ba800';
	document.getElementById('c3').style.backgroundColor = '#e0a722';
	document.getElementById('c3').style.color = 'white';
	document.getElementById('title2').style.fontWeight = "500";
	document.getElementById('title3').style.fontWeight = "700";
}

function backProducts() {
	document.getElementById('c2').style.backgroundColor = '#e0a722';
	document.getElementById('line2').style.backgroundColor = '#e0eaff';
	document.getElementById('c3').style.backgroundColor = '#e0eaff';
	document.getElementById('c3').style.color = 'black';
	document.getElementById('title2').style.fontWeight = "700";
	document.getElementById('title3').style.fontWeight = "500";
}

function popup() {
  alert("Your Order Has Been Placed!");
	document.getElementById('c3').style.backgroundColor = '#0ba800';
}
