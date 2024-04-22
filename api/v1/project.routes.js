const express = require('express');
const projectController = require('../../controllers/project.controller');
const {
  validateCreateProjects,
  validateGetProjectById,
  validateUpdateProject,
  validateGetProjectsByUserId,
} = require('../../validators/project.validator');

const projectRouter = express.Router();
// projectRouter.post(
//   '/',
//   validateCreateProjects,
//   projectController.createProjects
// );
projectRouter.get(
  '/user/:userId',
  validateGetProjectsByUserId,
  projectController.getProjectsByUserId
);
projectRouter.get(
  '/:projectId',
  validateGetProjectById,
  projectController.getProjectById
);
projectRouter.put(
  '/:projectId',
  validateUpdateProject,
  projectController.updateProjectById
);

// projectRouter.delete(
//   '/:id'
// );

module.exports = projectRouter;
