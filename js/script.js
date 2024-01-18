function calculator(e) {

    // 123 + 345

    let temp = e.target.innerHTML // 4
    let x;
    let firstOperand, secondOperand, operator, result;
    let screen = document.getElementById('screen')

    if (localStorage.getItem('firstOperand')) {
        firstOperand = localStorage.getItem('firstOperand') // 123
    }

    if (localStorage.getItem('operator')) {
        operator = localStorage.getItem('operator') // +
    }

    if (localStorage.getItem('secondOperand')) {
        secondOperand = localStorage.getItem('secondOperand') // 
    }

    if (temp == '+' || temp == '-' || temp == '*' || temp == '/') {
        localStorage.setItem('operator', temp);
        operator = temp
    } else if (temp == 'AC') {
        localStorage.clear();
    } else if (temp == '=') {
        switch (operator) {
            case '+':
                result = parseInt(firstOperand) + parseInt(secondOperand)
                break;
            case '-':
                result = parseInt(firstOperand) - parseInt(secondOperand)
                break;
            case '/':
                result = parseInt(firstOperand) / parseInt(secondOperand)
                break;
            case '*':
                result = parseInt(firstOperand) * parseInt(secondOperand)
                break;
        }
        localStorage.clear()
        localStorage.setItem('firstOperand', result)
        

    } else {
        if (localStorage.getItem('operator')) {
            x = localStorage.getItem('secondOperand'); // 3
            secondOperand = temp // 4
            if (x) {
                x += secondOperand // Concat as the type of the variable is string 34
            }
            localStorage.setItem('secondOperand', x == null ? secondOperand : x);
        } else {
            x = localStorage.getItem('firstOperand') // 1
            firstOperand = temp
            if (x) {
                x += firstOperand // Concat as the type of the variable is string
            }
            localStorage.setItem('firstOperand', x == null ? firstOperand : x);
        }
    }
    firstOperand = localStorage.getItem('firstOperand') ? localStorage.getItem('firstOperand') : ''
    operator = localStorage.getItem('operator') ? localStorage.getItem('operator') : ''
    secondOperand = localStorage.getItem('secondOperand') ? localStorage.getItem('secondOperand') : '';
    if (result) {
        screen.innerHTML = result

    } else {
        screen.innerHTML = firstOperand + operator + secondOperand;
    }

    if (temp == 'AC') {
        screen.innerHTML = '0'
    }

}
