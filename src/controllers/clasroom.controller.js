const clasroomController ={}
import clasroomDAO from "../dao/clasroom.dao.js"
import clasroom from "../models/clasroom.js"
clasroomController.getAll=(req,res)=>{
    //Aqui le voy a pedir al DAO los datos de los estudiantes 
    clasroomDAO.getAll()
    .then((clasroom)=>{
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
export default clasroomController