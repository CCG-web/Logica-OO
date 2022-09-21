// meses começa do zero
const dataAniversario = new Date(2020,0,20);
console.log(dataAniversario)

const primeiraDataJs = new Date(0);
// console.log(primeiraDataJs.getTime())


const hoje = new Date()

// console.log(hoje.toString())
// console.log(hoje.toLocaleDateString())

// formato recomendado!

// console.log(hoje.toISOString())

const dia = hoje.getDate()

console.log(`
Dia: ${hoje.getDate()}
Mes: ${hoje.getMonth()}
Ano: ${hoje.getFullYear()}
Hora: ${hoje.getHours()}
Minute: ${hoje.getMinutes()}
segundos: ${hoje.getSeconds()}
`
)

console.log(
    new Date(2020,1,20)> new Date(2000,1,1)
)