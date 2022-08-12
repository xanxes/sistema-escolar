/*********************************************************
 * Objetivo: 
 * Data: 04/08
 * Autor: Marcelo Sanches
 * Versão: 1.0
 **********************************************************/

function pronome(feminino, masculino, nome, situacao, disciplina)


  if (feminino){
    console.log("A aluna "+nome+" foi "+situacao+ "na discplina" + disciplina)
  }

  else (masculino){
    console.log("O aluno "+nome+" foi "+situacao+ "na discplina" + disciplina)
  }

module.exports = pronome
