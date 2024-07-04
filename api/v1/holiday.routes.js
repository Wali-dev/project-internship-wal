const express = require('express');
const groupRouter = express.Router();
const holidayController = require("../../controllers/holiday.controller")


groupRouter.post("/create", holidayController.createHoliday);
groupRouter.get("/create/:clientId", holidayController.getHolidayByClientId);
groupRouter.get("/create/:id", holidayController.getHolidayById);
groupRouter.delete("/create/:id", holidayController.deleteGroupById);

module.exports = groupRouter;