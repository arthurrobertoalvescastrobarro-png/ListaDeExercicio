//Criar um programa que mostre se um aluno foi aprovado, reprovado ou está de recuperação.
let nota = 6
if (nota >= 6){
    console.log (`O aluno esta aprovado`)
}
else if (nota >= 5 && nota < 5.99){
    console.log (`O aluno esta de recuperação`)
}
else if (nota < 4.99){
    console.log(`O aluno esta reprovado`)
}