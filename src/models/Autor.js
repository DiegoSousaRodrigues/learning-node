import mongoose, { model } from 'mongoose'

const authorSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    nacionalidade: { type: String },
  },
  { versionKey: false }
)

const author = model('autores', authorSchema)

export { author, authorSchema }
