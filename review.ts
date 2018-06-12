//ESTUDO DE TIPOS
let message: string = "Help me, Obi-Wan Kenobi"
console.log(message)

let episode: number = 4
console.log("This is episode" + 4)
episode = episode + 1
console.log("Next episode is" + episode)

//Quanto ano atribuido um tipo, por padrão ele aceita any
//lembrando que é sempre util colocar o tipo da variavel, alem de ser uma boa prática
let favoritedDroid
favoritedDroid = 'BB-8'
favoritedDroid = 10
console.log("My favorite droid is" + favoritedDroid)

//ESTUDO FUNÇÕES
//Function
//                              tipagen parametros   tipagem retorno
let isEnoughToBeatMF = function (parsecs: number) : boolean {
  return parsecs < 12
}
let distance = 11
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES':'NO'} `)
//
//Arrow Function
let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2');

//ESTUDO PARAMETROS PADROES
//caso nao passe um valor em number, ele assume valor 1
function inc (speed: number, inc: number = 1) : number {
  return speed + inc
}
console.log(`inc (5,1) = ${inc(5,1)}`)
console.log(`inc (5) = ${inc(5)}`)