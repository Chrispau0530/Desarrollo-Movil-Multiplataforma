const clasroomDAO={}
import clasroom from "../models/clasroom";
clasroomDAO.getAll=async()=>{
    return await clasroom.find()
}
export default clasroomDAO;