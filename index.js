/*********************************************************
 * Objetivo:
 * Data: 04/08
 * Autor: Marcelo Sanches
 * Versão: 1.0
 **********************************************************/

// Exibur print na tela
console.log('### Bem-Vindo ao Sistema Escolar ###');

//import da funcao
const { pronomeAluno, pronomeProfessor } = require('./functions.js');
const { Console } = require('console');

//import da biblioteca readline (permite interagir com o usuario)
var readline = require('readline');

//instancia o objeto para criar a interacao com usuario

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Entrada do nome do aluno
entradaDados.question('Digite o nome do aluno: ', function (nomeAluno){

//Declaracao de variavel local (let) e atribuindo um valor
    let nomeA = nomeAluno;

//Entrada do sexo
entradaDados.question('Digite o sexo do aluno: \n * FEMININO \n * MASCULINO \n', function (sexoAluno){

    let sexoA = sexoAluno.toUpperCase;

//Entrada nome do professor
entradaDados.question('Digite o nome do professor: ', function (nomeProf){

    let nomeP = nomeProf;

//Entrada do sexo
entradaDados.question('Digite o sexo do professor: \n * FEMININO \n * MASCULINO \n', function (sexoProfessor){

    let sexoP = sexoProfessor.toUpperCase;

//Entrada do curso
entradaDados.question('Digite o nome do curso: ', function (curso){

    let curs = curso;

//Entrada do curso
entradaDados.question('Digite o nome da disciplina: ', function (materia){

    let disciplina = materia;

//Entrada da nota 1
entradaDados.question('Nota 1: ', function (valor1){

    let nota1 = valor1;

//Entrada da nota 2
entradaDados.question('Nota 2: ', function (valor2){

    let nota2 = valor2;

//entrada da nota 3
entradaDados.question('Nota 3: ', function (valor3){

    let nota3 = valor3;


//entrada da nota 4
entradaDados.question('Nota 4: ', function(valor4){

        let nota4 = valor4;
        let media;
        let mediaExame;
        let statusAluno;
    
 
       
        //validacao para nomes
        if(nomeAluno && nomeProf == '')
        {
            console.log('Nome do aluno, e/ou professor deve ser informado!')
            process.exitCode}

        //validacao sexo
        if(sexoA && sexoP == '')
        {
            console.log('Sexo do aluno, e/ou professor deve ser informado!')
            entradaDados.close();}

        //validacao curso/materia
        if(curso && materia == '')
        {
            console.log('Nome do curso, e/ou disciplina deve ser informado!')
            entradaDados.close();}

   
        //validacao para as notas
        else if ( nota1 == '' || nota2 == ''|| nota3 == '' || nota4 == ''){
            console.log('Alguma nota nao foi inserida')
            entradaDados.close();

        }else {

            media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) /4;
        }

        if(media>=70)
        {
            statusAluno = 'APROVADO';
            console.log(`${pronomeAluno()} ${nomeAluno} foi ${statusAluno} na disciplina ${disciplina}. \n Curso: ${curso}. \n ${pronomeProfessor()} ${nomeProf}.\n Notas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}. \n Média final: ${media}.`);
            exit()
        }
        else if(media<= 69.9 && media>=50){  
 
          var notaExame = prompt("Exame necessário. Insira a nota do exame");
          mediaExame = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(notaExame) ) /5 }
  
 if(mediaExame > 60){
          statusAluno = 'APROVADO NO EXAME'
        }
   else{
      statusAluno = 'REPROVADO' }

  if( notaExame == '')
    {
      console.log('Nota do Exame deve ser inserida!')
      process.exitCode
      
    }

console.log(`${pronomeAluno(sexoA)} ${nomeAluno} foi ${statusAluno} na disciplina ${disciplina}. \n Curso: ${curso}. \n ${pronomeProfessor(sexoP)} ${nomeProf}.\n Notas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${notaExame}. \n Média final: ${media}. Média final do exame: ${mediaExame}`);
  

  
       
            // fecha o objeto entradaDados
            entradaDados.close();
  
  
                                    })
                                })
                             })
                        })
                    })
                })
            })
        })
    })
});