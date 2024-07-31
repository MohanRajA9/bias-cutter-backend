import { client } from './index.js';


const insertShiftDetails = (data) => {
    return client.db("BiasCutter").collection("shiftDetails").insertOne(data);
};
function findShiftDetails(id)  {
    return client.db("BiasCutter").collection("shiftDetails").findOne({ shiftNo: id });
};
const editShiftDetails = (data) => {
    return client.db("BiasCutter").collection("shiftDetails").updateOne({ plan: data.plan }, { $set: data });
};
const postRecipeDetails = (data) => {
    return client.db("BiasCutter").collection("recipeDetails").insertOne(data);
}

const getRecipeDetails = (id) => {
    return client.db("BiasCutter").collection("recipeDetails").findOne({ shiftNo: id });
}

export {insertShiftDetails, findShiftDetails, editShiftDetails, postRecipeDetails, getRecipeDetails }

