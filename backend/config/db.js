import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/MERN_FOOD_DEL')
    console.log('DB Connected')
  } catch (error) {
    console.log('Error connecting to DB ', error.message)
    process.exit(1) // Exit the process with failure
  }
}
