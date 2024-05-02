import { Users } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q) => {

    
    
    console.log("fetchUsers q1 = " + q);
    //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    const regex = new RegExp(q,"i");
    console.log("fetchUsers q2 = " + q);
    console.log("fetchUsers regex = " + regex);
    try{
        connectToDB();
        const user = await Users.find({username:{ $regex: regex}});
        return user;
    }catch(err){
        console.log(err)
        throw new Error("failed to fetch user!");
    }
}