//Aqui va la configuracion del servidor

import express from 'express'
import morgan from 'morgan'
import studentsRoutes from './routes/students.routes.js'
import teachersRoutes from './routes/teachers.routes.js'
import claroomsRoutes from './routes/clasroom.routes.js'
const app = express()
//senttigs
app.set('port,process.env.port || 3000')
//Middlewares 

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('env'))

//Routes
app.use('/api/students',studentsRoutes)
app.use('/api/teachers',teachersRoutes)
app.use('/api/clasrooms',claroomsRoutes)
export default app