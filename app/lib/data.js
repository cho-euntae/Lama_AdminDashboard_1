import { Users, Products } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q,page) => {
    // console.log("fetchUsers q1 = " + q);
    //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    const regex = new RegExp(q,"i");
    // console.log("fetchUsers q2 = " + q);
    // console.log("fetchUsers regex = " + regex);

    const ITEM_PER_PAGE = 3;

    try{
        connectToDB();
        const count = await Users.find({username:{$regex:regex}}).count();
        // const user = await Users.find({username:{ $regex: regex}}.limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE) * (page - 1));
        const user = await Users.find({username:{$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        return [count,user];
    }catch(err){
        console.log(err)
        throw new Error("failed to fetch user!");
    }
};

export const fetchProducts = async (q,page) => {

    console.log(q);
    console.log(page);

    // console.log("fetchUsers q1 = " + q);
    //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    const regex = new RegExp(q,"i");
    // console.log("fetchUsers q2 = " + q);
    // console.log("fetchUsers regex = " + regex);

    const ITEM_PER_PAGE = 3;

    try{
        connectToDB();
        const count = await Products.find({title:{$regex:regex}}).count();
        // const user = await Users.find({username:{ $regex: regex}}.limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE) * (page - 1));
        const products = await Products.find({title:{$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        return [count,products];
    }catch(err){
        console.log(err)
        throw new Error("failed to fetch user!");
    }
}