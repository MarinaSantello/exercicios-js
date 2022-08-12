/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 * Objetivo:        Criação de função para cálculo de tabuada
 * Data de criação: 11/08/2022
 * Autor:           Marina Santello
 * Versão:          1.0
 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const calcularTabuada = function(inicioT, finalT, inicioM, finalM) {
    let i = inicioT;
    let finalTabuada = finalT;
    let j = inicioM;
    let finalMultiplicacao = finalM;

    for (i ; i <= finalTabuada ; i++) {
        for (j ; j <= finalMultiplicacao ; j++) {
            console.log(i * j)
        }
    }
}

module.exports = {
    calcularTabuada
}