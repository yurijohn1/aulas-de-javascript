const pedido = (quantidade, codigo) => {
    switch(codigo){
        case 100:
            console.log(`Você comprou ${quantidade} Cachorro Quente! O valor a ser pago é: R$${quantidade * 3.00} `)
            break
        case 200:
            console.log(`Você comprou ${quantidade} Hambúrguer Simples! O valor a ser pago é: R$${quantidade * 4.00}`)
            break
        case 300:
            console.log(`Você comprou ${quantidade} Cheeseburguer! O valor a ser pago é: R$${quantidade * 5.50}`)
            break
        case 400:
            console.log(`VocÊ comprou ${quantidade} Bauru! O valor a ser pago é: R$${quantidade * 7.50}`)
            break
        case 500:
            console.log(`Você comprou ${quantidade} Refrigerante! O valor a ser pago é: R$${quantidade * 3.50}`)
            break
        case 600:
            console.log(`Você comprou ${quantidade} Suco! O valor a ser pago é: R$${quantidade * 2.80}`)
            break
        default:
            console.log('Produto não existente')
    }
}
pedido(1, 100)
pedido(2, 200)
pedido(4, 300)
pedido(1, 700)