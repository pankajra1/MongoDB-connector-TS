// src/controllers/user.controller.ts
import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

let userService: UserService;

export class UserController {
  static init(service: UserService) {
    userService = service;
  }

  static async create(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      const result = await userService.createUser(name, email);
      res.json({ message: result });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  static async list(_req: Request, res: Response) {
    const users = await userService.listUsers();
    res.json(users);
  }

  static async update(req: Request, res: Response) {
    const { name } = req.params;
    const { email } = req.body;
    const result = await userService.updateUserEmail(name, email);
    res.json({ message: result });
  }

  static async delete(req: Request, res: Response) {
    const { name } = req.params;
    const result = await userService.deleteUser(name);
    res.json({ message: result });
  }

  static async find(req: Request, res: Response) {
    const { name } = req.params;
    const user = await userService.getUserByName(name);
    res.json(user || { message: 'User not found' });
  }

  static async customQuery(req: Request, res: Response) {
    try {
      const query = req.body;
      const result = await userService.rawQuery(query);
      res.json(result);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}
