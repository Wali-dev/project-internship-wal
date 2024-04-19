const { StatusCodes } = require('http-status-codes');
const { PrismaClient } = require('@prisma/client');
const AppError = require('../utils/AppError');
const prisma = new PrismaClient();

module.exports.getProjectsByUserId = async (id) => {
  try {
    const parsedId = parseInt(id, 10);

    if (isNaN(parsedId)) {
      throw new AppError(
        StatusCodes.BAD_REQUEST,
        'Invalid user ID format. Please provide a valid integer ID.'
      );
    }

    const projects = await prisma.project.findMany({
      where: {
        clientId: parsedId,
      },
    });

    if (!projects || projects.length === 0) {
      throw new AppError(
        StatusCodes.NOT_FOUND,
        'No projects found for the specified user ID'
      );
    }

    return projects;
  } catch (error) {
    console.error('Error in getProjectsByUserId:', error.message);
    throw error;
  }
};

exports.createProjects = async (projectsData) => {
  try {
    const createdProjects = await prisma.project.createMany({
      data: projectsData,
    });

    if (!createdProjects || createdProjects.length === 0) {
      throw new AppError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        'Error while creating new projects'
      );
    }

    return createdProjects;
  } catch (error) {
    throw error;
  }
};

module.exports.getProjectById = async (id) => {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });

    if (!project) {
      throw new AppError(StatusCodes.NOT_FOUND, 'Project not found');
    }

    return project;
  } catch (error) {
    throw error;
  }
};

module.exports.updateProjectById = async (id, data) => {
  try {
    const parsedId = parseInt(id, 10);

    if (isNaN(parsedId)) {
      throw new AppError(
        StatusCodes.BAD_REQUEST,
        'Invalid project ID format. Please provide a valid integer ID.'
      );
    }

    const updatedProject = await prisma.project.update({
      where: {
        id: parsedId,
      },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });

    if (!updatedProject) {
      throw new AppError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        'Error while updating the project'
      );
    }

    return updatedProject;
  } catch (error) {
    throw error;
  }
};
