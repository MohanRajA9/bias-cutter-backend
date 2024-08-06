import express from 'express';
import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { shiftDetailsRoute } from './routes/shiftDetails.js';
import { recipeDetailsRoute } from './routes/recipeDetails.js';
import { hourBasedProductionRoute } from './routes/hourBasedProduction.js';
import { machineDownTimeRoute } from './routes/machineDownTime.js';


dotenv.config()
export const app = express()
app.use(cors())
app.use(express.json())

const URL = process.env.MONGO_URL
const port = process.env.PORT
console.log(URL, port)

const createConnection = async (URL) => {

    const client = new MongoClient(URL)
    await client.connect()
    console.log("mongodb connected")
    return client

}

export const client = await createConnection(URL)

app.get("/", (req, res) => {
    res.send("Bias Cutter")
})

app.use("/shift-details", shiftDetailsRoute)
app.use("/recipe-details", recipeDetailsRoute)
app.use("/hour-based-production", hourBasedProductionRoute)
app.use("/machine-down-time",machineDownTimeRoute)

app.listen(4000, () => console.log("server started"))
