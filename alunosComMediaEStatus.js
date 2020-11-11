const listaAlunos = [
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

function soma(listaNumeros = []) {
  return listaNumeros.reduce(
    (acumulado, numeroAtual) => acumulado + numeroAtual
  );
}

function calcularMedia(listaNotas = []) {
  const quantidadeElementos = listaNotas.length;
  const media = soma(listaNotas) / quantidadeElementos;
  return media;
}

function definirStatus(media = 0) {
  return media < 7 ? "reprovado" : "aprovado";
}

const listaAlunosComMediaEStatus = () => listaAlunos.map((aluno) => {
  const media = calcularMedia(aluno.notas);
  const status = definirStatus(media);
  const alunoComMediaEStatus = {
    nome: aluno.nome,
    media: media,
    status: status,
  };
  return alunoComMediaEStatus;
});

const listaAlunosFinal = listaAlunosComMediaEStatus()

export default listaAlunosFinal;
