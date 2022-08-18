/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 * Objetivo:        Criação de funções para cálculo de números pares e impares
 * Data de criação: 18/08/2022
 * Autor:           Marina Santello
 * Versão:          1.0
 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// função que calcula números pares
const par = function (valor01, valor02) {
    let numero02 = valor02;
    let x = 2;
    let total = 0.0;

    console.log('\n\n*   LISTA DE NÚMEROS PARES   *');
    // laço para fazer a repetição do cálculo de verificação dos números pares
    for (let i = valor01 ; i <= numero02; i++) {
        // verificação se o número é par, exibição desse número e uso da variável que irá armazenar a quantidade de números pares
        if (i % x == 0) {
            console.log(i);
            parseFloat(total++);
        }
    }
    // exibição da quantidade de números pares
    return `Quantidade de números encontrados: ${total}`;
}

// função que calcula números impares
const impar = function (valor01, valor02) {
    let numero02 = valor02;
    let x = 2;
    let total = 0.0;

    console.log('\n\n*   LISTA DE NÚMEROS PARES   *');
    // laço para fazer a repetição do cálculo de verificação dos números pares
    for (let i = valor01 ; i <= numero02; i++) {
        // verificação se o número é par, exibição desse número e uso da variável que irá armazenar a quantidade de números pares
        if (i % x == 0) {
            console.log(i);
            parseFloat(total++);
        }
    }
    // exibição da quantidade de números pares
    return `Quantidade de números encontrados: ${total}`;
}

module.exports = {
    par,
    impar
}