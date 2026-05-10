const express = require('express');

const {infoController} = require("../../controllers");
const userRouter = require("./user-routes");
const user = require('../../models/user');
const router = express.Router();
const {AuthRequestMiddlewares} = require("../../middlewares");

router.get("/info", AuthRequestMiddlewares.checkAuth, infoController.info)

router.use("/user", userRouter);

module.exports = router;