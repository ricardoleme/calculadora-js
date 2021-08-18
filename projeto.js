/*  Projeto Javascript */
var empresa = "Fatec Itu"
var numero = 42
var fumante = false
console.log(empresa)

//array em JS
var frutas = ["Melão","Abacaxi","Morango"]
console.log(frutas[1])

//objetos em JS
var cliente = {
    nome: "Zé",
    idade: 45,
    pessoaFisica: true
}
console.log(cliente) //exibindo todo o objeto
console.log(cliente.nome) //exibindo apenas um atributo do objeto

//números
var num1 = 10.40
var num2 = "20"
var soma = parseFloat(num1) + parseFloat(num2) //parseInt
console.log(soma)

//string
var curso = "gestÃO de Ti"
console.log(curso.length) //tamanho da string
console.log(curso.toUpperCase()) //converte em maiúsculo
console.log(curso.replace("Ã","A").toUpperCase()) //busca e troca
console.log(curso.charAt(8)) //Retorna a posição da string na 8o

/*operadores lógicos
 && AND
 || OR
 ! NOT
*/ 
var late = true
var peso = 12
peso -= 2
console.log("Novo Peso:  "+ peso)

var contador = 0
contador += 1

if (!late && peso > 10) {
    console.log("É um cão grande")
} else {
    console.log("Pode ser um gatinho")
}
//Operador Ternário
var mia = true
var bichinho = "O animal provavelmente é um " + (mia ? "gatinho" : "cachorrinho")
console.log(bichinho)

//For 
for (var contador=0; contador <=10; contador++){
    console.warn(contador)
}
//While
var passos = 6400
while(passos > 50){
    console.log(passos)
    passos /= 5
}

//Objetos - coleção de pares nome-valor
var fornecedor = {} //Essa é top!
var transportadora = new Object() //Reservado para os nerds
var animal = {
    nome: "Jack Bauer",
    idade: 60,
    peso: 0.90,
    detalhes: {
          raça: "York",
          sexo: "Macho"
    } 
}

console.log(animal["nome"] + " é do sexo " + animal["detalhes"]["sexo"])
//Vetores
var vegetais = [] //Cria um novo array
var legumes = new Array()
var times = ["Flamengo","Fluminense","Botafogo","Vasco","Macaé"]
console.log("São "+times.length+" times")

for (var contadortime = 0; contadortime < times.length; contadortime++){
    console.log(times[contadortime])
}