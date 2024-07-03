const express = require('express');
const groupRouter = express.Router();
const groupController = require("../../controllers/group.controller");

groupRouter.post("/create", groupController.createGroup);
groupRouter.get("/all/:clientId", groupController.getGroupByClientId);
groupRouter.get("/:id", groupController.getGroupById);

module.exports = groupRouter;