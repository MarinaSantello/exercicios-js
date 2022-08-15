/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 * Objetivo:        Criação de função para cálculo de tabuada
 * Data de criação: 11/08/2022
 * Autor:           Marina Santello
 * Versão:          2.0
 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const { exit } = require("process");

// função que calcula a tabuada
const calcularTabuada = function(inicioT, finalT, inicioM, finalM) {
    // declaração das variáveis, com os valores recebidos do argumento da função
    let i = inicioT;
    let finalTabuada = finalT;
    let j = inicioM;
    let finalMultiplicacao = finalM;

    // laço 'for' que gerencia a quantidade de tabuadas a seres calculadas
    for (i ; i <= finalTabuada ; i++) {
        // título de cada tabuada
        console.log(`Tabuada do [${i}]`);
        // laço 'for' que gerencia a quantidade de multiplicadores, efetua o cálculo e exibe os valores
        for (j ; j <= finalMultiplicacao ; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        // reeinicando o valor da variável contadora de multiplicação para que possa ser usada na próxima tabuada
        j = inicioM;
        // comando que simula a separação de cada tabuada, para mera organização da exibição dos valores
        console.log('\n');
    }
    exit();
}

module.exports = {
    calcularTabuada
}