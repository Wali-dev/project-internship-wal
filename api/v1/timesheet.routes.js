const express = require('express');
const { createTimesheet, updateTimesheet, getTimesheetsByfreelancerId } = require('../../controllers/timesheet.controller');
const { createtimesheetValidator } = require('../../validators/timesheet.validator');

const timesheetRouter = express.Router();

timesheetRouter.post("/", createtimesheetValidator, createTimesheet);
timesheetRouter.patch("/:id", updateTimesheet);
timesheetRouter.get("/:id", getTimesheetsByfreelancerId);






module.exports = timesheetRouter;