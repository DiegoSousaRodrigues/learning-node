import express from 'express'
import livros from '../routes/livros.js'
import autor from '../routes/author.js'

const router = (app) => {
  app.use(express.json(), [livros, autor])
}

export default router
