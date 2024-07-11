const express = require('express');
const authRouter = require('./auth.routes');
const projectRouter = require('./project.routes');
const taskRouter = require('./task.routes');
const timesheetRouter = require('./timesheet.routes');
const holidayRouter = require('./holiday.routes');
const groupRouter = require('./group.routes');



const apiRouter = express.Router();

const routers = [
  {
    path: '/auth',
    router: authRouter,
  },
  {
    path: '/project',
    router: projectRouter,
  },
  {
    path: '/task',
    router: taskRouter,
  },
  {
    path: '/timesheet',
    router: timesheetRouter,
  },
  {
    path: '/holiday',
    router: holidayRouter,
  },
  {
    path: '/group',
    router: groupRouter,
  },
  {
    path: '/holiday',
    router: holidayRouter,
  },
];

routers.forEach((routerObject) => {
  apiRouter.use(routerObject.path, routerObject.router);
});

module.exports = apiRouter;
