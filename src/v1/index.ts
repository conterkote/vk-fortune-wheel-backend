import {Router} from "express";
import wheelRouter from "./routes/wheel.route";
import winnersRoute from "./routes/winners.route";

const v1 = Router()

v1.use("/wheel", wheelRouter)
v1.use("/winners", winnersRoute)

v1.get("/", (req, res) => {
  console.log('Here')
  res.status(200).json("Is active!");
})

export default v1;