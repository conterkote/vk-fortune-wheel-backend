import express from "express"
import v1 from "./v1/index"
const app = express()

app.use(express.json())
app.use("/v1", v1)

export default app