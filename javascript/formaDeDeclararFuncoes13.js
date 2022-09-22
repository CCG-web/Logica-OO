function minhaFuncao1(parametro1){
 return `aee`
}

const minhaFuncao2 = function(parametro1){
    return `aeee ${parametro1}`
}

const minhaFuncao3 = (parametro1) =>{
    return `aeee &{parametro1}`
}

const minhaFuncao4 = parametro1 => `aee ${parametro1}`

const ob1 = {
    minhaFuncao: paramentro1=> `aee ${paramentro1}`
}

ob1.minhaFuncao('test')

const obj2 = {
    minhaFuncao (paramentro1){
        return `aeee ${paramentro1}`
    }
}