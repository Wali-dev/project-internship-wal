const express = require('express');
const holidayRouter = express.Router();
const holidayController = require("../../controllers/holiday.controller")


holidayRouter.post("/create", holidayController.createHoliday);
holidayRouter.get("/:clientId", holidayController.getHolidayByClientId);
holidayRouter.get("/:id", holidayController.getHolidayById);
holidayRouter.delete("/:id", holidayController.deleteGroupById);

module.exports = holidayRouter;