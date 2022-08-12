/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 * Objetivo:        Sistema que calcula as médias para o sistema principal
 * Data de criação: 08/08/2022
 * Autor:           Marina Santello
 * Versão:          1.0
 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const { Console } = require("console");

const calcularMedia = function(valor01, valor02, valor03, valor04) {
    let nota01 = valor01;
    let nota02 = valor02;
    let nota03 = valor03;
    let nota04 = valor04;
    let result;
    let error = false;

    return (parseFloat(nota01) + parseFloat(nota02) + parseFloat(nota03) + parseFloat(nota04)) / 4;
}

module.exports = {
    calcularMedia
}