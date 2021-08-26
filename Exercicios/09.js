function notas(nota){
    if(nota > 100){
        nota = 100
        console.log(`Você foi aprovado com nota ${nota}!`)
        console.log('Muito bom. Parabéns')
    }else if(nota == 38 || nota == 39 || nota == 40){
        nota = 40
        console.log(`Você foi aprovado com nota ${nota}!`)
    }else if(nota >= 41){
        if(nota % 5 == 4){
            nota = nota +1
            console.log(`Você foi aprovado com nota ${nota}!`)
        } else if(nota % 5 == 3){
            nota = nota + 2
            console.log(`Você foi aprovado com nota ${nota}!`)
        } else{
            console.log(`Você foi aprovado com nota ${nota}!`)
        }
    } else if(nota <= 37){
            console.log(`Você foi reprovado com nota ${nota}!`)
    }

}

notas(82)