import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
import postRoutes from './routes/postRoutes.js'

const app = express()
app.use(express.json())
dotenv.config()

connectDB()

app.get("/", (req, res) => {
    res.send("Hello Client");
})

app.use('/api/post', postRoutes)

//Middlewares
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT
app.listen(port, function (req, res) {
    console.log(`server running on ${port} in ${process.env.NODE_ENV} mode`);
});