import express from 'express';
import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config()
const app = express()

const URL = process.env.MONGO_URL
const port = process.env.PORT
console.log(URL,port)

const createConnection = async (URL) => {

    const client = new MongoClient(URL)
    await client.connect()
    console.log("mongodb connected")
    return client

} 
 
const client = await createConnection(URL)

app.get("/",(req,res) => {
    res.send("Bias Cutter")
})


app.listen(4000,() => console.log("server started"))
