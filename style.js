function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function appendValue(value) {
    let display = document.getElementById("display");
    let lastChar = display.value.slice(-1);
    let operators = ["+", "-", "*", "/", "%", "."];
    
    if (!(operators.includes(lastChar) && operators.includes(value))) {
        display.value += value;
    }
}

function calculateResult() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}