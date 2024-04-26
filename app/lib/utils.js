import mongoose from "mongoose";


export const connectToDB = async () => {
  
const connection = {};
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    // 'mongodb+srv://testadmin:kDWHSBbhttdXqj4H@cluster0.gt9scs3.mongodb.net/dashboard?retryWrites=true&w=majority&appName=Cluster0'
  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
};