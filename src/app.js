//Aqui va la configuracion del servidor

import express from 'express'
import morgan from 'morgan'
import studentsRoutes from './routes/students.routes.js'
const app = express()
//senttigs
app.set('port,process.env.port || 3000')
//Middlewares 

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('env'))

//Routes
app.use('/api/students',studentsRoutes)
export default app