const express = require('express');
const taskController = require('../../controllers/task.controller');
const {
  validateCreateTask,
  validateUpdateTask,
  validateGetTaskById,
  validateGetTasksByProjectId,
  validateDeleteTaskById,
} = require('../../validators/task.validator');

const taskRouter = express.Router();



taskRouter.post('/:projectId', validateCreateTask, taskController.createTask);

taskRouter.get(
  '/:projectId',
  validateGetTasksByProjectId,
  taskController.getTasksByProjectId
);

// taskRouter.get('/:id', validateGetTaskById, taskController.getTaskById);

// taskRouter.put('/:id', validateUpdateTask, taskController.updateTask);

taskRouter.delete('/:id', validateDeleteTaskById, taskController.deleteTask);

module.exports = taskRouter;
