//Métodos facilitadores - includes, startsWith e endsWith
//informações  dentro de arrays

//includes
let nomes=['Amir','Bemir','Cemir'];
console.log(nomes.includes("Bemir"));
console.log(nomes.includes("AMIR"));

if(nomes.includes("Amil")){
    console.log("Nome encontrado");
}else{
    console.log("Nome não encontrado")
};

//startWith
let aluno='Albano';
console.log(aluno.startsWith("alb"));
console.log(aluno.startsWith("Alb"));

//endesWith
console.log(aluno.endsWith("ano"));
console.log(aluno.endsWith("an0"));
