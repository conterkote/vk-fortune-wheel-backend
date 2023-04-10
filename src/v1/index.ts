import {Router} from "express";
import wheelRouter from "./routes/wheel.route.js";
import winnersRouter from "./routes/winners.route.js";
import usersRouter from "./routes/users.route.js";

const v1 = Router()

v1.use("/wheel", wheelRouter)
v1.use("/winners", winnersRouter)
v1.use("/users", usersRouter)

v1.get("/", (req, res) => {
  console.log('Here')
  res.status(200).json("Is active!");
})

export default v1;