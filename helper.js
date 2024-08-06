import { client } from './index.js';


const insertShiftDetails = (data) => {
    return client.db("BiasCutter").collection("shiftDetails").insertOne(data);
};
function findShiftDetails(id) {
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

const postHourBasedProduction = (data) => {
    return client.db("BiasCutter").collection("hourBasedProduction").insertOne(data)
}

const getHourBasedProduction = (id) => {
    return client.db("BiasCutter").collection("hourBasedProduction").findOne({ shiftNo: id })
}

const postMachineDownTime = (data) => {
    return client.db("BiasCutter").collection("machineDownTime").insertOne(data)
}

const getDownTime = (id) => {
    return client.db("BiasCutter").collection("machineDownTime").findOne({shiftNo : id})
}

export { insertShiftDetails, findShiftDetails, editShiftDetails, postRecipeDetails, getRecipeDetails, postHourBasedProduction, getHourBasedProduction, postMachineDownTime, getDownTime }

