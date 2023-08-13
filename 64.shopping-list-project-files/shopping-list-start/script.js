// Add Item to List

const formItem = document.querySelector("#item-form");
const inputItem = document.querySelector("#item-input");
const ItemList = document.querySelector("#item-list");
// var newItem = inputItem.value;
function addItem(e) {
  e.preventDefault();
  //  Validate Input
  if (inputItem.value === "") {
    alert("Please Enter an Item");
    return;
  }
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(inputItem.value));
  const button = createButoon('remove-item btn-link text-red')
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  li.appendChild(button);
  ItemList.appendChild(li);
  console.log(ItemList);
  inputItem.value = '';
}

function createButoon (classes){
    const button = document.createElement('button');
    button.className = classes;
    return button;
}
function createIcon (classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

formItem.addEventListener("submit", addItem);
