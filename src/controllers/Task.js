import TaskModel from '../models/Task.js';

class TaskController {
    async getAll(req, res) {
        try {
            const task = await TaskModel.paginate({}, {limit: req.params.limit, page: req.params.page});
    
            res.status(200).json(task);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    
    async getOne(req, res) {
        try {
            const task = await TaskModel.findById(req.params.id);

            res.status(200).json(task);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async create(req, res) {
        try {
            const task = await TaskModel.create(req.body);

            res.status(201).json(task);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    
    async updateAllAttributes(req, res) {
        try {
            const task = await TaskModel.findByIdAndUpdate(req.params.id, req.body, {new: true});

            res.status(201).json(task);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    
    async update(req, res) {
        try {
            const task = await TaskModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.status(201).json(task);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
      
    async delete(req, res) {
        try {
            const task = await TaskModel.findByIdAndDelete(req.params.id, req.body);
            res.status(201).json(task);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

export default new TaskController();