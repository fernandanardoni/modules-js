// import {Alunos} from "./Alunos.js";
// function showNames() {
//     return Alunos.map((aluno) => aluno.nome)
// }
// console.log(showNames())
const Alunos = require("./Alunos.js");

function showNames() {
  return Alunos.map(aluno => aluno.nome);
}

console.log(showNames());
