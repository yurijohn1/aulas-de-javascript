const verificar = (ano) => {
    if(ano % 4 == 0){
        console.log(`${ano} é um ano bissexto!`)
    }else{
        console.log(`${ano} não é um ano bissexto!`)
    }
}

verificar(1996)
verificar(2021)