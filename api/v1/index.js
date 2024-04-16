const express = require("express");
const authRouter = require("./auth.routes");

const apiRouter = express.Router();

const routers = [
  {
    path: "/auth",
    router: authRouter,
  },
];

routers.forEach((routerObject) => {
  apiRouter.use(routerObject.path, routerObject.router);
});

module.exports = apiRouter;
