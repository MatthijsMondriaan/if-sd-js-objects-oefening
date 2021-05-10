// Constants
const addItemButton = document.querySelector('.add-item-button');
const checkItemButton = document.querySelector('.check-item-button');
const deleteItemButton = document.querySelector('.delete-item-button');

// Variables
let itemsArray = [];
let arrayLabel = document.querySelector('.array-label');

// Event listeners
if (addItemButton) {
	addItemButton.addEventListener("click", addItem);
}

if (checkItemButton) {
	checkItemButton.addEventListener("click", checkItem);
}

if (deleteItemButton) {
	deleteItemButton.addEventListener("click", deleteItem);
}

// Functions
function addItem() {
    let addItemInput = document.querySelector('.inputfield-add-item').value;
    console.log("Adding item: " + addItemInput);

    itemsArray.push(addItemInput);

    printArray();
}

function checkItem() {
    console.log("Checking an item");

    let checkItemInput = document.querySelector('.inputfield-check-item').value;

    if (itemsArray.includes(checkItemInput)) {
        alert(checkItemInput + " is found! :)");
    } else {
        alert(checkItemInput + " is not found! :(");
    }
}

function deleteItem() {
    console.log("Deleting an item");
    itemsArray.pop();

    printArray();
}

function printArray() {
    var arrayText = "";

    for(let i = 0; i < itemsArray.length; i++) {
        arrayText += i + ": " + itemsArray[i] + "<br>";
    }

    arrayLabel.innerHTML = arrayText;
}
