const display = document.getElementById("display");
const historyList = document.getElementById("history");
const themeToggle = document.getElementById("theme-toggle");

// Add value
function appendValue(value){
    display.value += value;
}

// Clear display
function clearDisplay(){
    display.value = "";
}

// Delete last character
function deleteLast(){
    display.value = display.value.slice(0,-1);
}

// Add Pi
function appendPi(){
    display.value += Math.PI.toFixed(5);
}

// Square
function square(){
    try{
        display.value = eval(display.value) ** 2;
    }
    catch{
        display.value = "Error";
    }
}

// Square Root
function sqrtValue(){
    try{
        display.value = Math.sqrt(eval(display.value));
    }
    catch{
        display.value = "Error";
    }
}

// Add calculation to history
function addHistory(expression,result){

    const li = document.createElement("li");

    li.textContent = `${expression} = ${result}`;

    historyList.prepend(li);
}

// Calculate
function calculate(){

    try{

        const expression = display.value;

        const result = eval(expression);

        display.value = result;

        addHistory(expression,result);

    }

    catch{

        display.value = "Error";
    }
}

// Live Clock
function updateClock(){

    const now = new Date();

    document.getElementById("clock").innerText =
        now.toLocaleTimeString();
}

setInterval(updateClock,1000);

updateClock();

// Theme Toggle
themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){

        themeToggle.innerHTML = "☀️";

    }else{

        themeToggle.innerHTML = "🌙";
    }

});

// Keyboard Support
document.addEventListener("keydown",(event)=>{

    const key = event.key;

    if(
        !isNaN(key) ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ){
        appendValue(key);
    }

    if(key === "Enter"){
        calculate();
    }

    if(key === "Backspace"){
        deleteLast();
    }

    if(key === "Escape"){
        clearDisplay();
    }
});