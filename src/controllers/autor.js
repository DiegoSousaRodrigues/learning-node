import { author } from '../models/Autor.js'
import handleError from '../utils/error.js'

class AuthorController {
  static async getAllAuthor(req, res) {
    try {
      const list = await author.find({})
      res.status(200).json(list)
    } catch (e) {
      handleError(e, res)
    }
  }

  static async findById(req, res) {
    try {
      const id = req.params.id
      const list = await author.findById(id)
      res.status(201).json(list)
    } catch (e) {
      handleError(e, res)
    }
  }

  static async addAuthor(req, res) {
    try {
      const newAuthor = await author.create(req.body)
      res
        .status(201)
        .json({ message: 'Criado com sucesso', newAuthor: newAuthor })
    } catch (e) {
      handleError(e, res)
    }
  }

  static async updateAuthor(req, res) {
    try {
      const id = req.params.id
      await author.findByIdAndUpdate(id, req.body)
      res.status(200).json({ message: 'Livro atualizado' })
    } catch (e) {
      handleError(e, res)
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id
      await author.findByIdAndDelete(id, req.body)
      res.status(200).json({ message: 'Livro deletado' })
    } catch (e) {
      handleError(e, res)
    }
  }
}

export default AuthorController
