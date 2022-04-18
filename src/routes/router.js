import { Router } from "express";

import TaskController from "./TaskController.js";
const router =new Router()
router.post('/notes',TaskController.create)
router.get('/notes',TaskController.getAll)
router.get('/notes/:id',TaskController.getOne)
router.patch('/notes/:id',TaskController.editContent)
router.delete('/notes/:id',TaskController.delete )
router.get('/stats',TaskController.stats )

export default router