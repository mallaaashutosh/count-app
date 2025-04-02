let num1 = 8 ;
let num2 = 2 ;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2 ;
y = document.getElementById("sum-el") ;
function add()
{
    let sum = num1 + num2;
    y.textContent = "sum :" + sum ;
}

function subtract()
{
    let sum = num1 - num2 ;
    y.textContent = "subtraction :" + sum ;

}

function divide()
{
    let sum = num1 / num2 ;
    y.textContent = "division : " +sum ;
}

function multiply()
{
    let sum = num1*num2 ;
    y.textContent = "multiplication : " + sum ;
}
