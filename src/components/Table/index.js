import { Alunos } from "../../_mock/Alunos.js"
import "./style.css"

export function Table() {
    for (const aluno of Alunos) {
       const dinamicTable = `
       <tr>
       <td>${aluno.nome}</td>
       <td>${aluno.media}</td>
        <td>${aluno.result}</td>
        </tr>
        `
        
        return `
        <table class="table-container">
        <tr>
        <th>Nome</th>
        <th>Média</th>
        <th>Aprovado?</th>
        </tr>
        ${dinamicTable}
        </table>
        `
        
    }

}

// Alunos.forEach((aluno) => {
//     const dinamicTable = `
//        <tr>
//        <td>${aluno.nome}</td>
//        <td>${aluno.media}</td>
//         <td>${aluno.result}</td>
//         </tr>
//         `
// })