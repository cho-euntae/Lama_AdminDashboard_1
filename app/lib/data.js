import { Users } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
    
    try{
        connectToDB();
        const user = await Users.find();
        return user;
    }catch(err){
        console.log(err)
        throw new Error("failed to fetch user!");
    }
}