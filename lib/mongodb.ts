import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add MONGODB_URI in .env.local");
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

const globalForMongo = global as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

if (process.env.NODE_ENV === "development") {
  if (!globalForMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalForMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalForMongo._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;