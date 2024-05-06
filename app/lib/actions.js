"use server"

import { revalidatePath } from "next/cache";
import { Users, Products } from "./models";
import { connectToDB } from "./utils";
import {redirect } from "next/navigation"
import bcrypt from "bcrypt"

export const addUser = async (formData) => {
    // "use server"
    // const username = formData.get("username")
    const {username, email, password, phone, address, isAdmin, isActive} = 
        Object.fromEntries(formData);
    // console.log(formData);
    try {
        connectToDB();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new Users({
            username, email, password:hashedPassword, phone, address, isAdmin, isActive
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
export const addProducts = async (formData) => {
    // "use server"
    const {title, desc, price, stock, color, size} = 
        Object.fromEntries(formData)
    console.log(formData);
    try {
        connectToDB();
        console.log("tttttttttttttttt");
        const newProducts = new Products({
            title, desc, price, stock, color, size
        });
        await newProducts.save();

    } catch (error){
        console.log(error);
        throw new Error("Failed to create user!");
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}