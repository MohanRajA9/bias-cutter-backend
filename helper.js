import { client } from './index.js';


export const insertShiftDetails = (data) => {
    return client.db("BiasCutter").collection("shiftDetails").insertOne(data);
};
export function findShiftDetails(id)  {
    return client.db("BiasCutter").collection("shiftDetails").findOne({ shiftNo: id });
};
export const editShiftDetails = (data) => {
    return client.db("BiasCutter").collection("shiftDetails").updateOne({ plan: data.plan }, { $set: data });
};


