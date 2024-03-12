let macasCompradas = prompt("Quantas maçãs quer comprar ?")
let valorMacas1 = 0.30;
let valorMacas2 = 0.25;

if (macasCompradas < 12){
    document.write("O valor da compra foi de : ", macasCompradas * valorMacas1)
}

if (macasCompradas > 12){
    document.write("O valor da compra foi de : ", macasCompradas * valorMacas2)
}
