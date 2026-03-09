//Crie um programa para criar o fatorial de 5 (!5)
let numero = 5;
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log("5! = " + fatorial);
