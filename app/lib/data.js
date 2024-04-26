import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
    
    try{
        connectToDB();
        const user = await User.find();
        return user;
    }catch(err){
        console.log(err)
        throw new Error("failed to fetch user!");
    }
}