class Pessoa{
    constructor(nome) {
        this.nome = nome
    }

    fala() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const cria = nome => {
    return{
        falar:() => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = cria('João')
p2.falar()