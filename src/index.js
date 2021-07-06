import {Alunos} from "./Alunos.js";


function showNames() {
    return Alunos.map((aluno) => aluno.nome)
}

console.log(showNames())