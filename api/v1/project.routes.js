const express = require('express');
const projectController = require('../../controllers/project.controller');
const {
  validateCreateProjects,
  validateGetProjectById,
  validateUpdateProject,
  validateGetProjectsByUserId,
} = require('../../validators/project.validator');

const projectRouter = express.Router();
// console.log(validateCreateProjects);
projectRouter.post(
  '/projects',
  validateCreateProjects,
  projectController.createProjects
);
projectRouter.get(
  '/projects/:userId',
  validateGetProjectsByUserId,
  projectController.getProjectsByUserId
);
projectRouter.get(
  '/project/:id',
  validateGetProjectById,
  projectController.getProjectById
);
projectRouter.put(
  '/project/:id',
  validateUpdateProject,
  projectController.updateProjectById
);

module.exports = projectRouter;
