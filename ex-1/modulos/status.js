/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 * Objetivo:        Sistema que valida o status de aprovação de um aluno
 * Data de criação: 04/08/2022
 * Autor:           Marina Santello
 * Versão:          2.0
 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const status = function(valor) {
    let  media = valor;

    if (media >= 70) {
        return 'aprovad'
    } else if (media < 70 && media >= 50) {
        return 'de exame'
    } else {
        return 'reprovad'
    }
}

module.exports = {
    status
}