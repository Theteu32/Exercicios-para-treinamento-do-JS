let anoNasceu = prompt("Em que ano você nasceu?");
let ano = 2024
let idade = ano - anoNasceu;
document.write(`Você tem ou vai fazer ${idade} anos e`)
if (ano - anoNasceu < 18)
    document.write(" não pode votar ainda.")
else 
    document.write(" já pode votar")