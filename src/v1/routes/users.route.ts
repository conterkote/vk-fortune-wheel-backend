import express from "express";
import usersController from "../controllers/users.controller";
import {vkDataValidator} from "../validators/vkDataValidator";

const usersRouter = express.Router();

usersRouter.post('/authorize', vkDataValidator, usersController.authorize)

export default usersRouter