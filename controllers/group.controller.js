const { StatusCodes } = require('http-status-codes');
const catchAsync = require('../utils/catchAsync');
const sendResponse = require('../utils/sendResponse');
const groupService = require("../services/group.service")

module.exports.createGroup = catchAsync(async (req, res) => {
    const {
        name,
        clientId,
        members,
        managers,
        projectId } = req.body;


    const createdGroup = await groupService.createGroup(
        name,
        clientId,
        members,
        managers,
        projectId);

    sendResponse(
        res,
        StatusCodes.CREATED,
        'Group created successfully',
        createdGroup
    );
});

module.exports.getGroupByClientID = catchAsync(async (req, res) => {
    const { clientId } = req.params;

    const getGroup = await groupService.getGroupByClientId(clientId);

    sendResponse(
        res,
        StatusCodes.CREATED,
        'Groups fetched successfully',
        getGroup
    );
});

module.exports.getGroupByID = catchAsync(async (req, res) => {
    const { Id } = req.params;

    const getGroup = await groupService.getGroupById(Id);

    sendResponse(
        res,
        StatusCodes.CREATED,
        'Group fetched successfully',
        getGroup
    );
});