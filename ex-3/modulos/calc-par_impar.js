/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 * Objetivo:        Criação de função para cálculo de números pares e impares
 * Data de criação: 15/08/2022
 * Autor:           Marina Santello
 * Versão:          2.0
 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const { exit } = require("process");

const calcParImpar = function(valor01, valor02, info) {
    // declaração das variáveis
    let i = valor01;
    let numero02 = valor02;
    let opcao = info;
    let x = 2;
    let total = 0.0;
    
    // verificação para o caso do usuário escolher a exibição dos números pares
    if (opcao == 'p' || opcao == 'par') {
        console.log('\n\n*   LISTA DE NÚMEROS PARES   *');
        // laço para fazer a repetição do cálculo de verificação dos números pares
        for (i ; i <= numero02; i++) {
            // verificação se o número é par, exibição desse número e uso da variável que irá armazenar a quantidade de números pares
            if (i % x == 0) {
                console.log(i);
                total++;
            }
        }
        // exibição da quantidade de números pares
        console.log(`\nQuantidade de números encontrados: ${total}\n\n`);
    }

    // 'reiniciando' as variáveis para serem usadas novamente na verificação de números pares
    i = valor01;
    total = 0.0;

    // verificação para o caso do usuário escolher a exibição dos números impares
    if (opcao == 'i' || opcao == 'impar') {
        console.log('*   LISTA DE NÚMEROS IMPARES   *');
        // laço para fazer a repetição do cálculo de verificação dos números impares
        for (i ; i <= numero02; i++) {
            // verificação se o número não é par (logo, impar), exibição desse número e uso da variável que irá armazenar a quantidade de números impares
            if (i % x != 0) {
                console.log(i);
                total++;
            }
        }
        // exibição da quantidade de números pares
        console.log(`\nQuantidade de números encontrados: ${total}\n`);
    }

    // verificação para o caso do usuário escolher a exibição dos números pares e impares
    if (opcao == 'a' || opcao == 'ambos') {
        console.log('\n\n*   LISTA DE NÚMEROS PARES   *');
        // laço para fazer a repetição do cálculo de verificação dos números pares
        for (i ; i <= numero02; i++) {
            // verificação se o número é par, exibição desse número e uso da variável que irá armazenar a quantidade de números pares
            if (i % x == 0) {
                console.log(i);
                total++;
            }
        }
        // exibição da quantidade de números pares
        console.log(`\nQuantidade de números encontrados: ${total}\n\n`);

        // 'reiniciando' as variáveis para serem usadas novamente na verificação de números pares
        i = valor01;
        total = 0.0;

        console.log('*   LISTA DE NÚMEROS IMPARES   *');
        // laço para fazer a repetição do cálculo de verificação dos números impares
        for (i ; i <= numero02; i++) {
            // verificação se o número não é par (logo, impar), exibição desse número e uso da variável que irá armazenar a quantidade de números impares
            if (i % x != 0) {
                console.log(i);
                total++;
            }
        }
        // exibição da quantidade de números pares
        console.log(`\nQuantidade de números encontrados: ${total}\n`);
    }
    exit();
}

module.exports = {
    calcParImpar
}