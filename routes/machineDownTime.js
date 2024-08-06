import express from 'express';
import { client } from '../index.js';
import { getDownTime, postMachineDownTime } from '../helper.js';
const router = express.Router();

router.post('/down-time', async (req, res) => {
    const data = req.body
    const result = await postMachineDownTime(data)
    res.send(result)
})

router.get('/get-dowm-time/:id', async (req, res) => {
    const {id} = req.params

    const result = await getDownTime(+id)
    res.send(result)
})


export const machineDownTimeRoute = router

