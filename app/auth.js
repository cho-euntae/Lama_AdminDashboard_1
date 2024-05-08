import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {authConfig} from "./authConfig"
import { connectToDB } from "./lib/utils"
import { Users } from "./lib/models"
import bcrypt from "bcrypt"

const login = async (credentials) => {
    try{
        connectToDB();
        const user = await Users.findOne({username:credentials.username})

        if(!user) throw new Error("Wrong credentials!")

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

        if(!isPasswordCorrect) throw new Error("");

    }catch(err){
        console.log(err)
        throw new Error("failed to login!");
    }
}


export const {signIn, signOut, auth } = NextAuth({
// export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch(err) {
                    return null
                }
            }
        })
    ]
})