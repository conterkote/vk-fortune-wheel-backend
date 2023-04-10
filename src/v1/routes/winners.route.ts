import {Router} from "express";
import winnersController from "../controllers/winners.controller.js";

const winnersRouter = Router()

winnersRouter.get('/latest', winnersController.getWinners)
export default winnersRouter