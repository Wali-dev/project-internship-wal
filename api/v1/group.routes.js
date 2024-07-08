const express = require('express');
const groupRouter = express.Router();
const groupController = require("../../controllers/group.controller");
const { validateCreateGroup, validateGetGroupsByClientId, validateGetGroupById } = require('../../validators/group.validator');


groupRouter.post("/create", validateCreateGroup, groupController.createGroup);
groupRouter.get("/all/:clientId", validateGetGroupsByClientId, groupController.getGroupByClientId);
groupRouter.get("/:id", validateGetGroupById, groupController.getGroupById);

module.exports = groupRouter;