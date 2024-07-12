//Escreva um algoritmo para verificar se uma roleta de cassino é viciada.
// A roleta tem 37 números (de 0 a 36), sendo que o número 0 é verde e os demais são divididos igualmente entre vermelho e preto (impares são vermelho, pares são pretos). O programa deve contar quantas vezes cada cor (verde, vermelho, preto) foi gerada e verificar se alguma cor tem uma frequência maior que 40%. 
//Se houver, o programa deve indicar que a roleta pode estar viciada.

import leia, { questionFloat } from 'readline-sync'

function preencherVetor(tamanhoVetor,){
    var vetor = [];
    for(var i = 0; i < 36; i++){
        vetor[i] = parseInt(Math.random() *( verde , vermelho))  
    }
    return vetor;
}

var vetor = preencherVetor(36, 0, 100);

for (var i = 0; i < vetor.length; i++) {
    for(var j = i; j < vetor.length; j++){
        if(j !== i && vetor[i] === vetor[j]){

        }

    }


}

console.log(vetor);