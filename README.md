# vk-fortune-wheel-backend

Frontend repository of this project:
https://github.com/conterkote/vk-fortune-wheel-frontend

Features:
- Websocket Server sends every client real-time winners
- All winning logic incapsulated inside server, you can't cheating on front :)

# API Info

## Websocket:

This websocket sending to all clients real-time info about winners
wss://vk-backend.onrender.com/winners:

## Routes:

#### POST : v1/wheel/spin
* Receives request with VK UserData, decrement user balance by 100 and add it to jackpot, then increment by winning amount and send response with new jackpot, balance and sends an object with degree measures, between which is the player's prize on the fortune wheel


#### POST : v1/users/authorize
* Receives request with VK UserData and create his profile in database if not exist

#### GET : v1/wheel/jackpot
* Sends info about current jackpot state

#### GET : v1/users/balance
* Sends info about current user balance

#### GET : v1/winners/latest
* Sends list of last 10 winners

UserData example: {
  id : string,
  photo_200 : string,
  first_name : string
}
