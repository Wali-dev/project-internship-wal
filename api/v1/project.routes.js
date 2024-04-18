const express = require('express');
const projectController = require('../../controllers/project.controller');
const {
  validateCreateProjects,
  validateGetProjectById,
  validateUpdateProject,
  validateGetProjectsByUserId,
} = require('../../validators/project.validator');

const projectRouter = express.Router();
projectRouter.post(
  '/',
  validateCreateProjects,
  projectController.createProjects
);
projectRouter.get(
  '/:userId',
  validateGetProjectsByUserId,
  projectController.getProjectsByUserId
);
projectRouter.get(
  '/:id',
  validateGetProjectById,
  projectController.getProjectById
);
projectRouter.put(
  '/:id',
  validateUpdateProject,
  projectController.updateProjectById
);

module.exports = projectRouter;
