import book from '../models/Livro.js'
import handleError from '../utils/error.js'

class BookController {
  static async getAllBook(req, res) {
    try {
      const list = await book.find({})
      res.status(200).json(list)
    } catch (e) {
      handleError(e, res)
    }
  }

  static async findById(req, res) {
    try {
      const id = req.params.id
      const list = await book.findById(id)
      res.status(201).json(list)
    } catch (e) {
      handleError(e, res)
    }
  }

  static async addBook(req, res) {
    try {
      const newBook = await book.create(req.body)
      res.status(201).json({ message: 'Criado com sucesso', newBook: newBook })
    } catch (e) {
      handleError(e, res)
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id
      await book.findByIdAndUpdate(id, req.body)
      res.status(200).json({ message: 'Livro atualizado' })
    } catch (e) {
      handleError(e, res)
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = req.params.id
      await book.findByIdAndDelete(id, req.body)
      res.status(200).json({ message: 'Livro deletado' })
    } catch (e) {
      handleError(e, res)
    }
  }
}

export default BookController
