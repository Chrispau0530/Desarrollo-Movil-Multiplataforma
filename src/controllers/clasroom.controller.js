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

clasroomController.getOne=(req,res)=>{
clasroomDAO.getOne(req.params.building)
.then((clasroom)=>{
    if(clasroom!=null)
        res.json({data:clasroom})
    else
         res.json({data:{message:"clasroom not found"}})
})
}


clasroomController.insert=(req,res)=>{
    clasroomDAO.insert(req.body)
    .then((res)=>{
        res.json({data:{
            message:"clasroom save",
            clasroom:res
        }})  
    })

    .catch((error)=>{
        res.json({data:{
            message:"Error te falta algunos parametros "
        }})
    })
}
export default clasroomController