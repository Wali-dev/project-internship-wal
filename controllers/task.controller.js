const { StatusCodes } = require('http-status-codes');
const catchAsync = require('../utils/catchAsync');
const sendResponse = require('../utils/sendResponse');
const taskService = require('../services/task.service');

module.exports.createTask = catchAsync(async (req, res) => {
  const { projectId } = req.params;
  const taskData = req.body;

  const createdTask = await taskService.createTask(projectId, taskData);

  sendResponse(
    res,
    StatusCodes.CREATED,
    'Task created successfully',
    createdTask
  );
});

module.exports.getTasksByProjectId = catchAsync(async (req, res) => {
  const { projectId } = req.params;

  const tasks = await taskService.getTasksByProjectId(projectId);

  sendResponse(res, StatusCodes.OK, 'Tasks fetched successfully', tasks);
});

module.exports.getTaskById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const task = await taskService.getTaskById(id);

  sendResponse(res, StatusCodes.OK, 'Task fetched successfully', task);
});

module.exports.deleteTask = catchAsync(async (req, res) => {
  const { id } = req.params;

  await taskService.deleteTaskById(id);

  sendResponse(res, StatusCodes.OK, 'Task deleted successfully', null);
});

module.exports.updateTask = catchAsync(async (req, res) => {
  const { id } = req.params;
  const taskData = req.body;

  const updatedTask = await taskService.updateTask(id, taskData);

  sendResponse(res, StatusCodes.OK, 'Task updated successfully', updatedTask);
});
