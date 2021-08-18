let comparandoComThis = function (param){
    console.log(this === param)
}

comparandoComThis(global)
const obj = {}
comparandoComThis = comparandoComThis.bind(obj)
comparandoComThis(global)
comparandoComThis(obj)

let compcomthisarrow = param => console.log(this === param)

compcomthisarrow(global)
compcomthisarrow(module.exports)

compcomthisarrow = compcomthisarrow.bind(obj)
compcomthisarrow(obj)
compcomthisarrow(module.exports)


