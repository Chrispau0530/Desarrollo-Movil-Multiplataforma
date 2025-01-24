const teachersDAO={}
import Teachers from "../models/Teachers.js";
teachersDAO.getAll=async()=>{
    return await Teachers.find()
}

teachersDAO.getOne=async(name)=>{
    return await Teachers.findOne({"name":name})
}

teachersDAO.insert=async(Teachers)=>{
    return await Teachers.create(Teachers)
}
export default teachersDAO;