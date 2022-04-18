import filterTask from "../helpers/calculateStats.js";
import CalculateStats from "../helpers/calculateStats.js";
import Task from "../repositories/Task.js";

class TaskSevice {
    async create(task) {
        const createdTask = await Task.create(task)
        return createdTask
    }
    async getAll() {
        const tasks = await Task.find();

        return tasks
    }
    async getOne(id) {
        if (!id) {
            throw new Error("ID не вказаний")
        }
        const task = await Task.findById(id);
        return (task)
    }
    async editContent(id, newContent) {
        if (!id) {
            throw new Error("ID не вказаний")
        }
        const updatedPost = await Task.findByIdAndUpdate(id, { content: newContent }, { new: true })
        return updatedPost
    }
    async delete(id) {
        if (!id) {
            throw new Error("ID не вказаний")
        }
        const task = await Task.findByIdAndDelete(id);
        return task
    }
    async stats() {
        const tasks = await Task.find();
        const statsResult={
            taskActive:filterTask(tasks,true,"task"),
            taskArchive:filterTask(tasks,false,"task"),
            ideaActive:filterTask(tasks,true,"idea"),
            ideaArchive:filterTask(tasks,false,"idea"),
            randomThougthActive:filterTask(tasks,true,"randomThougth"),
            randomThougthArchive:filterTask(tasks,false,"randomThougth"),
            quoteActive:filterTask(tasks,true,"quote"),
            quoteArchive:filterTask(tasks,false,"quote"),
        }
        return statsResult
    }
}

export default new TaskSevice()