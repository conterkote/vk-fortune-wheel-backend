import express from "express";
import usersController from "../controllers/users.controller.js";
import {vkDataValidator} from "../validators/vkDataValidator.js";

const usersRouter = express.Router();

usersRouter.post('/authorize', vkDataValidator, usersController.authorize)
usersRouter.post('/balance', vkDataValidator, usersController.authorize)

export default usersRouter