import express from 'express';
import { client } from '../index.js';
import { getHourBasedProduction, postHourBasedProduction } from '../helper.js';
const router = express.Router()

router.post('/post-hours', async (req, res) => {
    const data = req.body
    // res.send(data)
    const result = await postHourBasedProduction(data)
    res.send(result)
})

router.get("/get-hours/:id", async (req, res) => {
    const { id } = req.params
    // console.log(id)
    const result = await getHourBasedProduction(+id)
    res.send(result)
})


export const hourBasedProductionRoute = router