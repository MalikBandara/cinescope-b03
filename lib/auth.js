import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { db } from "./db"; // Assuming you have a db.js file that exports the MongoDB client
export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {  
    enabled: true
},
session :{
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 24 hours 
    freshAge : 0 , //Disable the freshness check
 },

});
