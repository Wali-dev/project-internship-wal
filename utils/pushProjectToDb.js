const projectService = require('../services/project.service');

const pushProjectToDb = async (projectData) => {
  try {
    const existingProject = await projectService.getProjectByJobId(
      projectData.jobId
    );

    const data = { ...projectData };
    data.hiredFreelancers = [projectData.hiredFreelancerId];
    delete data.hiredFreelancerId;

    if (!existingProject) {
      await projectService.createSingleProject(data);
    } else {
      await projectService.pushFreelancerId(projectData.jobId, [
        ...existingProject.hiredFreelancers,
        projectData.hiredFreelancerId,
      ]);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = pushProjectToDb;
