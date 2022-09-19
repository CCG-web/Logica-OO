let salarioDoAmingo = 1000;
let meuSalario = "2999.14dd"
let salarioCorrigido = Number(meuSalario)
console.log(salarioDoAmingo+meuSalario)
console.log(
    typeof(salarioDoAmingo),
    salarioDoAmingo
)

console.log(
    typeof(salarioCorrigido),
    salarioCorrigido
)
//typeof é um função de consulta do tipo de dado que foi declarado
console.log( "é um numero"+
    isNaN(salarioCorrigido)
)
//  isNaN retorna um booleano se e um numero ou não! por exemplo caso o valor seja "2000d"
//  é true pois o  valor não é um numero caso seja 2000 é false pois o valor é um numero
let minhaString = 'Olá mundo!';
let minhaOutraString = "Olá mundo2";
let minhaStringComVariaveis = `${minhaString}- ${minhaOutraString}. AE!`

console.log(
    minhaStringComVariaveis
)