function calcul() {
//class & ID
    var bill = document.getElementsByClassName("bill");
    var income = document.getElementsByClassName("income");
    var billmonth = document.getElementsByClassName("billmonth");
    var epargne = document.getElementsByClassName('epargne');


    var billLenght = bill.length;
    var billValue = 0;

    for (i = 0; i < billLenght; i++) {
        billValue = Number(billValue) + Number(bill[i].value);
    }

    console.log(billValue);

    var epargneLenght = epargne.length;
    var epargneValue = 0;
    for (i = 0; i < epargneLenght; i++) {
        epargneValue = Number(epargneValue) + Number(epargne.item(i).value);
    }
    console.log(epargneValue);

    var incomeLenght = income.length;
    var incomeValue = 0;
    for (i = 0; i < incomeLenght; i++) {
        incomeValue =  Number(incomeValue) + Number(income.item(i).value) ;
    }
    console.log(incomeValue);

    var billmonth_Lenght = billmonth.length;
    var billmonth_Value = 0;

    for (i = 0; i < billmonth_Lenght; i++) {
        billmonth_Value =  Number(billmonth_Value) + Number(billmonth.item(i).value) * 31 ;
    }
    console.log(billmonth_Value);

    var total = epargneValue + incomeValue - billValue - (billmonth_Value);
    var soustraction = document.getElementById('soustraction');
    var budgetRestant = document.getElementById("budget");
    soustraction.innerHTML = total + '€';

    if (total < 0){
        soustraction.style.color = 'red'
        achat.innerHTML = 'Oula ' + total + '€ ' + ' le banquier a le smile ! !!'
    }

    else if (total > 0){
        soustraction.style.color = 'blue';
        achat.innerHTML = 'Oula ' + total + '€ ' + ' Bravo vous êtes au moins aussi riche qu un gilet jaune !!'
    }

}

var calculate = document.getElementById("calculate");
var btnReset = document.getElementById('reset');


function reset() {
    var input = document.getElementsByTagName('input');
    for (i = 0; i < input.length; i++) {
        input[i].value = ''
    }
}

btnReset.addEventListener("click", function () {
    reset();
});
calculate.addEventListener("click", function () {
    calcul()
});

function ajouter() {
    var depense = document.getElementById('dépense');
    var newInput = document.createElement('input');
    var newDiv = document.createElement('div');
    var p = document.createElement("p")

    newInput.setAttribute('type', 'text');
    newInput.setAttribute('name', '');
    newInput.setAttribute('class', 'bill');
    depense.appendChild(newDiv);
    newDiv.innerHTML = "Nouvelle entrée";
    depense.appendChild(newInput);
}

var btnAjouter = document.getElementById('ajouter');
btnAjouter.addEventListener("click", function () {
    ajouter();
});

