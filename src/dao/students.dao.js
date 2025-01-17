const studentDAO={}
import Student from "../models/Student.js";
studentDAO.getAll=async()=>{
    return await Student.find()
}
export default studentDAO;