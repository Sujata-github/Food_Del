import mongoose from 'mongoose'
import 'dotenv/config'
// import "dot"

export const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI
    // await mongoose.connect('mongodb://localhost:27017/MERN_FOOD_DEL')
    await mongoose.connect(uri)
    console.log('DB Connected')
  } catch (error) {
    console.log('Error connecting to DB ', error.message)
    process.exit(1) // Exit the process with failure
  }
}
