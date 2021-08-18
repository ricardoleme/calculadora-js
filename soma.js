/**
 * Efetua a soma de dois números
 * 
 * Essa função recebe dois números, verifica se eles são válidos e retorna a soma
 * 
 * @author Ricardo leme
 * @version 1.0
 * @param {number} num1
 * @param {number} num2
 * @returns {number} 
 */

function soma(num1, num2){
    if (Number.isNaN(parseFloat(num1)))
        throw Error("O parâmetro num1 deve ser um número válido")
    if (Number.isNaN(parseFloat(num2)))
        throw Error("O parâmetro num2 deve ser um número válido")    
    return (parseFloat(num1)+parseFloat(num2)).toFixed(2)
}

//console.log(soma("10","20"))
//console.log(soma("10",20))
//console.log(soma(10,"20"))
//console.log(soma(10,20))
//console.log(soma("oi","20"))

function calcular(){
    var numero1 = document.calc.valor1.value
    var numero2 = document.calc.valor2.value
    if(numero1.length > 0 && numero2.length > 0){
        var result = soma(numero1, numero2)
        document.calc.resultado.value = result
    } else{
        alert('É necessário informar os dois números!')
    }
}

function limpar(){
    document.calc.valor1.value = ''
    document.calc.valor2.value = ''
    document.calc.resultado.value = ''
}