var QuantidadeDeAlunos = 14;

for (var controle = 0; controle < QuantidadeDeAlunos; controle++){
    if(controle == 0){
        console.log("O numero é Zero");
    }
    else if(controle % 2 == 0){
        console.log("O numero " + controle + " é par");
    } else {
        console.log("O número " + controle + " é impar");
    }
}