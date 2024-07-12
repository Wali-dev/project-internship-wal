const { PrismaClient } = require('@prisma/client');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/AppError');

const prisma = new PrismaClient();

exports.createGroup = async (groupName, clientId, freelancers, projectId, projectName) => {


    if (!groupName || !clientId || !freelancers || !projectName) {
        return res.status(400).json({ error: "groupName, clientId, freelancers, and projectName are required." });
    }

    // Build the data object dynamically
    const data = {
        groupName,
        clientId,
        freelancers,
        projectName,
        ...(projectId && { projectId })
    };

    console.log(data)


    try {
        const group = await prisma.groups.create({ data });
        return group;
    } catch (error) {
        console.error("Error creating group:", error);
        throw new Error("An error occurred while creating the group.");
    }



    // const user = await prisma.groups.create({
    //     data: {
    //         groupName: groupName,
    //         projectName: projectName,
    //         projectId: projectId,
    //         clientId: clientId,
    //         freelancers: freelancers
    //     }
    // });

    // return user;

};

exports.getGroupsByClientId = async (clientId) => {


    const groups = await prisma.groups.findMany({
        where: { clientId: clientId }
    });

    if (!groups) {
        throw new AppError(
            StatusCodes.NOT_FOUND,
            'No groups found for this client'
        );
    }

    return groups;
};

exports.getGroupById = async (id) => {
    const ID = Number(id);

    const group = await prisma.groups.findUnique({
        where: { id: ID }
    });

    if (!group) {
        throw new AppError(
            StatusCodes.NOT_FOUND,
            'Group not found'
        );
    }

    return group;
};