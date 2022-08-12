/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 * Objetivo:        Sistema de verificação e cálculo de médias para uma universidade
 * Data de criação: 04/08/2022
 * Autor:           Marina Santello
 * Versão:          3.1
 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const { exit } = require('process');

var readline = require('readline');
const { status } = require('./modulos/status.js');
const { calcularMedia } = require('./modulos/media');
var inputInfo = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('*  SISTEMA DE NOTAS DA UNIVERSIDADE  *');

// Entrada do nome do aluno
inputInfo.question('Nome do aluno: ', function(nomeA){
    let nomeAluno = nomeA;
    // Validação do campo de entrada de dados, para que não fique vazio.
    if (nomeAluno == '') {
        console.log('\nCampo não foi preenchido. Por favor informar o nome do aluno.\n\n');
        exit();
    } 
    // Entrada do sexo do aluno
    else {
        inputInfo.question('\nInforme o sexo do aluno: ', function(sexoA){
            let sexoAluno = sexoA.toLowerCase();
            // Validação do campo de entrada de dados, para que não fique vazio.
            if (sexoAluno == '') {
                console.log('\nCampo não foi preenchido. Por favor informar o sexo do aluno.\n\n');
                exit();
            } 
            // Entrada do nome do professor
            else {
                inputInfo.question('\nNome do professor: ', function(nomeP){
                    let nomeProfessor = nomeP;
                    // Validação do campo de entrada de dados, para que não fique vazio.
                    if (nomeProfessor == '') {
                        console.log('\nCampo não foi preenchido. Por favor informar o nome do professor.\n\n');
                        exit();
                    } 
                    // Entrada do sexo do aluno
                    else {
                        inputInfo.question('\nInforme o sexo do professor: ', function(sexoP){
                            let sexoProfessor = sexoP.toLowerCase();
                            // Validação do campo de entrada de dados, para que não fique vazio.
                            if (sexoProfessor == '') {
                                console.log('\nCampo não foi preenchido. Por favor informar o sexo do professor.\n\n');
                                exit();
                            } 
                            // Entrada do nome do curso
                            else {
                                inputInfo.question('\nInforme o curso: ', function(curso01){
                                    let curso = curso01;
                                    // Validação do campo de entrada de dados, para que não fique vazio.
                                    if (curso == '') {
                                        console.log('\nCampo não foi preenchido. Por favor informar o curso.\n\n');
                                        exit();
                                    } 
                                    // Entrada do nome da diciplina
                                    else {
                                        inputInfo.question('\nInforme a diciplina: ', function(diciplina01){
                                            let diciplina = diciplina01;
                                            // Validação do campo de entrada de dados, para que não fique vazio.
                                            if (diciplina == '') {
                                                console.log('\nCampo não foi preenchido. Por favor informar a diciplina.\n\n');
                                                exit();
                                            } 
                                            // Recebimento da primeira nota
                                            else {
                                                inputInfo.question('\nInsira a primeira nota: ', function(valor01){
                                                    let nota01 = valor01;
                                                    // Validação do campo de entrada de dados, para que não seja preenchido com um 'não número'.
                                                    if (isNaN(nota01)) {
                                                        console.log('\nInformação inválida. Digite um número.\n\n');
                                                        exit();
                                                    } 
                                                    // Validação do campo de entrada de dados, para que não seja informado um número fora da feixa de valores exigida pelo cliente.
                                                    else if (nota01 < 0 || nota01 > 100) {
                                                        console.log('\nInformação inválida. Digite um número entre 0 e 100.\n\n');
                                                        exit();
                                                    }
                                                    // Validação do campo de entrada de dados, para que não fique vazio. 
                                                    else if (nota01 == '') {
                                                        console.log('\nCampo não foi preenchido. Por favor informar a nota.\n\n');
                                                        exit();
                                                    } 
                                                    // Recebimento da segunda nota
                                                    else {
                                                        inputInfo.question('\nInsira a segunda nota: ', function(valor02){
                                                            let nota02 = valor02;
                                                            // Validação do campo de entrada de dados, para que não seja preenchido com um 'não número'.
                                                            if (isNaN(nota02)) {
                                                                console.log('\nInformação inválida. Digite um número.\n\n');
                                                                exit();
                                                            } 
                                                            // Validação do campo de entrada de dados, para que não seja informado um número fora da feixa de valores exigida pelo cliente.
                                                            else if (nota02 < 0 || nota02 > 100) {
                                                                console.log('\nInformação inválida. Digite um número entre 0 e 100.\n\n');
                                                                exit();
                                                            } 
                                                            // Validação do campo de entrada de dados, para que não fique vazio. 
                                                            else if (nota02 == '') {
                                                                console.log('\nCampo não foi preenchido. Por favor informar a nota.\n\n');
                                                                exit();
                                                            }
                                                            // Recebimento da terceira nota
                                                            else {
                                                                inputInfo.question('\nInsira a terceira nota: ', function(valor03){
                                                                    let nota03 = valor03;
                                                                    // Validação do campo de entrada de dados, para que não seja preenchido com um 'não número'.
                                                                    if (isNaN(nota03)) {
                                                                        console.log('\nInformação inválida. Digite um número.\n\n');
                                                                        exit();
                                                                    } 
                                                                    // Validação do campo de entrada de dados, para que não seja informado um número fora da feixa de valores exigida pelo cliente.
                                                                    else if (nota03 < 0 || nota03 > 100) {
                                                                        console.log('\nInformação inválida. Digite um número entre 0 e 100.\n\n');
                                                                        exit();
                                                                    } 
                                                                    // Validação do campo de entrada de dados, para que não fique vazio. 
                                                                    else if (nota03 == '') {
                                                                        console.log('\nCampo não foi preenchido. Por favor informar a nota.\n\n');
                                                                        exit();
                                                                    } 
                                                                    // Recebimento da quarta nota
                                                                    else {
                                                                        inputInfo.question('\nInsira a quarta nota: ', function(valor04){
                                                                            let nota04 = valor04;
                                                                            // Validação do campo de entrada de dados, para que não seja preenchido com um 'não número'.
                                                                            if (isNaN(nota04)) {
                                                                                console.log('\nInformação inválida. Digite um número.\n\n');
                                                                                exit();
                                                                            } 
                                                                            // Validação do campo de entrada de dados, para que não seja informado um número fora da feixa de valores exigida pelo cliente.
                                                                            else if (nota04 < 0 || nota04 > 100) {
                                                                                console.log('\nInformação inválida. Digite um número entre 0 e 100.\n\n');
                                                                                exit();
                                                                            } 
                                                                            // Validação do campo de entrada de dados, para que não fique vazio.
                                                                            else if (nota04 == '') {
                                                                                console.log('\nCampo não foi preenchido. Por favor informar a nota.\n\n');
                                                                                exit();
                                                                            } 
                                                                            // Codificação referente ao relatório final
                                                                            else {
                                                                                // Declaração das variáveis que serão usadas, já utilzando as funções de cálculo e verificação do status de aprovação do aluno
                                                                                let media = calcularMedia(nota01, nota02, nota03, nota04);
                                                                                let statusAluno = status(media);
                                                                                // Declaração de variáveis para exibir o gênero correto no relatório
                                                                                let artigoAluno = 'a';
                                                                                let artigoProfessor = 'a';

                                                                                // Verfificação do sexo informado pelo usuário
                                                                                if (sexoAluno == 'masculino' || sexoAluno == 'm')
                                                                                    artigoAluno = 'o';
                                                                                    
                                                                                if (sexoProfessor == 'masculino' || sexoProfessor == 'm')
                                                                                    artigoProfessor = '';

                                                                                // Verificação para a exibição do relatório correto, conforme o status do exame
                                                                                if (statusAluno != 'de exame') {
                                                                                    console.log(`\n${artigoAluno.toUpperCase()} alun${artigoAluno} ${nomeAluno} foi ${statusAluno}${artigoAluno} na disciplina ${diciplina}.\nCurso: ${curso}\nProfessor${artigoProfessor}: ${nomeProfessor}\nNotas do aluno: ${nota01}, ${nota02}, ${nota03} e ${nota04}\nMédia Final: ${media}\n`)
                                                                                    exit();
                                                                                } else {
                                                                                    inputInfo.question('\nO aluno está de exame. Informe a nota do exame: ', function(provaExame){
                                                                                        // Cálculo da média do exame
                                                                                        let notaExame = parseFloat(provaExame);
                                                                                        let mediaExame = (notaExame + media) / 2;
                                                                                        
                                                                                        if (mediaExame >= 60) 
                                                                                            statusAluno = `aprovad${artigoAluno} no exame`;
                                                                                        
                                                                                        else 
                                                                                            statusAluno = `reprovad${artigoAluno} no exame`

                                                                                        console.log(`\n${artigoAluno.toUpperCase()} alun${artigoAluno} ${nomeAluno} foi ${statusAluno} na disciplina ${diciplina}.\nCurso: ${curso}\nProfessor${artigoProfessor}: ${nomeProfessor}\nNotas do aluno: ${nota01}, ${nota02}, ${nota03}, ${nota04} e ${notaExame}\nMédia Final: ${media}\nMédia final do Exame: ${mediaExame}\n\n`);
                                                                                        
                                                                                        exit();
                                                                                    })
                                                                                }
                                                                            }
                                                                        }) 
                                                                    } 
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }  
                                })
                            }               
                        })
                    }
                })
            }
        })
    }
})


                            /*
                            let teste;
                            if (isNaN(nota01)){
                                teste = 1;
                                while(teste = 1) {
                                    if(isNaN(nota01)){
                                        console.log('Informação inválida. Digite um número.')
                                        inputInfo.question('\nInsira a primeira nota: ', function(x){
                                        nota01 = x;
                                        })
                                    } else {
                                        teste++;
                                    }
                                }
                            }*/  
