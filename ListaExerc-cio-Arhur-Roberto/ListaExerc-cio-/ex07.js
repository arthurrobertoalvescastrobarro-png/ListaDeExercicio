//Criar um programa que exiba as seguintes mensagens: SE menor de 16 anos "não pode votar". SE tiver entre 16 e 18 e maior que 70 anos é "Voto facultativo". SE tiver entre 18 e 70 anos "Voto obrigatório"
let idade = 10;

if(idade < 16){
    console.log('Não permitido a votar');
}else if(idade >= 16 && idade <= 17 || idade > 69){
    console.log('Voto opcional');
} else {
    console.log('Voto obrigatório');
}
