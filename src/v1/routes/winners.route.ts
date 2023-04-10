import {Router} from "express";
import winnersController from "../controllers/winners.controller";

const winnersRouter = Router()

winnersRouter.get('/latest', winnersController.getWinners)
export default winnersRouter