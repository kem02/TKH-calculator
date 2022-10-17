function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(operator, num1, num2) {
    operator = operator.toLowerCase()

    if (operator === "add") {
        return add(num1, num2)
    } else if (operator === "subtract") {
        return subtract(num1, num2)
    } else if (operator === "multiply") {
        return multiply(num1, num2)
    } else if (operator === "divide") {
        return divide(num1, num2)
    } else{
        return `please add a valid value`
    }
}


// console.log(operate('divide', 2, 3))


//variables to hold values from form inputs
let num1 = 0
let num2 = 0
let operatorButtonVal = ''



//function that runs when the equals button is clicked using onclick

function equalsClicked() {
    //saving the number value of the first input to num1
    //.value returns a string
    num1 = document.querySelector('#num1').value
    //parseInt changes num1 data type to number
    num1 = parseInt(num1)

    operatorButtonVal = document.querySelector('#operator').value
    console.log(operatorButtonVal)
    //saving the number value of the second input to num2
    //.value returns a string
    num2 = document.querySelector('#num2').value
    //parseInt changes num2 data type to number
    num2 = parseInt(num2)
    console.log(num2)

    // puts the function together to display the results into the html

    document
        .querySelector('#result-num').innerHTML = operate(operatorButtonVal, num1, num2)


    // Or can be also written as:

    // let displayNum = document.querySelector('#result-num')
    // let results = operate(operatorButtonVal, num1, num2)
    // displayNum.innerHTML = results

}




