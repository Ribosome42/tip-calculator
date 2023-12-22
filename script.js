let form = document.forms.amount;
let submit = document.getElementById("submit");
let results = document.getElementById("results");
let startOver = document.getElementById("start_over");

let bill_amount = 0;
let tip_amount = 0;
let total = 0;

function tipBig(e) {
    e.preventDefault();
    bill_amount = Number(form.bill_total.value);
    tip_amount = bill_amount * 0.2;  // Assuming a 20% tip
    total = bill_amount + tip_amount;

    results.innerHTML = "The tip is: " + tip_amount.toFixed(2) + "<br>The total is: $" + total.toFixed(2);
    startOver.style.display = "block";
}

function reload() {
    window.location.reload();
}

submit.addEventListener("click", tipBig);
startOver.addEventListener("click", reload);

window.addEventListener("load", () => {
    form.bill_total.value = "";
    results.innerHTML = "";
    startOver.style.display = "none";
});
