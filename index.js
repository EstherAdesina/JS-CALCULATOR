alert('This is a Simple Javascript Calculator that performs different functions')

let valueOne = parseFloat(prompt('Enter first number: '))

let calc = prompt('Enter Operator function *, +, /, -')

let valueTwo = parseFloat(prompt('Enter second number: '))


let answer;


if (calc == '*') {
    answer = valueOne * valueTwo
} 
else if(calc == '+') {
    answer = valueOne + valueTwo
} 
else if(calc == '/') {
    answer = valueOne / valueTwo
}
else if(calc == '-') {
    answer = valueOne - valueTwo
}
else if(calc == null || valueOne == null || valueTwo == null) {
    answer = alert('input a valid number')
}

alert(answer)