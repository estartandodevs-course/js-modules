
function calculaMedia(notas = []) {
  const total = notas.reduce((previous, current) => previous + current );

  const media = total / notas.length

  return media;
}

function definirStatus(media = 0) {
  return media < 7 ? "reprovado" : "aprovado";  
}

export function listaAlunosComMediaeStatus (listaAlunos = []) {
  const resultado = listaAlunos.map(alunoData => {
    const media = calculaMedia(alunoData.notas);

    const status = definirStatus(media)

    return ({
      nome: alunoData.nome,
      media,
      status
    })

  })

  return resultado;
}