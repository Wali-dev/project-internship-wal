
const { StatusCodes } = require('http-status-codes');
const catchAsync = require('../utils/catchAsync');
const sendResponse = require('../utils/sendResponse');
const holidayService = require("../services/holiday.service");


module.exports.createHoliday = catchAsync(async (req, res) => {

    const { holidayName, clientId, startDate, endDate } = req?.body;

    const holiday = await holidayService.createHoliday(holidayName, clientId, startDate, endDate);

    sendResponse(
        res,
        StatusCodes.CREATED,
        'Holiday created successfully',
        holiday
    );
});

module.exports.getHolidayByClientId = catchAsync(async (req, res) => {
    const { clientId } = req.params;

    const holidays = await holidayService.getHolidayByClientId(clientId);

    sendResponse(
        res,
        StatusCodes.OK,
        'Holidays fetched successfully',
        holidays
    );
});

module.exports.getHolidayById = catchAsync(async (req, res) => {

    const { id } = req.params;

    const holiday = await holidayService.getHolidayById(id);

    sendResponse(
        res,
        StatusCodes.OK,
        'Holiday fetched successfully',
        holiday
    );
});

module.exports.deleteGroupById = catchAsync(async (req, res) => {
    const { id } = req.params;

    const holiday = await holidayService.deleteHolidayById(id);

    sendResponse(
        res,
        StatusCodes.OK,
        'Holiday delleted successfully',
        holiday
    );
});