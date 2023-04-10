import {Response, Request} from "express";
import {IVkUserData, IWinner} from "../../models.js";
import {findDegrees} from "../functions/findDegrees.js";
import {wsInstance} from "../../express.js";
import WebSocket from "ws";
import prisma from "../../prisma/prisma.js";

class WheelController {
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
      const prizes =  [{amount: "Jackpot"},
        {amount: "250"},
        {amount: "400"},
        {amount: "10"},
        {amount: "100"},
        {amount : "150"},
        {amount : "200"},
        {amount : "750"}]
        // await prisma.prizes.findMany()
      console.log(prizes);
      const prizeId = Math.floor(Math.random() * prizes.length)

      let prize: string = prizes[prizeId].amount
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
      console.log(prizeDegrees)

      const spinResponse = {
        ...updatedUserData,
        ...updatedWheelData,
        amount : prizes[prizeId].amount,
        prizeDegrees : {...prizeDegrees}
      }

      await prisma.winners.create({
        data : {
          usersId : userData.id,
          amount : prizes[prizeId].amount,
          spin_at : new Date()
        }
      })

      wsInstance.getWss().clients.forEach((client : WebSocket ) => {
        const winnerData: IWinner = {
          first_name : userData.first_name,
          photo_200 : userData.photo_200,
          amount : prizes[prizeId].amount,
          time : new Date()
        }
        client.send(JSON.stringify(winnerData))
      })

      return res.status(200).json(spinResponse)

    } catch (e) {
      console.log(e);
    }
  }
}

const wheelController = new WheelController()

export default wheelController;
