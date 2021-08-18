// novo rescurso do ES2015

const pessoa = {
    nome: 'Clara',
    idade:5,
    endereco: {
        logradouro: 'Rua YXZ',
        numero: 152
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)