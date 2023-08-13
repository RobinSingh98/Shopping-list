"use strict";

var formItem = document.getElementById("item-form");
var inputItem = document.getElementById("item-input");

function addItem(e) {
  e.preventDefault(); //  Validate Input

  if (inputItem.value === "") {
    alert("Please Enter an Item");
    return;
  }

  console.log("success");
}

formItem.addEventListener("submit", addItem);