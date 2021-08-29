calcular = (n1, operador, n2) => {
    switch(operador){
        case '+':
            return n1 + n2
            break
        case '-':
            return n1 - n2
            break
        case '*':
            return n1 * n2
            break
        case '/':
            return n1 / n2
            break
        case '%':
            return n1 % n2
            break
        case '**':
            return n1 ** n2
            break
        default :
        return 'ERRO!'
    }
}

console.log(calcular(2,'+', 2))
console.log(calcular(2,'-', 2))
console.log(calcular(2,'*', 2))
console.log(calcular(2,'/', 2))
console.log(calcular(2,'%', 2))
console.log(calcular(2,'**', 3))

