const heroi = {
nome:'flash',
idade: 100,
sexo: 'Maculino'
}

// console.log('Nome',heroi.nome)
// console.log('idade',heroi['idade'])
// console.log('sexo',heroi.sexo)
// console.log('Não existe',heroi.naoExiste)

// heroi.id = 001
// console.log(heroi)

// saber as chaves

// console.log(Object.keys(heroi))

// saber valores
// console.log(Object.values(heroi))
const pessoa = {
    tamanho:'10 metros'
}
//juntar dois objetos
const novoObj = Object.assign(heroi, pessoa)
delete novoObj.nome
console.log(novoObj)