const { PrismaClient } = require('@prisma/client');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/AppError');

const prisma = new PrismaClient();

exports.createTask = async (projectId, data) => {
  try {
    const taskData = {
      ...data,
      projectId: projectId,

    };
    const createdTask = await prisma.task.create({
      data: taskData
    })

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

// exports.updateTask = async (id, data) => {
//   try {
//     const taskData = {
//       ...data,
//       // updatedAt: new Date(),
//     };

//     if (
//       taskData.status &&
//       !['TODO', 'INPROGRESS', 'COMPLETED'].includes(taskData.status)
//     ) {
//       throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid status');
//     }

//     const updatedTask = await prisma.task.update({
//       where: {
//         id: parseInt(id, 10),
//       },
//       data: taskData,
//     });

//     if (!updatedTask) {
//       throw new AppError(
//         StatusCodes.INTERNAL_SERVER_ERROR,
//         'Error while updating the task'
//       );
//     }

//     return updatedTask;
//   } catch (error) {
//     console.error('Error in updateTask:', error.message);
//     throw error;
//   }
// };

// exports.getTaskById = async (id) => {
//   try {
//     const task = await prisma.task.findUnique({
//       where: {
//         id: parseInt(id, 10),
//       },
//     });

//     if (!task) {
//       throw new AppError(StatusCodes.NOT_FOUND, 'Task not found');
//     }

//     return task;
//   } catch (error) {
//     throw error;
//   }
// };

exports.getTasksByProjectId = async (projectId) => {

  try {
    const tasks = await prisma.task.findMany({
      where: {
        projectId: projectId,
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

  const ID = Number(id);

  try {
    // Find the task to check if it exists
    const task = await prisma.task.findUnique({
      where: {
        id: ID,
      },
    });

    // If task not found, throw an error
    if (!task) {
      throw new AppError(StatusCodes.NOT_FOUND, 'Task not found');
    }

    // Delete the task
    const deletedTask = await prisma.task.delete({
      where: {
        id: ID,
      },
    });

    // If task deletion is not successful, throw an error
    if (!deletedTask) {
      throw new AppError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        'Error while deleting the task'
      );
    }

    // // Return the deleted task
    return deletedTask;
  } catch (error) {
    throw error;
  }
};
