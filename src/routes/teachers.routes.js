
import { Router } from "express";
import teachersController from "../controllers/teachers.controller.js";
const teachersRoutes = Router()
teachersRoutes.get('/getAllteachers',teachersController.getAll)
export default teachersRoutes