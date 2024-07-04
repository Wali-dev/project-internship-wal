
const { PrismaClient } = require('@prisma/client');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/AppError');

const prisma = new PrismaClient();

exports.createHoliday = async (regionId, clientId, name, startDate, endDate) => {
    console.log(name)
    const holiday = await prisma.holiday.create({
        data: {
            name: name,
            regionId: regionId,
            clientId: clientId,
            startDate: startDate,
            endDate: endDate
        }
    });


    return holiday;

};

exports.getHolidayByClientId = async (clientId) => {


    // const groups = await prisma.groups.findMany({
    //     where: { clientId: clientId }
    // });

    // if (!groups) {
    //     throw new AppError(
    //         StatusCodes.NOT_FOUND,
    //         'No groups found for this client'
    //     );
    // }

    // return groups;
};

exports.getHolidayById = async (id) => {
    // const ID = Number(id);

    // const group = await prisma.groups.findUnique({
    //     where: { id: ID }
    // });

    // if (!group) {
    //     throw new AppError(
    //         StatusCodes.NOT_FOUND,
    //         'Group not found'
    //     );
    // }

    // return group;
};

exports.deleteHolidayById = async (id) => {
    // const ID = Number(id);

    // const group = await prisma.groups.findUnique({
    //     where: { id: ID }
    // });

    // if (!group) {
    //     throw new AppError(
    //         StatusCodes.NOT_FOUND,
    //         'Group not found'
    //     );
    // }

    // return group;
};