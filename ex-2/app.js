/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 * Objetivo:        Sistema para cálculo de tabuada
 * Data de criação: 11/08/2022
 * Autor:           Marina Santello
 * Versão:          1.0
 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const { tabuada, calcularTabuada } = require('./modulos/tabuada')

const { exit } = require('process');

var readline = require('readline');
var inputInfo = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Título
console.log('*  CALCULADORA DE TABUADAS  *');

// Entrada do valor da tabuada inicial
inputInfo.question('\n\nInforme o valor inicial da tabuada [2 - 100]: ', function(tValor01){
    // Declaração da variável com o valor inicial da tabuada
    let tabuadaInicial = parseInt(tValor01);

    // Validação do campo de entrada de dados, para que não seja preenchido com um 'não número'
    if (isNaN(tabuadaInicial)) {
        console.log('\nInformação inválida. Digite um número.\n\n');
        exit();
    } 
    // Validação do campo de entrada de dados, para que seja preenchido
    else if (tabuadaInicial == '') {
        console.log('\nCampo não foi preenchido. Por favor informar a nota.\n\n');
        exit();
    }
    // Validação do campo de entrada de dados, para que não seja informado um número fora da feixa de valores exigida pelo cliente
    else if (tabuadaInicial < 2 || tabuadaInicial > 100) {
        console.log('\nInformação inválida. Digite um número entre 0 e 100.\n\n');
        exit();
    }
    // Entrada do valor da tabuada final
    else {
        inputInfo.question('\n\nInforme o valor final da tabuada [2 - 100]: ', function(tValor02){
            // Declaração da variável com o valor final da tabuada
            let tabuadaFinal = parseInt(tValor02);

            // Validação do campo de entrada de dados, para que não seja preenchido com um 'não número'
            if (isNaN(tabuadaFinal)) {
                console.log('\nInformação inválida. Digite um número.\n\n');
                exit();
            }
            // Validação do campo de entrada de dados, para que seja preenchido
            else if (tabuadaFinal == '') {
                console.log('\nCampo não foi preenchido. Por favor informar a nota.\n\n');
                exit();
            }
            // Validação do campo de entrada de dados, para que não seja informado um número fora da feixa de valores exigida pelo cliente
            else if (tabuadaFinal < 2 || tabuadaFinal > 100) {
                console.log('\nInformação inválida. Digite um número entre 2 e 100.\n\n');
                exit();
            }
            // Verificação do campo de entrada de dados, para que o valor informado como tabuada final não seja menor do que o inicial
            else if (tabuadaFinal < tabuadaInicial) {
                console.log('\nInformação inválida. Digite um valor que seja maior do que o informado anteriormente (tabuada inicial).\n\n');
                exit();
            }
            // Entrada do valor inicial
            else {
                inputInfo.question('\n\nInforme o valor inicial do multiplicador [1 - 50]: ', function(mValor01){
                    // Declaração da variável com o valor inicial do multiplicador (contador)
                    let multiplicadorInicial = parseInt(mValor01);

                    // Validação do campo de entrada de dados, para que não seja preenchido com um 'não número'
                    if (isNaN(multiplicadorInicial)) {
                        console.log('\nInformação inválida. Digite um número.\n\n');
                        exit();
                    }
                    // Validação do campo de entrada de dados, para que seja preenchido
                    else if (multiplicadorInicial == '') {
                        console.log('\nCampo não foi preenchido. Por favor informar a nota.\n\n');
                        exit();
                    }
                    // Validação do campo de entrada de dados, para que não seja informado um número fora da feixa de valores exigida pelo cliente
                    else if (multiplicadorInicial < 1 || multiplicadorInicial > 50) {
                        console.log('\nInformação inválida. Digite um número entre 1 e 50.\n\n');
                        exit();
                    }
                    // Entrada do valor final
                    else {
                        inputInfo.question('\n\nInforme o valor final do multiplicador [1 - 50]: ', function(mValor02){
                            // Declaração da variável com o valor inicial do multiplicador (contador)
                            let multiplicadorFinal = parseInt(mValor02);
        
                            // Validação do campo de entrada de dados, para que não seja preenchido com um 'não número'
                            if (isNaN(multiplicadorFinal)) {
                                console.log('\nInformação inválida. Digite um número.\n\n');
                                exit();
                            }
                            // Validação do campo de entrada de dados, para que seja preenchido
                            else if (multiplicadorFinal == '') {
                                console.log('\nCampo não foi preenchido. Por favor informar a nota.\n\n');
                                exit();
                            }
                            // Validação do campo de entrada de dados, para que não seja informado um número fora da feixa de valores exigida pelo cliente
                            else if (multiplicadorFinal < 1 || multiplicadorFinal > 50) {
                                console.log('\nInformação inválida. Digite um número entre 1 e 50.\n\n');
                                exit();
                            }
                            // Chamada da função que faz o cálculo e exibição da(s) tabuada(s)
                            console.log(calcularTabuada(tabuadaInicial, tabuadaFinal, multiplicadorInicial, multiplicadorFinal))
                        })
                    }

                })
            }
        })
    }
})