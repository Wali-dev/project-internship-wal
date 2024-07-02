const express = require('express');
const groupRouter = express.Router();
const groupController = require("../../controllers/group.controller")

groupRouter.post("/create", groupController.createGroup);
groupRouter.get("/all/:clientId", groupController.getGroupByClientID);
groupRouter.get("/:Id", groupController.getGroupByID);


module.exports = groupRouter;
