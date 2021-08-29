const fruta = (frutinha) =>{
    switch(frutinha){
        case 'Maça':
            console.log('Não vendemos esta fruta aqui')
            break
        case 'Kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'Melancia':
            console.log('São 3 reais o quilo da Melancia!')
            break
        default :
        console.log('Erro!')
    }
}

fruta('Maça')
fruta('Kiwi')
fruta('Melancia')
fruta('oi')

