// src/repositories/user.repository.ts
import { Db, Collection } from 'mongodb';

interface User {
  name: string;
  email: string;
}

export class UserRepository {
  private collection: Collection<User>;

  constructor(db: Db) {
    this.collection = db.collection<User>('users');
  }

  async createUser(user: User) {
    return await this.collection.insertOne(user);
  }

  async findUserByName(name: string) {
    return await this.collection.findOne({ name });
  }

  async updateUserEmail(name: string, newEmail: string) {
    return await this.collection.updateOne(
      { name },
      { $set: { email: newEmail } }
    );
  }

  async deleteUser(name: string) {
    return await this.collection.deleteOne({ name });
  }

  async getAllUsers() {
    return await this.collection.find().toArray();
  }
async rawQuery(query: Record<string, any>) {
    return await this.collection.find(query).toArray();
  }
  
}
