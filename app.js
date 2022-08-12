/*********************************************************
 * Objetivo: 
 * Data: 04/08
 * Autor: Marcelo Sanches
 * Versão: 1.0
 **********************************************************/

// Exibur print na tela
console.log('### Bem-Vindo ao Sistema Escolar ###');

// Import da biblioteca entrada de dados 
    var readline = require('readline');


// Instancia do objeto entrada dde dados
    var entradaDados = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    //criando variaveis locais
    let MasculinoAluno = 'aluno';
    let FemininoAluno = 'aluna';
    let MasculinoProf = 'professor';
    let FemininoProf = 'professora';
    

    //entrada nome do aluno
    entradaDados.question('Insira o nome do aluno: \n', function (nome){
    //declaracao de variavel e atribuir valor
    let nomeAluno = nome;

    })

    //entrada do sexo
     entradaDados.question('Sexo do aluno: \n * Feminino \n * Masculino', function (sexo){
    //delcaracao de variavel e atribuir valor
        let sexoAluno = sexo.toUpperCase(); 

    })

    //entrada nome do professor
    entradaDados.question('Insira o nome do professor: \n', function (nomeProf){
    //delcaracao de variavel e atribuir valor
    let nomeProfessor = nomeProf;
        
    })

    //entrada do sexo
    entradaDados.question('Sexo do professor: \n * Feminino \n * Masculino', function (sexo){
    //delcaracao de variavel e atribuir valor
            let sexoProf = sexo.toUpperCase(); 
    
    })

   console.log(nomeAluno)

