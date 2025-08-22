import express from 'express'
import authorController from '../controllers/autor.js'

const routes = express.Router()

routes.get('/autores', authorController.getAllAuthor)
routes.get('/autores/:id', authorController.findById)
routes.post('/autores ', authorController.addAuthor)
routes.put('/autores/:id', authorController.updateAuthor)
routes.delete('/autores/:id', authorController.deleteAuthor)

export default routes
