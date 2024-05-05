import { revalidatePath } from "next/cache";
import { Users } from "./models";
import { connectToDB } from "./utils";
import {redirect } from "next/navigation"

export const addUser = async (formData) => {
    "use server"
    // const username = formData.get("username")
    const {username, email, password, phone, address, isAdmin, isActive} = 
        Object.fromEntries(formData);
    // console.log(formData);
    try {
        connectToDB();
        const newUser = new Users({
            username, email, password, phone, address, isAdmin, isActive
        });
        // console.log("newUser",newUser);
        await newUser.save();

    } catch (error){
        console.log(error);
        throw new Error("Failed to create user!");
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}