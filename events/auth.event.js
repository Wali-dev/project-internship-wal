const EventEmitter = require('events');
const { fetchProjectsOfUser } = require('../utils/api');
const projectService = require('../services/project.service');

const authEvent = new EventEmitter();

authEvent.on('userLoggedIn', async (data) => {
  const res = await fetchProjectsOfUser(293);

  if (!res.jobs.length) {
    console.log('No Projects Found');
    return;
  }

  const projectsToCreate = [];

  res.jobs.forEach((project) => {
    projectsToCreate.push({
      jobId: project?.id,
      clientId: project.userId,
      name: project.title,
      description: project.details,
      status: 'ACTIVE',
    });
  });

  await projectService.createProjects(projectsToCreate);
});

module.exports = authEvent;
