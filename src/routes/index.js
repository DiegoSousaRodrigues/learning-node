import express from 'express'
import livros from '../routes/livros.js'

const router = (app) => {
  app.use(express.json(), livros)
}

export default router
