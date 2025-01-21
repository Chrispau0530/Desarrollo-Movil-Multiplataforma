const clasroomDAO={}
import clasroom from "../models/clasroom.js";
clasroomDAO.getAll=async()=>{
    return await clasroom.find()
}

clasroomDAO.getOne=async(building)=>{
    return await clasroom.findOne({"building":building})
}



export default clasroomDAO;