
function calcul() {
//class & ID
    var bill = document.getElementsByClassName('bill');
    var income = document.getElementsByClassName('income');
    var calculate = document.getElementById('calculate');
    var budgetRestant = document.getElementById('budget');


    var billLenght = bill.length;

    for (i = 0; i < billLenght; i++) {
        var billValue = bill[i].value;
        console.log(billValue);
        
    }


    var incomeLenght = income.length;

    for (i = 0; i < incomeLenght; i++) {
        var incomeValue = income[i].value;
    }

}

calcul()