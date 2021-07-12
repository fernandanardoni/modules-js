import { calcularMedia } from "./mediaAlunos.js";



export const Alunos = [
    {
        nome: "Jonas",
        grades: [
            Math.floor(Math.random() * 5) + 5,
            Math.floor(Math.random() * 5) + 5,
            Math.floor(Math.random() * 5) + 5,
            Math.floor(Math.random() * 5) + 5
        ]
    },
    {
        nome: "Adam",
        grades: [
            Math.floor(Math.random() * 5) + 5,
            Math.floor(Math.random() * 5) + 5,
            Math.floor(Math.random() * 5) + 5,
            Math.floor(Math.random() * 5) + 5
        ]
    },
    {
        nome: "Marta",
        grades: [
            Math.floor(Math.random() * 5) + 5,
            Math.floor(Math.random() * 5) + 5,
            Math.floor(Math.random() * 5) + 5,
            Math.floor(Math.random() * 5) + 5
        ]
    },
    {
        nome: "Bartosz",
        grades: [
            Math.floor(Math.random() * 5) + 5,
            Math.floor(Math.random() * 5) + 5,
            Math.floor(Math.random() * 5) + 5,
            Math.floor(Math.random() * 5) + 5
        ]
    },

]

Alunos.forEach((aluno) => {
    calcularMedia(aluno.grades);
    
    aluno.media = calcularMedia(aluno.grades);

    if (calcularMedia(aluno.grades) >= 6) {
        aluno.result = "Aprovado"
    } else {
        aluno.result = "Reprovado"
    }
})



