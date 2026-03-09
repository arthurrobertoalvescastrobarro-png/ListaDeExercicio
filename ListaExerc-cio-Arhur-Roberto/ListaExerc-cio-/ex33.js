//Crie um programa para mostrar se o número 7 é primo
let numero = 7;
let primo = true;

if (numero <= 1) {
    primo = false;
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            primo = false;
            break;
        }
    }
}

if (primo) {
    console.log(numero + " é primo.");
} else {
    console.log(numero + " não é primo.");
}
