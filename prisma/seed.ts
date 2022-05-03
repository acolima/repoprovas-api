import { prisma } from '../src/db.js'

async function seed() {
  await prisma.teacher.upsert({
    where: { name: 'Maria' },
    update: {},
    create: {
      name: 'Maria'
    }
  })

  await prisma.teacher.upsert({
    where: { name: 'João' },
    update: {},
    create: {
      name: 'João'
    }
  })

  await prisma.category.upsert({
    where: { name: 'P1' },
    update: {},
    create: {
      name: 'P1'
    }
  })

  await prisma.category.upsert({
    where: { name: 'P2' },
    update: {},
    create: {
      name: 'P2'
    }
  })

  await prisma.term.upsert({
    where: { number: 1 },
    update: {},
    create: {
      number: 1
    }
  })

  await prisma.term.upsert({
    where: { number: 2 },
    update: {},
    create: {
      number: 2
    }
  })

  await prisma.discipline.upsert({
    where: { name: 'Cálculo 1'},
    update: {},
    create: {
      name: 'Cálculo 1',
      termId: 1
    }
  })

  await prisma.discipline.upsert({
    where: { name: 'Física 1'},
    update: {},
    create: {
      name: 'Física 1',
      termId: 1
    }
  })

  await prisma.discipline.upsert({
    where: { name: 'Álgebra Linear'},
    update: {},
    create: {
      name: 'Álgebra Linear',
      termId: 2
    }
  })

  await prisma.teachersDisciplines.upsert({
    where: { id: 1 },
    update: {},
    create: {
      disciplineId: 1,
      teacherId: 1
    }
  })

  await prisma.teachersDisciplines.upsert({
    where: { id: 2 },
    update: {},
    create: {
      disciplineId: 2,
      teacherId: 2
    }
  })

  await prisma.teachersDisciplines.upsert({
    where: { id: 3 },
    update: {},
    create: {
      disciplineId: 3,
      teacherId: 1
    }
  })

  await prisma.test.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Derivadas',
      pdfUrl: 'https://www.respondeai.com.br/conteudo/calculo/derivadas',
      categoryId: 1,
      teacherDisciplineId: 1,
      disciplineId: 1
    }
  })

  await prisma.test.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Cinemática Retilínea',
      pdfUrl: 'https://www.respondeai.com.br/conteudo/fisica/cinematica-retilinea',
      categoryId: 1,
      teacherDisciplineId: 2,
      disciplineId: 2
    }
  })

  await prisma.test.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'Produto Interno',
      pdfUrl: 'https://www.respondeai.com.br/conteudo/algebra-linear-e-geometria-analitica/produto-interno',
      categoryId: 2,
      teacherDisciplineId: 3,
      disciplineId: 3
    }
  })
}

seed()
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })