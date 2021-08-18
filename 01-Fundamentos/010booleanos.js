let oi = false
console.log(oi)

oi = true
console.log(oi)

oi = 1
console.log(!!oi)

console.log('os verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)


console.log('Os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log('pra finalizar')
console.log(!!('' || null || 0 || 'epa'))

let nome = ''
console.log(nome || 'Desconhecido')

