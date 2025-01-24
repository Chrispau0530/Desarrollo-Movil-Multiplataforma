const studentDAO={}
import Student from "../models/Student.js";
studentDAO.getAll=async()=>{
    return await Student.find()
}

studentDAO.getOne=async(student__id)=>{
    return await Student.findOne({"student_id":student__id})
}

studentDAO.insert=async(Student)=>{
    return await Student.create(Student)
}

studentDAO.updateOne = async (student__id, studentData) => {
    return await Student.findOneAndUpdate(
        { "student__id": student__id, studentData   }, // Filtro para encontrar el documento
                   
    );
};

studentDAO.deleteOne=async(student_id)=>{
    return await Student.findOneAndDelete({student_id:student_id})
}

export default studentDAO;


