import {Router} from "express";
import wheelController from "../controllers/wheelController";

const wheelRouter = Router()
wheelRouter.get('/jackpot', wheelController.getJackpot)
wheelRouter.get('/balance', wheelController.getBalance)
wheelRouter.get('/spin', wheelController.spinWheel)
export default wheelRouter