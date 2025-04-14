// src/core/di-container.ts
import { Database } from '../config/database';
import { UserRepository } from '../repositories/user.repository';
import { UserService } from '../services/user.service';

export class DIContainer {
  private static instances = new Map<string, any>();

  static async init() {
    const db = await Database.connect();

    const userRepository = new UserRepository(db);
    const userService = new UserService(userRepository);

    DIContainer.instances.set('userService', userService);
  }

  static get<T>(key: string): T {
    const instance = DIContainer.instances.get(key);
    if (!instance) throw new Error(`No instance found for key: ${key}`);
    return instance as T;
  }
}
