function realizarCalculo() {
    let num1 = Number.parseFloat(document.getElementById('num1').value);
    let num2 = Number.parseFloat(document.getElementById('num2').value);
    let op = document.getElementById('operation').value;
    let resultado;

    switch(op) {
        case '+':
            resultado = num1 + num2;
        break;
        case '-':
            resultado = num1 - num2;
        break;
        case '*':
            resultado = num1 * num2;
        break;
        case '/':
            resultado = num1 / num2;
        break;
    }

    document.getElementById('res').value = resultado;
}