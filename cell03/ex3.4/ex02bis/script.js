$(document).ready(function() {
    $('#calculate').on('click', function() {
        const leftOperand = parseInt($('#leftOperand').val());
        const rightOperand = parseInt($('#rightOperand').val());
        const operator = $('#operator').val();
        
        if (isNaN(leftOperand) || isNaN(rightOperand) || leftOperand < 0 || rightOperand < 0) {
            alert('Error :(');
        } else if (operator === '/' && rightOperand === 0 || operator === '%' && rightOperand === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
        } else {
            let result;
            switch (operator) {
                case '+':
                    result = leftOperand + rightOperand;
                    break;
                case '-':
                    result = leftOperand - rightOperand;
                    break;
                case '*':
                    result = leftOperand * rightOperand;
                    break;
                case '/':
                    result = leftOperand / rightOperand;
                    break;
                case '%':
                    result = leftOperand % rightOperand;
                    break;
            }
            alert('Result: ' + result);
            console.log('Result: ' + result);
        }
    });

    setInterval(function() {
        alert('Please, use me...');
    }, 30000);
});
