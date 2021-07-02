export const Alunos = [{
  nome: "Jonas",
  notas: [1, 4, 10, 8]
}, {
  nome: "Adam",
  notas: [10, 5, 6, 8]
}, {
  nome: "Marta",
  notas: [7, 7, 8, 8]
}];

export const ExibeNomeAlunos = () => {
  return Alunos.map(aluno => aluno.nome)
}

