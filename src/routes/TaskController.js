import Task from "../repositories/Task.js"
import TaskService from "../services/TaskService.js"

class TaskController {
    async create(req, res) {
        try {
            const task = await TaskService.create(req.body)
            res.json(task)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req, res) {
        try {
            const tasks = await TaskService.getAll();
            res.json(tasks)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const task = await TaskService.getOne(req.params.id);
            res.json(task)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async editContent(req, res) {
        try {
            const { id } = req.params
            const newContent = req.body.content
            const updatedPost = await TaskService.editContent(id, newContent)
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
             const task = await TaskService.delete(req.params.id);
            return res.json(task)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async stats(req,res){
        try {
            const tasks = await TaskService.stats();
            res.json(tasks)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}
export default new TaskController()