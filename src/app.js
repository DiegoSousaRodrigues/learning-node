import express from 'express'

const app = express()
app.use(express.json())

const livros = [
  { id: 1, titulo: 'Senhor dos aneis' },
  { id: 2, titulo: 'o hobbit' },
]

app.get('/', (req, res) => {
  res.status(200).send('curso de node.JS')
})

app.get('/livros', (req, res) => {
  res.status(200).json(livros)
})

app.get('/livros/:id', (req, res) => {
  res.status(200).json(livros[buscarLivro(req.params.id)])
})

function buscarLivro(id) {
  return livros.findIndex((livro) => livro.id === Number(id))
}

app.put('/livros/:id', (req, res) => {
  const index = buscarLivro(req.params.id)
  livros[index].titulo = req.body.titulo

  res.status(200).json(livros)
})

app.post('/livros', (req, res) => {
  livros.push(req.body)

  res.status(201).send('Livro cadastrado com sucesso!')
})

app.delete('/livros/:id', (req, res) => {
  const index = buscarLivro(req.params.id)
  livros.splice(index, 1)

  res.status(200).send('Livro removido com sucesso!')
})

export default app
