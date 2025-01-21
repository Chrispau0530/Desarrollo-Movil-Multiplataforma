const studentsController ={}
import error from "mongoose/lib/error/index.js"
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


studentsController.getOne=(req,res)=>{
studentDAO.getOne(req.params.student_id)
.then((Student)=>{
    if(Student!=null)
        res.json({data:Student})
    else
         res.json({data:{message:"Student not found"}})
})
}


studentsController.insert=(req,res)=>{
    studentDAO.insert(req.body)
    .then((res)=>{
        res.json({data:{
            message:"Student save",
            Student:res
        }
    })


    })
    .catch((error)=>{
        res.json({data:{message:error}})
    })
}
export default studentsController