function Aluno(nome,nota) {  
    this.nome = nome
    this.nota = nota
}

const rafael = new Aluno('Rafael',10)
const fillipe = new Aluno('Fillipe',9)
const tallyson = new Aluno('Tallyson',6)
const eduardo = new Aluno('Eduardo',3)
const carlos = new Aluno('Carlos',5)

const alunos = [rafael,fillipe,tallyson,eduardo,carlos]

const passou = alunos.filter(item=>{
    return item.nota >= 6
})

console.log(passou)