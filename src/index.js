import {Alunos} from "./_mock/Alunos.js";
import "./styles/app.css";


function showNames() {
    return Alunos.map((aluno) => aluno)
}

console.log(showNames())
