const minhaLista = [];
const minhaListaDeTarefas =[
'mandar email',
'colocar comida para o dog',
'limpar o quarto'
]

// console.log(minhaListaDeTarefas[0])
// console.log(minhaListaDeTarefas[2])
// console.log(minhaListaDeTarefas[4])

// console.log(minhaListaDeTarefas.length)


// adicionar item no array

minhaListaDeTarefas.push('formatar computador')
console.log(minhaListaDeTarefas[3])

// remover o ultimo da lista 
// let ultimo = minhaListaDeTarefas.pop()
// console.log(ultimo,minhaListaDeTarefas)


// remover o primeiro da lista
const primeiro = minhaListaDeTarefas.shift()
console.log(primeiro,minhaListaDeTarefas)

// remover um item especifico a partir do indice

console.log(minhaListaDeTarefas[2])
// qual item de inicio
// quantos remover
// minhaListaDeTarefas.splice(2,1);

// console.log(minhaListaDeTarefas)

const itens = [
1,'computador',0.22

]
// verificar o tipo de array
//console.log(typeof(itens))

// verificar se é array da forma correta

// console.log(Array.isArray(itens))

// //
// const numeros = ['a','c','b','e']
// console.log(numeros.sort())

// const novo = itens.concat([1,2,3])
// console.log(novo)

// juntar arrays em um string
// console.log(itens.join(','))

// verificar indice do item
// const index = itens.indexOf('chaves')
// console.log(index)