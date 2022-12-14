class Heroi {
    atacar() {
        console.log(`atacou`)
    }
    defendeu() {
        console.log(`defendeu`)
    }
}

const heroi = new Heroi()
heroi.atacar()
heroi.defendeu()

class Heroi2 {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    atacar(){
        console.log(
            `O ${this.nome} atacou`
        )
    }
}

const heroi2 = new Heroi2(
    `Flash`,80
)

heroi2.atacar()

class Heroi3{
    static obterAnoNascimento(idade){
        return 2022 - idade
    }
}
const anoNascimento = Heroi3.obterAnoNascimento(24)
console.log(
    `O ano de nascimento do Heroi é ${anoNascimento}`
)