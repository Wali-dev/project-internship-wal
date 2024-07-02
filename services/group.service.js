const { PrismaClient } = require('@prisma/client');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/AppError');

const prisma = new PrismaClient();

exports.createGroup = async (name,
    clientId,
    members,
    managers,
    projectId) => {
    try {
        const createdGroup = await prisma.group.create({
            name,
            clientId,
            members,
            managers,
            projectId
        });

        if (!createdGroup) {
            throw new AppError(
                StatusCodes.INTERNAL_SERVER_ERROR,
                'Error while creating new group'
            );
        }

        return createdGroup;
    } catch (error) {
        throw error;
    }
};

exports.getGroupByClientId = async (clientId) => {
    try {
        const getGroup = await prisma.group.findMany({ clientId });

        if (!getGroup) {
            throw new AppError(
                StatusCodes.INTERNAL_SERVER_ERROR,
                'Error while fetching groups'
            );
        }

        return getGroup;
    } catch (error) {
        throw error;
    }
};

exports.getGroupById = async (Id) => {
    try {
        const getGroup = await prisma.group.findUnique({ Id });

        if (!getGroup) {
            throw new AppError(
                StatusCodes.INTERNAL_SERVER_ERROR,
                'Error while fetching groups details'
            );
        }

        return getGroup;
    } catch (error) {
        throw error;
    }
};