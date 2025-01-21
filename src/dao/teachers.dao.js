const teachersDAO={}
import Teachers from "../models/Teachers.js";
teachersDAO.getAll=async()=>{
    return await Teachers.find()
}
export default teachersDAO;