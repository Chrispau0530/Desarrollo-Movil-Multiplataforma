
import { Router } from "express";
import teachersController from "../controllers/teachers.controller.js";
const teachersRoutes = Router()
teachersRoutes.get('/getAll',teachersController.getAll)
teachersRoutes.get('/getOne/:name',teachersController.getOne)
teachersRoutes.post('/insert',teachersController.insert)
export default teachersRoutes