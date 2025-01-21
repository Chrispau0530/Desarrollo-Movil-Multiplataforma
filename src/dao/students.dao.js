const studentDAO={}
import Student from "../models/Student.js";
studentDAO.getAll=async()=>{
    return await Student.find()
}

studentDAO.getOne=async(student__id)=>{
    return await Student.findOne({"student_id":student__id})
}
export default studentDAO;


