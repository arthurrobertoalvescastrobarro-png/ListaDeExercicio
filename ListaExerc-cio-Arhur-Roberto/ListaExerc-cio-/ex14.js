//Criar um programa que mostre um desconto de 5% para compras acima de R$ 100,00.
let compra = 110;
let desconto = compra * 0.95;
if (compra > 100) {
    console.log(`O valor do desconto é ${desconto}`);
} else{
    console.log(`Não tem desconto`);
}