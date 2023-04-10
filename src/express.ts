import express, {NextFunction, Request, Response} from "express"
import v1 from "./v1/index"
import WebSocketType from "ws";
import cors from "cors"

const app = express()
const wsApp = require('express-ws');
export const wsInstance = wsApp(app);
wsInstance.getWss().on('connection', (ws : WebSocketType) => {
  ws.send('Connected')
})

function idMiddleware(req : Request, res : Response, next : NextFunction) {
  if (req.body.id) {
    req.body.id = String(req.body.id)
  }
  next()
}

wsInstance.app.ws('/winners', () => {
})

app.use(express.json())
app.use(cors())
app.use(idMiddleware)
app.use("/v1", v1)


export default app