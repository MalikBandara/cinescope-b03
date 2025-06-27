import { MongoClient } from 'mongodb'

const OPTION = {}

const client = new MongoClient(process.env.MONGODB_URI, OPTION)

export const db = client.db('sample_mflix') // sample_mflix is the name of the database
