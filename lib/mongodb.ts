import { MongoClient } from "mongodb";

let clientPromise: Promise<MongoClient> | null = null;

export default function getClientPromise() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      "MONGODB_URI is missing. Add it in .env.local and Vercel Environment Variables."
    );
  }

  if (!clientPromise) {
    const client = new MongoClient(uri);
    clientPromise = client.connect();
  }

  return clientPromise;
}