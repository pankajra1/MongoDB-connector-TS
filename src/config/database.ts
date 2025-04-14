// for mongoDB
import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

export class Database {
  private static client: MongoClient;

  static async connect(): Promise<Db> {
    if (!Database.client) {
      const uri = process.env.MONGO_URI!;
      Database.client = new MongoClient(uri);
      await Database.client.connect();
    }

    return Database.client.db(process.env.MONGO_DB);
  }

  static async disconnect() {
    await Database.client?.close();
  }
}
