function calculator(e) {
    let screen = document.getElementById('screen');

    let key = e.target.innerHTML;

    let firstOperand, operator, secondOperand, result;

    if (localStorage.getItem('firstOperand')) {
        firstOperand = localStorage.getItem('firstOperand')
    }

    if (localStorage.getItem('operator')) {
        operator = localStorage.getItem('operator')
    }

    if (localStorage.getItem('secondOperand')) {
        secondOperand = localStorage.getItem('secondOperand')
    }

    switch (key) {
        case '+':
            if (firstOperand)
                localStorage.setItem('operator', key)
            operator = key
            break;
        case '-':
            if (firstOperand)
                localStorage.setItem('operator', key)
            operator = key
            break;
        case '/':
            if (firstOperand)
                localStorage.setItem('operator', key)
            operator = key
            break;
        case '*':
            if (firstOperand)
                localStorage.setItem('operator', key)
            operator = key
            break;
        case '=':
            break;
        case 'AC':
            localStorage.clear();
            break;
        case '1':
            if (operator) {
                if (localStorage.getItem('secondOperand')) {
                    secondOperand += key
                }
                localStorage.setItem('secondOperand', secondOperand ? secondOperand : key)
                secondOperand = localStorage.getItem('secondOperand')
            }
            else {
                if (localStorage.getItem('firstOperand')) {
                    firstOperand += key
                }
                localStorage.setItem('firstOperand', firstOperand ? firstOperand : key)
            }
            break;
        case '2':
            if (operator) {
                if (localStorage.getItem('secondOperand')) {
                    secondOperand += key
                }
                localStorage.setItem('secondOperand', secondOperand ? secondOperand : key)
                secondOperand = localStorage.getItem('secondOperand')
            }
            else {
                if (localStorage.getItem('firstOperand')) {
                    firstOperand += key
                }
                localStorage.setItem('firstOperand', firstOperand ? firstOperand : key)
            }
            break;
        case '3':
            if (operator) {
                if (localStorage.getItem('secondOperand')) {
                    secondOperand += key
                }
                localStorage.setItem('secondOperand', secondOperand ? secondOperand : key)
                secondOperand = localStorage.getItem('secondOperand')
            }
            else {
                if (localStorage.getItem('firstOperand')) {
                    firstOperand += key
                }
                localStorage.setItem('firstOperand', firstOperand ? firstOperand : key)
            }
            break;
        case '4':
            if (operator) {
                if (localStorage.getItem('secondOperand')) {
                    secondOperand += key
                }
                localStorage.setItem('secondOperand', secondOperand ? secondOperand : key)
                secondOperand = localStorage.getItem('secondOperand')
            }
            else {
                if (localStorage.getItem('firstOperand')) {
                    firstOperand += key
                }
                localStorage.setItem('firstOperand', firstOperand ? firstOperand : key)
            }
            break;
        case '5':
            if (operator) {
                if (localStorage.getItem('secondOperand')) {
                    secondOperand += key
                }
                localStorage.setItem('secondOperand', secondOperand ? secondOperand : key)
                secondOperand = localStorage.getItem('secondOperand')
            }
            else {
                if (localStorage.getItem('firstOperand')) {
                    firstOperand += key
                }
                localStorage.setItem('firstOperand', firstOperand ? firstOperand : key)
            }
            break;
        case '6':
            if (operator) {
                if (localStorage.getItem('secondOperand')) {
                    secondOperand += key
                }
                localStorage.setItem('secondOperand', secondOperand ? secondOperand : key)
                secondOperand = localStorage.getItem('secondOperand')
            }
            else {
                if (localStorage.getItem('firstOperand')) {
                    firstOperand += key
                }
                localStorage.setItem('firstOperand', firstOperand ? firstOperand : key)
            }
            break;
        case '7':
            if (operator) {
                if (localStorage.getItem('secondOperand')) {
                    secondOperand += key
                }
                localStorage.setItem('secondOperand', secondOperand ? secondOperand : key)
                secondOperand = localStorage.getItem('secondOperand')
            }
            else {
                if (localStorage.getItem('firstOperand')) {
                    firstOperand += key
                }
                localStorage.setItem('firstOperand', firstOperand ? firstOperand : key)
            }
            break;
        case '8':
            if (operator) {
                if (localStorage.getItem('secondOperand')) {
                    secondOperand += key
                }
                localStorage.setItem('secondOperand', secondOperand ? secondOperand : key)
                secondOperand = localStorage.getItem('secondOperand')
            }
            else {
                if (localStorage.getItem('firstOperand')) {
                    firstOperand += key
                }
                localStorage.setItem('firstOperand', firstOperand ? firstOperand : key)
            }
            break;
        case '9':
            if (operator) {
                if (localStorage.getItem('secondOperand')) {
                    secondOperand += key
                }
                localStorage.setItem('secondOperand', secondOperand ? secondOperand : key)
                secondOperand = localStorage.getItem('secondOperand')
            }
            else {
                if (localStorage.getItem('firstOperand')) {
                    firstOperand += key
                }
                localStorage.setItem('firstOperand', firstOperand ? firstOperand : key)
            }
            break;
        case '0':
            if (operator) {
                if (localStorage.getItem('secondOperand')) {
                    secondOperand += key
                }
                localStorage.setItem('secondOperand', secondOperand ? secondOperand : key)
                secondOperand = localStorage.getItem('secondOperand')
            }
            else {
                if (localStorage.getItem('firstOperand')) {
                    firstOperand += key
                }
                localStorage.setItem('firstOperand', firstOperand ? firstOperand : key)
            }
            break;
    }

    result = firstOperand ? firstOperand : key
    if (operator) {
        result += operator
    }
    if (secondOperand) {
        result += secondOperand
    }

    if (key == '=') {
        firstOperand = parseInt(firstOperand)
        secondOperand = parseInt(secondOperand)
        switch (operator) {
            case '+': result = firstOperand + secondOperand
                break;
            case '-': result = firstOperand - secondOperand
                break;
            case '/': result = firstOperand / secondOperand
                break;
            case '*': result = firstOperand * secondOperand
                break;
        }
    }

    screen.innerHTML = result
}