const { PrismaClient } = require('@prisma/client');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/AppError');
const { tryCatch } = require('bullmq');

const prisma = new PrismaClient();

exports.createTimesheet = async (data) => {

    try {
        const createdTimesheet = await prisma.timesheet.create({
            data: data
        });

        return createdTimesheet;

    } catch (error) {
        console.log(error)

    }
};

exports.findOneTimesheet = async (id) => {
    const ID = Number(id)
    const timesheet = await prisma.timesheet.findUnique({
        where: {
            id: ID
        }
    })

    return timesheet;
}
exports.updateTimesheet = async (id, freelancerId, timesheetData) => {

    const ID = Number(id);
    try {
        const updatedTimesheet = await prisma.timesheet.update({
            where: {
                id: ID,
            },
            data: timesheetData,
        });
        return updatedTimesheet;
    } catch (error) {
        console.log(error)
    }

};

// exports.getTimesheetById = async (id) => {
//     try {
//         const timesheet = await prisma.timesheet.findUnique({
//             where: {
//                 id: parseInt(id, 10),
//             },
//         });

//         if (!timesheet) {
//             throw new AppError(StatusCodes.NOT_FOUND, 'Timesheet not found');
//         }

//         return timesheet;
//     } catch (error) {
//         throw error;
//     }
// };

exports.getTimesheetsByfreelancerId = async (freelancerId) => {
    try {
        const timesheets = await prisma.timesheet.findMany({
            where: {
                freelancerId: freelancerId,
            },
        });

        return timesheets;
    } catch (error) {
        throw error;
    }
};
