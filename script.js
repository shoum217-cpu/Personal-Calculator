
const display = document.getElementById("display")

const ClickToDisplay = (input) => {
    display.value = display.value + input
}

const buttons = document.querySelectorAll("button:not(#clear):not(#calculate)")

buttons.forEach(button => {
    button.addEventListener('click', () => {
        ClickToDisplay(button.textContent)
    })
})

const ClearAll = document.getElementById("clear")

ClearAll.addEventListener('click', () => {
    display.value = ""
})

const calculate = document.getElementById("calculate")

calculate.addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
    }
})
