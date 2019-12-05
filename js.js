
function calcul() {
//class & ID
    var bill = document.getElementsByClassName("bill");
    var income = document.getElementsByClassName("income");


    var billLenght = bill.length;
    var billValue = 0;
    for (i = 0; i < billLenght; i++) {
        billValue = Number(billValue) + Number(bill.item(i).value);
    }
    console.log(billValue);

    var incomeLenght = income.length;
    var incomeValue = 0;
    for (i = 0; i < incomeLenght; i++) {
        incomeValue =  Number(incomeValue) + Number(income.item(i).value) ;
    }
    console.log(incomeValue);

    var total = incomeValue - billValue;
    var soustraction = document.getElementById('soustraction');
    var budgetRestant = document.getElementById("budget");
    soustraction.innerHTML = total
}

var calculate = document.getElementById("calculate");


calculate.addEventListener("click", function () {
    calcul()
});




