import {Alunos} from "./_mock/Alunos.js";
import "./styles/app.css";
import "./styles/reset.css";
import { Header } from "./components/Header/index.js";

const app = document.querySelector("#app");

const header = Header({
    title : "Tabela de alunos",
    class:  "dark"
});
const header2 = Header({
    title : "Nomes",
    class : "light"
})

app.innerHTML = header;
app.innerHTML += header2;

console.log(Alunos)
