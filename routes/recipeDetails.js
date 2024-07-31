import express from 'express'
import { getRecipeDetails, postRecipeDetails } from '../helper.js'
import { client } from '../index.js'
const router = express.Router()

router.get("/details/:id", async (req, res) => {
    const { id } = req.params
    console.log(id)
    const result = await getRecipeDetails(+id)
    res.send(result)
})

router.post("/post-details", async (req, res) => {
    const data = req.body
    const result = await postRecipeDetails(data)
    res.send(result)
})

export const recipeDetailsRoute = router;