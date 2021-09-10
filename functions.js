/*

let prhases={
    nome: 'Januario',
    age: 76,
    inSubscrite: true
}

console.log(prhases)



/*
prhases= 'Retornar'
prhases1= 'Ir em frente'
prhases2='Aguardar comando'
*/
/*

function showoptions() {
         console.log(prhases)
         console.log(prhases)
         
}

showoptions()
showoptions()


function showcase(){
        console.log('Siga em Frente')
        }

showcase()
showcase()
showcase()
showcase()



const sum = function(number1, number2, number3){
    console.log(number1 + number2 + number3)
}

sum(1, 2, 5)







function mix(palavra1, palavra2, palavra3){
        return palavra1 + palavra2 + palavra3
}

let dicionario = mix('ser', 'ter', 'poder')

console.log(dicionario)



let total = function sum(number1, number2){
    console.log(number1+number2)
}
   
total(2, 3)



function sum(number1, number2){
    return(number1 + number2)
}

let result = sum(5, 9)

console.log(result)



let result = function sum(n1, n2, n3, n4){
    console.log(n1 > n1))
}

result(1, 1, 1, 1)


let subject = 'Create Video.'

function createThings(subject){
        return subject
}

console.log(createThings(subject))


let temperature = 37.7   

if(temperature >= 38){
    console.log('Febre alta.')
}else if(temperature >37){
    console.log('Febre media')
}else{
    console.log('saudavel')
}



let note = 70;

if(note < 0 || note > 100){
    console.log('Nota Invalida')
}else if(note >= 90 && note <= 100){
    console.log('A')
}else if(note >= 80){
    console.log('B')
}else if( note >= 70){
    console.log('C')
}else if(note >= 60){
    console.log('D')
}else{
    console.log('E')
}

*/

/*
 

const saldo ={
    receitas: [
        500,
        1200,
        4500
    ],
    
    despesas: [
        1500,
        780.5,
        5000
    ]
};



let totalReceitas = saldo.receitas[0]+saldo.receitas[1]+saldo.receitas[2]
let totalDespesas = saldo.despesas[0]+saldo.despesas[1]+saldo.despesas[2]
let resultado = totalReceitas-totalDespesas

if (totalReceitas >= totalDespesas) {
        console.log('Suas saude financeita vai bem e seu saldo eh: '+ resultado)
} else {
    console.log(`'Voce esta no vermelho e deve ficar atento, seu saldo eh: ${resultado}'`)
}


const receitas1 = receitas.slice.number(0,1);
const receitas2 = receitas.slice(1,2);
const receitas3 = receitas.slice(2,3);

const despesas1 = despesas.slice(0,1);
const despesas2 = despesas.slice(1,2);
const despesas3 = despesas.slice(2,3);
const despesas4 = despesas.slice(3,4);
const despesas5 = despesas.slice(4,5);
const despesas6 = despesas.slice(5,6);
const despesas7 = despesas.slice(6,7);


function lista(...args) {
    let result = 0;
  
    for (const soma of args) {
      result += soma;
    }
    return result;
  }

function lista2(...args) {
    let result2 = 0;

    for ( const soma of args) {
        result += soma;
    }
    return result2;
    }
}
  



function resultado(receitas1, receitas2, receitas3, despesas1, despesas2, despesas3, despesas4, despesas5, despesas6, despesas7){
    return (receitas1 + receitas2 + receitas3) - (despesas1 + despesas2 + despesas3 + despesas4 + despesas5 + despesas6 + despesas7)
};

resultado1 = resultado(500.20, 1200.10, 4500.5,  1500, 780.5, 1000.3,  200.1,  90.9, 950.3, 1000 )

console.log(resultado1 + ' de saldo')



contas = {
    receitas:[300, 233, 100],
    despesas:[39, 43, 290]
};

function sum(array){
    let total = 0;

    for (const value of array) {
        total =+ value
    }
    return total
};

function totalBalance(){
    const calculeReceitas = sum(contas.receitas)
    const calculeDespesas = sum(contas.despesas)

    const totalGeneral = calculeReceitas - calculeDespesas

    const itsOk = totalGeneral >= 0
    
    let message = `negativo, seu saldo eh ${totalGeneral}`

    if (itsOk) {
        message = `Seu saldo eh positivo ${totalGeneral}`
    }   
    console.log(message)
} 

totalBalance()



//C = (F - 32) *  5/9
//F = C * 9/5 + 32

let string1 = '39C'

function identification(string) {
    const degreeCelsius = string.toUpperCase().includes('C')
    const degreefahrenheit = string.toUpperCase().includes('F') 
    const alterDado = Number(degreefahrenheit)
    const alterDado2 = Number(degreeCelsius)

    return alterDado + alterDado2

}


identification()


*/



let string1 = '30'
let string = '30'


function alterDado1(string1) {
    const number =  Number(string1)  

    return number
}

function transforma1() {
    const dadoAlterado1 = alterDado1(string1)

    resultado2 = dadoAlterado1 * 9/5 + 32

    return document.write(`${resultado2.toFixed(2)}`)
}

function alterDado(string) {
    const number =  Number(string)  

    return number
}

function transforma() {
    const dadoAlterado = alterDado(string)

    resultado = (dadoAlterado - 32) * 5/9

    return document.write(`${resultado.toFixed(2)}`)
}


transforma()

