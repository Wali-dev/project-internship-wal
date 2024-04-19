const { PrismaClient } = require('@prisma/client');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/AppError');

const prisma = new PrismaClient();

exports.createTask = async (projectId, data) => {
  try {
    // Check if the project exists
    const project = await prisma.project.findUnique({
      where: {
        id: parseInt(projectId, 10),
      },
    });

    if (!project) {
      throw new AppError(StatusCodes.NOT_FOUND, 'Project not found');
    }

    const taskData = {
      ...data,
      projectId: parseInt(projectId, 10),
      status: data.status || 'TODO', // Set default status to "TODO"
    };

    if (!['TODO', 'INPROGRESS', 'COMPLETED'].includes(taskData.status)) {
      throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid status');
    }

    const createdTask = await prisma.task.create({
      data: taskData,
    });

    if (!createdTask) {
      throw new AppError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        'Error while creating new task'
      );
    }

    return createdTask;
  } catch (error) {
    throw error;
  }
};

exports.updateTask = async (id, data) => {
  try {
    const taskData = {
      ...data,
      // updatedAt: new Date(),
    };

    if (
      taskData.status &&
      !['TODO', 'INPROGRESS', 'COMPLETED'].includes(taskData.status)
    ) {
      throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid status');
    }

    const updatedTask = await prisma.task.update({
      where: {
        id: parseInt(id, 10),
      },
      data: taskData,
    });

    if (!updatedTask) {
      throw new AppError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        'Error while updating the task'
      );
    }

    return updatedTask;
  } catch (error) {
    console.error('Error in updateTask:', error.message);
    throw error;
  }
};

exports.getTaskById = async (id) => {
  try {
    const task = await prisma.task.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });

    if (!task) {
      throw new AppError(StatusCodes.NOT_FOUND, 'Task not found');
    }

    return task;
  } catch (error) {
    throw error;
  }
};

exports.getTasksByProjectId = async (projectId) => {
  try {
    const tasks = await prisma.task.findMany({
      where: {
        projectId: parseInt(projectId, 10),
      },
    });

    if (!tasks || tasks.length === 0) {
      throw new AppError(
        StatusCodes.NOT_FOUND,
        'No tasks found for the specified project'
      );
    }

    return tasks;
  } catch (error) {
    throw error;
  }
};

exports.deleteTaskById = async (id) => {
  try {
    // Find the task to check if it exists
    const task = await prisma.task.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });

    // If task not found, throw an error
    if (!task) {
      throw new AppError(StatusCodes.NOT_FOUND, 'Task not found');
    }

    // Delete the task
    const deletedTask = await prisma.task.delete({
      where: {
        id: parseInt(id, 10),
      },
    });

    // If task deletion is not successful, throw an error
    if (!deletedTask) {
      throw new AppError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        'Error while deleting the task'
      );
    }

    // Return the deleted task
    return deletedTask;
  } catch (error) {
    throw error;
  }
};
