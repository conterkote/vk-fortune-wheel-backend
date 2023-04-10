import {Request, Response} from "express";
import prisma from "../../prisma/prisma";
import {IWinner} from "../../models";

class WinnersController {
  async getWinners(req : Request, res : Response) {
    const winners = await prisma.winners.findMany({
      orderBy : {
        spin_at : 'desc'
      },
      take : 10,
      include : {
        User : {
          select : {
            first_name : true,
            photo_200 : true,
          }
        }
      }
    })

    const response: IWinner[] = winners.map(winner => ({
      amount : winner.amount,
      first_name : winner.User.first_name,
      photo_200 : winner.User.photo_200,
      time : winner.spin_at
    }))

    res.status(200).send(response)
  }
}

const winnersController = new WinnersController()

export default winnersController