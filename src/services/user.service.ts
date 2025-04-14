// src/services/user.service.ts
import { UserRepository } from '../repositories/user.repository';

export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  async greetUser(name: string): Promise<string> {
    const user = await this.userRepo.findUserByName(name);
    return user ? `Welcome back, ${user.name}!` : `Hello, ${name}!`;
  }

  async createUser(name: string, email: string) {
    const existing = await this.userRepo.findUserByName(name);
    if (existing) throw new Error("User already exists");
    await this.userRepo.createUser({ name, email });
    return `User ${name} created!`;
  }

  async updateUserEmail(name: string, email: string) {
    const result = await this.userRepo.updateUserEmail(name, email);
    return result.modifiedCount ? `Updated ${name}'s email.` : `No user updated.`;
  }

  async deleteUser(name: string) {
    const result = await this.userRepo.deleteUser(name);
    return result.deletedCount ? `Deleted user ${name}.` : `User not found.`;
  }

  async listUsers() {
    return await this.userRepo.getAllUsers();
  }

async getUserByName(name: string) {
    return await this.userRepo.findUserByName(name);
  }
  
  async rawQuery(query: any) {
    return await this.userRepo.rawQuery(query);
  }
}