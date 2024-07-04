const express = require('express');
const holidayRouter = express.Router();
const holidayController = require("../../controllers/holiday.controller")


holidayRouter.post("/create", holidayController.createHoliday);
holidayRouter.get("/:clientId", holidayController.getHolidayByClientId);
holidayRouter.get("/singleholiday/:id", holidayController.getHolidayById);
holidayRouter.delete("/singleholiday/:id", holidayController.deleteGroupById);

module.exports = holidayRouter;