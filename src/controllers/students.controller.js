const studentsController ={}
import studentDAO from "../dao/students.dao.js"
import Student from "../models/Student.js"
studentsController.getAll=(req,res)=>{
    //Aqui le voy a pedir al DAO los datos de los estudiantes 
    studentDAO.getAll()
    .then((Student)=>{
        res.json({
            data:Student
        })
    })
    .catch((error)=> {
        res.json({
            message:error
        })

    })
   
}
export default studentsController