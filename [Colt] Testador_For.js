
const turmas = [
  ["Ryu", "Ken", "Chun-Li"],
  ["Cervantes", "Mitsurugi", "Cassandra"],
  ["Heihachi", "Kazuya", "Asuki"]
]
/*
for (let i = 0; i < turmas.length; i++) {
  console.log(`\n Turma: ${i + 1}`)
  const row = turmas[i]
  for (let j = 0; j < row.length; j++)     { console.log(row[j]) }
}
*/

for (row of turmas) {  // "row" referencia cada array de "turmas"
  for (aluno of row) {  // "aluno" referencia cada elemento de cada array
    console.log(aluno)
  }
}