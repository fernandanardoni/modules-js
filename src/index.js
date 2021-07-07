import {Alunos} from "./_mock/Alunos.js";
import "./styles/app.css";
import "./styles/reset.css";


function showNames() {
    return Alunos.map((aluno) => aluno)
}

console.log(showNames())
