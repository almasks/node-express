import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './routes/users.js'
const app=express()
const PORT =5000
app.use(bodyParser.json())
app.use('/users',userRouter)
app.get('/',(req,res)=>{
    res.send('hello from home page')
})
app.listen(PORT,()=>console.log(`Server is running in http://localhost:${PORT}`))