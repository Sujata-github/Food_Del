import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRouter.js'
import userRouter from './routes/userRoutes.js'
import 'dotenv/config'
import cartRouter from './routes/cartRouter.js'
import orderRouter from './routes/orderRoute.js'
import morgan from 'morgan'
//app config
const app = express()
const port = process.env.PORT || 10000

// middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//db connection
connectDB()

//api endpoints
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
  res.send('API Working')
})

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`)
})
