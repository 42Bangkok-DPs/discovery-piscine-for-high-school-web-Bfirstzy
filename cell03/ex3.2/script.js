const form = document.getElementById('calcForm');
const leftOperand = document.getElementById('leftOperand');
const operator = document.getElementById('operator');
const rightOperand = document.getElementById('rightOperand');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const leftValue = parseInt(leftOperand.value);
    const rightValue = parseInt(rightOperand.value);
    const selectedOperator = operator.value;
    let result;

    
    if (isNaN(leftValue) || isNaN(rightValue) || leftValue < 0 || rightValue < 0) {
        alert('Error :(');
        console.log('Error :(');
        return;
    }

  
    if ((selectedOperator === '/' || selectedOperator === '%') && rightValue === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    
    switch (selectedOperator) {
        case '+':
            result = leftValue + rightValue;
            break;
        case '-':
            result = leftValue - rightValue;
            break;
        case '*':
            result = leftValue * rightValue;
            break;
        case '/':
            result = leftValue / rightValue;
            break;
        case '%':
            result = leftValue % rightValue;
            break;
        default:
            alert('Invalid operator');
            return;
    }

  
    alert(`Result: ${result}`);
    console.log(`Result: ${result}`);
});


setInterval(function () {
    alert('Please, use me...');
}, 30000);
