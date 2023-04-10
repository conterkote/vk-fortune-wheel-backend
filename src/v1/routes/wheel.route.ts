import {Router} from "express";
import wheelController from "../controllers/wheel.controller";
import {vkDataValidator} from "../validators/vkDataValidator";

const wheelRouter = Router()
  wheelRouter.get('/jackpot', wheelController.getJackpot)
  wheelRouter.post('/spin', vkDataValidator, wheelController.spinWheel)
  // wheelRouter.get('/prizes', wheelController.getPrizes)

export default wheelRouter