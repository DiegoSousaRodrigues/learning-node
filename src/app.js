import express from 'express'
import connectApi from './config/dbConnect.js'
import routes from './routes/index.js'

const connect = await connectApi()

connect.on('error', (e) => {
  console.error(e)
})

connect.once('open', () => console.log('Conexão feita com sucesso'))

const app = express()
routes(app)

export default app
