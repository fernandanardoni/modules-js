import { Alunos } from "../../_mock/Alunos.js"
import "./style.css";

export function createTable(data) {
    const tr = document.createElement("tr");

    for (const [key, value] of Object.entries(data)) {

        const td = document.createElement("td");
        td.textContent = `${value}`;

        tr.appendChild(td)
    }


    console.log(tr)
    return tr.innerHTML;
}


export function Table() {
   
   for (const aluno of Alunos) {
    return `
    <table class="table-container">
         <tr>
         <th>Nome</th>
         <th>Notas</th>
         <th>Média</th>
         <th>Aprovado?</th>
         </tr>
         ${createTable(aluno)}
         </table>

    `
   }

//    Alunos.forEach(aluno => {
//     return `
//     <table class="table-container">
//          <tr>
//          <th>Nome</th>
//          <th>Notas</th>
//          <th>Média</th>
//          <th>Aprovado?</th>
//          </tr>
//          ${createTable(aluno)}
//          </table>

//     `
//    })

}


    // for (const aluno of Alunos) {

    //     // createTable(aluno)

    //     return `
    //     <table class="table-container">
    //     ${createTable(aluno)}
    //     </table>
    //     `




    //    const dinamicTable = `
    //    <tr>
    //    <td>${aluno.nome}</td>
    //    <td>${aluno.media}</td>
    //     <td>${aluno.result}</td>
    //     </tr>
    //     `

    //     return `
    //     <table class="table-container">
    //     `