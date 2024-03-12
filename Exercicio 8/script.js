let numero1 = prompt("Digite um numero:");
let numero2 = prompt("Digite outro numero:");

if (numero1 == numero2){
    document.write(`${numero1} é igual ao ${numero2}.`)
}
else if (numero1 > numero2){
    document.write(`${numero1} é maior do que o ${numero2}.`)
}
else{
    document.write(`${numero1} é menor do que o ${numero2}.`)
}
