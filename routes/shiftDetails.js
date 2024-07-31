import express from 'express';
import { editShiftDetails, findShiftDetails, insertShiftDetails } from '../helper.js';

const router = express.Router();

router.get("/details/:id", async (req, res) => {
    const { id } = req.params;
    console.log(typeof (id));
    const result = await findShiftDetails(+id);
    res.send(result);
});


router.post("/post-shift-details", async (req, res) => {
    const data = req.body;
    console.log(data);
    const result = await insertShiftDetails(data);
    res.send(result);
});


router.put("/edit-shift-details", async (req, res) => {
    const data = req.body;
    const result = await editShiftDetails(data);
    res.send(result);
});

export const shiftDetailsRoute = router;