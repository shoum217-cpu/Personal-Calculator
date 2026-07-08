
const display = document.getElementById("display")

const ClickToDisplay = (input) => {
    display.value = display.value + input
}

const buttons = document.querySelectorAll("button:not(#clear):not(#calculate)")

buttons.forEach(button => {
    button.addEventListener('click', () => {
        ClickToDisplay(button.textContent)
        // agar dataset.value nahi mila then go for textContent here.. or is used so either this or that
    })
})

const ClearAll = document.getElementById("clear")

ClearAll.addEventListener('click', () => {
    display.value = ""
})

const calculate = document.getElementById("calculate")

calculate.addEventListener('click', () => {
    try {
        const expression = display.value.replaceAll('÷','/')
        display.value = eval(expression);
    }
    catch {
        display.value = "Error";
    }
})
