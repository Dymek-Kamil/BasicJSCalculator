"use strict";
const input = document.querySelector(".input");
const numArray = document.querySelectorAll(".num");
const reverse = document.querySelector(".reverse");
const clear = document.querySelector(".clear");
const opArray = document.querySelectorAll(".op");
const equal = document.querySelector(".equal");
let operation = "";
let result;

for (let i = 0; i < numArray.length; i++) {
  numArray[i].addEventListener("click", function () {
    for (let j = 0; j < numArray.length; j++) {
      if (numArray[j] === numArray[i]) {
        if (Number(input.textContent) === result) {
          input.textContent = numArray[j].textContent;
          operation += numArray[j].textContent;
        } else {
          input.textContent += numArray[j].textContent;
          operation += numArray[j].textContent;
        }
      }
    }
  });
}

for (let i = 0; i < opArray.length; i++) {
  opArray[i].addEventListener("click", function () {
    for (let j = 0; j < opArray.length; j++) {
      if (opArray[j] === opArray[i]) {
        if (opArray[j].textContent === "sqrt") {
          input.textContent = Math.sqrt(operation);
          operation = Math.sqrt(operation);
        } else {
          operation += opArray[j].textContent;
          input.textContent = "";
        }
      }
    }
  });
}

reverse.addEventListener("click", function () {
  input.textContent *= -1;
  operation *= -1;
});

clear.addEventListener("click", function () {
  input.textContent = "";
  operation = "";
});

equal.addEventListener("click", function () {
  result = eval(operation);
  input.textContent = result;
  console.log(operation);
  operation = result;
});
