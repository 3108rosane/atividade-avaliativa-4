
//Você deve solicitar o nome do jogador, quantidade de gols,
// numero de passes certos e quantidade de passes errados.
// O algoritmo deve calcular a pontuação de casa jogador e informar se o jogador
// foi bem ou mal na partida, levando como base a seguinte tabela. 
//No final, deve apresentar o jogador com melhor pontuação.
//Cada Gol: 50 Pontos
//Cada Passe Certo: 10 Pontos
//Cada Passe Errado: -5 Pontos
//Pontuação < 50 - Péssima partida.
//Pontuação de 50 até 100 - Partida ruim.
//Pontuação de 100 até 150 - Fez o básico
//Pontuação de 150 até 200 - Foi bem na partida
//Pontuação acima de 200 - Jogou demais//

import leia, { questionFloat } from 'readline-sync'
var nome = leia.questionFloat("digite o nome");
var qntdGol = leia.questionInt("digite os gols");
var qntdPassesCertos = leia.questionInt("digite passes certo");