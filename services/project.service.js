const { StatusCodes } = require('http-status-codes');
const { PrismaClient } = require('@prisma/client');
const AppError = require('../utils/AppError');
const prisma = new PrismaClient();

module.exports.getExistingProjects = async (clientId, projectId) => {
  try {
    const projects = await prisma.project.findMany({
      where: {
        clientId: clientId,
      },
    });

    return projects;
  } catch (error) {
    throw error;
  }
};

exports.createProjects = async (projects) => {
  let projectsToCreate;
  try {
    const existingProjects = await this.getExistingProjects(
      projects[0]?.clientId
    );

    if (!existingProjects.length) {
      projectsToCreate = projects;
    } else {
      projectsToCreate = projects.filter((project) => {
        return !existingProjects.some((data) => project.jobId === data.jobId);
      });
    }

    const createdProjects = await prisma.project.createMany({
      data: projectsToCreate,
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

module.exports.updateProject = async (id, data) => {
  try {
    const updatedProject = await prisma.project.update({
      where: {
        id: parseInt(id, 10),
      },
      data,
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
