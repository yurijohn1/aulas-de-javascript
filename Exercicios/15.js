function comprar(carro){
    switch(carro){
        case 'hatch':
            console.log('Compra efetuada com sucesso!')
            break
        case 'caminhonetes':
        case 'motocicletas':
        case 'sedans':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default :
        console.log('Não trabalhamos com este tipo de automóvel aqui.')
    }
}

comprar('hatch')
comprar('caminhonetes')
comprar('gol')