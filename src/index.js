import {Alunos} from "./_mock/Alunos.js";
import "./styles/app.css";
import "./styles/reset.css";
import { Header } from "./components/Header/index.js";
import studentsImg from "./assets/students.png"
import peopleIcon from "./assets/icon.jpg"

const app = document.querySelector("#app");

const header = Header({
    title : "Tabela de alunos",
    class:  "dark",
    img : studentsImg
});
const header2 = Header({
    title : "Nomes",
    class : "light",
    img : peopleIcon
})

app.innerHTML = header;
app.innerHTML += header2;

console.log(Alunos)
