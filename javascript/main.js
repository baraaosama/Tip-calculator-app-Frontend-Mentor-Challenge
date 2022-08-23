const selectTip = Array.from(document.querySelectorAll(".tip-percentage"));
const reset = document.querySelector(".reset");
const tipNumber = document.querySelector(".tip-number");
const totalNumber = document.querySelector(".total-number");
const numberOfPerson = document.querySelector("#number-of-people");
const inputBill = document.querySelector(".bill-number");
const custom = document.querySelector(".custom");
let billValue = null;
let selectedTip = null;
let personAmount = null;

function calculate() {
    if (billValue && selectedTip && personAmount) {
        const billPerPerson = billValue / personAmount;
        const tipAmountPerPerson = billPerPerson * (selectedTip / 100);
        const totalAmount = billPerPerson + tipAmountPerPerson;
        tipNumber.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
        totalNumber.textContent = `$${totalAmount.toFixed(2)}`;
        return;
    }
    tipNumber.textContent = "$0.00";
    totalNumber.textContent = "$0.00";
}
inputBill.addEventListener("input", (e) => {
    let value = e.target.value.trim();
    value = value.replace(/[^0-9.]+/g, "");
    inputBill.value = value;
    billValue = parseFloat(value);
    calculate();
});
selectTip.map((e) => {
    e.addEventListener("click", () => {
        for (i = 0; i < selectTip.length; i++) {
            selectTip[i].style.cssText = "background-color: hsl(183, 100%, 15%);color:white;"
        }
        selectedTip = parseFloat(e.innerHTML);
        e.style.cssText = "background-color: hsl(172, 67%, 45%);color: hsl(183, 100 %, 15 %);"
        custom.value = "";
        calculate();
    });
});
custom.addEventListener("input", (e) => {
    let value = e.target.value.trim();
    value = value.replace(/[^0-9.]+/g, "");
    custom.value = value;
    selectedTip = parseFloat(value);
    calculate();
});
numberOfPerson.addEventListener("input", (e) => {
    let value = e.target.value.trim();
    value = value.replace(/[^0-9.]+/g, "");
    numberOfPerson.value = value;
    personAmount = parseFloat(value);
    calculate();
});
reset.addEventListener("click", () => {
    for (i = 0; i < selectTip.length; i++) {
        selectTip[i].style.cssText = "background-color: hsl(183, 100%, 15%);color:white;"
    }
    tipNumber.textContent = "$0.00";
    totalNumber.textContent = "$0.00";
    billValue = null;
    selectedTip = null;
    personAmount = null;
    inputBill.value = "";
    custom.value = "";
    numberOfPerson.value = "";
});

