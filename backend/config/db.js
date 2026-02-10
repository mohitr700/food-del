import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect(
      'mongodb+srv://mohit:060379@cluster0.ct8gj8k.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}