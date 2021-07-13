import {Alunos} from "./_mock/Alunos.js";
import { Header } from "./components/Header/index.js";
import {Table} from "./components/Table/index.js";

import "./styles/reset.css";
import "./styles/app.css";

const app = document.querySelector("#app");

const header = Header({
    title : "Tabela de alunos",
    class:  "dark",
});

const table = Table();


app.innerHTML = header;
app.innerHTML += table;



console.log(Alunos)
