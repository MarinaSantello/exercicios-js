/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 * Objetivo:        Criação de função para verificar a opção e chamar outras funções
 * Data de criação: 15/08/2022
 * Autor:           Marina Santello
 * Versão:          3.0
 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const { exit } = require("process");

const { par, impar } = require('./calc')

const calcParImpar = function(valor01, valor02, info) {
    // declaração das variáveis
    let i = valor01;
    let numero02 = valor02;
    let opcao = info;
    
    // verificação para o caso do usuário escolher a exibição dos números pares
    if (opcao == 'p' || opcao == 'par') {
        // chamada da função que faz os cálculos e os exibe
        console.log('\n' + par(i, numero02) + '\n\n');
    }

    // verificação para o caso do usuário escolher a exibição dos números impares
    if (opcao == 'i' || opcao == 'impar') {
        // chamada da função que faz os cálculos e os exibe
        console.log('\n' + impar(i, numero02) + '\n\n');
    }

    // verificação para o caso do usuário escolher a exibição dos números pares e impares
    if (opcao == 'a' || opcao == 'ambos') {
        // chamada das funções que fazem os cálculos e os exibe
        console.log('\n' + par(i, numero02) + '\n\n');

        console.log('\n' + impar(i, numero02) + '\n\n');
    }
}

module.exports = {
    calcParImpar
}