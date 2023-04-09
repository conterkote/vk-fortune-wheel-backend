import {Response, Request} from "express";
import prisma from "../../prisma/prisma";

class WheelController {
  async getBalance(req : Request, res : Response) {
    try {
      const data = await prisma.wheel.findFirst({where : {id : 1}})
      if (data) {
        return res.status(200).json({
          balance : data.balance
        })
      } else {
        return res.status(500).json("Check instruction on GitHub")
      }
    } catch (e) {
      res.status(500).json(e)
    }
  }
  async getJackpot(req : Request, res : Response) {
    try {
      const data = await prisma.wheel.findFirst({where : {id : 1}})
      if (data) {
        return res.status(200).json({
          jackpot : data.jackpot
        })
      } else {
        return res.status(500).json("Check instruction on GitHub")
      }
    } catch (e) {
      res.status(500).json(e)
    }
  }
  async spinWheel(req : Request, res : Response) {
    try {
      const wheelData = await prisma.wheel.update({
        where : {id : 1},
        data : {
          balance : {
            decrement : 100
          }
        }
      })
      const prizes = await prisma.prizes.findMany()
      const prizeId = Math.floor(Math.random() * prizes.length)
      let prize: number | string = prizes[prizeId].amout
      if (prize === 'Jackpot') {
        prize = wheelData.jackpot
      }
      let updatedWheelData;
      if (typeof prize === "string") {
        updatedWheelData = await prisma.wheel.update({
          where: {id: 1},
          data: {
            balance: {
              increment: Number.parseInt(prize) as number
            }
          }
        })
      } else {
        updatedWheelData = await prisma.wheel.update({
          where: {id: 1},
          data: {
            balance: {
              increment: prize
            }
          }
        })
      }

      res.status(200).json(updatedWheelData)

    } catch (e) {

    }
  }
}

const wheelController = new WheelController()

export default wheelController;
