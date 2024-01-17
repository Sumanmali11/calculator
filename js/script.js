function calculator(e) {
    let temp = e.target.innerHTML
    let x;
    let firstOperand = e.target.innerHTML
    let screen = document.getElementById('screen')

    if (temp == '+' || temp == '-' || temp == '*' || temp == '/') {
        // Only use one operator
    } else if (temp == 'AC') {
        screen.innerHTML = '0';
    } else if (temp == '=') {

    } else {
        x = localStorage.getItem('firstOperand')
        if (x) {
            x += firstOperand
        }
        localStorage.setItem('firstOperand', x == null ? firstOperand : x);

    }
    screen.innerHTML = x == null ? firstOperand : x;
    // switch (firstOperand) {
    //     case 'AC':
    //         screen.innerHTML = '0';
    //         break;
    //     case '+':
    //         screen.innerHTML = '+';
    //         break;
    //     case '-':
    //         screen.innerHTML = '-';
    //         break;
    //     case '/':
    //         screen.innerHTML = '/';
    //         break;
    //     case '*':
    //         screen.innerHTML = '*';
    //         break;
    //     case '1':
    //         screen.innerHTML = '1';
    //         break;
    //     case '2':
    //         screen.innerHTML = '2';
    //         break;
    //     case '3':
    //         screen.innerHTML = '3';
    //         break;
    //     case '4':
    //         screen.innerHTML = '4';
    //         break;
    //     case '5':
    //         screen.innerHTML = '5';
    //         break;
    //     case '6':
    //         screen.innerHTML = '6';
    //         break;
    //     case '7':
    //         screen.innerHTML = '7';
    //         break;
    //     case '8':
    //         screen.innerHTML = '8';
    //         break;
    //     case '9':
    //         screen.innerHTML = '9';
    //         break;
    //     case '0':
    //         screen.innerHTML = '0';
    //         break;
    //     case '=':
    //         screen.innerHTML = '=';
    //         break;
    // }
}
