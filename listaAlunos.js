const Alunos = [
  {
    nome: "Jonas",
    notas: [1, 4, 10, 8],
  },
  {
    nome: "Adam",
    notas: [10, 5, 6, 8],
  },
  {
    nome: "Marta",
    notas: [7, 7, 8, 8],
  },
];

export default function ExibeNomeAlunos(){
  return Alunos.map(function(aluno){
    return aluno.nome;
  })
}

export {
  Alunos
};