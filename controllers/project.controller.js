const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../utils/catchAsync");
const sendResponse = require("../utils/sendResponse");
const projectService = require("../services/project.service");

// Function to get projects by user ID
module.exports.getProjectsByUserId = catchAsync(async (req, res) => {
  const { id } = req.params;

  const projects = await projectService.getProjectsByUserId(id);

  if (!projects || projects.length === 0) {
    return sendResponse(
      res,
      StatusCodes.NOT_FOUND,
      "No projects found for the specified user ID",
      null
    );
  }

  sendResponse(res, StatusCodes.OK, "Projects fetched successfully", projects);
});

// Function to create projects
module.exports.createProjects = catchAsync(async (req, res) => {
  const { id } = req.params;
  const projectsData = []; //from hire api

  const createdProject = await projectService.createProjects({
    ...projectsData,
    userId: id,
  });

  sendResponse(
    res,
    StatusCodes.CREATED,
    "Project created successfully",
    createdProject
  );
});

// Function to get a project by ID
module.exports.getProjectById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const project = await projectService.getProjectById(id);

  if (!project) {
    return sendResponse(res, StatusCodes.NOT_FOUND, "Project not found", null);
  }

  sendResponse(res, StatusCodes.OK, "Project fetched successfully", project);
});

// Function to update an existing project
module.exports.updateProjectById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const projectData = req.body;

  const updatedProject = await projectService.updateProject(id, projectData);

  sendResponse(
    res,
    StatusCodes.OK,
    "Project updated successfully",
    updatedProject
  );
});
