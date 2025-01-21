const teachersController = {}
import teachersDAO from "../dao/teachers.dao.js"
import Teachers from "../models/Teachers.js"
teachersController.getAll=(req,res)=>{
    //Aqui le voy a pedir al DAO los datos de los maestros
    teachersDAO.getAll()
    .then((Teachers)=>{
        res.json({
            data:Teachers
        })
    })
    .catch((error)=> {
        res.json({
            message:error
        })

    })
   
}
export default teachersController