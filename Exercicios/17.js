function aumento(plano, salario){
    switch(plano){
        case 'A': //10%
            return (salario * 10) / 100 + salario
            break
        case 'B': //15%
            return (salario * 15) / 100 + salario
            break
        case 'C': //20%
            return (salario * 20) / 100 + salario
            break
        default:
            return 'Plano inválido!'
    }
}

console.log(aumento('A', 1000))
console.log(aumento('B', 1000))
console.log(aumento('C', 1000))
console.log(aumento('D', 1000))
