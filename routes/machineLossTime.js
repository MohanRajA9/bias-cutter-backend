import express from 'express';
import { client } from '../index.js';
import { getMachineLossTime, postMachineLossTime } from '../helper.js';
const router = express.Router()

router.post("/post-loss-time", async (req, res) => {
    const data = req.body
    const result = await postMachineLossTime(data)
    // res.send(result)
})

router.get("/get-loss-time/:id", async (req, res) => {
    const { id } = req.params
    // console.log(id)
    const result = await getMachineLossTime(+id)
    res.send(result)
})

export const machineLossTimeRoute = router