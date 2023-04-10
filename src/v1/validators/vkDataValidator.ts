import {NextFunction, Request, Response} from "express";
import {IVkUserData} from "../../models.js";
import CustomError from "../errors/CustomError.js";

// {
//   "photo_200" : "https://sun6-20.userapi.com/s/v1/ig2/GZ_keeQdwTJePj",
//   "id" : "100228180"
// }

export function vkDataValidator(req: Request<{}, {}, IVkUserData>, res : Response, next : NextFunction) {
  try {
    if (!req.body.id || !req.body.photo_200 || !req.body.first_name) {
      const error = new CustomError("Some properties in body is missing", 400)
      return res.status(error.code).json(error.message)
    }
    next()
  } catch (e) {
    console.log(e)
  }
}