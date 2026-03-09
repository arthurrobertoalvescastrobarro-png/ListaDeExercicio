//Criar um programa que mostre qual tipo de triângulo é de acordo com os lados (Equilátero, Isósceles ou Escaleno).
let lado1 = 100;
let lado2 = 110;
let lado3 = 120;
if (lado1 === lado2 && lado1 === lado3) {
    console.log(`O triângulo é um equilatero`)
} else if(lado1 === lado2 || lado2 === lado3 || lado3 === lado1) {
    console.log(`O triângulo é um isósceles`)
} else{ 
    console.log(`O triângulo é um escaleno`)
}