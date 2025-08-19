import express from 'express'
import bookController from '../controllers/livro.js'

const routes = express.Router()

routes.get('/livros', bookController.getAllBook)
routes.get('/livros/:id', bookController.findById)
routes.post('/livros ', bookController.addBook)
routes.put('/livros/:id', bookController.updateBook)
routes.delete('/livros/:id', bookController.deleteBook)

export default routes
