import "./src/css/reset.css"
import "./src/css/style.css"

import Header from "./src/components/Header"
import { Table } from "./src/components/Table"
import listaAlunosFinal from "./alunosComMediaEStatus";

const app = document.querySelector("#app");

const header1 = Header({background: "black"})
const header2 = Header({background: "red"})
const header3 = Header({background: "green"})

app.innerHTML = header1
app.innerHTML += header2
app.innerHTML += header3

Table(app, listaAlunosFinal)