
const { PrismaClient } = require('@prisma/client');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/AppError');
const { tryCatch } = require('bullmq');

const prisma = new PrismaClient();

exports.createHoliday = async (holidayName, clientId, startDate, endDate) => {

    try {
        const holiday = await prisma.holiday.create({
            data: {
                holidayName: holidayName,
                clientId: clientId,
                startDate: startDate,
                startDate: startDate,
                endDate: endDate
            }
        });
        return holiday;

    } catch (error) {
        console.log(error)

    }

};

exports.getHolidayByClientId = async (clientId) => {

    try {
        const holiday = await prisma.holiday.findMany({
            where: { clientId: clientId }
        });

        if (!holiday) {
            throw new AppError(
                StatusCodes.NOT_FOUND,
                'No holidays found for this client'
            );
        }

        return holiday;

    } catch (error) {
        console.log(error)
    }

};

exports.getHolidayById = async (id) => {
    const ID = Number(id);

    try {
        const holiday = await prisma.holiday.findUnique({
            where: { id: ID }
        });

        if (!holiday) {
            throw new AppError(
                StatusCodes.NOT_FOUND,
                'holiday not found'
            );
        }
        return holiday;

    } catch (error) {
        console.loh(error)
    }

};

exports.deleteHolidayById = async (id) => {
    const ID = Number(id);

    try {
        const deleteHoliday = await prisma.holiday.delete({
            where: { id: ID }
        })

        if (!deleteHoliday) {
            throw new AppError(
                StatusCodes.NOT_FOUND,
                'Holiday not found'
            );
        }

        return deleteHoliday;

    } catch (error) {
        console.log(error)
    }
};