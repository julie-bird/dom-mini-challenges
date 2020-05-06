let buttonContainer = document.querySelector(".button-container");
let total = document.querySelector(".total");
let currentTotal = 0;

//buttonContainer.addEventListener("click", (e) => {
//   if (e.target.classList.contains("cola")) {
//       currentTotal += 2.00;
//       total.innerText = `Total: $${currentTotal}`;
//   } else if (e.target.classList.contains("peanuts")) {
//       currentTotal += 3.00;
//       total.innerText = `Total: $${currentTotal}`;
//   } else if (e.target.classList.contains("chocolate")) {
//       currentTotal += 4.00;
//       total.innerText = `Total: $${currentTotal}`;
//   } else {
//       currentTotal += 6.00;
//       total.innerText = `Total: $${currentTotal}`;
//   }
//});

//much cleaner-
buttonContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("button")) {
        let amount = Number(e.target.getAttribute("data-amount"));
        currentTotal += amount;
        total.innerText = `Total: $${currentTotal.toFixed(2)}`;
    }
});

//coin mini-challenge

let coinForm = document.querySelector(".form");
let coinContainer = document.querySelector(".coin-container");
coinForm.addEventListener("submit", (e) => {
    e.preventDefault(); //stops page from reloading
    const data = new FormData(coinForm);
    let number = data.get("number");
    let coin = data.get("coin");
    //console.log(number, coin);
    for (let i = 0; i < number; i++) {
        let coinDiv = document.createElement("div");
        coinDiv.classList.add("coin-div");
        coinDiv.innerText = coin;
        coinContainer.append(coinDiv);
    }
    coinForm.reset();
});

coinContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("coin-div")) {
        e.target.removeEventListener();
    }
});

//light bulb mini-challenge

let light = document.querySelector(".light-off");
let lightBulb = document.querySelector(".light-bulb");
let bulbButton = document.querySelectorAll(".bulb-button");


lightBulb.addEventListener("click", (e) => {
    if (e.target.classList.contains("on")) {
        light.classList.add("light-on");
    } else if (e.target.classList.contains("off")) {
        light.classList.remove("light-on");
    } else if (e.target.classList.contains("toggle")) {
        light.classList.toggle("light-on");
    } else {
        light.remove();
        lightBulb.disabled = true;  //hard! when I try to use bulbButton with querySelector, it only disables the first button and if I change it to querySelectorAll, NOTHING HAPPENS
    }
});