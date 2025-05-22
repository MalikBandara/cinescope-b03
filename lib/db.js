import { MongoClient } from 'mongodb'

const OPTION = {}
const MONGODB_URI =
  'mongodb+srv://muruthangemalik:Malik123@cluster-cs.ncy2cax.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster-Cs'
const client = new MongoClient(MONGODB_URI, OPTION)

export const db = client.db('sample_mflix') // sample_mflix is the name of the database
