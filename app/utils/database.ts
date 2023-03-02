/* eslint-disable no-console */
import mongoose from 'mongoose'

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(
      'mongodb+srv://ms6rx7861:xDvOM1ROilTEvbfu@cluster0.rnv1pty.mongodb.net/appDataBase?retryWrites=true&w=majority'
    )
    console.log('Success: Connected to MongoDB')
  } catch (err) {
    console.log('Failure: Unconnected to MongoDB')
    throw new Error()
  }
}

export default connectDB
