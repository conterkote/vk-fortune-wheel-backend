import {Request, Response} from "express";
import prisma from "../../prisma/prisma.js";
import {IVkUserData} from "../../models.js";
import CustomError from "../errors/CustomError.js";

class UsersController {
  async authorize(req: Request<{}, {}, IVkUserData>, res: Response) {
    try {
      const data = await prisma.users.upsert({
        where: {
          id: req.body.id
        },
        update: {},
        create: {
          id: req.body.id,
          first_name: req.body.first_name,
          photo_200: req.body.photo_200,
        },
        select : {
          id : true,
          first_name : true,
          photo_200 : true,
          balance : true,
        }
      })
      console.log(data)
      return res.status(200).json(data)
    } catch (e : any) {
      const error = new CustomError(e.message, 500)
      console.log(e)
      return res.status(error.code).json(e.message)
    }
  }
  async getBalance(req: Request<{}, {}, IVkUserData>, res: Response) {
    try {
      const data = await prisma.users.findFirst({
        where : {
          id : req.body.id
        }
      })
      if (data) {
        res.status(200).json(data.balance)
      }
    } catch (e: any) {
      res.status(e.code || 500).send(e)
    }
  }
}

const usersController = new UsersController()

export default usersController