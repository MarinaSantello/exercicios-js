/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 * Objetivo:        Sistema para exibição e gerenciamento de números pares e impares
 * Data de criação: 15/08/2022
 * Autor:           Marina Santello
 * Versão:          1.2
 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const { calc, calcParImpar } = require('./modulos/par-impar');

var readline = require('readline');
const { exit } = require('process');
var inputInfo = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Título
console.log('*  GERENCIADOR DE NÚMEROS PARES E IMPARES  *');

// Entrada do valor inicial
inputInfo.question('\nInforme o valor incial [0 - 500]: ', function(valor01) {
    // declaração da variável que será utilizada no decorrer do código
    let numero01 = parseFloat(valor01);

    // Validação do campo de entrada de dados, para que não seja preenchido com um 'não número'
    if (isNaN(numero01)) {
        console.log('\nInformação inválida. Digite um número.\n\n');
        exit();
    } 
    // Validação do campo de entrada de dados, para que seja preenchido
    else if (valor01 == '') {
        console.log('\nCampo não foi preenchido. Por favor informar o valor inicial.\n\n');
        exit();
    }
    // Validação do campo de entrada de dados, para que não seja informado um número fora da feixa de valores exigida pelo cliente
    else if (numero01 < 0 || numero01 > 500) {
        console.log('\nInformação inválida. Digite um número entre 0 e 500.\n\n');
        exit();
    }
    // Entrada do valor final
    else {
        inputInfo.question('\nInforme o valor final [100 - 1000]: ', function(valor02) {
            // declaração da variável que será utilizada no decorrer do código
            let numero02 = parseFloat(valor02);
            
          // Validação do campo de entrada de dados, para que não seja preenchido com um 'não número'
            if (isNaN(numero02)) {
                console.log('\nInformação inválida. Digite um número.\n\n');
                exit();
            } 
            // Validação do campo de entrada de dados, para que seja preenchido
            else if (numero02 == '') {
                console.log('\nCampo não foi preenchido. Por favor informar o valor final.\n\n');
                exit();
            }
            // Validação do campo de entrada de dados, para que não seja informado um número fora da feixa de valores exigida pelo cliente
            else if (numero02 < 100 || numero02 > 1000) {
                console.log('\nInformação inválida. Digite um número entre 100 e 1000.\n\n');
                exit();
            }
            // Validação do campo de entrada de dados, para que o valor final seja maior do que o inicial
            else if (numero02 < numero01) {
                console.log('\nInformação inválida. Digite um valor que seja maior do que o informado anteriormente (valor inicial).\n\n');
                exit();
            }
            // Validação do campo de entrada de dados, para que o valor final e inicial não sejam iguais
            else if (numero01 == numero02) {
                console.log('\nInformação inválida. O valor final não pode ser igual ao inicial.\n\n');
                exit();
            } else {
                inputInfo.question('\nDeseja exibir números pares[p], impares[i] ou ambos[a]?\n', function(info){
                    let opcao = info;

                    // Validação do campo de entrada de dados, para que seja preenchido
                    if (opcao == '') {
                        console.log('\nCampo não foi preenchido. Por favor informar o que se pede.\n\n');
                        exit();
                    }
                    // chamada da função para gerenciamento dos valores
                    calcParImpar (numero01, numero02, opcao);

                    // finalização do sistema
                    exit();
                })
            }
        })
    }
})