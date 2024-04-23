const { StatusCodes } = require('http-status-codes');
const { PrismaClient } = require('@prisma/client');
const AppError = require('../utils/AppError');
const prisma = new PrismaClient();

module.exports.getExistingProjects = async (clientId, projectId) => {
  try {
    const parsedId = parseInt(clientId, 10);

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
      include: {
        tasks: true,
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

exports.createSingleProject = async (project) => {
  try {
    const createdProject = await prisma.project.create({
      data: project,
    });

    if (!createdProject) {
      throw new AppError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        'Error while creating the project'
      );
    }

    return createdProject;
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
      include: {
        tasks: true,
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

module.exports.getProjectByJobId = async (id) => {
  try {
    const project = await prisma.project.findFirst({
      where: {
        jobId: parseInt(id, 10),
      },
    });

    if (!project) {
      return null;
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

module.exports.pushFreelancerId = async (jobId, hiredFreelancers) => {
  try {
    const updatedProject = await prisma.project.update({
      where: {
        jobId: jobId,
      },

      data: {
        hiredFreelancers: hiredFreelancers,
      },
    });

    return updatedProject;
  } catch (error) {
    throw error;
  }
};
