import { Alunos } from "./_mock/Alunos.js"
import "./css/reset.css"
import "./css/app.css"
import { Header } from "./components/Header/index.js"
import estartandodevs from "./assets/estartandodevs.png"
import { listaAlunosComMediaeStatus } from "./_mock/listaAlunosComMediaeStatus.js"
import { Table } from "./components/Table/index.js"

const app = document.getElementById("app");

const header = Header({
  class: "dark",
  imgSrc: estartandodevs
})

app.innerHTML = header

const alunosComMedia = listaAlunosComMediaeStatus(Alunos)

app.innerHTML += Table({ data: alunosComMedia })