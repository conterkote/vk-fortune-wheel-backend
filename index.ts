import app from "./src/express"
import env from "dotenv";
import {prismaInit} from "./src/prisma/prisma";

env.config()

const PORT = process.env.PORT || 7000
async function initServer() {
  await prismaInit()
  app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT} port...`);
  })
}

initServer()