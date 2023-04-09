import {Router} from "express";
import wheelController from "../controllers/wheel.controller";
import {vkDataValidator} from "../validators/vkDataValidator";

const wheelRouter = Router()
  wheelRouter.get('/jackpot', wheelController.getJackpot)
  wheelRouter.get('/prizes', wheelController.getPrizes)
  wheelRouter.post('/spin', vkDataValidator, wheelController.spinWheel)
export default wheelRouter