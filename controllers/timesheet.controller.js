const { StatusCodes } = require('http-status-codes');
const catchAsync = require('../utils/catchAsync');
const sendResponse = require('../utils/sendResponse');
const timesheetService = require('../services/timesheet.service');



module.exports.createTimesheet = catchAsync(async (req, res) => {
    const timesheetData = req.body;
    const createdTimesheet = await timesheetService.createTimesheet(timesheetData);

    sendResponse(
        res,
        StatusCodes.CREATED,
        'Timesheet created successfully',
        createdTimesheet
    );
});

module.exports.getTimesheetsByfreelancerId = catchAsync(async (req, res) => {
    const { freelancerId } = req.params;

    const timesheets = await timesheetService.getTimesheetsByfreelancerId(freelancerId);

    sendResponse(res, StatusCodes.OK, 'Timesheets fetched successfully', timesheets);
});

// module.exports.getTimesheetById = catchAsync(async (req, res) => {
//     const { id } = req.params;

//     const timesheet = await timesheetService.getTimesheetById(id);

//     sendResponse(res, StatusCodes.OK, 'Timesheet fetched successfully', timesheet);
// });


module.exports.updateTimesheet = catchAsync(async (req, res) => {
    const { id, freelancerId } = req.query;
    // const id = params;

    const timesheetData = req.body;

    const updatedTimesheet = await timesheetService.updateTimesheet(id, freelancerId, timesheetData);

    sendResponse(res, StatusCodes.OK, 'Timesheet updated successfully', updatedTimesheet);
});