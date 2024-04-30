const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value = display.value + input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}







/*
function add()
{
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);

    document.writeln("<h2>"+(n1+n2)+"</h2>");
}

function sub()
{
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);

    document.writeln("<h2>"+(n1-n2)+"</h2>");
}


function mul()
{
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    
    document.writeln("<h2>"+(n1*n2)+"</h2>");
}

function div()
{
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    document.writeln("<h2>"+(n1/n2)+"</h2>");
}

*/

