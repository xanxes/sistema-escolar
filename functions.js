/*********************************************************
 * Objetivo:
 * Data: 04/08
 * Autor: Marcelo Sanches
 * Versão: 1.0
 **********************************************************/

const pronomeAluno = function(sexoA){

     if (sexoA == 'FEMININO')
    return '\n A aluna'
         
     else (sexoA == 'MASCULINO')
    return '\n O aluno'
   
 }

 const pronomeProfessor = function(sexoP){
   
        if (sexoP == 'FEMININO')
      return 'Professora:'
           
        else(sexoP == 'MASCULINO')
       return 'Professor:'
     
    }



 module.exports = {pronomeAluno, pronomeProfessor}