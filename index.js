import express from 'express';
import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
import { insertShiftDetails, findShiftDetails, editShiftDetails } from './helper.js';

dotenv.config()
const app = express()
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

app.get("/shift-details/:id", async (req, res) => {
    const {id} = req.params
    console.log(typeof(id))
    const result = await findShiftDetails(+id)
    res.send(result)
})

app.post("/post-shift-details", async (req, res) => {
    const data = req.body
    console.log(data)
    const result = await insertShiftDetails(data)
    res.send(result)
})

app.put("/edit-shift-details", async (req, res) => {
    const data = req.body
    const result = await editShiftDetails(data)
    res.send(result)
})

app.listen(4000, () => console.log("server started"))
