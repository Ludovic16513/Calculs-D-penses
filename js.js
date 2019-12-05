
function calcul() {
//class & ID
    var bill = document.getElementsByClassName("bill");
    var income = document.getElementsByClassName("income");
    var calculate = document.getElementById("calculate");
    var budgetRestant = document.getElementById("budget");

    var billLenght = bill.length;
    var billValue = 0;
    for (i = 0; i < billLenght; i++) {
        billValue = Number(billValue) + Number(bill.item(i).value);
    }
    console.log(billValue);


    var incomeLenght = income.length;
    var incomeValue = 0;
    for (i = 0; i < incomeLenght; i++) {
        incomeValue =  Number(incomeValue) + Number(income.item(i).value);
    }
    console.log(incomeValue);
}

calcul();