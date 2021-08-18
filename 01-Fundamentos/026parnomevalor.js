//q par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Yuri',
    idade: 21,
    endereco: {
        logradouro: 'Rua H',
        numero: 289
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)