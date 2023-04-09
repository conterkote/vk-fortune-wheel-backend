import {Response, Request} from "express";
import prisma from "../../prisma/prisma";
import {IVkUserData} from "../../models";
import {findDegrees} from "../functions/findDegrees";

class WheelController {
  async getPrizes(req: Request, res: Response) {

  }

  async getJackpot(req: Request, res: Response) {
    try {
      const data = await prisma.wheel.findFirst({where: {id: 1}})
      if (data) {
        return res.status(200).json({
          jackpot: data.jackpot
        })
      } else {
        return res.status(500).json("Check instruction on GitHub")
      }
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async spinWheel(req: Request<{}, {}, IVkUserData>, res: Response) {
    try {
      const wheelData = await prisma.wheel.update({
        where: {id: 1},
        data: {},
        select : {
          jackpot : true
        }
      })
      const userData = await prisma.users.update({
        where: {
          id: req.body.id
        },
        data: {}
      })
      const prizes = await prisma.prizes.findMany()
      const prizeId = Math.floor(Math.random() * prizes.length)

      let prize: string = prizes[prizeId].amout
      const prizeDegrees = findDegrees(prizes.length, prizeId)
      let preparedPrize: number = (prize === "Jackpot" ? wheelData.jackpot : Number.parseInt(prize)) - 100

      let updatedWheelData = prize === "Jackpot" ?
        await prisma.wheel.update({
          where: {id: 1},
          data: {
            jackpot: {
              set: 0
            }
          }
        }) :
        await prisma.wheel.update({
          where: {id: 1},
          data: {
            jackpot: {
              increment : 100
            }
          }
        });
      console.log("Prize:", prize)

      let updatedUserData = await prisma.users.update({
        where: {id: req.body.id},
        data: {
          balance: {
            increment: preparedPrize
          }
        }
      })

      const spinResponse = {
        ...updatedUserData,
        ...updatedWheelData,
        prizeDegrees : {...prizeDegrees}
      }

      res.status(200).json(spinResponse)

    } catch (e) {

    }
  }
}

const wheelController = new WheelController()

export default wheelController;
