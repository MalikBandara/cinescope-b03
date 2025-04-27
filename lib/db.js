import { MongoClient } from "mongodb";

const OPTION = {};
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(MONGODB_URI, OPTION);

export const db = client.db("sample_mflix"); // moviesDB is the name of the database
