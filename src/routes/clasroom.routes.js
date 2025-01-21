
import { Router } from "express";
import clasroomController from "../controllers/clasroom.controller.js";
const claroomsRoutes = Router()
claroomsRoutes.get('/getAll',clasroomController.getAll)
claroomsRoutes.get('/getOne/:building',clasroomController.getOne)
export default claroomsRoutes



