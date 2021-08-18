function trataErroreLancar(erro){
    //throw new Error('...')
    throw 'Erro'
}

function impirmirNomegritado(obj){
    try{
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        trataErroreLancar(e)
    } finally{
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
impirmirNomegritado(obj)