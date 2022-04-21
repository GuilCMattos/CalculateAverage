const students = [
  {
    name: 'Fernanda',
    note1: 7,
    note2: 8
  },

  {
    name: 'João',
    note1: 4,
    note2: 2
  },

  {
    name: 'Arthur',
    note1: 9,
    note2: 10
  },

  {
    name: 'Guilherme',
    note1: 7,
    note2: 8
  }
]

function calculeMedia(note1, note2) { 
  return (note1 + note2) / 2
}

for(let i = 0; i < students.length; i++) { 
  let media = calculeMedia(students[i].note1, students[i].note2)
  let name = students[i].name

  alert(`
    A média do(a) aluno(a) ${name} é de: ${media}
    ${media >= 7 ? `Parabéns ${name}! Você foi aprovado(a) no Concurso` : `Não foi dessa vez ${name}! Tente novamente!`}
  `)
}