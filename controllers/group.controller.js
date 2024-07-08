
const { StatusCodes } = require('http-status-codes');
const catchAsync = require('../utils/catchAsync');
const sendResponse = require('../utils/sendResponse');
const groupService = require("../services/group.service");

module.exports.createGroup = catchAsync(async (req, res) => {
    const { groupName, clientId, freelancers, projectId, projectName } = req?.body;

    const createdGroup = await groupService.createGroup(groupName, clientId, freelancers, projectId, projectName);

    sendResponse(
        res,
        StatusCodes.CREATED,
        'Group created successfully',
        createdGroup
    );
});

module.exports.getGroupByClientId = catchAsync(async (req, res) => {
    const { clientId } = req.params;

    const groups = await groupService.getGroupsByClientId(clientId);

    sendResponse(
        res,
        StatusCodes.OK,
        'Groups fetched successfully',
        groups
    );
});

module.exports.getGroupById = catchAsync(async (req, res) => {
    const { id } = req.params;

    const group = await groupService.getGroupById(id);

    sendResponse(
        res,
        StatusCodes.OK,
        'Group fetched successfully',
        group
    );
});