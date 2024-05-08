"use server"

import { revalidatePath } from "next/cache";
import { Users, Products } from "./models";
import { connectToDB } from "./utils";
import {redirect } from "next/navigation"
import bcrypt from "bcrypt"
import { signIn } from "../auth";

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
};

export const addProducts = async (formData) => {
    // "use server"
    const {title, desc, price, stock, color, size, cat} = 
        Object.fromEntries(formData)
    console.log(formData);
    try {
        connectToDB();
        const newProducts = new Products({
            title, desc, price, stock, color, size, cat
        });
        await newProducts.save();

    } catch (error){
        console.log(error);
        throw new Error("Failed to create user!");
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
};

export const deleteUser = async (formData) => {
    const {id} = Object.fromEntries(formData)
    try {
        connectToDB();
        await Users.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
        throw new Error("failed to delete user");
    }

    revalidatePath("/dashboard/users");
};
export const deleteProduct = async (formData) => {
    const {id} = Object.fromEntries(formData)
    try {
        connectToDB();
        await Products.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
        throw new Error("failed to delete product");
    }

    revalidatePath("/dashboard/products");
};

export const updateUser = async (formData) => {
    const {id,username, email, password, phone, address, isAdmin, isActive} = 
        Object.fromEntries(formData);
    try {
        connectToDB();

        const updateFields = {
            username, email, password, phone, address, isAdmin, isActive
        }

        Object.keys(updateFields).forEach(
            (key) => 
                (updateFields[key]==="" || undefined)
        )

        await Users.findByIdAndUpdate(id,updateFields);

    } catch (error){
        console.log(error);
        throw new Error("Failed to update user!");
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
};

export const updateProduct = async (formData) => {
    const {id, title, desc, price, stock, color, size, cat} = 
        Object.fromEntries(formData);
    try {
        connectToDB();

        const updateFields = {
            title, desc, price, stock, color, size, cat
        }

        Object.keys(updateFields).forEach(
            (key) => 
                (updateFields[key]==="" || undefined)
        )

        await Products.findByIdAndUpdate(id,updateFields);

    } catch (error){
        console.log(error);
        throw new Error("Failed to update product!");
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
};


export const authenticate = async (prevState, formData) => {
    const {username, password} = Object.fromEntries(formData)

    try {
        await signIn("credentials", {username, password});
    } catch(err) {
        // console.log(err);
        // throw err;
        // return {error:"Wrong Credentials!"}
        return "Wrong Credentials!";
    }
}