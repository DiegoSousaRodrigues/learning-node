import mongoose from 'mongoose'

async function connectApi() {
  mongoose.connect(process.env.DATABASE_PASSWORD)

  return mongoose.connection
}

export default connectApi
